'use client';

import Image from 'next/image';

export const Comparison = () => {
  return (
    <section id="procons" className="py-14 bg-navy-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(45,106,79,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-9 reveal">
          <span className="slabel">A Diferença</span>
          <h2 className="stitle">Por que o Caçador?</h2>
          <p className="text-muted-text text-lg mt-3">Pare de perder dinheiro e comece a caçar como um profissional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* SEM MIM */}
          <div className="reveal bg-navy-primary p-9 border border-white/5 rounded-2xl relative overflow-hidden transition-colors hover:border-white/10">
            <div className="h-[220px] mb-5 flex items-center justify-center grayscale opacity-40">
              <Image src="/cacador.png" alt="Sem o Caçador" width={180} height={220} className="object-contain" />
            </div>
            <div className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-full px-5 py-2 text-sm font-bold tracking-widest text-center mb-6 uppercase">
              ✖ SEM O CAÇADOR
            </div>
            <ul className="space-y-4">
              {["Paga o preço cheio em quase tudo", "Nunca recebe alertas de erros de sistema", "Perde horas em sites de cupons falsos", "Fica de fora das melhores promoções do ano"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-text text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-[10px]">✖</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMIGO */}
          <div className="reveal bg-card p-9 border border-blue-primary/20 rounded-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(45,106,79,0.15)] ring-2 ring-blue-primary/10">
            <div className="h-[220px] mb-5 flex items-center justify-center">
              <Image src="/cacador.png" alt="Com o Caçador" width={180} height={220} className="object-contain drop-shadow-[0_0_20px_rgba(45,106,79,0.4)]" />
            </div>
            <div className="bg-blue-primary text-white rounded-full px-5 py-2 text-sm font-bold tracking-widest text-center mb-6 uppercase">
              ✓ COM O CAÇADOR
            </div>
            <ul className="space-y-4">
              {["Paga sempre o menor preço histórico", "Alertas de erros e bugs em segundos", "Cupons validados que realmente funcionam", "Comunidade ativa com milhares de pessoas"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm">
                  <span className="w-5 h-5 rounded-full bg-blue-primary text-white flex items-center justify-center text-[10px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
