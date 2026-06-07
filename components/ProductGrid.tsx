"use client";

import { useState } from "react";
import { products, categories, type Product, type Category } from "@/lib/products";

function formatTL(n: number) {
  return "₺" + n.toLocaleString("tr-TR");
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-xs text-amber-400">
      {"★".repeat(Math.round(rating))}
      <span className="text-white/20">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

function Card({ p, onAdd }: { p: Product; onAdd: (p: Product) => void }) {
  const [added, setAdded] = useState(false);
  const handle = () => {
    onAdd(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="glass card-hover group relative flex flex-col overflow-hidden rounded-3xl p-5">
      {p.tag && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-1 text-[11px] font-bold text-black">
          {p.tag}
        </span>
      )}

      <div
        className={`relative mb-5 grid h-44 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient}`}
      >
        <span className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          {p.emoji}
        </span>
      </div>

      <div className="mb-1 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wider text-fuchsia-300/80">
          {p.brand}
        </span>
        <span className="flex items-center gap-1">
          <Stars rating={p.rating} />
          <span className="text-[11px] text-white/40">({p.reviews})</span>
        </span>
      </div>

      <h3 className="text-lg font-bold">{p.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-white/55">{p.desc}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.specs.slice(0, 2).map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/60"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <div className="text-xl font-extrabold">{formatTL(p.price)}</div>
          {p.oldPrice && (
            <div className="text-xs text-white/35 line-through">{formatTL(p.oldPrice)}</div>
          )}
        </div>
        <button
          onClick={handle}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            added
              ? "bg-emerald-400 text-black"
              : "btn-glow bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black hover:brightness-110"
          }`}
        >
          {added ? "✓ Eklendi" : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAdd }: { onAdd: (p: Product) => void }) {
  const [active, setActive] = useState<Category | "all">("all");
  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="urunler" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div id="kategoriler" className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300/80">
            Koleksiyon
          </span>
          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Öne Çıkan <span className="gradient-text">Ürünler</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/55">
            En sevilen cihazlar, pod sistemler ve premium e-likitler tek bir yerde.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                active === c.id
                  ? "border-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-fuchsia-400/40"
              }`}
            >
              <span className="mr-1.5">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <Card key={p.id} p={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
