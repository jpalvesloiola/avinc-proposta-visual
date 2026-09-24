import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-name">A Vida no Cerrado</p>
          <p>
            Organização da sociedade civil em defesa do Cerrado e das
            juventudes que constroem seu futuro.
          </p>
        </div>
        <div>
          <h2>Navegue</h2>
          <Link href="/sobre">Sobre nós</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/guia">Guia da proposta</Link>
        </div>
        <div>
          <h2>Participe</h2>
          <a href="https://www.avidanocerrado.com/processo-seletivo">Faça parte</a>
          <a href="https://www.avidanocerrado.com/apoie">Apoie</a>
          <a href="mailto:contato@avidanocerrado.com">Contato</a>
        </div>
        <div>
          <h2>Vamos prosear?</h2>
          <a href="mailto:contato@avidanocerrado.com">contato@avidanocerrado.com</a>
          <p className="footer-small">Brasília · Distrito Federal</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Protótipo para validação · Agosto de 2026</span>
        <span>Design conceitual por João Pedro Alves Loiola</span>
      </div>
    </footer>
  );
}
