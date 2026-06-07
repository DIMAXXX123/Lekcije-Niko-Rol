"use client";

const reviews = [
  {
    name: "Emre K.",
    city: "İstanbul",
    text: "Siparişim ertesi gün elimdeydi. Nova Pod X gerçekten çok kaliteli, bataryası gün boyu gidiyor.",
    avatar: "🧔",
  },
  {
    name: "Zeynep A.",
    city: "İzmir",
    text: "Likitler orijinal ve aromalar harika. Buz Karpuz favorim oldu. Paketleme çok özenliydi.",
    avatar: "👩",
  },
  {
    name: "Caner D.",
    city: "Ankara",
    text: "Müşteri hizmetleri çok ilgili. Yanlış seçtiğim coil'i sorunsuz değiştirdiler. Teşekkürler!",
    avatar: "👨",
  },
  {
    name: "Selin Y.",
    city: "Bursa",
    text: "Fiyatlar gayet uygun ve ürün yelpazesi geniş. Artık tüm alışverişimi buradan yapıyorum.",
    avatar: "👱‍♀️",
  },
];

export default function Reviews() {
  return (
    <section id="yorumlar" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300/80">
            Müşteri Yorumları
          </span>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Binlerce mutlu <span className="gradient-text">vaper</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div key={r.name} className="glass card-hover rounded-3xl p-6">
              <div className="text-amber-400">★★★★★</div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 text-lg">
                  {r.avatar}
                </span>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-white/45">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
