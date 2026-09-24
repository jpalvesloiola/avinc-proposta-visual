import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const projectImages = {
  climate:
    "https://static.wixstatic.com/media/985c3a_6a944e682e314c01a6467eba8a5ac89f~mv2.jpg/v1/crop/x_477%2Cy_0%2Cw_3047%2Ch_2250/fill/w_900%2Ch_650%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/20231019_140702.jpg",
  schools:
    "https://static.wixstatic.com/media/11062b_c4b88c75c4604f589d8e85baf37f9e0e~mv2.jpeg/v1/crop/x_243%2Cy_0%2Cw_4441%2Ch_3280/fill/w_900%2Ch_650%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/Secret%C3%A1rias%20da%20escola%20prim%C3%A1ria.jpeg",
  water:
    "https://static.wixstatic.com/media/56e0c8_1e4753b7c1064866a5897b1d10918033~mv2.jpg/v1/crop/x_16%2Cy_0%2Cw_1048%2Ch_774/fill/w_900%2Ch_650%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/Fr3mLF_WwAIW_0y_edited.jpg",
};

const pillars = [
  {
    number: "01",
    title: "Educação socioambiental",
    text: "Conhecimento acessível para aproximar escolas, educadores e comunidades da biodiversidade do Cerrado.",
  },
  {
    number: "02",
    title: "Incidência política",
    text: "Participação pública e apartidária para fortalecer políticas que protejam o bioma e seus povos.",
  },
  {
    number: "03",
    title: "Mobilização de juventudes",
    text: "Formação de jovens cerratenses para ocupar espaços de decisão e construir soluções coletivas.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero" aria-labelledby="home-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">Organização socioambiental · Cerrado</p>
            <h1 id="home-title">O Cerrado vivo começa com gente mobilizada.</h1>
            <p className="hero-lead">
              Educação, participação social e políticas públicas para proteger
              a savana mais biodiversa do planeta.
            </p>
            <div className="button-row">
              <Link className="button button-sun" href="/projetos">
                Conheça nossos projetos <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost-light" href="/sobre">
                Entenda nossa atuação
              </Link>
            </div>
          </div>
          <div className="hero-caption">
            <span className="caption-dot" aria-hidden="true" />
            Pegadas no chão do Cerrado · acervo AVINC
          </div>
        </section>

        <section className="intro-band section-pad-sm">
          <div className="container intro-grid">
            <p className="eyebrow">Por que existimos</p>
            <div>
              <h2>O Cerrado não é vazio. É território, água, cultura e vida.</h2>
              <p className="large-copy">
                A AVINC nasceu da inquietação de jovens cerratenses diante da
                degradação do bioma. Trabalhamos para transformar conhecimento
                em participação e participação em proteção.
              </p>
              <Link className="text-link" href="/sobre">
                Conheça a história da AVINC <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-pad" aria-labelledby="pillars-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Como atuamos</p>
                <h2 id="pillars-title">Três caminhos.<br />Uma mesma missão.</h2>
              </div>
              <p>
                A atuação institucional aparece em blocos curtos e comparáveis,
                substituindo parágrafos extensos por uma leitura rápida.
              </p>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article className="pillar-card" key={pillar.number}>
                  <span className="card-number">{pillar.number}</span>
                  <div className="pillar-mark" aria-hidden="true" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad projects-home" aria-labelledby="projects-home-title">
          <div className="container">
            <div className="section-heading row-heading">
              <div>
                <p className="eyebrow eyebrow-light">Projetos em destaque</p>
                <h2 id="projects-home-title">Atuação que deixa evidências.</h2>
              </div>
              <Link className="button button-outline-light" href="/projetos">
                Ver todos os projetos
              </Link>
            </div>

            <div className="feature-project">
              <div className="feature-project-image">
                <img
                  alt="Paisagem do Cerrado registrada durante atividade da AVINC"
                  src={projectImages.climate}
                />
                <span className="status-pill status-active">Em andamento</span>
              </div>
              <div className="feature-project-copy">
                <p className="project-meta">Jornalismo ambiental · Clima</p>
                <h3>Faça chuva ou faça sol, meu Cerrado já está vulnerável</h3>
                <p>
                  Série de reportagens que mapeia vulnerabilidades ambientais e
                  climáticas nos estados cerratenses e traduz dados em informação
                  pública.
                </p>
                <div className="mini-facts" aria-label="Informações do projeto">
                  <span><b>Território</b> Cerrado brasileiro</span>
                  <span><b>Formato</b> Série de reportagens</span>
                </div>
                <Link className="text-link text-link-light" href="/projetos/faca-chuva-ou-faca-sol">
                  Ver página-modelo do projeto <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="mini-project-grid">
              <article className="mini-project-card">
                <img alt="Atividade de educação em uma escola" src={projectImages.schools} />
                <div>
                  <p className="project-meta">Educação · Incidência</p>
                  <h3>Cerrado nas Escolas</h3>
                  <p>Semana do Cerrado nos calendários das redes de ensino.</p>
                </div>
              </article>
              <article className="mini-project-card">
                <img alt="Delegação jovem em atividade sobre a agenda da água" src={projectImages.water} />
                <div>
                  <p className="project-meta">Juventudes · Água</p>
                  <h3>Conferência Internacional de Água</h3>
                  <p>Jovens do Cerrado conectados ao debate internacional.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad proof-section" aria-labelledby="proof-title">
          <div className="container proof-grid">
            <div>
              <p className="eyebrow">Impacto e credibilidade</p>
              <h2 id="proof-title">Resultados que o site precisa tornar visíveis.</h2>
              <p className="large-copy">
                O novo sistema conecta cada resultado ao projeto, ao período e
                aos parceiros responsáveis — sem números soltos.
              </p>
              <p className="validation-note">Amostra com dados já publicados; confirmar atualização com a AVINC.</p>
            </div>
            <div className="metric-grid">
              <article>
                <strong>100+</strong>
                <span>participantes em eventos sobre água</span>
              </article>
              <article>
                <strong>19</strong>
                <span>estados representados em congresso parceiro</span>
              </article>
              <article>
                <strong>300+</strong>
                <span>visualizações em ação educativa</span>
              </article>
              <article className="metric-text">
                <span>Resultados sempre ligados à fonte e à data.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad partner-section" aria-labelledby="partner-title">
          <div className="container">
            <div className="section-heading split-heading compact-heading">
              <div>
                <p className="eyebrow">Construção coletiva</p>
                <h2 id="partner-title">Em rede pelo Cerrado.</h2>
              </div>
              <p>
                Parceiros de projeto e redes de participação passam a ter
                categorias diferentes, eliminando a ambiguidade atual.
              </p>
            </div>
            <div className="partner-marquee" aria-label="Exemplos de redes e parceiros">
              <span>Rede Cerrado</span>
              <span>Movimento Escazú Brasil</span>
              <span>Engajamundo</span>
              <span>Observatório do Código Florestal</span>
              <span>GYBN</span>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">Faça parte desta história</p>
              <h2>Proteger o Cerrado é uma ação coletiva.</h2>
            </div>
            <div className="button-row">
              <a className="button button-sun" href="https://www.avidanocerrado.com/apoie">
                Apoie a AVINC <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost-light" href="mailto:contato@avidanocerrado.com">
                Vamos prosear?
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
