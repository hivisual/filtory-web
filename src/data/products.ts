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
  iconType: 'labbet' | 'chatgpt' | 'vsco' | 'google-one' | 'canva' | 'capcut' | 'lightroom';
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
    bottomBadge: "♾️ Sekali Bayar / Garansi Penuh"
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro (All Device)",
    category: "photo-video",
    categoryLabel: "Video Editor",
    badge: "Stok Terbatas",
    shortDesc: "Buka semua efek pro, transisi, dan ekspor 4K tanpa watermark. Akun private, anti mental.",
    longDesc: "Software editing video paling populer untuk konten Reels dan TikTok. Buka seluruh efek VIP, transisi pro, dan auto-caption akurat tanpa watermark.",
    features: [
      "Buka semua filter, efek VIP, & transisi pro",
      "Auto-captions cerdas bahasa Indonesia tanpa watermark",
      "AI Noise Reduction & Auto Velocity bertenaga AI",
      "Ekspor video resolusi 4K 60FPS tanpa kompresi"
    ],
    plans: [
      { name: "Akses 1 Bulan", duration: "1 Bulan", price: "Rp25.000", originalPrice: "Rp129.000", popular: false },
      { name: "Akses 1 Tahun", duration: "1 Tahun", price: "Rp69.000", originalPrice: "Rp899.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    shopeeUrl: "https://s.shopee.co.id/1gG3IthAYI",
    iconBg: "#000000",
    iconType: "capcut",
    bottomBadge: "⚡ Akun Private / Anti Mental"
  },
  {
    id: "canva-pro",
    name: "Canva Pro (Via Invite Email)",
    category: "design",
    categoryLabel: "Desain Grafis",
    badge: "Wajib Kreator",
    shortDesc: "Akses jutaan elemen premium, hapus background otomatis, dan brand kit langsung di akun pribadimu.",
    longDesc: "Aktivasi langsung ke email akun Canva pribadimu tanpa perlu ganti akun. Semua proyek desain lama tetap aman dan langsung mendapatkan fitur Pro.",
    features: [
      "100M+ template, foto, video, & font premium",
      "Magic Switch, Resize otomatis, & Background Remover",
      "Brand Kit eksklusif & cloud storage tak terbatas",
      "Gabung langsung ke email pribadimu secara resmi"
    ],
    plans: [
      { name: "Durasi 6 Bulan", duration: "6 Bulan", price: "Rp25.000", originalPrice: "Rp250.000", popular: false },
      { name: "Durasi 1 Tahun", duration: "1 Tahun", price: "Rp39.000", originalPrice: "Rp499.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    shopeeUrl: "https://s.shopee.co.id/1gG3IthAYI",
    iconBg: "#00C4CC",
    iconType: "canva",
    bottomBadge: "✉️ Gabung Email Pribadi Resmi"
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (Shared / Private)",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "Paling Dicari",
    shortDesc: "Akses model AI terbaru, analisis file, dan respon cepat tanpa kena limit jam sibuk.",
    longDesc: "Akses model kecerdasan buatan paling mutakhir GPT-4o, DALL·E 3, visual reasoning, dan web browsing untuk skripsi, riset, coding, dan copywriting.",
    features: [
      "Akses penuh GPT-4o & model reasoning mutakhir",
      "Generate gambar ultra realistis via DALL·E 3",
      "Advanced Voice mode canggih & Web browsing real-time",
      "Pilihan akun Sharing hemat atau Private eksklusif"
    ],
    plans: [
      { name: "1 Bulan Sharing", duration: "1 Bulan", price: "Rp45.000", originalPrice: "Rp350.000", popular: false },
      { name: "1 Bulan Private", duration: "1 Bulan", price: "Rp85.000", originalPrice: "Rp350.000", popular: true }
    ],
    platform: "All Devices (iOS, Android, PC)",
    shopeeUrl: "https://s.shopee.co.id/1gG3IthAYI",
    iconBg: "#10A37F",
    iconType: "chatgpt",
    bottomBadge: "🤖 Model GPT-4o Tercepat"
  },
  {
    id: "vsco-pro",
    name: "VSCO Pro / X (iOS & Android)",
    category: "photo-video",
    categoryLabel: "Foto & Film",
    badge: "Creator Choice",
    shortDesc: "Standar industri fotografi mobile. Buka seluruh 200+ preset legendaris Kodak, Fuji, dan tool video pro.",
    longDesc: "Buka seluruh 200+ filter preset legendaris Kodak, Fuji, dan Ilford. Dilengkapi tool HSL lengkap dan color grading video sinematik 60 FPS.",
    features: [
      "Buka seluruh 200+ preset film analog eksklusif",
      "VSCO Film X tools (Kodak, Fuji, Ilford simulation)",
      "Video color grading & slow motion frame control",
      "Akses multi-device (iOS & Android) bergaransi"
    ],
    plans: [
      { name: "Akses 1 Tahun", duration: "1 Tahun", price: "Rp35.000", originalPrice: "Rp490.000", popular: true }
    ],
    platform: "iOS & Android",
    shopeeUrl: "https://s.shopee.co.id/1gG3IthAYI",
    iconBg: "#1E1E1E",
    iconType: "vsco",
    bottomBadge: "🎞️ 200+ Preset Film Lengkap"
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
    a: "Sangat aman. Kamu tetap mengunduh aplikasinya langsung dari App Store, Play Store, atau web resmi masing-masing aplikasi. Kami hanya menyediakan akses akun atau lisensi premiumnya, bukan file modifikasi (MOD/Crack) yang berbahaya."
  },
  {
    q: "Bagaimana prosesnya setelah saya bayar?",
    a: "Begitu pembayaran terkonfirmasi, admin akan langsung mengirimkan detail akses beserta panduan cara pakainya lewat chat. Rata-rata hanya memakan waktu 5–10 menit saat jam operasional."
  },
  {
    q: "Apa bedanya akun Sharing dan Private?",
    a: "Akun Sharing digunakan bersama pembeli lain (harga jauh lebih murah, cocok untuk pemakaian santai dengan aturan tertentu). Akun Private khusus untuk kamu sendiri atau menggunakan email pribadimu, sehingga privasi proyek/desainmu 100% terjaga."
  },
  {
    q: "Bagaimana kalau akun bermasalah di tengah masa langganan?",
    a: "Setiap pembelian di Filtory dilindungi garansi sesuai durasi paket yang kamu beli. Selama tidak melanggar aturan pemakaian (seperti mengubah password pada akun sharing), tinggal hubungi admin dan akan langsung kami ganti atau perbaiki."
  },
  {
    q: "Kalau saya ganti HP atau perangkat baru, apakah aksesnya hilang?",
    a: "Tergantung jenis aplikasi yang kamu beli. Sebagian besar bisa langsung dipindah hanya dengan login ulang. Detail aturannya tertera jelas di deskripsi masing-masing aplikasi pada katalog di atas."
  }
];
