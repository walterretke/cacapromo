'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section id="hero" className="min-h-[100svh] flex flex-col lg:grid lg:grid-cols-2 items-center relative overflow-hidden pt-12 lg:pt-0 bg-[#05091A]">
      {/* Background for Desktop Gradient */}
      <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(135deg,#05091A_0%,#1b4332_100%)]"></div>
      
      {/* Glow Effects */}
      <div className="absolute w-[800px] h-[800px] -top-[200px] -left-[200px] bg-[radial-gradient(circle,rgba(45,106,79,0.15)_0%,transparent_60%)] pointer-events-none z-10"></div>

      {/* Character for Mobile (Background) */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/cacador.png"
          alt="Caçador Background"
          fill
          className="object-cover object-top opacity-30 grayscale-[30%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05091A]/80 via-[#05091A]/60 to-[#05091A]"></div>
      </div>

      <div className="relative z-20 px-6 py-10 lg:pl-[max(24px,calc((100vw-1180px)/2+24px))] animate-fade-in text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-blue-dim border border-[rgba(45,106,79,0.3)] rounded-full px-4 py-1.5 text-xs font-semibold text-blue-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-primary animate-blink"></span>
            UM DOS MAIORES GRUPOS DO BRASIL
          </div>
        </div>

        {/* FIX: line-height (leading) adjusted for mobile to prevent overlapping */}
        <h1 className="font-anton text-[clamp(40px,10vw,76px)] leading-[1.15] lg:leading-[1.1] tracking-wider uppercase mb-5">
          EU <span className="text-blue-primary italic">CAÇO</span> OS BUGS,<br className="hidden sm:block" />
          VOCÊ <span className="text-blue-primary underline decoration-wavy underline-offset-4">PEGA</span> OS DESCONTOS.
        </h1>

        <p className="text-lg text-muted-text leading-relaxed max-w-[480px] mb-9 px-2 lg:px-0">
          Receba alertas em tempo real de <strong>bugs de preço, erros de sistema e cupons exclusivos</strong> antes que expirem. Junte-se a milhares de caçadores inteligentes.
        </p>

        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
          <button
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center gap-3 bg-blue-primary hover:bg-[#388e3c] text-white font-bold text-lg lg:text-xl uppercase px-8 lg:px-12 py-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--blue-glow)] active:scale-95 animate-pulse-custom overflow-hidden w-full lg:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <FaWhatsapp className="text-2xl lg:text-3xl relative z-10" />
            <span className="relative z-10">GARANTIR MINHA VAGA</span>
          </button>

          <span className="text-xs text-muted-text tracking-widest uppercase opacity-70">
            Acesso Gratuito • Vagas Limitadas
          </span>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center gap-4">
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-primary bg-navy-secondary -ml-2.5 first:ml-0 flex items-center justify-center overflow-hidden">
                <Image src={`/promos/${i}.jpeg`} alt="Membro" width={40} height={40} className="object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-navy-primary bg-blue-primary -ml-2.5 flex items-center justify-center text-[10px] font-bold">
              ✓
            </div>
          </div>
          <div className="text-sm">
            <strong className="block text-white">Milhares de pessoas economizando</strong>
            <span className="text-muted-text text-xs uppercase tracking-tight">Grupo verificado e livre de spam</span>
          </div>
        </div>
      </div>

      {/* Desktop Character Image */}
      <div className="hidden lg:flex relative h-full items-end justify-end overflow-visible">
        <div className="relative w-[110%] h-[110%] -mr-[10%] -mb-[5%] z-10">
          <Image
            src="/cacador.png"
            alt="Caçador de Promoções"
            fill
            className="object-contain object-right-bottom drop-shadow-[0_0_50px_rgba(45,106,79,0.4)]"
            priority
            sizes="(max-width: 1024px) 0vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};
