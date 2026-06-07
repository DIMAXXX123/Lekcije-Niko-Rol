"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setDone(true);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-black md:text-4xl">
              %15 indirim ile <span className="gradient-text">başla</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/60">
              Bültenimize katıl, ilk siparişinde %15 indirim ve yeni ürünlerden ilk
              sen haberdar ol.
            </p>

            {done ? (
              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 font-semibold text-emerald-300">
                ✓ Teşekkürler! İndirim kodun e-postana gönderildi.
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresin"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/50"
                />
                <button
                  type="submit"
                  className="btn-glow rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:brightness-110"
                >
                  Katıl
                </button>
              </form>
            )}
            <p className="mt-4 text-[11px] text-white/40">
              Sadece 18 yaş ve üzeri. İstediğin zaman çıkış yapabilirsin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
