'use client';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rafael T.",
      since: "Membro desde 2024",
      quote: "O grupo do Caçador mudou minha relação com compras online. Nunca mais pago preço cheio em nada. Sério.",
      bg: "#1B4FD8",
    },
    {
      name: "Ana P.",
      since: "Membro desde 2023",
      quote: "Indiquei pra toda minha família. Minha mãe já comprou geladeira, liquidificador e roupa de uma semana pro outro.",
      bg: "#0D7A5F",
    },
    {
      name: "Marcos V.",
      since: "Membro desde 2024",
      quote: "Os bugs de preço que esse cara manda são inacreditáveis. Comprei um monitor de 2k por 800 reais mês passado.",
      bg: "#C2410C",
    }
  ];

  return (
    <section id="testi" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="slabel">Depoimentos</span>
          <h2 className="stitle">Quem Caça, Aprova</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal bg-card p-8 rounded-2xl border border-white/5 transition-all hover:border-blue-primary/20 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white uppercase"
                  style={{ backgroundColor: t.bg }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-muted-text uppercase tracking-wider">{t.since}</div>
                </div>
                <div className="ml-auto text-yellow-500 text-sm">★★★★★</div>
              </div>
              <div className="w-full h-px bg-white/5 mb-6"></div>
              <p className="text-muted-text italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
