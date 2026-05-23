import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FacebookPixel } from "@/components/FacebookPixel";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupos de Desconto WhatsApp e Telegram | Caça Promo - Histórico de Preços",
  description: "Encontre os melhores grupos de telegram de desconto, grupos de desconto whatsapp e promoções exclusivas. Use nosso comparador e histórico de preços para economizar na Amazon, Shopee e Magalu.",
  keywords: "grupos de telegram de desconto, grupos de desconto whatsapp, grupos com descontos, histórico de preços, comparador de preços, promoções hoje, cupons de desconto, ofertas amazon, promoções magalu, achadinhos shopee",
  authors: [{ name: "Caça Promo" }],
  openGraph: {
    title: "Grupos de Desconto WhatsApp e Telegram | Caça Promo",
    description: "Economize agora com os melhores grupos de ofertas do Brasil.",
    type: "website",
    locale: "pt_BR",
    images: ["/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
