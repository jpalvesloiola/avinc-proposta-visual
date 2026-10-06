import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ApoiePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-hero support-hero">
          <div className="container">
            <div className="hero-meta-row">
              <p className="eyebrow">Apoie a AVINC</p>
              <span>Participação · Cerrado</span>
            </div>

            <h1>
              O Cerrado vivo também depende de quem escolhe participar.
            </h1>

            <p className="hero-lead">
              Apoiar a AVINC é fortalecer iniciativas que transformam
              conhecimento, participação social e mobilização em proteção
              para o Cerrado.
            </p>
          </div>
        </section>

        <section className="section-pad support-intro">
          <div className="container split-heading">
            <div>
              <p className="eyebrow">Por que apoiar</p>
              <h2>
                Proteger o Cerrado é uma construção coletiva.
              </h2>
            </div>

            <div>
              <p>
                A AVINC atua para aproximar pessoas, organizações e
                instituições das questões que envolvem o Cerrado.
              </p>

              <p>
                Seu apoio ajuda a ampliar essa atuação e criar condições
                para que projetos, mobilizações e ações de educação
                socioambiental continuem acontecendo.
              </p>
            </div>
          </div>
        </section>

        <section className="support-paths">
          <div className="container">
            <div className="support-paths-header">
              <div>
                <p className="eyebrow eyebrow-light">Formas de apoiar</p>
                <h2>
                  Existem diferentes maneiras de fazer parte.
                </h2>
              </div>

              <p>
                Escolha a forma de contribuição que mais combina com você
                e com a sua possibilidade de participação.
              </p>
            </div>

            <div className="support-path-grid">
              <article>
                <span>01</span>
                <h3>Apoio financeiro</h3>
                <p>
                  Contribuições ajudam a manter e ampliar as iniciativas
                  desenvolvidas pela AVINC.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Parcerias</h3>
                <p>
                  Instituições e organizações podem construir parcerias
                  para apoiar projetos e ações específicas.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Mobilização</h3>
                <p>
                  Compartilhar, participar e levar a atuação da AVINC para
                  novas redes também é uma forma de fortalecer a causa.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad support-impact">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow">Seu apoio em movimento</p>
                <h2>
                  Recursos para transformar intenção em ação.
                </h2>
              </div>

              <p>
                A atuação da AVINC acontece em diferentes frentes:
                educação socioambiental, incidência política e mobilização
                de juventudes.
              </p>
            </div>

            <div className="support-impact-grid">
              <div>
                <strong>Educação</strong>
                <span>
                  Conhecimento acessível sobre o Cerrado.
                </span>
              </div>

              <div>
                <strong>Incidência</strong>
                <span>
                  Participação na construção de políticas públicas.
                </span>
              </div>

              <div>
                <strong>Juventudes</strong>
                <span>
                  Formação e mobilização de jovens cerratenses.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section support-final">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">
                Faça parte desta história
              </p>

              <h2>
                Proteger o Cerrado é uma ação coletiva.
              </h2>
            </div>

            <div className="button-row">
              <a
                className="button button-sun"
                href="mailto:contato@avidanocerrado.com"
              >
                Quero apoiar <span aria-hidden="true">↗</span>
              </a>

              <a
                className="button button-ghost-light"
                href="mailto:contato@avidanocerrado.com"
              >
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