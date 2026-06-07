"use client";

import { useEffect, useState } from "react";

export default function Navbar({
  cartCount,
  onCartClick,
}: {
  cartCount: number;
  onCartClick: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#urunler", label: "Ürünler" },
    { href: "#kategoriler", label: "Kategoriler" },
    { href: "#avantajlar", label: "Avantajlar" },
    { href: "#yorumlar", label: "Yorumlar" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass shadow-lg" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
              ⚡
            </span>
            <span className="text-lg">
              BUHAR<span className="gradient-text">.co</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium transition hover:border-fuchsia-400/50"
            >
              <span>🛒</span>
              <span className="hidden sm:inline">Sepet</span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-1 text-[11px] font-bold text-black">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenu((m) => !m)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
              aria-label="Menü"
            >
              ☰
            </button>
          </div>
        </div>

        {menu && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenu(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
