"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Aynı gün kargo · Orijinal ürün garantisi
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Buharın
              <br />
              <span className="gradient-text">yeni boyutu</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
              Premium pod sistemler, yüksek kaliteli e-likitler ve son teknoloji
              cihazlar. Türkiye'nin her yerine güvenli ve hızlı teslimat.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#urunler"
                className="btn-glow rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:brightness-110"
              >
                Ürünleri Keşfet
              </a>
              <a
                href="#kategoriler"
                className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/85 transition hover:bg-white/5"
              >
                Kategoriler →
              </a>
            </div>

            <div className="mt-12 flex gap-8">
              {[
                ["50K+", "Mutlu müşteri"],
                ["4.9★", "Ortalama puan"],
                ["24s", "Hızlı kargo"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white md:text-3xl">{n}</div>
                  <div className="text-xs text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual device mockup with vapor */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* vapor puffs */}
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="vapor-puff absolute left-1/2 top-4 h-10 w-10 rounded-full bg-white/30 blur-xl"
                  style={{ animationDelay: `${i * 0.9}s`, marginLeft: `${(i - 1.5) * 14}px` }}
                />
              ))}

              <div className="float glass relative grid h-80 w-64 place-items-center rounded-[2.5rem] md:h-96 md:w-72">
                <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-br from-fuchsia-600/30 via-purple-700/20 to-cyan-500/30" />
                <div className="relative z-10 text-center">
                  <div className="text-7xl">🔮</div>
                  <div className="mt-4 text-lg font-bold">Nova Pod X</div>
                  <div className="gradient-text text-sm font-semibold">BUHAR Lab</div>
                </div>

                <div className="glass absolute -left-6 top-10 rounded-2xl px-4 py-2 text-sm font-semibold reveal">
                  ⚡ 1100 mAh
                </div>
                <div className="glass absolute -right-6 bottom-14 rounded-2xl px-4 py-2 text-sm font-semibold reveal">
                  💨 Mesh Coil
                </div>
                <div className="glass absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 font-bold whitespace-nowrap">
                  ₺1.290{" "}
                  <span className="text-xs font-normal text-white/40 line-through">
                    ₺1.590
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-20 overflow-hidden border-y border-white/5 py-4">
        <div className="flex gap-12 whitespace-nowrap text-sm font-medium text-white/40">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "ÜCRETSİZ KARGO 750₺ ÜZERİ",
                "ORİJİNAL ÜRÜN",
                "GÜVENLİ ÖDEME",
                "AYNI GÜN GÖNDERİM",
                "7/24 DESTEK",
                "100+ AROMA",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t} <span className="text-fuchsia-400">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
