'use client';

import Image from 'next/image';
import { FaWhatsapp, FaLock } from 'react-icons/fa';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export const FinalCTA = ({ onCtaClick }: FinalCTAProps) => {
  return (
    <section id="final" className="min-h-[600px] flex flex-col lg:flex-row items-center bg-navy-secondary overflow-hidden border-t border-white/5">
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full min-h-[400px] bg-navy-primary overflow-hidden">
        <Image 
          src="/cacador.png" 
          alt="Caçador" 
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-secondary via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-secondary"></div>
      </div>

      <div className="w-full lg:w-1/2 p-10 lg:p-20 text-center lg:text-left">
        <span className="slabel">Decisão sua</span>
          <h2 className="reveal font-anton text-[clamp(32px,4.5vw,56px)] leading-[1.1] uppercase mb-6 tracking-wide">
          SÓ DEPENDE DE VOCÊ:<br />ESPERAR A SORTE OU<br />
          <em className="text-blue-primary not-italic underline decoration-wavy underline-offset-8 decoration-blue-primary/40">CAÇAR COM O MELHOR.</em>
        </h2>
          <p className="reveal text-muted-text text-lg mb-10 max-w-[500px] mx-auto lg:mx-0">
          Enquanto você lê isso, alguém acabou de pegar um bug de preço que você perdeu. Entre agora e não deixe a próxima oportunidade passar.
        </p>

        <button 
          onClick={onCtaClick}
          className="group relative inline-flex items-center justify-center gap-3 bg-blue-primary hover:bg-[#388e3c] text-white font-bold text-lg lg:text-xl uppercase px-12 py-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--blue-glow)] active:scale-95 animate-pulse-custom"
        >
          <FaWhatsapp className="text-2xl" />
          ESTOU PRONTO PARA ECONOMIZAR
        </button>

        <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-xs text-muted-text uppercase tracking-widest font-semibold opacity-60">
          <FaLock className="text-blue-primary" />
          100% gratuito | sem spam | sai quando quiser
        </div>
      </div>
    </section>
  );
};
