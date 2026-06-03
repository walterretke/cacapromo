'use client';

export const Logos = () => {
  const stores = [
    "Amazon", "Shopee", "Mercado Livre", "Magalu", "Samsung", "Nike", "Adidas", "Casas Bahia", "AliExpress"
  ];

  return (
    <section id="logos" className="py-6 border-b border-white/5 overflow-hidden">
      <div className="text-center text-[15px] font-bold tracking-widest uppercase text-muted-text mb-4">
        Caçando as melhores ofertas nos gigantes do varejo
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-logos hover:[animation-play-state:paused] items-center h-10">
          {[...stores, ...stores].map((store, index) => (
            <div key={index} className="px-7 font-anton text-2xl text-white/20 whitespace-nowrap transition-colors cursor-default select-none hover:text-white/60 uppercase">
              {store}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
