# News API

Small Node/Express service that reads digital-marketing RSS feeds and serves separate Indonesian and international article lists to the React frontend.

## Run locally

```bash
npm install
npm run dev
```

The service listens on port `3001` by default. Check `http://localhost:3001/api/health` and `http://localhost:3001/api/news`.

## Structure

- `src/server.js` configures HTTP routes, CORS, and request limits.
- `src/news.js` owns RSS sources, normalization, topic labels, sorting, cache, and stale fallback.
- `src/news.test.js` covers topic classification, regional grouping, image validation, and RSS normalization.

## Configuration

- `PORT`: listening port; defaults to `3001`.
- `FRONTEND_ORIGINS`: comma-separated exact frontend origins for CORS, for example `https://kreatifest.example.com`.
- `TRUST_PROXY_HOPS`: number of trusted reverse proxies; set to `1` only when deployed behind one proxy.
- `CACHE_TTL_MS`: in-memory cache lifetime in minutes. Defaults to `0`, so every request re-fetches the feeds and the browser sees fresh data on each reload. Set a higher value such as `15` in production to reduce load on the publishers.

The current sources are Search Engine Journal and Social Media Today for international coverage, plus Marketing.co.id and DailySocial for Indonesian coverage. Each feed contributes at most 25 items. `/api/news?limit=6` returns up to six recent articles per region (maximum 12 per region), ordered newest first. Because the per-region cut happens after grouping, one region can never crowd out the other. The service warms its cache on start so the first request does not wait on the feeds, retains a successful result for up to six hours when all sources fail, and limits `/api/news` to 30 requests per minute per client. A process restart clears the cache; use a persistent cache if the deployment runs multiple or frequently recycled instances.

## Refreshing on demand

A request re-fetches the feeds when it carries either `Cache-Control: no-cache` (what the frontend sends) or `?refresh=1`. Those responses are sent with `Cache-Control: no-store` so no browser or proxy cache sits in front of them. Any other request is served with `Cache-Control: public, max-age=60` and an `ETag` derived from the refresh timestamp, so a repeat load revalidates with `304` instead of downloading the payload again.

Concurrent requests share a single in-flight refresh rather than each hitting the feeds. A forced request will start its own refresh only if the one already running has been going for more than 10 seconds.

The API returns article titles, short feed excerpts, source names, dates, topic labels, region keys (`indonesia` or `international`), optional HTTPS image URLs provided by the feed, and original links. It does not fetch full article pages. Confirm each publisher's syndication terms before displaying its excerpts or images on a commercial website.