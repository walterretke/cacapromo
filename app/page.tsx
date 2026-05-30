"use client";

import { useEffect } from "react";

export default function Home() {
  const whatsappUrl = "https://chat.whatsapp.com/HwCYtgrMAL2IfKFHRbvxJr?mode=gi_t";

  useEffect(() => {
    // Tracking and Redirect
    const redirect = () => {
      if (typeof window !== "undefined") {
        if (window.fbq) {
          window.fbq("track", "Contact");
        }
        window.location.href = whatsappUrl;
      }
    };

    // Small delay to ensure Pixel has time to initialize and track
    const timer = setTimeout(redirect, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-900 font-sans p-6 text-center">
      <div className="max-w-md w-full">
        <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold mb-2">Redirecionando para o Grupo...</h1>
        <p className="text-slate-500 mb-8">Aguarde um momento enquanto preparamos seu acesso seguro.</p>
        
        <a 
          href={whatsappUrl}
          className="inline-block w-full bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all active:scale-95"
        >
          ACESSAR WHATSAPP AGORA
        </a>
        
        <p className="mt-6 text-xs text-slate-400 uppercase tracking-widest font-semibold">
          Caça Promo • 100% Seguro
        </p>
      </div>
    </div>
  );
}
