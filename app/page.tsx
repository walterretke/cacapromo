"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegramPlane, FaAmazon, FaClock, FaUsers, FaExclamationTriangle } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

export default function Home() {
  const whatsappUrl = "https://chat.whatsapp.com/HwCYtgrMAL2IfKFHRbvxJr?mode=gi_t";
  const telegramUrl = "https://t.me/cacapromo_br";

  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 14, seconds: 59 }; // Reset for demo purposes
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const trackClick = (platform: 'WhatsApp' | 'Telegram') => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', `Click${platform}`, { platform });
      window.fbq('track', 'Contact', { content_name: platform });
    }
  };

  const features = [
    {
      title: "Monitoramento 24/7",
      description: "Nossos sistemas rastreiam variações de preço a cada segundo em centenas de lojas parceiras.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Verificação Humana",
      description: "Nossa equipe valida cada oferta para garantir que o desconto é real e a loja é 100% segura.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Foco em Qualidade",
      description: "Enviamos apenas as melhores oportunidades do dia, evitando notificações desnecessárias.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Ricardo S.",
      text: "Consegui comprar meu S24 Ultra com o menor preço que já vi. O grupo é direto ao ponto.",
      role: "Membro há 6 meses"
    },
    {
      name: "Mariana L.",
      text: "As ofertas da Shopee e Amazon que eles mandam são imbatíveis. Já economizei muito.",
      role: "Membro há 1 ano"
    }
  ];

  const comparisons = [
    {
      name: "Samsung Galaxy S24 Ultra",
      marketPrice: "R$ 7.999,00",
      groupPrice: "R$ 5.840,10",
      savings: "R$ 2.158,90",
      image: "https://m.media-amazon.com/images/I/71Yv8rX1-YL._AC_SL1500_.jpg",
    },
    {
      name: "PlayStation 5 Slim + 2 Jogos",
      marketPrice: "R$ 4.299,00",
      groupPrice: "R$ 3.149,00",
      savings: "R$ 1.150,00",
      image: "https://m.media-amazon.com/images/I/51S7ZzR9vBL._AC_SL1200_.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 antialiased relative overflow-x-hidden">
      {/* Urgency Banner */}
      <div className="bg-indigo-600 text-white py-2 px-4 text-center text-xs md:text-sm font-bold relative z-50">
        <div className="flex items-center justify-center gap-4">
          <span className="flex items-center gap-1"><FaClock className="animate-pulse" /> OFERTA POR TEMPO LIMITADO</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-1 uppercase tracking-wider"><FaUsers /> Grupo em Alta Demanda</span>
        </div>
      </div>

      {/* Apple-style Blurred Background Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] bg-pink-100/30 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] h-[60%] bg-indigo-50/20 rounded-full blur-[180px]"></div>
      </div>

      <main className="flex flex-col items-center relative z-10">
        {/* High-Impact Hero Section */}
        <section className="w-full pt-12 pb-20 px-4 flex flex-col items-center text-center bg-white/70 backdrop-blur-xl border-b border-slate-100">
          {/* Professional Circular Logo */}
          <div className="mb-10 relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-sm ring-1 ring-slate-200 border-4 border-white bg-white flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt="Caça Promo Logo"
                width={120}
                height={120}
                className="w-full h-full object-cover p-1"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-full shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 11.37c1.513-.332 3.026-.367 4.53-.105 1.423.248 2.502 1.378 2.502 2.822v.163c0 .138.113.25.25.25h1.1a.25.25 0 00.25-.25v-.163c0-1.444 1.079-2.574 2.502-2.822 1.504-.262 3.017-.227 4.53.105a.25.25 0 00.301-.242l-.02-1.326a.25.25 0 00-.25-.246h-.001c-1.487 0-2.895-.591-3.92-1.616l-.001-.001c-1.025-1.025-1.616-2.433-1.616-3.92v-.001a.25.25 0 00-.246-.25L10.334 3a.25.25 0 00-.242.301c.332 1.513.367 3.026.105 4.53-.248 1.423-1.378 2.502-2.822 2.502h-.163a.25.25 0 00-.25.25v1.1c0 .138.113.25.25.25h.163c1.444 0 2.574 1.079 2.822 2.502.262 1.504.227 3.017-.105 4.53a.25.25 0 00.242.301l1.326-.02a.25.25 0 00.246-.25v-.001c0-1.487.591-2.895 1.616-3.92l.001-.001c1.025-1.025 2.433-1.616 3.92-1.616h.001a.25.25 0 00.25-.246l.02-1.326a.25.25 0 00-.301-.242z" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 max-w-3xl leading-tight">
            Pare de queimar dinheiro <br/>
            <span className="text-indigo-600">e compre com inteligência.</span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl mb-6 max-w-xl mx-auto leading-relaxed">
            Junte-se a <span className="font-bold text-indigo-600">milhares de pessoas</span> que recebem as melhores ofertas verificadas, direto no celular.
          </p>

          {/* Price Anchoring & Urgency Triggers */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-slate-400 line-through text-lg">R$ 97,00/mês</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold text-sm animate-bounce">GRÁTIS HOJE</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-1 text-rose-600 font-bold"><FaExclamationTriangle className="w-3 h-3" /> Vagas Limitadas</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaClock /> Expira em {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </div>
          </div>

          {/* Secure CTAs */}
          <div className="flex flex-col gap-4 w-full max-w-sm px-4 mb-10">
            <a 
              href={whatsappUrl} 
              target="_blank"
              onClick={() => trackClick('WhatsApp')}
              className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-md active:transform active:scale-95 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
              <FaWhatsapp className="w-6 h-6" />
              <span>Acessar Grupo no WhatsApp</span>
            </a>
            
            <a 
              href={telegramUrl} 
              target="_blank"
              onClick={() => trackClick('Telegram')}
              className="flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all shadow-md active:transform active:scale-95 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
              <FaTelegramPlane className="w-6 h-6" />
              <span>Acessar Canal no Telegram</span>
            </a>
          </div>

          {/* Minimalist Promo Carousel with Infinite Auto-Scroll */}
          <div className="w-full relative max-w-lg mx-auto overflow-hidden mb-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-4 text-center">Exemplos de ofertas recentes</p>
            
            <div className="relative">
              {/* Left Gradient Fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              <Marquee 
                speed={30} 
                gradient={false} 
                pauseOnHover={true}
                className="py-2"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="mx-3 w-44 md:w-56 aspect-[9/16] relative rounded-xl overflow-hidden border border-slate-100 opacity-90 hover:opacity-100 transition-opacity duration-500 shadow-sm bg-slate-50">
                    <Image
                      src={`/promos/${num}.jpeg`}
                      alt={`Exemplo ${num}`}
                      fill
                      unoptimized={true}
                      className="object-contain"
                      priority={num <= 3}
                    />
                  </div>
                ))}
              </Marquee>

              {/* Right Gradient Fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Partners Section - Authority Trigger */}
          <div className="w-full max-w-lg mx-auto mt-8 border-t border-slate-50 pt-8">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-6 text-center">Monitoramos as melhores lojas</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 px-4 grayscale opacity-40">
              <div className="flex items-center gap-2">
                <FaAmazon className="w-5 h-5" />
                <span className="text-sm font-bold tracking-tighter text-slate-600">Amazon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-black">M</span>
                </div>
                <span className="text-sm font-bold tracking-tighter text-slate-600">Mercado Livre</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-slate-600 rounded-sm flex items-center justify-center">
                  <span className="text-[10px] text-white font-black italic">M</span>
                </div>
                <span className="text-sm font-bold tracking-tighter text-slate-600">Magalu</span>
              </div>
              <div className="flex items-center gap-2">
                <SiShopee className="w-5 h-5" />
                <span className="text-sm font-bold tracking-tighter text-slate-600">Shopee</span>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm font-medium flex items-center gap-2 mt-10">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            Acesso 100% gratuito e seguro
          </p>
        </section>

        {/* Why Trust Us - Features */}
        <section className="w-full py-20 px-4 bg-white/40 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-lg rounded-[32px] border border-white/50 shadow-sm">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Section - Comparisons */}
        <section className="w-full py-20 px-4 bg-white/70 backdrop-blur-xl border-y border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparência nos Descontos</h2>
              <p className="text-slate-500">Comparamos os preços atuais com o histórico real do mercado.</p>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/80 backdrop-blur-2xl rounded-3xl border border-white shadow-sm">
                  <div className="w-32 h-32 relative flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
                      <span className="text-slate-400">Varejo: <span className="line-through">{item.marketPrice}</span></span>
                      <span className="text-emerald-600">No Grupo: <span className="font-bold">{item.groupPrice}</span></span>
                    </div>
                  </div>
                  <div className="bg-white/90 px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0">
                    <span className="block text-xs text-slate-400 font-bold uppercase mb-1">Economia Real</span>
                    <span className="text-2xl font-bold text-indigo-600">{item.savings}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Testimonials */}
        <section className="w-full py-16 px-4 bg-white/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">O que dizem nossos membros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-sm">
                  <p className="text-slate-600 italic mb-6">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step: Cognitive Ease */}
        <section className="w-full py-20 px-4 bg-white/80 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Economizar nunca foi tão simples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Escolha seu Canal", desc: "Entre no WhatsApp ou Telegram pelos botões oficiais acima." },
                { step: "02", title: "Receba as Ofertas", desc: "Nossa curadoria envia apenas o que é oportunidade real e verificada." },
                { step: "03", title: "Compre e Economize", desc: "Clique no link, use o cupom e garanta o menor preço do mercado." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/50 flex flex-col items-center text-center shadow-sm">
                  <span className="text-5xl font-black text-indigo-100 absolute top-4 right-6">{item.step}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-slate-600 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ: Objection Handling */}
        <section className="w-full py-20 px-4 bg-white/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "É realmente gratuito?", a: "Sim, 100% gratuito. Não cobramos mensalidade nem taxas para você participar dos nossos grupos de ofertas." },
                { q: "Como vocês ganham dinheiro?", a: "Algumas lojas nos pagam uma pequena comissão quando você compra através dos nossos links, sem custo adicional para você." },
                { q: "É seguro clicar nos links?", a: "Sim. Todos os links são verificados pela nossa equipe e direcionam para lojas oficiais e confiáveis (Amazon, Magalu, Mercado Livre, etc)." },
                { q: "Vou receber muito spam?", a: "Não. Focamos em qualidade, não em quantidade. Enviamos apenas as melhores promoções do dia para não lotar seu celular." }
              ].map((item, i) => (
                <details key={i} className="group bg-white/80 backdrop-blur-xl rounded-2xl border border-white p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
                  <summary className="flex items-center justify-between font-bold text-slate-900 list-none">
                    {item.q}
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Grand Finale: The Final Push */}
        <section className="w-full py-24 px-4 bg-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-8 animate-pulse border border-white/20 uppercase tracking-widest">
              ⚡ Acesso sujeito a disponibilidade
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Pare de queimar dinheiro <br/> 
              <span className="text-emerald-400">e comece a comprar com inteligência.</span>
            </h2>
            
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-200 line-through text-xl">R$ 97,00/mês</span>
                <span className="bg-emerald-400 text-indigo-900 px-4 py-1.5 rounded-full font-black text-lg">GRÁTIS HOJE</span>
              </div>
              <p className="text-indigo-100 text-lg opacity-80">
                A oferta expira em <span className="font-bold text-white">{timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a 
                href={whatsappUrl} 
                onClick={() => trackClick('WhatsApp')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-900/20 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
                <FaWhatsapp className="w-6 h-6" />
                Quero o WhatsApp
              </a>
              <a 
                href={telegramUrl} 
                onClick={() => trackClick('Telegram')}
                className="bg-white hover:bg-slate-100 text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-900/20 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-indigo-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
                <FaTelegramPlane className="w-6 h-6" />
                Quero o Telegram
              </a>
            </div>
            
            <p className="text-indigo-200 text-sm font-medium flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Acesso gratuito garantido
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-16 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <Image
            src="/Logo.png"
            alt="Caça Promo Logo"
            width={60}
            height={60}
            className="mb-8 rounded-full grayscale opacity-50"
          />
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-medium text-slate-400">
            <Link href="/politica-de-privacidade" className="hover:text-indigo-600 transition">Privacidade</Link>
          </div>
          <p className="text-[10px] text-slate-300 text-center leading-relaxed max-w-2xl italic">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os preços e ofertas são de responsabilidade das lojas parceiras e podem sofrer alteração sem aviso prévio.
          </p>
        </div>
      </footer>
    </div>
  );
}
