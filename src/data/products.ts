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
    name: "Labbet — Cam & Film Filters (iOS)",
    category: "photo-video",
    categoryLabel: "Kamera & Film",
    badge: "Paling Laris",
    shortDesc: "Akses penuh semua preset analog, grain, dan efek kamera film tanpa batas.",
    longDesc: "Semua preset terkunci langsung terbuka. Cocok buat kamu yang mau hasil foto estetik ala kamera film tanpa ribet edit manual.",
    features: [
      "Terbuka semua filter, efek light leak, & dust",
      "Bebas watermark & ekspor resolusi penuh",
      "Sistem aman, foto di galeri HP tetap 100% privasi kamu",
      "Panduan instalasi lengkap sampai berhasil"
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
    bottomBadge: "♾️ Sekali Bayar / Bergaransi"
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (Private)",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "Paling Dicari",
    shortDesc: "Akses model AI terbaru GPT-4o, analisis file & visual, serta respon prioritas.",
    longDesc: "Akses model kecerdasan buatan paling mutakhir GPT-4o, DALL·E 3, visual reasoning, canvas coding, dan web browsing real-time untuk skripsi, riset, coding, dan copywriting.",
    features: [
      "Akses penuh GPT-4o, Canvas & reasoning model",
      "Generate gambar ultra realistis via DALL·E 3",
      "Advanced Voice mode canggih & Web browsing real-time",
      "Akun Private personal, akses penuh tanpa rebutan"
    ],
    plans: [
      { name: "Akses 1 Bulan", duration: "1 Bulan", price: "Rp85.000", originalPrice: "Rp350.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    iconBg: "#10A37F",
    iconType: "chatgpt",
    bottomBadge: "🤖 Akun Private / Model GPT-4o"
  },
  {
    id: "gemini-advanced",
    name: "Google Gemini Advanced (Private)",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "Rekomendasi AI",
    shortDesc: "Model AI 1.5 Pro dengan context window 1 juta token, integrasi Workspace & Google Drive.",
    longDesc: "Model AI tercanggih dari Google dengan context window 1 juta token yang mampu menganalisis ratusan halaman dokumen, video panjang, serta terintegrasi langsung dengan Docs, Gmail, dan Google Drive.",
    features: [
      "Model Gemini 1.5 Pro dengan context window 1M token",
      "Analisis dokumen panjang, video, data, & coding",
      "Integrasi langsung ke Google Docs, Gmail, & Drive",
      "Akun Private personal, akses resmi & bergaransi"
    ],
    plans: [
      { name: "Akses 1 Bulan", duration: "1 Bulan", price: "Rp65.000", originalPrice: "Rp309.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    iconBg: "#1E88E5",
    iconType: "gemini",
    bottomBadge: "✨ Model 1.5 Pro / 1M Context Window"
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
    quote: "Awalnya sempat ragu beli di luar App Store, ternyata prosesnya cepet banget dan dipandu sampai beneran kebuka semua fiturnya. Aman banget.",
    name: "Dinda",
    source: "Pembeli via WhatsApp",
    channel: "WA"
  },
  {
    quote: "Harga jauh lebih masuk akal dibanding langganan bulanan sendiri. Udah jalan 3 bulan aman sentosa nggak pernah kena kick.",
    name: "Rizky",
    source: "Pembeli via Shopee",
    channel: "Shopee"
  },
  {
    quote: "Adminnya fast respon parah. Sempet bingung cara loginnya, langsung dibantuin step-by-step sampai beres nggak sampai 5 menit.",
    name: "Nadia",
    source: "Pembeli via WhatsApp",
    channel: "WA"
  },
  {
    quote: "Preset Luxra & Laurel di Labbet langsung kebuka semua. Warnanya estetik parah, feeds Instagram jadi keliatan mahal.",
    name: "Farhan",
    source: "Fotografer Mobile",
    channel: "WA"
  },
  {
    quote: "Langganan ChatGPT Plus di Filtory hemat banyak buat skripsi dan kerjaan. Akun lancar jaya, CS-nya ramah banget.",
    name: "Reza",
    source: "Mahasiswa & Freelancer",
    channel: "Shopee"
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
