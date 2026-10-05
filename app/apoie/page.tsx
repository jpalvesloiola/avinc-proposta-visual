import CopyPixButton from "@/components/CopyPixButton";

const benfeitoriaUrl =
  "https://benfeitoria.com/pagamento/apoio-recorrente-a-vida-no-cerrado-1a6q/assinatura/valor?ctx=FixedSubscriptionButton";

const donationPlans = [
  {
    name: "BARU",
    value: "R$ 10",
    description: "Um apoio acessível para fortalecer a atuação da AVINC.",
  },
  {
    name: "CAGAITA",
    value: "R$ 20",
    description: "Ajude a manter projetos e ações de proteção do Cerrado.",
  },
  {
    name: "MURICI",
    value: "R$ 30",
    description: "Contribua para ampliar o impacto das nossas iniciativas.",
  },
  {
    name: "PEQUI",
    value: "R$ 50",
    description: "Um apoio maior para fortalecer nossa atuação contínua.",
  },
];

export default function ApoiePage() {
  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Apoie a AVINC</p>

            <h1>
              Proteger o Cerrado também é uma forma de participar.
            </h1>

            <p className="page-hero-lead">
              Seu apoio ajuda a manter ações de defesa do Cerrado,
              fortalecer comunidades e ampliar o impacto de quem trabalha
              todos os dias pela conservação desse território.
            </p>
          </div>
        </section>

        <section className="support-donation-section">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow eyebrow-light">
                  Apoio recorrente
                </p>

                <h2>Escolha quanto quer contribuir.</h2>
              </div>

              <p>
                Na Benfeitoria, você pode escolher um dos valores abaixo
                ou definir outro valor para apoiar a AVINC mensalmente.
              </p>
            </div>

            <div className="donation-grid">
              {donationPlans.map((plan) => (
                <article className="donation-card" key={plan.name}>
                  <p className="donation-card-name">{plan.name}</p>

                  <p className="donation-value">{plan.value}</p>

                  <p>{plan.description}</p>

                  <a
                    className="button button-sun"
                    href={benfeitoriaUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apoiar
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="donation-other">
              <div>
                <p className="eyebrow eyebrow-light">Outro valor</p>
                <h3>Quer contribuir com outro valor?</h3>
              </div>

              <a
                className="button button-outline-light"
                href={benfeitoriaUrl}
                target="_blank"
                rel="noreferrer"
              >
                Escolher outro valor
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow">Doação direta</p>
                <h2>Prefere fazer uma contribuição única?</h2>
              </div>

              <p>
                Você também pode apoiar diretamente por PIX ou transferência
                bancária, sem precisar fazer uma assinatura.
              </p>
            </div>

            <div className="direct-donation-grid">
              <article className="direct-donation-card pix-card">
                <div>
                  <p className="eyebrow">PIX</p>
                  <h3>Doe diretamente para a AVINC.</h3>

                  <p>
                    Use a chave abaixo para fazer sua contribuição.
                  </p>

                  <div className="pix-key">
                    <span>doe@avidanocerrado.com</span>
                    <CopyPixButton />
                  </div>
                </div>
              </article>

              <article className="direct-donation-card">
                <p className="eyebrow">Transferência</p>

                <h3>Dados bancários</h3>

                <dl className="bank-details">
                  <div>
                    <dt>Agência</dt>
                    <dd>0001</dd>
                  </div>

                  <div>
                    <dt>Conta</dt>
                    <dd>3786509-7</dd>
                  </div>

                  <div>
                    <dt>Instituição</dt>
                    <dd>403 - Cora SCD</dd>
                  </div>

                  <div>
                    <dt>Nome</dt>
                    <dd>A VIDA NO CERRADO</dd>
                  </div>

                  <div>
                    <dt>CNPJ</dt>
                    <dd>49.819.676/0001-09</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section className="support-impact-section">
          <div className="container">
            <div className="support-impact-grid">
              <div>
                <p className="eyebrow eyebrow-light">Por que apoiar?</p>
                <h2>
                  O Cerrado precisa de pessoas dispostas a agir.
                </h2>
              </div>

              <div>
                <p>
                  A AVINC atua para fortalecer a defesa do Cerrado,
                  dar visibilidade às ameaças ao bioma e construir
                  caminhos de transformação junto a diferentes atores.
                </p>

                <p>
                  Cada contribuição ajuda a manter esse trabalho vivo
                  e ampliar sua capacidade de atuação.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow eyebrow-light">
                Faça parte desta história
              </p>

              <h2>
                Proteger o Cerrado é uma ação coletiva.
              </h2>
            </div>

            <a
              className="button button-sun"
              href={benfeitoriaUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apoiar a AVINC
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}