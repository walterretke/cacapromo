"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const whatsappUrl = "https://chat.whatsapp.com/HwCYtgrMAL2IfKFHRbvxJr?mode=gi_t";

  const handleLinkClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-900 p-6">
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-10">
        
        {/* Logo Section */}
        <div className="relative w-28 h-28 animate-fade-in">
          <Image
            src="/Logo.png"
            alt="Caça Promo Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4 animate-slide-up [animation-delay:200ms] opacity-0">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Você está a um passo do <br />
            <span className="text-emerald-600">Grupo de Ofertas</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-[280px] mx-auto">
            Clique no botão abaixo para entrar e receber as melhores promoções.
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full animate-slide-up [animation-delay:400ms] opacity-0">
          <a 
            href={whatsappUrl}
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-emerald-100 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaWhatsapp className="text-3xl" />
            ENTRAR NO GRUPO
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Grupo Ativo e Verificado
          </div>
        </div>

        {/* Trust Footer */}
        <footer className="pt-8 animate-fade-in [animation-delay:600ms] opacity-0">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
            100% Seguro • Sem Spam • Gratuito
          </p>
        </footer>

      </div>
    </main>
  );
}
