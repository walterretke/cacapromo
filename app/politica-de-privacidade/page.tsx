import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-8 hover:underline">
          <FaArrowLeft />
          Voltar para o Início
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p>
              A sua privacidade é importante para nós. É política do <strong>Caça Promo</strong> respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site Caça Promo.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Coleta de Dados</h2>
            <p>
              O Caça Promo é uma página informativa que visa facilitar o acesso a grupos de ofertas em plataformas de terceiros (WhatsApp e Telegram). 
              <strong> Não coletamos, armazenamos ou processamos dados pessoais</strong> dos usuários que visitam este site.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Links para Terceiros</h2>
            <p>
              Nosso site contém links para grupos externos (WhatsApp e Telegram) que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade. 
              Ao clicar nos botões de acesso, você será redirecionado para essas plataformas por sua própria vontade.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Cookies</h2>
            <p>
              Utilizamos apenas cookies essenciais para o funcionamento básico do site e, eventualmente, ferramentas de análise de tráfego anônimas que não identificam o usuário individualmente.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Consentimento</h2>
            <p>
              O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados e informações, entre em contato conosco.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">5. Compromisso do Usuário</h2>
            <p>
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Caça Promo oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
              <li>Não causar danos aos sistemas físicos e lógicos do Caça Promo ou de seus fornecedores.</li>
            </ul>

            <div className="pt-8 border-t border-slate-100 text-sm text-slate-400">
              Esta política é efetiva a partir de {new Date().toLocaleDateString('pt-BR')}.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
