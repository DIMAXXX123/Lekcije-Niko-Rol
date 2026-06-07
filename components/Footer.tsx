"use client";

export default function Footer() {
  const cols = [
    {
      title: "Mağaza",
      links: ["Pod Sistemler", "Kit & Mod", "E-Likitler", "Tek Kullanımlık", "Aksesuarlar"],
    },
    {
      title: "Kurumsal",
      links: ["Hakkımızda", "İletişim", "Mağazalarımız", "Kariyer", "Blog"],
    },
    {
      title: "Yardım",
      links: ["Kargo & Teslimat", "İade & Değişim", "Sıkça Sorulan Sorular", "Sipariş Takibi"],
    },
  ];

  return (
    <footer className="border-t border-white/10 pt-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* 18+ warning banner */}
        <div className="mb-12 flex flex-col items-center gap-3 rounded-3xl border border-rose-500/20 bg-rose-500/5 p-6 text-center md:flex-row md:text-left">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-rose-500/20 text-xl font-black text-rose-300">
            18+
          </span>
          <p className="text-sm leading-relaxed text-white/65">
            <span className="font-semibold text-white">Yasal Uyarı:</span> Bu ürünler
            yalnızca 18 yaş ve üzeri yetişkinler içindir. Sigara ve nikotin içeren
            ürünler sağlığa zararlıdır ve bağımlılık yapar. Hamilelik döneminde ve
            sağlık sorunu olanlar için önerilmez.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-extrabold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
                ⚡
              </span>
              <span className="text-lg">
                BUHAR<span className="gradient-text">.co</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Türkiye'nin premium elektronik sigara ve e-likit mağazası. Orijinal
              ürünler, hızlı kargo ve güvenilir hizmet.
            </p>
            <div className="mt-5 flex gap-3">
              {["📷", "𝕏", "📘", "▶️"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-fuchsia-400/40"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-white/45 md:flex-row">
          <span>© {new Date().getFullYear()} BUHAR.co — Tüm hakları saklıdır.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Gizlilik</a>
            <a href="#" className="hover:text-white">Kullanım Şartları</a>
            <a href="#" className="hover:text-white">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
