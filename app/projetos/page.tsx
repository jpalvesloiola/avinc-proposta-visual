import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="breadcrumb"><a href="/">Início</a><span>/</span>Projetos</p>
            <div className="hero-meta-row">
              <div>
                <p className="eyebrow">Portfólio institucional</p>
                <h1>Projetos que transformam defesa em ação.</h1>
                <p className="large-copy">
                  Um portfólio organizado por eixo, status e resultado para que
                  estudantes, parceiros e financiadores encontrem rapidamente o
                  que a AVINC realiza.
                </p>
              </div>
              <p className="page-count">06 projetos na amostra</p>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="project-list-title">
          <div className="container">
            <h2 className="sr-only" id="project-list-title">Lista de projetos</h2>
            <ProjectGrid />
            <aside className="axis-note">
              <div>
                <p className="eyebrow eyebrow-light">Decisão de conteúdo</p>
                <h2>Uma estrutura, muitas histórias.</h2>
              </div>
              <p>
                Cada projeto passa a registrar o mesmo conjunto mínimo de dados:
                resumo, objetivo, período, território, status, parceiros,
                resultados e materiais. Projetos especiais podem preservar sua
                expressão visual sem perder a navegação institucional.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
