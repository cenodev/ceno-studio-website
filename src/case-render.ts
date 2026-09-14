import { caseStudies, type CaseStudy } from "./content/case-studies";

function tags(
  items: string[],
  separator = " · "
): string {
  return items
    .map((t) => t.replace(/&/g, "&amp;"))
    .join(separator)
    .toUpperCase();
}

function visualFor(study: CaseStudy): string {
  if (study.slug === "symmetric") {
    return `
        <div class="project-visual visual-symmetric" aria-hidden="true">
          <div class="project-grid-lines"></div>
          <svg class="symmetry-loop" viewBox="0 0 400 240">
            <path d="M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z" />
            <circle class="sym-particle" r="5">
              <animateMotion dur="4.5s" repeatCount="indefinite" path="M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z" />
            </circle>
            <circle class="sym-particle sym-particle-alt" r="5">
              <animateMotion begin="-2.25s" dur="4.5s" repeatCount="indefinite" path="M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z" />
            </circle>
          </svg>
          <div class="balance-node balance-node-left"><b>50%</b><span>POOL A</span></div>
          <div class="balance-node balance-node-right"><b>50%</b><span>POOL B</span></div>
          <div class="project-logo-frame symmetric-logo">
            <img src="/symmetric.svg" alt="" />
          </div>
          <span class="visual-label">LIQUIDITY / BALANCED</span>
        </div>`;
  }

  if (study.slug === "datadex") {
    return `
        <div class="project-visual visual-datadex" aria-hidden="true">
          <div class="project-grid-lines"></div>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="orbit orbit-three"></div>
          <div class="project-logo-frame">
            <div class="datadex-mark"><b>DATADEX</b><span>VANA // DEX</span></div>
          </div>
          <span class="visual-label">VANA / EXCHANGE INFRA</span>
        </div>`;
  }

  return `
        <div class="project-visual visual-setwise" aria-hidden="true">
          <div class="setwise-rail"><i class="setwise-packet"></i><i class="setwise-packet setwise-packet-alt"></i></div>
          <div class="setwise-endpoint setwise-assets"><b>ASSETS</b><span>MULTI-ISSUER</span></div>
          <div class="project-logo-frame">
            <div class="setwise-mark"><b>SETWISE</b><span>RWA / MARKETS</span></div>
          </div>
          <div class="setwise-endpoint setwise-exec"><b>EXECUTION</b><span>ROUTING + RFQ</span></div>
          <div class="dev-stamp">IN<br />DEV</div>
          <span class="visual-label">TOKENIZED / MULTI-SOURCE</span>
        </div>`;
}

export function renderWorkCards(): string {
  return caseStudies
    .map((study) => {
      const wide = study.slug === "setwise" ? " project-wide" : "";
      const title =
        study.slug === "setwise"
          ? `<div class="project-title-row">
                  <h3>Setwise</h3>
                  <span class="status-badge status-badge-dev">In development</span>
                </div>`
          : `<h3>${study.title} ${study.titleEm}</h3>`;
      const copy = study.cardCopy
        .map((p) => `<p>${p}</p>`)
        .join("\n                ");
      const source = study.links.find(
        (l) => l.key === "Source code" && l.href
      );
      const sourceLink = source
        ? `<a class="project-source" href="${source.href}" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>`
        : "";
      const points = study.cardPoints
        .map((p) => `<li>${p}</li>`)
        .join("");

      return `
          <article class="project-card ${study.cardClass}${wide} reveal">
            <div class="project-meta"><span>${study.index} / ${study.category}</span><span>${study.status}</span></div>
            ${visualFor(study)}
            <div class="project-body">
              <div>
                ${title}
                ${copy}
                <div class="project-links">
                  <a class="project-source" href="${study.route}">View project <span aria-hidden="true">↗</span></a>
                  ${sourceLink}
                </div>
              </div>
              <ul>${points}</ul>
            </div>
            <div class="project-tech">${tags(study.tags)}</div>
          </article>`;
    })
    .join("\n");
}

function renderLinks(study: CaseStudy): string {
  return study.links
    .map((link) => {
      const value = link.href
        ? `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`
        : `<span class="nolink">${link.label}</span>`;
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

        <section class="case-section case-section-dark">
          <div class="case-section-inner reveal">
            <div class="section-kicker"><span>06</span> Links</div>
            <div class="case-body">
              <h2>Live product, source and ecosystem references.</h2>
              <ul class="link-list">
                ${renderLinks(study)}
              </ul>
            </div>
          </div>
        </section>

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
