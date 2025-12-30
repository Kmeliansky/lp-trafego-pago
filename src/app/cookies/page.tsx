import Image from "next/image";
import { Open_Sans, Urbanist } from "next/font/google";
import Link from "next/link";


const urbanist = Urbanist({ subsets: ["latin"], weight: "700" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

const fontTitle = urbanist.className;
const fontText = openSans.className;


export default function Privacidade() {
  return (
    <>
     {/* Hero */}
          <div className="min-h-[24vh] w-full bg-[url('/background-hero.svg')] bg-cover bg-center bg-no-repeat font-sans">
            <main className="mx-auto flex min-h-[24vh] max-w-screen-2xl flex-col px-4 py-8">
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
             
            </main>
          </div>

         <section className="bg-white px-4 py-[80px]">
  <div className="mx-auto max-w-screen-md space-y-12">

    <h2 className="text-[32px] font-semibold text-[#364153]">
      Política de Privacidade
    </h2>

    {/* Quem somos */}
    <div className="space-y-4">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Quem somos
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        O endereço do nosso site é https://kangoo.digital. Somos uma empresa especializada em SEO,
        Google Ads, desenvolvimento de sites e marketing digital, estabelecida em Botucatu – SP.
      </p>

      <p className="text-[16px] leading-7 text-zinc-700">
        <strong>Responsável Técnico:</strong> David Pinheiro
        <br />
        <strong>Endereço:</strong> Av. Dr. Vital Brasil, 106, Sala 607 – Jardim Bom Pastor,
        Botucatu – SP – CEP: 18607-660
        <br />
        <strong>Email:</strong> david@kangoo.digital
        <br />
        <strong>Telefone:</strong> (14) 99798-0572
      </p>
    </div>

    {/* Dados coletados */}
    <div className="space-y-6">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Quais dados pessoais coletamos e por quê
      </h3>

      <div className="space-y-3">
        <h4 className="font-semibold text-zinc-800">Comentários</h4>
        <p className="text-[16px] leading-7 text-zinc-700">
          Quando visitantes deixam comentários no site, coletamos os dados exibidos no formulário,
          além do endereço IP e dados do navegador, para ajudar na detecção de spam.
        </p>

        <p className="text-[16px] leading-7 text-zinc-700">
          Uma sequência anonimizada do seu e-mail pode ser enviada ao Gravatar para verificar
          se você utiliza o serviço. A política do Gravatar pode ser acessada em
          https://automattic.com/privacy/.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-zinc-800">Mídia</h4>
        <p className="text-[16px] leading-7 text-zinc-700">
          Imagens enviadas ao site podem conter dados de localização (EXIF GPS).
          Visitantes podem baixar essas imagens e extrair essas informações.
          Evite enviar imagens com dados sensíveis.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-zinc-800">Formulários de contato</h4>
        <p className="text-[16px] leading-7 text-zinc-700">
          Os formulários coletam dados básicos de contato para retorno e relacionamento.
          Esses dados são armazenados em plataformas de terceiros como AWS, Google LLC
          e HubSpot.
        </p>
      </div>
    </div>

    {/* Cookies */}
    <div className="space-y-4">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Cookies
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        Ao deixar um comentário, você pode optar por salvar seu nome, e-mail e site em cookies,
        que duram um ano.
      </p>

      <p className="text-[16px] leading-7 text-zinc-700">
        Cookies temporários são usados para verificar se o navegador aceita cookies.
        Cookies de login duram até duas semanas, e cookies de preferências por um ano.
      </p>
    </div>

    {/* Conteúdo incorporado */}
    <div className="space-y-4">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Conteúdo incorporado de outros sites
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        Artigos podem incluir vídeos, imagens ou outros conteúdos incorporados.
        Esses conteúdos se comportam da mesma forma como se o visitante estivesse
        acessando o site de origem.
      </p>
    </div>

    {/* Análises */}
    <div className="space-y-6">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Análises e rastreamento
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        Utilizamos ferramentas de terceiros para análise de tráfego e comportamento do usuário.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-[16px] text-zinc-700">
        <li>Google Analytics – Google Inc.</li>
        <li>Facebook Ads – Meta Inc.</li>
        <li>Google Ads – Google Inc.</li>
      </ul>
    </div>

    {/* Compartilhamento */}
    <div className="space-y-4">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Com quem partilhamos seus dados
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        Não compartilhamos dados pessoais com terceiros, exceto quando necessário
        para atender interações iniciadas pelo próprio usuário ou exigências legais.
      </p>
    </div>

    {/* Direitos */}
    <div className="space-y-4">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Seus direitos
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais,
        exceto quando a manutenção for exigida por obrigações legais.
      </p>
    </div>

    {/* Atualizações */}
    <div className="space-y-4">
      <h3 className="text-[22px] font-semibold text-[#364153]">
        Atualizações desta política
      </h3>

      <p className="text-[16px] leading-7 text-zinc-700">
        Esta Política de Privacidade pode ser atualizada periodicamente.
        Recomendamos que o usuário consulte esta página regularmente.
      </p>
    </div>

  </div>
</section>
    
    <footer className="bg-[#030712] px-4 py-[60px]">
  <div className="mx-auto max-w-screen-2xl space-y-8 text-center">

    {/* Linha 1 – Menu */}
    <nav className={`${fontText} flex flex-wrap justify-center gap-6 text-[14px] text-white/80`}>
      <Link href="/privacidade" className="transition hover:text-white">
        Política de Privacidade
      </Link>
      <Link href="#" className="transition hover:text-white">
        Termos de uso
      </Link>
      <Link href="#" className="transition hover:text-white">
        Políticas de Cookie
      </Link>
      <Link href="#" className="transition hover:text-white">
        Contato
      </Link>
    </nav>

    {/* Linha 2 – Endereço e CNPJ */}
    <p className={`${fontText} mx-auto max-w-4xl text-[14px] leading-6 text-white/60`}>
      Ed. BHTC - Av. Dr. Vital Brasil, 1060 - Sala 607 - Jardim Bom Pastor, Botucatu - SP, 18607-660 |
      CNPJ: 48464-469454,454
    </p>

    {/* Linha 3 – LGPD */}
    <p className={`${fontText} mx-auto max-w-5xl text-[13px] leading-6 text-white/50`}>
      POLÍTICA DE PRIVACIDADE: A Política de Privacidade foi elaborada em conformidade com a Lei Federal
      n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet), com a Lei Federal n. 13.709, de 14 de
      agosto de 2018 (Lei de Proteção de Dados Pessoais) e com o Regulamento UE n. 2016/679 de 27 de
      abril de 2016 (Regulamento Geral Europeu de Proteção de Dados Pessoais – RGDP), pode ser lida na
      íntegra clicando aqui.
    </p>

  </div>
</footer>
    </>
  );
}