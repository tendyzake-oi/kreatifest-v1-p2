/**
 * SEMUA TEKS & DATA HALAMAN ADA DI SINI.
 * Ingin mengganti kata-kata, nama proyek, atau kontak? Edit file ini saja —
 * tidak perlu membuka komponen.
 */

export const brand = {
  name: 'Kreatifest Indonesia',
  logo: '../public/favicon.svg', // ganti sesuai lokasi file gambar logo kamu (contoh: /logo.png, src/assets/logo.svg)
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: 'Kreatifest Indonesia',
  title: 'Branding | Design | Photography',
  description:
    'Usaha marketing yang bergerak pada bidang branding, identity, design, dan photograpy dalam membantu UMKM indonesia dalam meningkatkan level usaha di mata customers.',
  primaryCta: { label: 'Mulai Kolaborasi', href: '#contact' },
  secondaryCta: { label: 'Project Kami', href: '#portfolio' },
}

export const highlights = [
  { icon: 'compass', tone: 'violet', label: 'Sosial Media Management', photo: 'social-media-management.jpg' },
  { icon: 'monitor', tone: 'coral', label: 'Jasa Foto & Video', photo: 'jasa-foto-video.jpg' },
  { icon: 'users', tone: 'amber', label: 'Jasa Desain', photo: 'jasa-desain.jpg' },
  { icon: 'motion', tone: 'violet', label: 'Kreatif Studio', photo: 'kreatif-studio.jpg' },
  { icon: 'whatsapp', tone: 'violet', label: 'Digital Marketing', photo: 'digital-marketing.jpg' },
  { icon: 'website', tone: 'violet', label: 'Jasa Website', photo: 'jasa-website.jpg' },
]

export const about = {
  eyebrow: 'Tentang Kreatifest',
  title: 'Mengenal Kreatifest lebih dekat',
  paragraphs: [
    'Kreatifest Indonesia adalah konsep studio kreatif yang memadukan strategi, desain, dan eksperimen digital untuk membantu ide menemukan bentuk komunikasinya.',
    'Pendekatan kami dirancang terbuka dan kolaboratif: menyusun arah, menguji kemungkinan, lalu merancang pengalaman yang terasa konsisten dari awal hingga akhir.',
  ],
  visual: {
    label: 'About / Concept',
    text: 'Bentuk baru untuk ide yang terus bergerak.',
  },
  values: [
    { icon: 'lightbulb', tone: 'coral', title: 'Curious by design', text: 'Membuka ruang bagi sudut pandang baru.' },
    { icon: 'overlap', tone: 'violet', title: 'Built together', text: 'Kolaborasi sebagai inti setiap proses.' },
  ],
}

export const services = {
  eyebrow: 'Services',
  title: 'Solusi Digital & Branding Bisnis Lengkap',
  note: '',
  items: [
    { icon: 'chat', tone: 'violet', title: 'Social Media Management', text: 'Pengelolaan akun media sosial secara profesional' },
    { icon: 'monitor', tone: 'coral', title: 'Jasa Foto & Video', text: 'Produksi konten visual dan audiovisual yang berkualitas tinggi' },
    { icon: 'palette', tone: 'amber', title: 'Jasa Desain', text: 'Pembuatan desain grafis profesional seperti feed media sosial, logo, banner, dan lainnya' },
    { icon: 'lightbulb', tone: 'amber', title: 'Kreatif Studio', text: 'Penyediaan fasilitas ruang studio modern' },
    { icon: 'users', tone: 'amber', title: 'Digital Marketing', text: 'Strategi pemasaran digital untuk meningkatkan brand' },
    { icon: 'website', tone: 'amber', title: 'Jasa Website', text: 'Layanan pembuatan dan pengembangan situs web atau landing page yang responsif dan optimal untuk bisnis anda' },
  ],
}

export const projects = {
  eyebrow: 'Portfolio / Projects',
  title: 'Project yang telah kami kerjakan',
  description:
    'Berikut adalah beberapa proyek yang telah kami kerjakan, mencakup berbagai bidang seperti branding, digital marketing, desain grafis, dan fotografi. Setiap proyek mencerminkan dedikasi kami dalam memberikan solusi kreatif yang efektif dan inovatif untuk klien kami.',
  items: [
    { id: 'aurora', name: 'Project Aurora', category: 'Branding', badge: 'Concept project' },
    { id: 'nusa', name: 'Nusa Digital', category: 'Digital', badge: 'Placeholder case study' },
    { id: 'forma', name: 'Studio Forma', category: 'Content', badge: 'Concept project' },
    { id: 'satu', name: 'Campaign Satu', category: 'Campaign', badge: 'Placeholder case study' },
  ],
}

export const process = {
  eyebrow: 'Kreatifest Indonesia',
  title: 'TELAH DIPERCAYA OLEH',
}

export const impact = {
  eyebrow: 'Why / Impact',
  title: 'Ruang untuk menunjukkan dampak yang nyata.',
  note: 'Placeholder — replace with verified data.',
  stats: [
    { value: 'XX', tone: 'violet', label: 'Project', text: 'Ganti dengan data terverifikasi.' },
    { value: '—', tone: 'coral', label: 'Partner', text: 'Ganti dengan data terverifikasi.' },
    { value: 'XX', tone: 'amber', label: 'Creative Output', text: 'Ganti dengan data terverifikasi.' },
  ],
}

export const testimonial = {
  eyebrow: 'Client Testimonial',
  quote: '[Tambahkan testimonial klien terverifikasi di sini]',
  author: 'Nama klien / Peran / Perusahaan',
}

export const cta = {
  eyebrow: 'Start something meaningful',
  title: 'Punya ide yang ingin diwujudkan?',
  text: 'Mari mulai percakapan untuk membentuk langkah kreatif berikutnya.',
  button: { label: 'Mari Berkolaborasi', href: '#contact' },
}

export const contact = {
  eyebrow: 'Contact & FAQ',
  title: 'Hubungi Kreatifest Indonesia',
  description:
    'Kami siap membantu Anda dalam membangun brand dan meningkatkan bisnis Anda melalui layanan kreatif kami. Silakan hubungi kami melalui salah satu saluran di bawah ini atau isi formulir kontak untuk memulai percakapan.',
  channels: [
    { 
      icon: 'mail', 
      tone: 'violet', 
      label: 'Email placeholder', 
      value: 'kreatifest.ind@gmail.com', 
      subject: 'Halo, saya ingin bertanya', // Subjek otomatis
      body: 'Halo admin, saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia ? Terima kasih.' // Isi pesan otomatis
    },
    { 
      icon: 'instagram', 
      tone: 'violet', 
      label: 'DM via Instagram', 
      value: 'kreatifest.co', // Isi dengan username IG Anda tanpa '@'
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) '
    },
    { 
      icon: 'whatsapp', 
      tone: 'coral', 
      label: 'Hubungi via WhatsApp', 
      value: '6285214102735', // Gunakan nomor HP saja (tanpa '+', '-', atau spasi)
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) ' // Teks pesan otomatis
    },
  ],
  // Data FAQ Baru
  faqs: [
    {
      question: 'Layanan apa saja yang disediakan oleh Kreatifest?',
      answer: 'Kreatifest menyediakan berbagai layanan kreatif digital mulai dari pengembangan brand identity, desain grafis, pengelolaan media sosial, hingga pembuatan website dan konten kreatif.'
    },
    {
      question: 'Berapa lama waktu pengerjaan sebuah proyek?',
      answer: 'Waktu pengerjaan bervariasi tergantung pada kompleksitas dan skala proyek. Umumnya berkisar antara 1 hingga 4 minggu setelah brief disepakati.'
    },
    {
      question: 'Bagaimana alur/proses kerja sama di Kreatifest?',
      answer: 'Proses diawali dengan sesi konsultasi/briefing, penawaran harga, pembuatan konsep awal, sesi revisi, hingga penyerahan hasil akhir proyek.'
    },
    {
      question: 'Apakah bisa melakukan kustomisasi paket layanan?',
      answer: 'Tentu saja! Kami menyediakan solusi kustom yang dapat disesuaikan dengan kebutuhan dan anggaran bisnis Anda.'
    }
  ]
}

export const footer = {
  description: 'Solusi branding, identity, design, dan photography untuk membantu UMKM Indonesia berkembang.',
  addressTitle: 'Lokasi Kami',
  address: {
    icon: 'location',
    label: 'Jl. Brigadir Jend. Katamso No.19B Lt 3, Cihaur Geulis, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40122',
    href: 'https://maps.app.goo.gl/ny6BSkMfX3AE1uPPA',
  },
  socialTitle: 'Kontak Kami',
  social: [
    { 
      icon: 'mail',
      label: 'Email', 
      value: 'kreatifest.ind@gmail.com',
      subject: 'Halo, saya ingin bertanya',
      body: 'Halo admin, saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia? Terima kasih.'
    },
    { 
      icon: 'instagram',
      label: 'Instagram', 
      value: 'kreatifest.co',
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) '
    },
    { 
      icon: 'whatsapp',
      label: 'WhatsApp', 
      value: '6285214102735',
      text: 'Halo, Kreatifest Indonesia! Saya tertarik untuk mengetahui lebih lanjut tentang layanan Kreatifest. Apakah saya bisa mendapatkan informasi lebih detail mengenai layanan yang tersedia?Terima kasih. :) '
    },
  ],
  copyright: 'Kreatifest Indonesia — All Right Reserved',
}
