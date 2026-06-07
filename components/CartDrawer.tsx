"use client";

import type { Product } from "@/lib/products";

export interface CartItem extends Product {
  qty: number;
}

function formatTL(n: number) {
  return "₺" + n.toLocaleString("tr-TR");
}

export default function CartDrawer({
  open,
  items,
  onClose,
  onInc,
  onDec,
  onRemove,
}: {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = total >= 750 || total === 0 ? 0 : 49;

  return (
    <div
      className={`fixed inset-0 z-[90] transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0a0814] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <h3 className="text-lg font-bold">
            Sepetim{" "}
            <span className="text-sm font-normal text-white/50">
              ({items.reduce((s, i) => s + i.qty, 0)} ürün)
            </span>
          </h3>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-white/5"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="mt-20 text-center text-white/50">
              <div className="text-6xl">🛒</div>
              <p className="mt-4">Sepetiniz boş.</p>
              <button
                onClick={onClose}
                className="mt-4 text-sm font-semibold text-fuchsia-300 hover:underline"
              >
                Alışverişe başla →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((i) => (
                <div key={i.id} className="glass flex gap-3 rounded-2xl p-3">
                  <div
                    className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${i.gradient} text-2xl`}
                  >
                    {i.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold">{i.name}</span>
                      <button
                        onClick={() => onRemove(i.id)}
                        className="text-white/40 hover:text-rose-400"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="text-xs text-white/45">{i.brand}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onDec(i.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 hover:bg-white/10"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm font-semibold">{i.qty}</span>
                        <button
                          onClick={() => onInc(i.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold">{formatTL(i.price * i.qty)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-white/10 p-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Ara toplam</span>
                <span>{formatTL(total)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Kargo</span>
                <span>{shipping === 0 ? "Ücretsiz" : formatTL(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-[11px] text-fuchsia-300/80">
                  {formatTL(750 - total)} daha ekle, kargo bedava!
                </p>
              )}
              <div className="flex justify-between border-t border-white/10 pt-2 text-base font-bold">
                <span>Toplam</span>
                <span>{formatTL(total + shipping)}</span>
              </div>
            </div>
            <button className="btn-glow mt-4 w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 py-3.5 font-semibold text-black transition hover:brightness-110">
              Ödemeye Geç →
            </button>
            <p className="mt-3 text-center text-[11px] text-white/40">
              🔒 Güvenli ödeme · 18 yaş doğrulaması gereklidir
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
