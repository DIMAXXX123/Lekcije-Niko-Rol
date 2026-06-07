import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BUHAR.co — Premium Elektronik Sigara & Likit Mağazası",
  description:
    "Türkiye'nin en şık vape deneyimi. Premium pod sistemler, e-likitler ve elektronik sigara cihazları. Hızlı kargo, orijinal ürün garantisi. Yalnızca 18 yaş ve üzeri.",
  keywords: [
    "elektronik sigara",
    "vape",
    "e-likit",
    "pod",
    "buhar",
    "Türkiye",
  ],
  openGraph: {
    title: "BUHAR.co — Premium Elektronik Sigara Mağazası",
    description: "Türkiye'nin en şık vape deneyimi. 18 yaş ve üzeri.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07060d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <div className="aurora" aria-hidden />
        {children}
      </body>
    </html>
  );
}
