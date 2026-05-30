import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FacebookPixel } from "@/components/FacebookPixel";
import { Suspense } from "react";

export const viewport: Viewport = {
  themeColor: "#059669",
};

export const metadata: Metadata = {
  title: "Grupo de Desconto WhatsApp | Caça Promo",
  description: "Entre no nosso grupo de WhatsApp e receba as melhores ofertas e promoções exclusivas.",
  keywords: "grupo de whatsapp de desconto, promoções hoje, cupons de desconto, ofertas amazon, achadinhos shopee, achadinhos magalu",
  authors: [{ name: "Caça Promo" }],
  other: {
    "facebook-domain-verification": "your-code-here", // Opcional
  },
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
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://chat.whatsapp.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://chat.whatsapp.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
