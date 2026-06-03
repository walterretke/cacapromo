import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FacebookPixel } from "@/components/FacebookPixel";
import { Suspense } from "react";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap", // Optimize font display
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap", // Optimize font display
});

// Theme color is part of the page metadata

export const metadata: Metadata = {
  title: "Caçador de Promoções | Onde o melhor desconto é a caça",
  description: "Entre no nosso grupo de WhatsApp e receba as melhores ofertas e promoções exclusivas.",
  themeColor: "#2d6a4f",
  keywords: "grupo de whatsapp de desconto, promoções hoje, cupons de desconto, ofertas amazon, achadinhos shopee, achadinhos magalu",
  authors: [{ name: "Caçador de Promoções" }],
  openGraph: {
    title: "Caçador de Promoções | Onde o melhor desconto é a caça",
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
      className={`${anton.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://chat.whatsapp.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#05091A] text-white">
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
