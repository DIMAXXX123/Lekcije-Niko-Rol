export type Category = "pod" | "kit" | "likit" | "tek-kullanimlik" | "aksesuar";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  emoji: string;
  gradient: string;
  tag?: string;
  desc: string;
  specs: string[];
}

export const categories: { id: Category | "all"; label: string; icon: string }[] = [
  { id: "all", label: "Tümü", icon: "✦" },
  { id: "pod", label: "Pod Sistemler", icon: "🔋" },
  { id: "kit", label: "Kit & Mod", icon: "⚙️" },
  { id: "likit", label: "E-Likitler", icon: "💧" },
  { id: "tek-kullanimlik", label: "Tek Kullanımlık", icon: "✨" },
  { id: "aksesuar", label: "Aksesuar", icon: "🧩" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Nova Pod X",
    brand: "BUHAR Lab",
    category: "pod",
    price: 1290,
    oldPrice: 1590,
    rating: 4.9,
    reviews: 312,
    emoji: "🟣",
    gradient: "from-fuchsia-500/30 to-purple-700/30",
    tag: "Çok Satan",
    desc: "Cebe sığan, güçlü bataryalı ve ayarlanabilir hava akışına sahip premium pod sistem.",
    specs: ["1100 mAh batarya", "Ayarlanabilir hava akışı", "Type-C hızlı şarj", "2 ml kapasite"],
  },
  {
    id: "p2",
    name: "Aero Kit 80W",
    brand: "VaporTech",
    category: "kit",
    price: 2450,
    rating: 4.8,
    reviews: 198,
    emoji: "⚙️",
    gradient: "from-cyan-400/30 to-blue-700/30",
    tag: "Yeni",
    desc: "80W'a kadar çıkış gücü, renkli ekran ve mesh coil teknolojisi ile yoğun buhar.",
    specs: ["80W çıkış gücü", "0.96\" renkli ekran", "Mesh coil", "5 ml tank"],
  },
  {
    id: "p3",
    name: "Buz Karpuz Likit 30ml",
    brand: "FrostLine",
    category: "likit",
    price: 320,
    oldPrice: 420,
    rating: 4.9,
    reviews: 540,
    emoji: "🍉",
    gradient: "from-rose-400/30 to-emerald-500/30",
    tag: "İndirim",
    desc: "Ferahlatıcı karpuz ve buz notalarının buluştuğu premium salt likit.",
    specs: ["30 ml şişe", "20/50 mg salt nikotin", "%50 VG / %50 PG", "Soğutucu etki"],
  },
  {
    id: "p4",
    name: "Mango Tango Likit 30ml",
    brand: "FrostLine",
    category: "likit",
    price: 320,
    rating: 4.7,
    reviews: 287,
    emoji: "🥭",
    gradient: "from-amber-400/30 to-orange-600/30",
    desc: "Olgun tropik mango aromasının yoğun ve dengeli tadı.",
    specs: ["30 ml şişe", "20/50 mg salt nikotin", "%50 VG / %50 PG", "Tropik aroma"],
  },
  {
    id: "p5",
    name: "Glow 8000 Puff",
    brand: "GlowBar",
    category: "tek-kullanimlik",
    price: 540,
    rating: 4.6,
    reviews: 921,
    emoji: "✨",
    gradient: "from-violet-400/30 to-pink-600/30",
    tag: "Popüler",
    desc: "8000 puff'a kadar dayanıklı, şarj edilebilir tek kullanımlık cihaz. 12 aroma.",
    specs: ["8000 puff", "Type-C şarj", "650 mAh", "Mesh coil"],
  },
  {
    id: "p6",
    name: "Mini Pod Air",
    brand: "BUHAR Lab",
    category: "pod",
    price: 890,
    oldPrice: 1090,
    rating: 4.8,
    reviews: 165,
    emoji: "🔵",
    gradient: "from-sky-400/30 to-indigo-600/30",
    desc: "Ultra ince tasarım, sessiz çekiş ve gün boyu süren batarya.",
    specs: ["800 mAh batarya", "Otomatik çekiş", "Type-C şarj", "Magnetik pod"],
  },
  {
    id: "p7",
    name: "Orman Meyveleri 30ml",
    brand: "FrostLine",
    category: "likit",
    price: 320,
    rating: 4.8,
    reviews: 410,
    emoji: "🫐",
    gradient: "from-indigo-400/30 to-purple-700/30",
    desc: "Böğürtlen, yaban mersini ve ahududunun dengeli karışımı.",
    specs: ["30 ml şişe", "20/50 mg salt nikotin", "%50 VG / %50 PG", "Karışık meyve"],
  },
  {
    id: "p8",
    name: "Pro Şarj İstasyonu",
    brand: "VaporTech",
    category: "aksesuar",
    price: 450,
    rating: 4.7,
    reviews: 88,
    emoji: "🔌",
    gradient: "from-slate-400/30 to-cyan-600/30",
    desc: "Hızlı ve güvenli şarj için akıllı korumalı Type-C istasyon.",
    specs: ["18W hızlı şarj", "Aşırı yük koruması", "LED gösterge", "Type-C kablo dahil"],
  },
];
