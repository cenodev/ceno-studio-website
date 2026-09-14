import { caseStudies, type CaseStudy } from "./content/case-studies";

function diagramFor(study: CaseStudy): string {
  if (study.slug === "symmetric") {
    return `
        <div class="diagram diagram-symmetric" aria-hidden="true">
          <div class="diagram-grid"></div>
          <div class="architecture-map">
            <div class="architecture-label">BALANCER V2 / PROTOCOL STACK</div>
            <div class="architecture-flow">
              <span>VAULT</span><i>→</i><span>POOLS</span><i>→</i><span>GOVERNANCE</span><i>→</i><span>INCENTIVES</span>
            </div>
            <div class="architecture-chains">
              <span>TELOS</span><span>METER</span><span>TAIKO</span><span>ARTELA</span><span>ETHERLINK</span>
            </div>
          </div>
          <div class="diagram-caption">FIVE NETWORKS / ONE OPERATED SYSTEM</div>
        </div>`;
  }

  if (study.slug === "datadex") {
    return `
        <div class="diagram diagram-datadex" aria-hidden="true">
          <div class="diagram-grid"></div>
          <svg class="market-lines" viewBox="0 0 500 300">
            <path d="M58 220 L148 166 L230 192 L326 92 L438 126" />
            <path d="M58 220 L148 166 L230 82 L326 92 L438 126" />
            <path d="M148 166 L230 192 L438 126" />
          </svg>
          <div class="market-node market-a"><b>VANA</b><span>BASE ASSET</span></div>
          <div class="market-node market-b"><b>DAT</b><span>MARKET</span></div>
          <div class="datadex-logo"><img src="/datadex.png" alt="" /></div>
          <div class="market-node market-c"><b>LP</b><span>LIQUIDITY</span></div>
          <div class="diagram-caption">TRADING / LIQUIDITY / DATA</div>
        </div>`;
  }

  return `
        <div class="diagram diagram-setwise" aria-hidden="true">
          <div class="diagram-grid"></div>
          <div class="asset-stack stack-one"><span>ISSUER / A</span><b>RWA-01</b></div>
          <div class="asset-stack stack-two"><span>ISSUER / B</span><b>RWA-02</b></div>
          <div class="asset-stack stack-three"><span>ISSUER / C</span><b>RWA-03</b></div>
          <svg class="route-lines" viewBox="0 0 500 300">
            <path d="M96 74 L250 150 L405 74" />
            <path d="M96 224 L250 150 L405 224" />
          </svg>
          <div class="diagram-core"><strong>RFQ</strong><span>ROUTER / 001</span></div>
          <div class="execution-node execution-left">CHAIN / A</div>
          <div class="execution-node execution-right">CHAIN / B</div>
          <div class="diagram-caption">MULTI-SOURCE EXECUTION / CONTROLLED</div>
        </div>`;
}

function displayName(study: CaseStudy): string {
  return `${study.title} ${study.titleEm}`.replace(/\.$/, "").trim();
}

function tagLine(items: string[]): string {
  return items
    .map((tag) => `<span>${tag.toUpperCase()}</span>`)
    .join("<i></i>");
}

function recordRows(study: CaseStudy): string {
  return study.records
    .map((record) => `<div><dt>${record.k}</dt><dd>${record.v}</dd></div>`)
    .join("\n                ");
}

export function renderWorkCards(): string {
  const completed = caseStudies
    .filter((study) => study.status === "LIVE")
    .map((study) => {
      const source = study.links.find((link) => link.key === "Source code");
      const copy = study.cardCopy
        .map((p) => `<p>${p}</p>`)
        .join("\n          ");

      return `
          <article class="work-card project-${study.slug} reveal">
            <div class="work-card-visual">
              <div class="project-meta"><span>${study.index} / ${study.category.toUpperCase()}</span><span>LIVE</span></div>
              ${diagramFor(study)}
            </div>
            <div class="work-card-copy">
              <div>
                <div class="project-title-row"><h3>${displayName(study)}</h3></div>
                ${copy}
                <dl class="project-record">
                  ${recordRows(study)}
                </dl>
              </div>
              <div class="work-card-bottom">
                <div class="tag-line">${tagLine(study.tags)}</div>
                <div class="project-actions">
                  <a class="project-link" href="${study.route}">Project record <span aria-hidden="true">↗</span></a>
                  ${source ? `<a class="project-link" href="${source.href}" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>` : ""}
                </div>
              </div>
            </div>
          </article>`;
    })
    .join("\n");

  const building = caseStudies.find((study) => study.status === "IN DEVELOPMENT");
  if (!building) return completed;

  return `${completed}
          <article class="building-now reveal">
            <div class="building-now-heading">
              <div>
                <span class="building-now-label">Building now</span>
                <h3>${displayName(building)}</h3>
              </div>
              <span class="status-label"><i></i>${building.status}</span>
            </div>
            <p>${building.cardCopy[0]}</p>
            <dl class="project-record project-record-dark">
              ${recordRows(building)}
            </dl>
            <div class="building-now-footer">
              <div class="tag-line">${tagLine(building.tags)}</div>
              <a class="project-link project-link-dark" href="${building.route}">View development note <span aria-hidden="true">↗</span></a>
            </div>
          </article>`;
}

function renderLinks(study: CaseStudy): string {
  return study.links
    .map((link) => {
      const value = `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`;
      const note = link.note ? `<span class="note">${link.note}</span>` : "";
      return `<li><span class="k">${link.key}</span>${value}${note}</li>`;
    })
    .join("\n              ");
}

export function renderCasePage(slug: string): string {
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);

  const badgeClass =
    study.status === "LIVE" ? "status-badge" : "status-badge status-badge-dev";

  const sections = study.sections
    .map((section, i) => {
      const dark = i % 2 === 1 ? " case-section-dark" : "";
      const paragraphs = (section.paragraphs ?? [])
        .map((p) => `<p>${p}</p>`)
        .join("\n            ");
      const bullets = section.bullets
        ? `<ul class="bullet-list">
              ${section.bullets.map((b) => `<li><span>${b}</span></li>`).join("\n              ")}
            </ul>`
        : "";
      return `
        <section class="case-section${dark}">
          <div class="case-section-inner reveal">
            <div class="section-kicker"><span>${section.num}</span> ${section.kicker}</div>
            <div class="case-body">
              <h2>${section.title}</h2>
              ${paragraphs}
              ${bullets}
            </div>
          </div>
        </section>`;
    })
    .join("\n");

  const specRows = study.spec
    .map(
      (row) =>
        `<div class="row"><span class="k">${row.k}</span><span class="v dim">${row.v}</span></div>`
    )
    .join("\n            ");

  const others = caseStudies
    .filter((c) => c.slug !== study.slug)
    .map(
      (other) => `
            <a class="case-nav-card reveal" href="${other.route}">
              <span class="idx">${other.index} / ${other.category} — ${other.status}</span>
              <span class="t">${other.title} ${other.titleEm}</span>
              <span class="d">${other.summary}</span>
            </a>`
    )
    .join("\n");

  const linksSection = study.links.length
    ? `
        <section class="case-section case-section-dark">
          <div class="case-section-inner reveal">
            <div class="section-kicker"><span>06</span> Verifiable links</div>
            <div class="case-body">
              <h2>Product, code and references.</h2>
              <ul class="link-list">
                ${renderLinks(study)}
              </ul>
            </div>
          </div>
        </section>`
    : "";

  return `
        <section class="case-hero" id="top">
          <div class="hero-grid" aria-hidden="true"></div>
          <a class="case-back" href="/">← Back to Ceno Studio</a>
          <div class="case-hero-grid">
            <div class="reveal">
              <div class="eyebrow">
                <span class="status-dot"></span>
                ${study.index} / ${study.category}
                <span class="${badgeClass}">${study.status}</span>
              </div>
              <h1>${study.title} ${study.titleEm ? `<em>${study.titleEm}</em>` : ""}</h1>
              <p class="case-outcome">${study.outcome}</p>
              <div class="case-tags">
                ${study.tags.map((t) => `<span>${t}</span>`).join("\n                ")}
              </div>
            </div>
            <aside class="case-spec reveal" aria-label="Project specification">
              <div class="system-topbar"><span>CENO // PROJECT_SPEC</span><span class="system-live"><i></i> ${study.index}</span></div>
              <div class="readout-body">
                ${specRows}
              </div>
            </aside>
          </div>
        </section>
${sections}
${linksSection}

        <div class="capability-line reveal">
          <span class="k">What this demonstrates</span>
          <div class="tags">
            ${study.demonstrates.map((d) => `<span>${d}</span>`).join("\n            ")}
          </div>
        </div>

        <section class="case-nav">
          <span class="k">More selected work</span>
          <div class="case-nav-grid">${others}
          </div>
        </section>

        <section class="cta-band">
          <h2>Building something onchain?</h2>
          <a class="button" href="/#contact"><span>Start a project</span><span aria-hidden="true">↗</span></a>
        </section>`;
}
