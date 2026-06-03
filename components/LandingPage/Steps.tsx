'use client';

import { FaArrowRight, FaBell, FaHandPointer } from 'react-icons/fa';

export const Steps = () => {
  const steps = [
    {
      num: "01",
      title: "Entre no Grupo",
      desc: "Junte-se à nossa comunidade clicando no botão de acesso imediato.",
      icon: <FaHandPointer />,
    },
    {
      num: "02",
      title: "Ative as Notificações",
      desc: "Silencie o grupo se preferir, mas mantenha as notificações ligadas para bugs.",
      icon: <FaBell />,
    },
    {
      num: "03",
      title: "Economize",
      desc: "Receba o link, clique e aproveite o desconto antes que o estoque acabe.",
      icon: <FaArrowRight />,
    }
  ];

  return (
    <section id="how" className="py-14 relative overflow-hidden">
      <div className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(45,106,79,0.07)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center lg:text-left reveal">
          <span className="slabel">Operação</span>
          <h2 className="stitle">Como a Caçada Funciona</h2>
          <p className="text-muted-text text-lg mt-3">Simples, rápido e focado em resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {steps.map((step, index) => (
            <div key={index} className="reveal group bg-card p-9 border border-white/5 rounded-2xl relative overflow-hidden transition-all hover:border-blue-primary/35 hover:-translate-y-2">
              <div className="absolute top-2 right-4 font-anton text-[120px] leading-none text-blue-primary/5 select-none pointer-events-none group-hover:text-blue-primary/10 transition-colors">
                {step.num}
              </div>
              <div className="font-anton text-xs tracking-widest text-blue-primary uppercase mb-4">
                ETAPA {step.num}
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-dim border border-blue-primary/20 flex items-center justify-center mb-5 text-blue-primary text-2xl">
                {step.icon}
              </div>
              <h3 className="font-anton text-[26px] tracking-wide uppercase mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-muted-text leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
