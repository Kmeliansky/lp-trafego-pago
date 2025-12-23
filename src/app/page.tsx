import Image from "next/image";
import { Open_Sans, Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: "700" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

const fontTitle = urbanist.className;
const fontText = openSans.className;

const steps = [
  {
    title: "Descoberta",
    description: "Analisamos o seu cenário atual",
    bg: "bg-[#1E6A9E]",
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 3v6" />
        <path d="M5 9h14" />
        <circle cx="12" cy="15" r="4" />
      </svg>
    ),
  },
  {
    title: "Estratégia",
    description: "Organizamos a estratégia",
    bg: "bg-[#0B87B2]",
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    title: "Ação",
    description: "Criamos campanhas, criativos e páginas",
    bg: "bg-[#0DB2B9]",
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
        <path d="M3 21l6-6" />
        <path d="M14 3l7 7-6 6-7-7z" />
      </svg>
    ),
  },
  {
    title: "Acompanhamento",
    description: "Acompanhamos diariamente",
    bg: "bg-[#2DC4A3]",
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 14l3-3 3 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Ajustes",
    description: "Ajustamos sempre que necessário",
    bg: "bg-[#7ED957]",
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];


const challenges = [
  {
    title: "Falta de suporte",
    text: "Sem acesso claro a CRM, automações e ajustes. Você fica perdido sobre o que está funcionando ou não.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Franqueados sem padrão",
    text: "Cada unidade entrega de um jeito. A qualidade varia e o resultado também.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 6h6v6H4zM14 6h6v6h-6zM4 14h6v6H4z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Cancelamento difícil",
    text: "Contratos fechados demais, com multas altas e pouca flexibilidade.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Leads ruins",
    text: "Entram contatos que não têm a menor chance de virar cliente. Você gasta mais tempo filtrando do que vendendo.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M3 3l18 18M10 10a4 4 0 1 0 4 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Contratos abusivos",
    text: "Pontos escondidos, falta de clareza e responsabilidade mal definida.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M6 2h9l5 5v15H6z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Trabalhos não entregues",
    text: "Criativos, páginas, roteiros e automações prometidos no contrato e nunca entregues.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" />
        <path d="M5 3h14v18H5z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Falta de métricas e traqueamento",
    text: "Sem dados claros, você não sabe o que funciona, nem onde ajustar.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 20V10M10 20V4M16 20v-6M22 20H2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Dificuldade com integração de sistemas",
    text: "Ferramentas que não conversam entre si e processos cheios de falhas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M8 7h8M7 12h10M8 17h8" stroke="currentColor" strokeWidth="2" />
        <path d="M3 7h2M19 7h2M3 17h2M19 17h2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Sem clareza com o cliente",
    text: "Sem comunicação ou justificativa das estratégias aplicadas, o cliente não sabe o que está sendo feito nem o por quê.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 4h16v12H7l-3 3z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="min-h-[75vh] w-full bg-[url('/background-hero.svg')] bg-cover bg-center bg-no-repeat font-sans">
        <main className="mx-auto flex min-h-[75vh] max-w-screen-2xl flex-col px-4 py-8">
          {/* Header */}
          <header className="sticky top-4 z-30 mb-12 flex items-center justify-between rounded-[16px] border border-white/20 bg-black/20 px-6 py-5 text-sm text-white backdrop-blur-md">
            <Image
              src="/logo-kangoo.svg"
              alt="Logo Kangoo"
              width={125}
              height={34}
              priority
            />

            <nav className={`${fontTitle} hidden gap-6 text-[14px] tracking-[0.06em] md:flex`}>
              {["Início", "Desafio", "Solução", "Depoimentos", "Como funciona"].map((item) => (
                <a key={item} href="#" className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>

            <button className={`${fontTitle} rounded-full border border-white/30 px-5 py-2 text-[14px] tracking-[0.06em] transition hover:bg-white/10`}>
              Diferenciais
            </button>
          </header>

          {/* Hero content */}
          <section className="grid flex-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className={`text-6xl leading-[44px] text-white leading-[64px]`}>
                Cansado de investir em anúncios e não ver resultado de verdade?
              </h1>
              <p className={`${fontText} text-[17px] leading-[26px] text-zinc-300`}>
                Muitos negócios perdem dinheiro com campanhas sem suporte, leads ruins e contratos presos.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className={`${fontTitle} rounded-full bg-[#F8CB1B] px-6 py-3 text-[14px] text-black transition hover:bg-[#e1b300]`}>
                  Falar com especialista
                </button>
                <button className={`${fontTitle} rounded-full border border-white/30 px-6 py-3 text-[14px] text-white transition hover:bg-white/10`}>
                  Nossas Soluções
                </button>
              </div>
            </div>

            <Image
              src="/homem-com-dashboard.svg"
              alt="Profissional analisando dashboard"
              width={960}
              height={800}
              className="mx-auto w-full max-w-2xl"
              priority
            />
          </section>
        </main>
      </div>

      {/* Challenges */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className={`${fontTitle} mb-12 text-center text-5xl text-[#364153] leading-[64px]`}>
            Os desafios que mais derrubam<br />quem investe em Tráfego Pago
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {challenges.map((card, index) => (
              <div key={index} className="rounded-[12px] border border-zinc-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
                  {card.icon}
                </div>
                <h3 className={`${fontTitle} mb-2 text-[24px] text-zinc-900`}>
                  {card.title}
                </h3>
                <p className={`${fontText} text-sm leading-6 text-zinc-600`}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences */}
        <section className="bg-[#0C0C0C] px-4 py-[80px]">
  <div className="mx-auto max-w-screen-2xl space-y-16">
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div className="space-y-6">
        <h2 className={`${fontTitle} text-5xl text-white leading-[64px]`}>
          Ignorar esses sinais só aumentam o prejuízo
        </h2>
        <p className={`${fontText} text-[17px] leading-[26px] text-zinc-300`}>
          Quando você continua com campanhas mal acompanhadas, o custo por lead sobe, as vendas caem e o investimento vira um peso no orçamento. Sem clareza, é comum acreditar que o problema está no produto, quando na verdade está na gestão do tráfego.
        </p>
      </div>

      <div className="flex h-[320px] w-full items-center justify-center rounded-[16px] overflow-hidden">
        <Image
          src="/mulher-desapontada-com-trafego-pago.webp"
          alt="Profissional analisando dashboard"
          width={960}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          text: "Gastar meses sem entender por que o resultado não chega",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          text: "Parar de anunciar por frustração, mesmo tendo potencial de crescer",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
              <path d="M12 4v16" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          text: "Perder oportunidades por falta de ajustes rápidos",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M5 12h7" stroke="currentColor" strokeWidth="2" />
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          text: "Ficar preso em contratos que não entregam nada",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <rect x="6" y="3" width="12" height="18" stroke="currentColor" strokeWidth="2" />
              <path d="M9 9h6M9 13h6" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          text: "Uso incorreto das ferramentas de publicidade.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M4 20V10M10 20V4M16 20v-8" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          text: "Cegueira aos insights de mercado.",
          icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 rounded-[16px] bg-[#141414] p-5 text-zinc-400"
        >
          {item.icon}

          <h3 className={`${fontTitle} text-[16px] font-semibold text-white`}>
            {item.text}
          </h3>
        </div>
      ))}
    </div>

     {/* h2 final da seção */}
    <h2 className={`${fontTitle}  text-center text-5xl leading-tight text-white`}>
  A realidade é simples:{" "}
  <span className="bg-gradient-to-r from-[#08399B] via-[#0E44A1] via-[#2F80C2] via-[#49AFDC] via-[#5CD2EF] via-[#68E6FB] to-[#6CEEFF] bg-clip-text text-transparent">
    tráfego pago funciona, mas
  </span>{" "}
  só funciona quando é bem acompanhado.
</h2>


  </div>
</section>

      {/* Solução */}
      <section className="bg-white px-4 py-[80px]">
  <div className="mx-auto grid max-w-screen-2xl gap-12 md:grid-cols-2">
    
    {/* Coluna esquerda */}
    <div
      className="flex h-full flex-col justify-between rounded-[20px] p-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/background-solucao.webp')",
      }}
    >
      <div className="space-y-5 max-w-md">
        <h2 className={`${fontTitle} text-5xl text-white leading-[64px]`}>
          A Kangoo Digital cuida do seu tráfego com clareza, ritmo e responsabilidade
        </h2>

        <p className="text-lg leading-relaxed text-white/80">
          Com mais de seis anos de experiência, trabalhamos com foco em resultado real e suporte direto,
          com total envolvimento no seu negócio para correta operação das campanhas.
          Entregamos acompanhamento simples, processos claros e campanhas criadas para conectar você
          a quem realmente tem chance de comprar.
        </p>
      </div>

      <button className={`${fontTitle} mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#F8CB1B] px-6 py-3 text-[14px] font-medium text-black transition hover:bg-[#e1b300]`}>
        Falar com especialista
      </button>
    </div>

    {/* Coluna direita */}
    <div className="grid gap-8 md:grid-cols-2">
      {[
        {
          title: "Suporte",
          text: "Atendimento ágil com resposta direta de quem resolve. Sem chatbot e filas desnecessárias.",
        },
        {
          title: "Operação Única",
          text: "Não temos franquias. Tudo é feito pela mesma equipe, com padrão único e revisões constantes.",
        },
        {
          title: "Contrato simplificado",
          text: "Sem multas e taxa de cancelamento. Você fica porque tem resultado, não porque está preso.",
        },
        {
          title: "Leads qualificados",
          text: "Buscamos contatos alinhados com o seu negócio. Foco em qualidade, não em inflar números.",
        },
        {
          title: "Recursos tecnológicos",
          text: "Implementação de traqueamento e integração com seu CRM ou sistema de leads.",
        },
        {
          title: "Entrega no prazo",
          text: "Calendários simples, entregas pontuais e projetos completos.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-[16px] border border-zinc-200 bg-white p-6"
        >
          <h3 className={`${fontTitle} mb-2 text-2xl  text-zinc-900`}>
            {item.title}
          </h3>
          <p className={`${fontText} text-sm leading-6 text-zinc-600`}>
            {item.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

<section className="w-full bg-[#F3F4F6] px-4 py-[80px]">
  <div className="mx-auto max-w-screen-2xl">

    <h2 className={`${fontTitle} mb-16 text-center text-5xl text-[#364153]`}>
      Nossos resultados
    </h2>

    <div className="grid gap-[40px] md:grid-cols-3">

      <div className="md:col-span-2 min-h-[210px] rounded-[12px] border-[8px] border-white bg-[#F9FAFB] p-8 flex flex-col justify-end shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <h3 className={`${fontTitle} mb-3 text-[20px] text-zinc-900`}>
          Aumento consistente de leads qualificados
        </h3>
        <p className={`${fontText} text-[15px] leading-6 text-zinc-700`}>
          Reestruturação completa das campanhas e do funil, focando em público certo,
          criativos claros e acompanhamento semanal dos dados.
        </p>
      </div>

      <div className="min-h-[210px] rounded-[12px] border-[8px] border-white bg-[#F9FAFB] p-8 flex flex-col justify-end shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <h3 className={`${fontTitle} mb-3 text-[20px] text-zinc-900`}>
          Redução de custo por lead
        </h3>
        <p className={`${fontText} text-[15px] leading-6 text-zinc-700`}>
          Ajustes finos em segmentação e mensagens eliminaram desperdício de verba.
        </p>
      </div>

      <div className="min-h-[210px] rounded-[12px] border-[8px] border-white bg-[#F9FAFB] p-8 flex flex-col justify-end shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <h3 className={`${fontTitle} mb-3 text-[20px] text-zinc-900`}>
          Mais previsibilidade
        </h3>
        <p className={`${fontText} text-[15px] leading-6 text-zinc-700`}>
          Dados claros permitiram decisões rápidas e melhor controle do investimento.
        </p>
      </div>

      <div className="md:col-span-2 min-h-[210px] rounded-[12px] border-[8px] border-white bg-[#F9FAFB] p-8 flex flex-col justify-end shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <h3 className={`${fontTitle} mb-3 text-[20px] text-zinc-900`}>
          Crescimento com estrutura e acompanhamento
        </h3>
        <p className={`${fontText} text-[15px] leading-6 text-zinc-700`}>
          Operação organizada, métricas bem definidas e suporte próximo garantiram
          crescimento sustentável sem decisões no escuro.
        </p>
      </div>
    </div>
  </div>
  <div className="mt-[60px] flex justify-center">
  <button className={`${fontTitle} inline-flex items-center gap-2 rounded-full bg-[#F8CB1B] px-6 py-3 text-[14px] font-medium text-black transition hover:bg-[#e1b300]`}>
    Quero resultados assim também
  </button>
</div>

</section>

<section className="bg-white px-4 py-[80px]">
  <div className="mx-auto max-w-screen-2xl">
    <h2 className={`${fontTitle} mb-16 text-center text-5xl text-zinc-900`}>
      Como funciona o nosso trabalho
    </h2>

    <div className="grid gap-12 md:grid-cols-5">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div
            className={`relative flex h-20 w-20 items-center justify-center rounded-full ${step.bg}`}
          >
            {step.icon}

            <span className="absolute -bottom-3 h-4 w-4 rotate-45 bg-inherit" />
          </div>

          <div
            className={`mt-6 w-full rounded-lg px-4 py-3 text-white ${step.bg}`}
          >
            <h3 className="text-[16px] font-semibold">
              {step.title}
            </h3>
          </div>

          <p className="mt-3 max-w-[180px] text-[14px] text-zinc-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="px-4 py-[80px]">
  <div className="mx-auto max-w-screen-2xl">
    <div
      className="rounded-[16px] bg-cover bg-center px-8 py-[80px] text-center md:px-16"
      style={{
        backgroundImage: "url('/background-hero.svg')",
      }}
    >
      <h2 className={`${fontTitle} mx-auto max-w-3xl text-5xl leading-[64px] text-white`}>
        O Melhor momento para reativar as suas campanhas foi ontem, o segundo é hoje
      </h2>

      <p className={`${fontText} mx-auto mt-6 max-w-2xl text-[17px] leading-[26px] text-white/90`}>
        Agende uma reunião online ou presencial para saber como a Kangoo Digital vai elevar o nível da sua empresa com o nosso ecossistema voltado para pequenos, médias e grandes empresas
      </p>

      <div className="mt-10 flex justify-center">
        <button
          className={`${fontTitle} inline-flex items-center gap-2 rounded-full bg-[#F8CB1B] px-6 py-3 text-[14px] font-medium text-black transition hover:bg-[#e1b300]`}
        >
          Fale com especialista
        </button>
      </div>
    </div>
  </div>
</section>



    </>
  );
}
