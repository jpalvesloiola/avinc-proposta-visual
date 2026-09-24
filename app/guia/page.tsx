import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const sitemap = [
  { title: "Início", items: ["Proposta e causa", "Frentes de atuação", "Projetos", "Resultados", "Redes", "Apoio"], featured: true },
  { title: "Sobre a AVINC", items: ["Quem somos", "Missão e princípios", "Objetivos", "Parceiros e redes"] },
  { title: "Projetos", items: ["Todos os projetos", "Filtros por eixo e status", "Página-modelo de projeto", "Materiais e resultados"], featured: true },
  { title: "Conteúdos", items: ["Todos os conteúdos", "Fauna", "Flora", "Ecologia", "Sociobiodiversidade", "ABC do Cerrado"] },
  { title: "Transparência", items: ["Relatórios anuais", "Documentos institucionais", "Prestação de contas"] },
  { title: "Participe", items: ["Faça parte", "Apoie", "Contato"] },
];

const principles = [
  { source: "Ambiental Media", title: "Projeto em primeiro plano", text: "Grandes histórias, evidências e iniciativas especiais aparecem antes dos blocos institucionais." },
  { source: "National Geographic", title: "Fotografia com propósito", text: "Imagens amplas criam imersão, enquanto legendas e hierarquia preservam contexto e autoria." },
  { source: "Engajamundo", title: "Energia de mobilização", text: "A linguagem convida à participação e transforma as frentes de atuação em caminhos claros." },
  { source: "O Joio e O Trigo", title: "Ritmo editorial", text: "Categoria, título, resumo e metadados seguem um padrão estável que facilita a leitura rápida." },
];

function Wireframe({ type }: { type: "home" | "projects" | "about" }) {
  return (
    <div className="wireframe" aria-label={`Wireframe de ${type}`}>
      <div className="wf-header" />
      <div className="wf-hero" />
      <div className="wf-line" />
      <div className="wf-line short" />
      {type === "home" && <><div className="wf-grid"><span /><span /><span /></div><div className="wf-band" /><div className="wf-grid two"><span /><span /></div></>}
      {type === "projects" && <><div className="wf-line short" /><div className="wf-grid two"><span /><span /><span /><span /></div><div className="wf-line" /></>}
      {type === "about" && <><div className="wf-grid"><span /><span /><span /></div><div className="wf-line" /><div className="wf-grid two"><span /><span /><span /><span /></div></>}
      <div className="wf-footer" />
    </div>
  );
}

export default function GuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero guide-hero">
          <div className="container">
            <p className="breadcrumb"><Link href="/">Início</Link><span>/</span>Guia da proposta</p>
            <p className="eyebrow eyebrow-light">Etapa 2 · Proposta Visual Conceitual</p>
            <h1>Um sistema para tornar a atuação da AVINC visível.</h1>
            <p className="large-copy">
              Arquitetura, wireframes, direção visual e componentes reunidos em
              um único guia para validação antes da implementação no Wix.
            </p>
            <div className="button-row">
              <Link className="button button-sun" href="/">Abrir Home proposta</Link>
              <Link className="button button-ghost-light" href="/projetos">Abrir Projetos</Link>
              <Link className="button button-ghost-light" href="/sobre">Abrir Sobre nós</Link>
            </div>
          </div>
        </section>

        <nav className="guide-nav" aria-label="Seções do guia">
          <div className="container">
            <a href="#arquitetura">Arquitetura</a>
            <a href="#direcao">Direção visual</a>
            <a href="#identidade">Identidade</a>
            <a href="#wireframes">Wireframes</a>
            <a href="#componentes">Componentes</a>
            <a href="#validacao">Validação</a>
          </div>
        </nav>

        <section className="guide-section" id="arquitetura" aria-labelledby="architecture-title">
          <div className="container">
            <div className="guide-intro">
              <div>
                <p className="eyebrow">01 · Arquitetura</p>
                <h2 id="architecture-title">Menu menor, destinos mais previsíveis.</h2>
              </div>
              <p>
                A nova organização separa conteúdo institucional, portfólio,
                publicação, transparência e participação. “Navegue” passa a se
                chamar “Conteúdos”; parceiros e redes permanecem sob “Sobre a
                AVINC”; doação recebe destaque permanente como ação prioritária.
              </p>
            </div>
            <div className="sitemap">
              {sitemap.map((column) => (
                <article className={`sitemap-column ${column.featured ? "featured" : ""}`} key={column.title}>
                  <h3>{column.title}</h3>
                  <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="decision-box">
              Decisão principal: “Projetos” deixa de ser uma lista de links e se
              torna o portfólio institucional da organização, com status,
              territórios, parceiros, resultados e materiais relacionados.
            </p>
          </div>
        </section>

        <section className="guide-section" id="direcao" aria-labelledby="direction-title">
          <div className="container">
            <div className="guide-intro">
              <div>
                <p className="eyebrow">02 · Direção visual</p>
                <h2 id="direction-title">Editorial, territorial e mobilizadora.</h2>
              </div>
              <p>
                A proposta não copia as referências: combina o protagonismo
                fotográfico e editorial com a identidade já reconhecível da
                AVINC. O resultado busca credibilidade para financiadores sem
                perder proximidade com estudantes, ativistas e juventudes.
              </p>
            </div>
            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.source}>
                  <strong>{principle.source}</strong>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="guide-section" id="identidade" aria-labelledby="identity-title">
          <div className="container">
            <div className="guide-intro">
              <div>
                <p className="eyebrow">03 · Identidade</p>
                <h2 id="identity-title">Cores do chão, da folha e do fruto.</h2>
              </div>
              <p>
                Verde profundo sustenta a credibilidade; areia cria respiro;
                amarelo-pequi conduz as ações; terracota acrescenta calor e
                mobilização. A tipografia serifada traz expressão editorial e a
                fonte sem serifa mantém textos e interface legíveis.
              </p>
            </div>
            <div className="palette-grid">
              <div className="swatch" style={{ background: "#102e27", color: "white" }}><b>Verde profundo</b><span>#102E27</span></div>
              <div className="swatch" style={{ background: "#2b6653", color: "white" }}><b>Verde folha</b><span>#2B6653</span></div>
              <div className="swatch" style={{ background: "#f5ba3d" }}><b>Pequi</b><span>#F5BA3D</span></div>
              <div className="swatch" style={{ background: "#c85f3f", color: "white" }}><b>Terra</b><span>#C85F3F</span></div>
              <div className="swatch" style={{ background: "#4b8f8a", color: "white" }}><b>Água</b><span>#4B8F8A</span></div>
              <div className="swatch" style={{ background: "#f4ead7" }}><b>Areia</b><span>#F4EAD7</span></div>
            </div>
            <div className="type-specimen">
              <div className="type-display">Cerrado vivo.</div>
              <div className="type-body">
                <b>Georgia / serifada de sistema</b><br />Títulos expressivos e editoriais.<br /><br />
                <b>Inter / sans-serif de sistema</b><br />Textos, navegação, filtros e metadados.
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section" id="wireframes" aria-labelledby="wireframe-title">
          <div className="container">
            <div className="guide-intro">
              <div>
                <p className="eyebrow">04 · Wireframes</p>
                <h2 id="wireframe-title">A estrutura vem antes da decoração.</h2>
              </div>
              <p>
                A Home constrói a narrativa causa → atuação → projetos →
                resultados → participação. Projetos prioriza filtro e comparação.
                Sobre nós transforma conteúdo institucional longo em camadas de
                leitura.
              </p>
            </div>
            <div className="wireframe-grid">
              <article className="wireframe-card"><h3>Home</h3><Wireframe type="home" /></article>
              <article className="wireframe-card"><h3>Projetos</h3><Wireframe type="projects" /></article>
              <article className="wireframe-card"><h3>Sobre nós</h3><Wireframe type="about" /></article>
            </div>
          </div>
        </section>

        <section className="guide-section" id="componentes" aria-labelledby="components-title">
          <div className="container">
            <div className="guide-intro">
              <div>
                <p className="eyebrow">05 · Sistema de componentes</p>
                <h2 id="components-title">Consistência que o Wix consegue manter.</h2>
              </div>
              <p>
                Cabeçalhos, cartões, botões, etiquetas, relatórios, parceiros e
                vagas seguem padrões reutilizáveis. O conteúdo muda; hierarquia,
                espaçamento e comportamento permanecem estáveis.
              </p>
            </div>
            <div className="component-grid">
              <article className="component-card">
                <h3>Chamadas</h3>
                <p>Um botão primário, um secundário e links textuais descritivos.</p>
                <div className="component-demo"><span className="button button-green">Ação principal</span><span className="text-link">Ler conteúdo <span>→</span></span></div>
              </article>
              <article className="component-card">
                <h3>Status</h3>
                <p>Prazo e situação deixam de depender do corpo do texto.</p>
                <div className="component-demo"><span className="status-pill status-active">Em andamento</span><span className="status-pill status-complete">Concluído</span></div>
              </article>
              <article className="component-card">
                <h3>Metadados</h3>
                <p>Eixo, período, território e formato seguem a mesma ordem.</p>
                <div className="component-demo"><p className="project-meta">Educação · 2026</p><b>Distrito Federal</b></div>
              </article>
              <article className="component-card">
                <h3>Downloads</h3>
                <p>Nome do material, tipo, data e destino compreensível.</p>
                <div className="component-demo"><span className="resource-format">PDF</span><b>Relatório anual 2025</b><small>PDF · 4,2 MB</small></div>
              </article>
            </div>
          </div>
        </section>

        <section className="guide-section" id="validacao" aria-labelledby="validation-title">
          <div className="container">
            <div className="guide-intro">
              <div>
                <p className="eyebrow">06 · Validação do cliente</p>
                <h2 id="validation-title">O que precisa ser aprovado agora.</h2>
              </div>
              <p>
                Esta etapa valida direção e sistema, não textos finais. Ajustes
                estruturais aprovados aqui reduzem retrabalho durante os oito dias
                de implementação no Wix.
              </p>
            </div>
            <ul className="checklist">
              <li>A nova organização do menu e o nome “Conteúdos”.</li>
              <li>Projetos como principal portfólio institucional.</li>
              <li>A direção visual editorial, terrosa e fotográfica.</li>
              <li>A síntese de missão, horizonte, princípios e objetivos.</li>
              <li>Os campos mínimos do cartão e da página de projeto.</li>
              <li>Os dados de impacto que poderão ser publicados e suas fontes.</li>
              <li>A separação entre parceiros de projeto e redes de participação.</li>
              <li>Os conteúdos que a AVINC fornecerá para a implementação.</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
