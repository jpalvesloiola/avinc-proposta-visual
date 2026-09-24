"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const logo =
  "https://static.wixstatic.com/media/56e0c8_ca0500e0c53d43c48abcb8f8ad35e62f~mv2.png/v1/fill/w_394%2Ch_168%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/AVINC_LOGOTIPO%20%2860%29.png";

const links = [
  { href: "/sobre", label: "Sobre nós" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#conteudos", label: "Conteúdos" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/guia", label: "Guia da proposta" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="concept-bar">
        <span>Proposta visual conceitual</span>
        <span className="concept-note">Conteúdo e dados sujeitos à validação da AVINC</span>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="AVINC — página inicial">
            <img src={logo} alt="A Vida no Cerrado — AVINC" />
          </Link>

          <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Navegação principal">
            {links.map((link) => {
              const active =
                !link.href.includes("#") &&
                (pathname === link.href || pathname.startsWith(`${link.href}/`));
              return (
                <Link className={active ? "active" : ""} href={link.href} key={link.label}>
                  {link.label}
                </Link>
              );
            })}
            <a className="button button-small button-green mobile-support" href="https://www.avidanocerrado.com/apoie">
              Apoie
            </a>
          </nav>

          <a className="button button-small button-green desktop-support" href="https://www.avidanocerrado.com/apoie">
            Apoie
          </a>
          <button
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
