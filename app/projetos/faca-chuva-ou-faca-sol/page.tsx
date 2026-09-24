import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const hero =
  "https://static.wixstatic.com/media/985c3a_6a944e682e314c01a6467eba8a5ac89f~mv2.jpg/v1/crop/x_300%2Cy_0%2Cw_3300%2Ch_2350/fill/w_1800%2Ch_1050%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/20231019_140702.jpg";

export default function ProjectDetailPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="project-detail-hero">
          <div className="container">
            <div className="project-detail-topline">
              <p className="breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/projetos">Projetos</Link><span>/</span>Faça chuva ou faça sol</p>
              <span className="status-pill status-active">Em andamento</span>
            </div>
            <p className="eyebrow eyebrow-light">Jornalismo ambiental · Clima</p>
            <h1>Faça chuva ou faça sol, meu Cerrado já está vulnerável</h1>
            <p className="project-detail-lead">
              Grandes reportagens ambientais que investigam vulnerabilidades
              climáticas do Cerrado a partir de dados, documentos, trabalho de
              campo e entrevistas em profundidade.
            </p>
            <img className="project-detail-image" alt="Paisagem de campo no Cerrado" src={hero} />
          </div>
        </section>

        <section className="project-facts" aria-label="Ficha do projeto">
          <div className="container project-facts-grid">
            <div><b>Status</b><span>Em andamento</span></div>
            <div><b>Início</b><span>2023</span></div>
            <div><b>Território</b><span>Cerrado brasileiro</span></div>
            <div><b>Eixos</b><span>Clima, dados e justiça</span></div>
          </div>
        </section>

        <section className="content-section">
          <div className="container detail-grid">
            <aside className="detail-aside">
              <p className="eyebrow">Resumo do projeto</p>
              <h2>Conhecimento local para adaptação climática.</h2>
              <p>
                O template torna objetivo, metodologia, resultados e materiais
                encontráveis sem exigir uma página especial desconectada do site.
              </p>
              <a className="button button-green" href="https://www.avidanocerrado.com/facachuvaoufacasol">
                Ver página atualmente publicada <span aria-hidden="true">↗</span>
              </a>
            </aside>

            <div className="detail-copy">
              <h2>O projeto</h2>
              <p>
                Cada volume analisa um estado cerratense por meio de três eixos:
                emissões de gases de efeito estufa; vulnerabilidades climáticas;
                e ação política, educacional e cultural nos territórios. A
                investigação combina análise de dados, documentos, atividades de
                campo e entrevistas com cientistas e moradores.
              </p>
              <p>
                O objetivo é produzir informação pública, acessível e aprofundada
                que possa apoiar educação ambiental e políticas de adaptação
                conectadas às realidades municipais e territoriais do Cerrado.
              </p>

              <h2>Resultados</h2>
              <div className="result-list">
                <article><strong>1</strong><span>volume publicado sobre o Distrito Federal</span></article>
                <article><strong>1</strong><span>edição em produção sobre Goiás</span></article>
                <article><strong>3</strong><span>eixos permanentes de investigação</span></article>
                <article><strong>2023</strong><span>ano de lançamento do primeiro volume</span></article>
              </div>

              <h2>Publicações e materiais</h2>
              <div className="resource-list">
                <a className="resource-item" href="https://www.avidanocerrado.com/o-quanto-estamos-vulneraveis-no-df">
                  <span className="resource-format">WEB</span>
                  <span><b>O quanto estamos vulneráveis no Distrito Federal</b><small>Reportagem especial · dezembro de 2023</small></span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="resource-item" href="https://www.avidanocerrado.com/facachuvaoufacasol">
                  <span className="resource-format">WEB</span>
                  <span><b>Terra Ronca: edição Goiás</b><small>Primeiro trecho publicado · conteúdo em andamento</small></span>
                  <span aria-hidden="true">↗</span>
                </a>
                <div className="resource-item">
                  <span className="resource-format">PDF</span>
                  <span><b>Ficha metodológica do projeto</b><small>Recurso sugerido para organização futura</small></span>
                  <span aria-hidden="true">·</span>
                </div>
              </div>

              <h2>Parceiros e créditos</h2>
              <p>
                Este bloco deve registrar apoio institucional, financiamento,
                autoria, orientação, fontes e responsabilidades. A associação
                explícita entre parceiros, atividades e resultados fortalece a
                prestação de contas do portfólio.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">Continue explorando</p>
              <h2>Outras formas de defender o Cerrado.</h2>
            </div>
            <Link className="button button-sun" href="/projetos">Voltar aos projetos <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
