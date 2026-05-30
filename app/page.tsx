"use client";

import { useEffect } from "react";

export default function Home() {
  const whatsappUrl = "https://chat.whatsapp.com/HwCYtgrMAL2IfKFHRbvxJr?mode=gi_t";

  useEffect(() => {
    const redirect = () => {
      if (typeof window !== "undefined") {
        if (window.fbq) {
          window.fbq("track", "Contact");
        }
        window.location.replace(whatsappUrl);
      }
    };

    // Reduzido para 600ms - tempo ideal para disparo do Pixel sem atrasar muito o usuário
    const timer = setTimeout(redirect, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-900 p-6 text-center">
      <div className="max-w-md w-full">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-xl font-bold mb-2">Redirecionando...</h1>
        <p className="text-slate-500 mb-8 text-sm">Preparando seu acesso ao grupo.</p>
        
        <a 
          href={whatsappUrl}
          className="inline-block w-full bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-emerald-700 transition-all active:scale-95"
        >
          ABRIR WHATSAPP
        </a>
      </div>
    </div>
  );
}
