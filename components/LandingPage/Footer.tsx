'use client';

export const Footer = () => {
  return (
    <footer className="py-10 bg-navy-primary text-center text-muted-text text-sm border-t border-white/5">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} Caçador de Promoções. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center gap-6 text-xs uppercase tracking-widest opacity-50">
          <a href="/politica-de-privacidade" className="hover:text-blue-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-blue-primary transition-colors">Termos de Uso</a>
        </div>
        <p className="mt-8 text-[10px] opacity-30 max-w-xl mx-auto uppercase leading-relaxed">
          Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};
