import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const objectives = [
  {
    number: "01",
    title: "Educação e ciência",
    text: "Promover educação socioambiental, divulgação científica e formação de públicos diversos.",
  },
  {
    number: "02",
    title: "Juventudes e participação",
    text: "Articular jovens e ampliar sua presença nos processos de tomada de decisão.",
  },
  {
    number: "03",
    title: "Políticas e redes",
    text: "Incidir de forma pública e apartidária e construir diálogos permanentes em defesa do Cerrado.",
  },
  {
    number: "04",
    title: "Conservação e transparência",
    text: "Realizar projetos ambientais, mobilizar recursos e divulgar resultados, métodos e prestações de contas.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="breadcrumb"><a href="/">Início</a><span>/</span>Sobre nós</p>
            <p className="eyebrow">Quem somos</p>
            <h1>Jovens cerratenses em defesa de um bioma vivo.</h1>
            <p className="large-copy">
              Uma organização da sociedade civil que conecta conhecimento,
              participação social e políticas públicas para valorizar o Cerrado.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="story-title">
          <div className="container about-intro">
            <blockquote id="story-title">
              “Longe de ser vazio, o Cerrado é um dos ecossistemas mais ricos em biodiversidade do mundo.”
            </blockquote>
            <div className="about-story">
              <p>
                A Vida no Cerrado — AVINC — é uma associação civil, filantrópica,
                sem fins econômicos e sem vínculos político-partidários ou
                confessionais, com sede no Distrito Federal.
              </p>
              <p>
                A organização surgiu da inquietação de jovens cerratenses com o
                desmonte das políticas de proteção ambiental e a acelerada
                degradação do bioma. Seu nome é um contraponto à ideia equivocada
                de que o Cerrado seria um território pobre ou vazio.
              </p>
              <p>
                Esta abertura substitui o atual bloco longo por uma narrativa em
                duas camadas: uma frase memorável e um texto institucional
                escaneável.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad value-section" aria-labelledby="values-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-light">Identidade institucional</p>
                <h2 id="values-title">Missão, horizonte e princípios.</h2>
              </div>
              <p style={{ color: "rgba(255,255,255,.66)", lineHeight: 1.7 }}>
                Os três conceitos passam a ter o mesmo peso visual e textos
                curtos. Visão e valores são sínteses conceituais para validação.
              </p>
            </div>
            <div className="value-grid">
              <article className="value-card">
                <span className="value-label">Missão</span>
                <h2>Proteger e valorizar o Cerrado.</h2>
                <p>
                  Auxiliar na construção de uma sociedade que reconhece e conserva
                  a savana brasileira.
                </p>
              </article>
              <article className="value-card">
                <span className="value-label">Horizonte · a validar</span>
                <h2>Um Cerrado vivo para as próximas gerações.</h2>
                <p>
                  Juventudes, comunidades e instituições atuando juntas pela
                  biodiversidade e pela justiça socioambiental.
                </p>
              </article>
              <article className="value-card">
                <span className="value-label">Princípios · a validar</span>
                <h2>Ciência, diálogo e participação.</h2>
                <p>
                  Atuação apartidária, transparência, diversidade e compromisso
                  com os povos e territórios do Cerrado.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="objectives-title">
          <div className="container">
            <div className="objective-head">
              <div>
                <p className="eyebrow">Objetivos institucionais</p>
                <h2 id="objectives-title">O estatuto traduzido em quatro frentes.</h2>
              </div>
              <p>
                Os oito objetivos continuam disponíveis, mas a primeira leitura
                é uma síntese temática. Isso reduz a sensação de “texto jurídico”
                sem apagar o conteúdo oficial.
              </p>
            </div>
            <div className="objective-grid">
              {objectives.map((objective) => (
                <article className="objective-card" key={objective.number}>
                  <h3><span className="objective-icon">{objective.number}</span>{objective.title}</h3>
                  <p>{objective.text}</p>
                </article>
              ))}
            </div>
            <details className="objective-details">
              <summary>Consultar os oito objetivos institucionais completos</summary>
              <ol>
                <li>Promover educação socioambiental, divulgação científica e conscientização sobre a importância ecológica do Cerrado.</li>
                <li>Articular juventudes brasileiras e promover sua participação nos processos de tomada de decisão.</li>
                <li>Atuar de forma pública e apartidária em causas ambientais e na formulação de políticas públicas.</li>
                <li>Ocupar espaços de diálogo e construir redes permanentes em defesa da conservação do Cerrado.</li>
                <li>Capacitar educadores, estudantes, figuras políticas e demais públicos interessados.</li>
                <li>Mobilizar e administrar recursos para atividades de conservação ambiental e uso sustentável.</li>
                <li>Promover projetos, pesquisas e intercâmbios ligados à conservação ambiental.</li>
                <li>Dar transparência a resultados, metodologias e prestações de contas de interesse público.</li>
              </ol>
            </details>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">Atuação concreta</p>
              <h2>Conheça o que essa missão já colocou em movimento.</h2>
            </div>
            <div className="button-row">
              <Link className="button button-sun" href="/projetos">Ver projetos <span aria-hidden="true">→</span></Link>
              <a className="button button-ghost-light" href="https://www.avidanocerrado.com/parceiros">Parceiros e redes</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
