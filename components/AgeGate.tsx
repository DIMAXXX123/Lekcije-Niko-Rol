"use client";

import { useEffect, useState } from "react";

export default function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ok = typeof window !== "undefined" && localStorage.getItem("buhar_age_ok");
    if (!ok) setOpen(true);
  }, []);

  if (!open) return null;

  const confirm = () => {
    localStorage.setItem("buhar_age_ok", "1");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <div className="glass reveal relative w-full max-w-md rounded-3xl p-8 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-3xl font-black">
          18+
        </div>
        <h2 className="text-2xl font-bold">Yaş Doğrulama</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Bu site nikotin içeren ürünler satmaktadır ve yalnızca{" "}
          <span className="font-semibold text-white">18 yaş ve üzeri</span> kişiler
          içindir. Devam etmek için yaşınızı doğrulayın.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <button
            onClick={confirm}
            className="btn-glow rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 py-3 font-semibold text-black transition hover:brightness-110"
          >
            18 yaşından büyüğüm — Giriş
          </button>
          <a
            href="https://www.google.com"
            className="rounded-full border border-white/10 py-3 text-sm text-white/60 transition hover:bg-white/5"
          >
            Hayır, çıkış yap
          </a>
        </div>
        <p className="mt-5 text-[11px] leading-relaxed text-white/40">
          Sigara içmek sağlığa zararlıdır. Nikotin bağımlılık yapan bir maddedir.
        </p>
      </div>
    </div>
  );
}
