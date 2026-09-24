import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const reports = [
  {
    year: "2024",
    title: "Relatório anual 2024",
    description:
      "Documento institucional com o registro das ações, projetos e resultados da AVINC no período.",
    href: "https://www.avidanocerrado.com/transparencia",
  },
  {
    year: "2023",
    title: "Relatório anual 2023",
    description:
      "Relatório anual disponibilizado pela AVINC para consulta pública e prestação de contas.",
    href: "https://www.avidanocerrado.com/_files/ugd/985c3a_12fec3062e5a44c48cda6ab2a99fb14e.pdf",
  },
];

export default function TransparencyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero transparency-hero">
          <div className="container">
            <p className="breadcrumb"><a href="/">Início</a><span>/</span>Transparência</p>
            <div className="hero-meta-row">
              <div>
                <p className="eyebrow">Prestação de contas</p>
                <h1>Transparência.</h1>
                <p className="large-copy">
                  Relatórios, documentos e resultados para acompanhar o trabalho da
                  AVINC e conhecer como a organização transforma atuação em evidências.
                </p>
              </div>
              <p className="page-count">Atualização anual</p>
            </div>
          </div>
        </section>

        <section className="content-section transparency-reports" aria-labelledby="reports-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Relatórios anuais</p>
                <h2 id="reports-title">O que estamos fazendo.</h2>
              </div>
              <p>
                Os relatórios anuais reúnem as principais ações e resultados da
                organização. O conteúdo pode crescer ao longo dos anos sem mudar a estrutura da página.
              </p>
            </div>

            <div className="report-grid">
              {reports.map((report) => (
                <article className="report-card" key={report.year}>
                  <div className="report-cover" aria-hidden="true">
                    <span>{report.year}</span>
                    <span className="report-mark">AVINC</span>
                  </div>
                  <div className="report-copy">
                    <p className="project-meta">Relatório anual · {report.year}</p>
                    <h3>{report.title}</h3>
                    <p>{report.description}</p>
                    <a className="text-link" href={report.href} target="_blank" rel="noreferrer">
                      Consultar relatório <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad transparency-note-section" aria-labelledby="transparency-note-title">
          <div className="container transparency-note-grid">
            <div>
              <p className="eyebrow eyebrow-light">Compromisso público</p>
              <h2 id="transparency-note-title">Transparência como parte da atuação.</h2>
            </div>
            <div>
              <p>
                Esta página concentra os documentos públicos disponibilizados pela
                AVINC. Novos relatórios e documentos podem ser incorporados mantendo
                o mesmo padrão visual e editorial.
              </p>
              <p className="validation-note">
                Os documentos e links devem ser atualizados pela AVINC antes da publicação final.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
