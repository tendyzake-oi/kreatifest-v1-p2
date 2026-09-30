import { createHash } from 'node:crypto'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import { getLatestNews, prewarmNews } from './news.js'

const app = express()
const port = Number(process.env.PORT) || 3001
const trustProxyHops = Number(process.env.TRUST_PROXY_HOPS) || 0
const allowedOrigins = new Set([
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  ...(process.env.FRONTEND_ORIGINS || '').split(',').map((origin) => origin.trim()).filter(Boolean),
])

const CACHED_CACHE_CONTROL = 'public, max-age=60, stale-while-revalidate=30'

app.set('trust proxy', trustProxyHops)
app.use(cors({
  origin(origin, callback) {
    callback(null, !origin || allowedOrigins.has(origin))
  },
}))

function wantsFreshData(request) {
  return request.query.refresh === '1'
    || String(request.headers['cache-control'] || '').includes('no-cache')
}

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.get('/api/news', rateLimit({ windowMs: 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false }), async (request, response) => {
  const requestedLimit = Number(request.query.limit ?? 6)
  if (!Number.isInteger(requestedLimit) || requestedLimit < 1) {
    return response.status(400).json({ error: 'Parameter limit harus berupa angka positif.' })
  }

  const force = wantsFreshData(request)

  try {
    const result = await getLatestNews(Math.min(requestedLimit, 12), { force })
    const etag = `"${createHash('sha1').update(`${result.updatedAt}|${requestedLimit}`).digest('hex')}"`

    if (request.headers['if-none-match'] === etag) {
      response.set('Cache-Control', force ? 'no-store' : CACHED_CACHE_CONTROL)
      return response.status(304).end()
    }

    response.set('Cache-Control', force ? 'no-store' : CACHED_CACHE_CONTROL)
    response.set('ETag', etag)
    return response.json(result)
  } catch (error) {
    console.error('GET /api/news failed:', error.message)
    return response.status(503).json({ error: 'Sumber berita sedang tidak tersedia.' })
  }
})

app.listen(port, '0.0.0.0', () => {
  console.log(`News API listening on port ${port}`)
  prewarmNews()
})
