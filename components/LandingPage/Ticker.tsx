'use client';

export const Ticker = () => {
  const items = [
    "100% GRATUITO",
    "O CAÇADOR ESTÁ DE OLHO",
    "VAGAS LIMITADAS",
    "PROMOÇÕES TODO DIA",
    "BUGS DE PREÇO REAIS",
    "ZERO FLOOD",
    "JÁ SÃO MILHARES"
  ];

  return (
    <div id="ticker" className="bg-blue-primary overflow-hidden py-3.5 relative z-10">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-5 font-anton text-white text-lg tracking-widest whitespace-nowrap pr-14 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white/45"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
