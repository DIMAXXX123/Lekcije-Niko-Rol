"use client";

const features = [
  {
    icon: "🚀",
    title: "Aynı Gün Kargo",
    desc: "16:00'dan önceki siparişler aynı gün kargoya verilir.",
  },
  {
    icon: "🛡️",
    title: "Orijinal Garanti",
    desc: "Tüm ürünler %100 orijinal ve distribütör garantilidir.",
  },
  {
    icon: "🔒",
    title: "Güvenli Ödeme",
    desc: "256-bit SSL şifreleme ile güvenli kredi kartı ödemesi.",
  },
  {
    icon: "💬",
    title: "7/24 Destek",
    desc: "Uzman ekibimiz her sorunuzda yanınızda.",
  },
];

export default function Features() {
  return (
    <section id="avantajlar" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-2xl">
                {f.icon}
              </div>
              <h3 className="font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
