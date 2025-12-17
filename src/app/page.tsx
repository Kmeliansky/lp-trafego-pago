import Image from "next/image";
import { Open_Sans, Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: "700" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

const fontTitle = urbanist.className;
const fontText = openSans.className;

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
              <h1 className={`${fontTitle} text-[37px] leading-[44px] text-white`}>
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
          <h2 className={`${fontTitle} mb-12 text-center text-[32px] text-[#364153]`}>
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
    </>
  );
}
