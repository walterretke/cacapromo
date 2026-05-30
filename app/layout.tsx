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
  title: "Grupo de Desconto WhatsApp | Caça Promo",
  description: "Entre no nosso grupo de WhatsApp e receba as melhores ofertas e promoções exclusivas.",
  keywords: "grupo de whatsapp de desconto, promoções hoje, cupons de desconto, ofertas amazon, achadinhos shopee, achadinhos magalu",
  authors: [{ name: "Caça Promo" }],
  openGraph: {
    title: "Grupo de Desconto WhatsApp | Caça Promo",
    description: "Entre agora no melhor grupo de ofertas do WhatsApp.",
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
