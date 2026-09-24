"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  axis: string;
  category: "Clima" | "Educação" | "Participação";
  status: "Em andamento" | "Recorrente" | "Concluído";
  description: string;
  image: string;
  detail?: string;
};

const projects: Project[] = [
  {
    title: "Faça chuva ou faça sol",
    axis: "Jornalismo ambiental · Clima",
    category: "Clima",
    status: "Em andamento",
    description: "Reportagens sobre vulnerabilidades ambientais e climáticas nos estados do Cerrado.",
    image: "https://static.wixstatic.com/media/985c3a_6a944e682e314c01a6467eba8a5ac89f~mv2.jpg/v1/crop/x_477%2Cy_0%2Cw_3047%2Ch_2250/fill/w_900%2Ch_675%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/20231019_140702.jpg",
    detail: "/projetos/faca-chuva-ou-faca-sol",
  },
  {
    title: "Cerrado nas Escolas",
    axis: "Educação · Incidência",
    category: "Educação",
    status: "Em andamento",
    description: "Mobilização para incluir a Semana do Cerrado no calendário das redes de ensino.",
    image: "https://static.wixstatic.com/media/11062b_c4b88c75c4604f589d8e85baf37f9e0e~mv2.jpeg/v1/crop/x_243%2Cy_0%2Cw_4441%2Ch_3280/fill/w_900%2Ch_675%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/Secret%C3%A1rias%20da%20escola%20prim%C3%A1ria.jpeg",
  },
  {
    title: "Mês do Cerrado",
    axis: "Educação socioambiental",
    category: "Educação",
    status: "Recorrente",
    description: "Ações anuais de educação e mobilização durante o mês do bioma.",
    image: "https://static.wixstatic.com/media/e3aff4_cc98508bb6e24773987649c036c4deb3~mv2.jpg/v1/crop/x_0%2Cy_27%2Cw_4624%2Ch_3415/fill/w_900%2Ch_675%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/20230911_153750.jpg",
  },
  {
    title: "1º Concurso Fotográfico",
    axis: "Arte · Biodiversidade",
    category: "Educação",
    status: "Concluído",
    description: "Fotografia como convite para reconhecer a riqueza e a beleza do Cerrado.",
    image: "https://static.wixstatic.com/media/56e0c8_2d33558f8b97447dadc26cc869d597b1~mv2.png/v1/crop/x_163%2Cy_0%2Cw_1040%2Ch_768/fill/w_900%2Ch_675%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/Design%20sem%20nome%20%288%29.png",
  },
  {
    title: "Incidência Política",
    axis: "Políticas públicas · Advocacy",
    category: "Participação",
    status: "Recorrente",
    description: "Materiais e ações para ampliar a participação cidadã na agenda socioambiental.",
    image: "https://static.wixstatic.com/media/985c3a_5c6bd0ecd02548f1be44c8e02a615df8~mv2.jpg/v1/fill/w_900%2Ch_675%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/985c3a_5c6bd0ecd02548f1be44c8e02a615df8~mv2.jpg",
  },
  {
    title: "Conferência Internacional de Água",
    axis: "Juventudes · Água",
    category: "Participação",
    status: "Concluído",
    description: "Delegação de jovens do Cerrado na Conferência da ONU sobre Água, em 2023.",
    image: "https://static.wixstatic.com/media/56e0c8_1e4753b7c1064866a5897b1d10918033~mv2.jpg/v1/crop/x_16%2Cy_0%2Cw_1048%2Ch_774/fill/w_900%2Ch_675%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/Fr3mLF_WwAIW_0y_edited.jpg",
  },
];

const categories = ["Todos", "Clima", "Educação", "Participação"] as const;

function statusClass(status: Project["status"]) {
  if (status === "Em andamento") return "status-active";
  if (status === "Recorrente") return "status-recurring";
  return "status-complete";
}

export function ProjectGrid() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const filtered = useMemo(
    () => projects.filter((project) => category === "Todos" || project.category === category),
    [category],
  );

  return (
    <>
      <div className="filter-bar">
        <div className="filter-group" aria-label="Filtrar projetos por eixo">
          {categories.map((item) => (
            <button
              aria-pressed={category === item}
              className="filter-button"
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <span aria-live="polite" className="filter-result">
          {filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}
        </span>
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <article className={`project-card ${project.detail ? "" : "project-card-muted"}`} key={project.title}>
            <div className="project-card-image">
              <img alt="" src={project.image} />
              <span className={`status-pill ${statusClass(project.status)}`}>{project.status}</span>
            </div>
            <div className="project-card-copy">
              <p className="project-meta">{project.axis}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.detail ? (
                <Link className="card-action" href={project.detail}>
                  Conheça o projeto <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <span className="card-action">Conteúdo a estruturar <span aria-hidden="true">·</span></span>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
