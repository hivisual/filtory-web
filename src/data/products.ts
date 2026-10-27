export interface ProductPlan {
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'ai' | 'photo-video' | 'design' | 'productivity';
  categoryLabel: string;
  badge?: string;
  shortDesc: string;
  longDesc?: string;
  features: string[];
  plans: ProductPlan[];
  platform: string;
  shopeeUrl?: string;
  detailUrl?: string;
  iconBg: string;
  iconType: 'labbet' | 'chatgpt' | 'vsco' | 'google-one' | 'canva' | 'capcut' | 'lightroom' | 'gemini';
  bottomBadge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "labbet-premium",
    name: "Labbet App (iOS)",
    category: "photo-video",
    categoryLabel: "Kamera & Film",
    badge: "Paling Laris",
    shortDesc: "Akses penuh semua preset analog, grain, dan efek kamera film tanpa batas.",
    longDesc: "Semua preset terkunci langsung terbuka. Cocok buat kamu yang mau hasil foto estetik ala kamera film tanpa ribet edit manual.",
    features: [
      "Terbuka semua filter analog, efek light leak, & dust",
      "Bebas watermark & ekspor foto resolusi penuh",
      "Sistem aman, foto galeri HP tetap 100% privasi kamu",
      "Didampingi panduan instalasi langkah demi langkah"
    ],
    plans: [
      { name: "Paket 6 Bulan", duration: "6 Bulan", price: "Rp39.000", originalPrice: "Rp129.000", popular: false },
      { name: "Paket 10 Bulan", duration: "10 Bulan", price: "Rp49.000", originalPrice: "Rp199.000", popular: true }
    ],
    platform: "iOS Only",
    shopeeUrl: "https://s.shopee.co.id/1gG3IthAYI",
    detailUrl: "/labbet",
    iconBg: "#0F0F11",
    iconType: "labbet",
    bottomBadge: "Sekali Bayar · Bergaransi Penuh"
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Go 3 Bulan",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "Paling Dicari",
    shortDesc: "Akses model penalaran o-series & GPT mutakhir, Deep Research, dan Voice Mode di akun pribadi kamu.",
    longDesc: "Upgrade resmi ke akun ChatGPT pribadi kamu tanpa ganti email. Nikmati model penalaran mutakhir OpenAI (o-series, Canvas coding interaktif), riset mendalam dengan Deep Research, Advanced Voice Mode real-time, serta akses penuh bebas antrian.",
    features: [
      "Aktivasi resmi langsung ke akun / email ChatGPT kamu sendiri",
      "Akses model penalaran o-series & GPT versi mutakhir",
      "Fitur Deep Research & analisis dokumen kompleks",
      "Advanced Voice Mode real-time & generate gambar AI",
      "Garansi aktif 1 bulan penuh langsung dipandu admin"
    ],
    plans: [
      { name: "Durasi 3 Bulan", duration: "3 Bulan", price: "Rp49.000", originalPrice: "Rp350.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    iconBg: "#10A37F",
    iconType: "chatgpt",
    bottomBadge: "Akun Pribadi Sendiri · Garansi 1 Bulan"
  },
  {
    id: "gemini-advanced",
    name: "Gemini Pro 18 Bulan",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "Rekomendasi AI",
    shortDesc: "Model AI Google mutakhir, integrasi Workspace & Google One 2TB langsung di akun Google pribadimu.",
    longDesc: "Aktivasi langsung ke akun Google pribadi kamu selama 18 bulan. Dapatkan akses model tercanggih Google AI dengan multimodal reasoning, kapasitas Google One 2TB untuk Drive & Photos, serta asisten AI cerdas langsung di Docs dan Gmail.",
    features: [
      "Aktivasi resmi ke akun Google / email pribadi kamu sendiri",
      "Akses model mutakhir Google AI & multimodal reasoning",
      "Bonus Cloud Storage Google One 2TB (Drive & Google Photos)",
      "Integrasi native di Google Docs, Gmail, Sheets & Slides",
      "Garansi sesuai durasi dengan panduan aktivasi mudah"
    ],
    plans: [
      { name: "Durasi 18 Bulan", duration: "18 Bulan", price: "Rp47.000", originalPrice: "Rp450.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    iconBg: "#1E88E5",
    iconType: "gemini",
    bottomBadge: "Pakai Email Google Sendiri · Durasi 18 Bulan"
  }
];

export const TRUST_POINTS = [
  {
    icon: "🛡️",
    title: "Garansi Tanpa Drama",
    desc: "Akun tiba-tiba kembali ke versi free atau terkendala? Chat admin, langsung kami perbaiki atau ganti baru. Nggak pakai alasan berbelit-belit."
  },
  {
    icon: "🔒",
    title: "Bukan Akun Trial Curian",
    desc: "Semua akses menggunakan metode legal dan teruji. Jauh lebih stabil, aman untuk perangkatmu, dan nggak gampang logout sendiri."
  },
  {
    icon: "💡",
    title: "Panduan Sampai Bisa",
    desc: "Gaptek bukan masalah. Setiap pembelian dilengkapi panduan langkah demi langkah yang jelas, plus bantuan admin kalau kamu bingung."
  }
];

export const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote: "Adminnya responsif, beli jam 12 malam tetep dilayani. Preset-nya bagus semua.",
    name: "s*****a",
    source: "Pembeli via WA"
  },
  {
    stars: "★★★★★",
    quote: "worth it bangeet, beda banget presetnya dari versi gratis. Foto jadi keliatan mahal.",
    name: "r*****i",
    source: "Pembeli via WA"
  },
  {
    stars: "★★★★★",
    quote: "Udah langganan 3 bulan, sejauh nggak ada masalah. Aktivasi juga gampang",
    name: "d*****n",
    source: "Pembeli via WA"
  },
  {
    stars: "★★★★★",
    quote: "App underrated yang ga banyak orang tau. recommended banget buat konten creator.",
    name: "a*****y",
    source: "Pembeli via WA"
  }
];

export const FAQS = [
  {
    q: "Apakah aplikasi di sini 100% aman untuk HP/Laptop saya?",
    a: "Sangat aman. Kamu tetap mengunduh aplikasinya langsung dari App Store, Play Store, atau web resmi masing-masing aplikasi. Kami hanya menyediakan akses akun atau lisensi resminya, bukan file modifikasi (MOD/APK/Crack) yang berbahaya."
  },
  {
    q: "Bagaimana prosesnya setelah saya bayar?",
    a: "Begitu konfirmasi pembayaran diterima, admin akan langsung mengirimkan detail akses akun beserta panduan pakainya via chat. Rata-rata hanya memakan waktu 5–10 menit saat jam operasional."
  },
  {
    q: "Apakah Filtory menjual akun sharing (dipakai ramai-ramai)?",
    a: "Tidak. Filtory tidak menjual akun sharing yang dipakai bersama pembeli lain. Semua akun adalah akun private, personal, atau via invite resmi ke email pribadimu sehingga privasi aman, tidak rebutan perangkat, dan tidak gampang logout sendiri."
  },
  {
    q: "Bagaimana dengan sistem garansinya?",
    a: "Setiap pembelian bergaransi sesuai ketentuan dan durasi yang tertera pada deskripsi masing-masing produk di katalog atas. Jika terjadi kendala selama masa garansi aktif sesuai ketentuan produk, tim admin kami siap membantu sampai beres atau diganti baru."
  },
  {
    q: "Kalau saya ganti HP atau perangkat baru, apakah aksesnya hilang?",
    a: "Sebagian besar aplikasi bisa langsung digunakan di perangkat baru cukup dengan login ulang. Detail ketentuan perangkat tertera jelas pada deskripsi masing-masing produk di katalog atas."
  }
];
