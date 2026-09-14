import './styles.css'

type CaseStudy = {
  slug: 'symmetric' | 'datadex' | 'setwise'
  index: string
  label: string
  name: string
  shortOutcome: string
  summary: string
  status?: string
  tags: string[]
  context: string[]
  role: string[]
  built: string[]
  systems: { title: string; text: string }[]
  outcome: string[]
  links: { label: string; href: string }[]
  demonstrates: string
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) throw new Error('Application root not found')

const caseStudies: Record<CaseStudy['slug'], CaseStudy> = {
  symmetric: {
    slug: 'symmetric',
    index: '01',
    label: 'MULTI-CHAIN DEFI',
    name: 'Symmetric Finance',
    shortOutcome: 'Multi-chain DeFi infrastructure, owned end to end.',
    summary: 'Built and operated a Balancer-based financial protocol across multiple networks, from contracts and governance through interfaces and deployments.',
    tags: ['PROTOCOL ARCHITECTURE', 'AMMS', 'GOVERNANCE', 'INCENTIVES', 'MULTI-CHAIN SYSTEMS'],
    context: [
      'A multi-chain automated market maker is more than a contract deployment. Pools, incentives, governance, indexing and user-facing products all have to stay coherent as the protocol moves between networks.',
      'Symmetric needed a technical foundation that could carry that whole system — and keep operating as the protocol evolved.',
    ],
    role: [
      'Ceno took senior technical ownership across protocol architecture, smart contracts, pools, governance, incentives, indexing, SDKs, frontends and production deployments.',
      'The work covered both the protocol itself and ecosystem-specific engineering around it.',
    ],
    built: [
      'Balancer-based AMM contracts and pool infrastructure',
      'Governance, gauges, emissions and reward systems',
      'Indexing, SDKs and protocol-facing interfaces',
      'Multi-network integration and deployment systems',
      'Custom liquidity infrastructure for ecosystem partners',
    ],
    systems: [
      { title: 'AMM CORE', text: 'Balancer-based pools and protocol mechanics designed as a coherent financial system.' },
      { title: 'GOVERNANCE LAYER', text: 'Gauges, emissions, incentives and rewards connected to protocol operations.' },
      { title: 'PRODUCT LAYER', text: 'Indexing, SDKs and interfaces that make the protocol usable and observable.' },
      { title: 'ECOSYSTEM WORK', text: 'Grant-funded development for Balancer and Tezos, plus Taiko liquidity-locking infrastructure.' },
    ],
    outcome: [
      'The engagement produced a working multi-chain protocol stack and led to grant-funded development for Balancer and Tezos.',
      'For Taiko, the work extended into custom 80/20 TAIKO/ETH lock-up infrastructure and Trailblazers integration — evidence of the same architecture adapting to a specific ecosystem need.',
    ],
    links: [
      { label: 'SOURCE CODE', href: 'https://github.com/symmetricfinance' },
      { label: 'SYMMETRIC FINANCE', href: 'https://symmetric.finance' },
      { label: 'BALANCER REFERENCE', href: 'https://forum.balancer.fi/t/symmetric-balancer-friendly-fork-proposal/2634' },
    ],
    demonstrates: 'MULTI-CHAIN OWNERSHIP / AMM ARCHITECTURE / GOVERNANCE / ECOSYSTEM DELIVERY',
  },
  datadex: {
    slug: 'datadex',
    index: '02',
    label: 'ECOSYSTEM INFRASTRUCTURE',
    name: 'DataDex × Vana',
    shortOutcome: 'Exchange and market infrastructure for the Vana ecosystem.',
    summary: 'Built in collaboration with the Vana Foundation, DataDex provides trading, liquidity and market infrastructure for the Vana blockchain.',
    tags: ['ECOSYSTEM INFRASTRUCTURE', 'DEX ENGINEERING', 'INDEXING', 'ANALYTICS', 'FULL-STACK DELIVERY'],
    context: [
      'The Vana ecosystem needed more than a standalone swap interface. Its data economy required a dependable market layer where ecosystem tokens could trade, attract liquidity and expose useful market information.',
      'That meant treating exchange infrastructure as part of the wider network experience.',
    ],
    role: [
      'Ceno built DataDex in collaboration with the Vana Foundation, owning delivery across the exchange interface, pool operations, routing, network integration and data systems.',
      'The work connected protocol mechanics to the tooling and information ecosystem teams need to participate.',
    ],
    built: [
      'Purpose-built DEX interface for Vana',
      'Liquidity pool creation and position management',
      'Trading routes and network integrations',
      'Subgraphs and indexed protocol data',
      'Market views and analytics infrastructure',
    ],
    systems: [
      { title: 'EXCHANGE LAYER', text: 'Trading and liquidity flows built for Vana-native assets and users.' },
      { title: 'NETWORK LAYER', text: 'Wallet, chain and contract integration handled as one product surface.' },
      { title: 'DATA LAYER', text: 'Subgraphs and indexed data supporting market state and application views.' },
      { title: 'MARKET LAYER', text: 'Analytics that make liquidity and trading activity legible across the ecosystem.' },
    ],
    outcome: [
      'DataDex gives the Vana ecosystem a dedicated venue for trading, liquidity management and market discovery.',
      'The result is an ecosystem-delivery story: a connected piece of financial infrastructure spanning contracts, data, routing and product experience.',
    ],
    links: [
      { label: 'LIVE PRODUCT', href: 'https://datadex.com' },
      { label: 'PRODUCT DOCS', href: 'https://docs.datadex.com' },
      { label: 'VANA FOUNDATION', href: 'https://vana.org' },
    ],
    demonstrates: 'ECOSYSTEM DELIVERY / DEX ENGINEERING / INDEXING / MARKET ANALYTICS',
  },
  setwise: {
    slug: 'setwise',
    index: '03',
    label: 'TOKENIZED ASSETS',
    name: 'Setwise',
    shortOutcome: 'Market infrastructure for tokenized financial assets.',
    summary: 'An original Ceno protocol bringing together tokenized asset discovery, portfolio-style products, market data and multi-source execution.',
    status: 'IN DEVELOPMENT',
    tags: ['RWA INFRASTRUCTURE', 'PROTOCOL DESIGN', 'ROUTING', 'GOVERNANCE', 'SMART-CONTRACT SECURITY'],
    context: [
      'Tokenized assets are fragmented across issuers, chains and execution venues. Building useful portfolio products on top of them requires a model for discovery, pricing, routing and settlement — not just another token contract.',
      'Setwise is designed around that market-infrastructure problem.',
    ],
    role: [
      'Setwise is an original Ceno protocol. The studio owns the protocol design, system architecture, smart-contract approach, routing model, product interface and security controls.',
      'It is being developed as a focused protocol rather than an adaptation of an existing DEX.',
    ],
    built: [
      'Multi-issuer asset and market modelling',
      'Tokenized asset discovery and market data',
      'Portfolio-style product architecture',
      'Routing and RFQ execution',
      'Cross-chain settlement and security controls',
    ],
    systems: [
      { title: 'ASSET MODEL', text: 'A common market model for assets originating from multiple issuers.' },
      { title: 'EXECUTION', text: 'Routing and RFQ paths designed to source execution across fragmented venues.' },
      { title: 'SETTLEMENT', text: 'Cross-chain flows that account for state, permissions and final settlement.' },
      { title: 'CONTROL PLANE', text: 'Governance and smart-contract security controls designed into the protocol.' },
    ],
    outcome: [
      'Setwise is currently in development. Public product and source links will be added when the simplified version is ready to launch.',
      'The current work establishes the protocol model and production path without presenting unfinished systems as live.',
    ],
    links: [],
    demonstrates: 'ORIGINAL PROTOCOL DESIGN / RWA MARKETS / RFQ ROUTING / CROSS-CHAIN SETTLEMENT',
  },
}

const brand = (href = '/') => `
  <a class="brand" href="${href}" aria-label="Ceno Studio home">
    <img src="/ceno-wordmark.svg" alt="Ceno" />
    <span>STUDIO</span>
  </a>`

const header = (isHome: boolean) => `
  <header class="site-header${isHome ? '' : ' is-scrolled'}" data-header>
    ${brand(isHome ? '#top' : '/')}
    ${isHome ? `
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#ways">Ways to work</a>
        <a href="#about">About</a>
      </nav>
      <a class="header-cta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span class="sr-only">Open menu</span>
      </button>
      <nav class="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
        <a href="#work">Work</a><a href="#ways">Ways to work</a><a href="#about">About</a><a href="#contact">Start a project ↗</a>
      </nav>` : `
      <nav class="case-nav" aria-label="Project navigation"><a href="/#work">← Back to work</a></nav>
      <a class="header-cta" href="/#contact">Start a project <span aria-hidden="true">↗</span></a>`}
  </header>`

const footer = (homeHref = '/') => `
  <footer>
    <div class="footer-primary">${brand(homeHref)}<p>Onchain finance, engineered end to end.</p></div>
    <p>Ceno Studio is operated by Ceno Labs Ltd.</p>
    <div class="footer-meta"><span>© <span data-year></span> CENO STUDIO</span><a href="/privacy">PRIVACY</a><a href="${homeHref}">BACK TO TOP ↑</a></div>
  </footer>`

const diagram = (kind: CaseStudy['slug']) => {
  if (kind === 'symmetric') return `
    <div class="diagram diagram-symmetric" aria-hidden="true">
      <div class="diagram-grid"></div>
      <svg class="symmetry-loop" viewBox="0 0 500 300"><path d="M68 150C158 20 342 280 432 150C342 20 158 280 68 150Z"/><circle class="particle" r="6"><animateMotion dur="5s" repeatCount="indefinite" path="M68 150C158 20 342 280 432 150C342 20 158 280 68 150Z"/></circle><circle class="particle particle-alt" r="6"><animateMotion begin="-2.5s" dur="5s" repeatCount="indefinite" path="M68 150C158 20 342 280 432 150C342 20 158 280 68 150Z"/></circle></svg>
      <div class="diagram-node node-left"><b>80%</b><span>TAIKO</span></div>
      <div class="symmetric-logo"><img src="/symmetric.svg" alt="" /></div>
      <div class="diagram-node node-right"><b>20%</b><span>ETH</span></div>
      <div class="diagram-caption">POOL ARCHITECTURE / MULTI-CHAIN</div>
    </div>`

  if (kind === 'datadex') return `
    <div class="diagram diagram-datadex" aria-hidden="true">
      <div class="diagram-grid"></div>
      <svg class="market-lines" viewBox="0 0 500 300"><path d="M58 220 L148 166 L230 192 L326 92 L438 126"/><path d="M58 220 L148 166 L230 82 L326 92 L438 126"/><path d="M148 166 L230 192 L438 126"/></svg>
      <div class="market-node market-a"><b>VANA</b><span>BASE ASSET</span></div>
      <div class="market-node market-b"><b>DAT</b><span>MARKET</span></div>
      <div class="diagram-core"><strong>DEX</strong><span>ROUTER / 001</span></div>
      <div class="market-node market-c"><b>LP</b><span>LIQUIDITY</span></div>
      <div class="diagram-caption">TRADING / LIQUIDITY / DATA</div>
    </div>`

  return `
    <div class="diagram diagram-setwise" aria-hidden="true">
      <div class="diagram-grid"></div>
      <div class="asset-stack stack-one"><span>ISSUER / A</span><b>RWA-01</b></div>
      <div class="asset-stack stack-two"><span>ISSUER / B</span><b>RWA-02</b></div>
      <div class="asset-stack stack-three"><span>ISSUER / C</span><b>RWA-03</b></div>
      <svg class="route-lines" viewBox="0 0 500 300"><path d="M96 74 L250 150 L405 74"/><path d="M96 224 L250 150 L405 224"/></svg>
      <div class="diagram-core"><strong>RFQ</strong><span>ROUTER / 001</span></div>
      <div class="execution-node execution-left">CHAIN / A</div><div class="execution-node execution-right">CHAIN / B</div>
      <div class="diagram-caption">MULTI-SOURCE EXECUTION / CONTROLLED</div>
    </div>`
}

const tagLine = (tags: string[]) => tags.map((tag) => `<span>${tag}</span>`).join('<i></i>')

const homePage = () => {
  const workCards = (Object.values(caseStudies) as CaseStudy[]).map((project) => `
    <article class="work-card project-${project.slug} reveal">
      <div class="work-card-visual">
        <div class="project-meta"><span>${project.index} / ${project.label}</span>${project.status ? `<span class="status-label"><i></i>${project.status}</span>` : '<span>SYSTEM / LIVE</span>'}</div>
        ${diagram(project.slug)}
      </div>
      <div class="work-card-copy">
        <div>
          <div class="project-title-row"><h3>${project.name}</h3>${project.status ? `<span class="status-label status-label-dark"><i></i>${project.status}</span>` : ''}</div>
          <p>${project.summary}</p>
          ${project.slug === 'symmetric' ? '<p>The work also led to grant-funded development for Balancer and Tezos, and custom liquidity-locking infrastructure for Taiko.</p>' : ''}
          ${project.slug === 'datadex' ? '<p>The project spans the DEX interface, pool management, routing, network integrations, subgraphs and market analytics.</p>' : ''}
        </div>
        <div class="work-card-bottom">
          <div class="tag-line">${tagLine(project.tags)}</div>
          <a class="project-link" href="/work/${project.slug}">View project <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>`).join('')

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    ${header(true)}
    <main id="main">
      <section class="hero" id="top">
        <div class="hero-grid" aria-hidden="true"></div><div class="hero-orb hero-orb-one" aria-hidden="true"></div><div class="hero-orb hero-orb-two" aria-hidden="true"></div>
        <div class="hero-copy reveal">
          <div class="eyebrow hero-eyebrow"><span class="status-dot"></span>Independent protocol studio <span>Global</span></div>
          <h1>Onchain finance, engineered <em>end to end.</em></h1>
          <p>A solo protocol studio helping teams design, build and launch onchain financial systems.</p>
          <p class="hero-detail">Protocol architecture, smart contracts, interfaces and infrastructure — from idea to production.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact"><span>Start a project</span><span aria-hidden="true">↗</span></a>
            <a class="button button-ghost" href="#work"><span>View work</span><span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div class="hero-system reveal" aria-label="Ceno protocol system graphic">
          <div class="system-topbar"><span>CENO // PROTOCOL</span><span class="system-live"><i></i> SYSTEM ONLINE</span></div>
          <div class="system-canvas">
            <div class="system-coordinates">PROTOCOL LAYER / 001<br/>GLOBAL SETTLEMENT</div>
            <svg class="network-lines" viewBox="0 0 640 480" aria-hidden="true"><path class="line-a" d="M70 360 L178 265 L302 302 L402 168 L570 98"/><path class="line-b" d="M178 265 L245 118 L402 168 L510 354"/><path class="line-c" d="M302 302 L510 354 L570 98"/><g><circle cx="70" cy="360" r="5"/><circle cx="178" cy="265" r="7"/><circle cx="245" cy="118" r="5"/><circle cx="302" cy="302" r="5"/><circle cx="402" cy="168" r="8"/><circle cx="510" cy="354" r="5"/><circle cx="570" cy="98" r="5"/></g></svg>
            <div class="system-logo-wrap">
              <div class="logo-shadow" aria-hidden="true"></div>
              <img src="/ceno-gradient-tile.svg" alt="" />
              <div class="logo-index">NODE<br/>001</div>
            </div>
            <div class="data-chip chip-one"><span>CONTRACTS</span><b>VERIFIED</b></div><div class="data-chip chip-two"><span>INTERFACES</span><b>CONNECTED</b></div><div class="data-chip chip-three"><span>STATUS</span><b>ONLINE</b></div>
          </div>
          <div class="system-footer"><span>ARCHITECTURE</span><span>SECURITY</span><span>INFRASTRUCTURE</span></div>
        </div>
        <div class="hero-index" aria-hidden="true">01</div>
      </section>

      <section class="ecosystem" aria-labelledby="ecosystem-title">
        <div class="ecosystem-label"><span>02</span><span>ECOSYSTEM PROOF / 001</span></div>
        <div class="ecosystem-copy reveal"><h2 id="ecosystem-title">Built with leading onchain ecosystems.</h2><p>Grant-funded development, ecosystem infrastructure and custom protocol engineering.</p></div>
        <div class="ecosystem-names" aria-label="Balancer, Tezos, Taiko and Vana"><span>BALANCER</span><i></i><span>TEZOS</span><i></i><span>TAIKO</span><i></i><span>VANA</span></div>
      </section>

      <section class="work section-dark" id="work">
        <div class="section-heading section-heading-dark reveal">
          <div class="section-kicker"><span>03</span>Selected work</div>
          <h2>Built in the <em>real world.</em></h2>
          <p>Protocol systems and ecosystem infrastructure designed, built and taken through production by one senior operator.</p>
        </div>
        <div class="work-list">${workCards}</div>
      </section>

      <section class="ways section-light" id="ways">
        <div class="section-heading reveal">
          <div class="section-kicker"><span>04</span>Ways to work</div>
          <h2>Ways to work <em>with me.</em></h2>
          <p>Focused engagements with direct technical ownership from first decision to production destination.</p>
        </div>
        <div class="ways-grid">
          <article class="way-card way-featured reveal"><div class="way-top"><span>01 / SPRINT</span><strong>FROM $3,000</strong></div><div class="way-icon" aria-hidden="true">⌁</div><div><h3>Protocol Design Sprint</h3><p>Turn a protocol idea into a buildable technical design.</p><p>Architecture, financial flows, risk analysis and an implementation roadmap.</p></div></article>
          <article class="way-card reveal"><div class="way-top"><span>02 / BUILD</span><strong>FROM $10,000</strong></div><div class="way-icon" aria-hidden="true">⌬</div><div><h3>Protocol Build</h3><p>I design and build onchain financial protocols from specification through launch.</p><p>Smart contracts, testing, integrations, interfaces, internal security review, audit support and deployment.</p></div></article>
          <article class="way-card reveal"><div class="way-top"><span>03 / MIGRATION</span><strong>CUSTOM</strong></div><div class="way-icon" aria-hidden="true">⇄</div><div><h3>Upgrade &amp; Migration</h3><p>Upgrade, restructure or migrate an existing protocol without treating the surrounding system as an afterthought.</p><p>Contracts, permissions, integrations, state, liquidity and deployment handled together.</p></div></article>
          <article class="way-card reveal"><div class="way-top"><span>04 / FRACTIONAL</span><strong>FROM $6,000/MONTH</strong></div><div class="way-icon" aria-hidden="true">◎</div><div><h3>Fractional Protocol Lead</h3><p>Ongoing senior technical ownership without adding a full-time protocol lead.</p><p>Architecture, reviews, security, roadmap decisions, audits and releases alongside your existing team.</p></div></article>
        </div>
      </section>

      <section class="capabilities" aria-labelledby="capabilities-title">
        <div class="capabilities-head"><div class="section-kicker"><span>05</span>What I work on</div><h2 id="capabilities-title">Onchain financial systems.</h2></div>
        <div class="capability-row"><span>DEXS</span><i></i><span>AMMS</span><i></i><span>LENDING</span><i></i><span>STABLECOINS</span><i></i><span>GOVERNANCE</span><i></i><span>INCENTIVES</span><i></i><span>TOKENIZED ASSETS</span><i></i><span>PROTOCOL MIGRATIONS</span></div>
        <div class="capability-row capability-row-muted"><span>SOLIDITY</span><i></i><span>VYPER</span><i></i><span>INDEXING</span><i></i><span>SDKs</span><i></i><span>FRONTENDS</span><i></i><span>DEPLOYMENTS</span></div>
      </section>

      <section class="about section-dark" id="about">
        <div class="about-grid" aria-hidden="true"></div>
        <div class="about-heading reveal"><div class="section-kicker"><span>06</span>About</div><h2>A solo studio for <em>onchain finance.</em></h2></div>
        <div class="about-body reveal">
          <div class="founder-code"><span>FOUNDER / SOLE OPERATOR</span><strong>STEPHEN<br/>HORSFALL</strong><span>BUILDING ONCHAIN / SINCE 2018</span></div>
          <div class="about-copy"><p>I'm Stephen Horsfall, founder and sole operator of Ceno Studio.</p><p>I've been building onchain systems since 2018, working across protocol architecture, smart contracts, governance, incentives, indexing, interfaces and production deployments.</p><p>Ceno is deliberately small. When you hire the studio, you work directly with the person designing and building the system.</p></div>
        </div>
      </section>

      <section class="process section-light" id="process">
        <div class="process-intro reveal"><div class="section-kicker"><span>07</span>How I work</div><h2>Design <em>→</em> Build <em>→</em> Secure <em>→</em> Launch</h2></div>
        <div class="process-grid">
          <article class="process-step reveal"><div class="process-number">01</div><div class="process-line"><i></i></div><h3>Design</h3><p>Architecture, mechanics and risk before implementation.</p><span>ARCHITECTURE / RISK</span></article>
          <article class="process-step reveal"><div class="process-number">02</div><div class="process-line"><i></i></div><h3>Build</h3><p>Contracts, infrastructure and interface developed as one system.</p><span>ENGINEERING / INTEGRATION</span></article>
          <article class="process-step reveal"><div class="process-number">03</div><div class="process-line"><i></i></div><h3>Secure</h3><p>Testing, internal review and preparation for independent audit.</p><span>TESTING / REVIEW</span></article>
          <article class="process-step reveal"><div class="process-number">04</div><div class="process-line"><i></i></div><h3>Launch</h3><p>Deployment, validation and production handover.</p><span>DEPLOYMENT / HANDOVER</span></article>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="contact-copy reveal"><div class="section-kicker"><span>08</span>Start a project</div><h2>Building something onchain?</h2><p>Tell me what you're working on.</p><div class="contact-route"><span>INBOUND CHANNEL / OPEN</span><i></i></div></div>
        <form class="contact-form reveal" action="https://api.web3forms.com/submit" method="POST" data-contact-form>
          <input type="hidden" name="access_key" value="a97a26d4-af72-44d5-9ca0-5fa60ed4c87c" />
          <input type="hidden" name="subject" value="New project enquiry — Ceno Studio" />
          <input type="hidden" name="from_name" value="Ceno Studio website" />
          <input type="checkbox" class="botcheck" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true" />
          <div class="form-header"><span>PROJECT INTAKE / 001</span><span><i></i> ENCRYPTED CONNECTION</span></div>
          <div class="form-grid">
            <div class="form-field"><label for="contact-name"><span>01</span>Name</label><input id="contact-name" name="name" type="text" placeholder="Jane Smith" autocomplete="name" required /></div>
            <div class="form-field"><label for="contact-email"><span>02</span>Email</label><input id="contact-email" name="email" type="email" placeholder="jane@company.com" autocomplete="email" required /></div>
            <div class="form-field"><label for="contact-company"><span>03</span>Project / company</label><input id="contact-company" name="company" type="text" placeholder="Organisation or protocol" autocomplete="organization" /></div>
            <div class="form-field"><label for="contact-budget"><span>04</span>Budget range</label><select id="contact-budget" name="budget" required><option value="" selected>Choose a range</option><option value="$3,000–$10,000">$3,000–$10,000</option><option value="$10,000–$25,000">$10,000–$25,000</option><option value="$25,000–$50,000">$25,000–$50,000</option><option value="$50,000+">$50,000+</option><option value="Ongoing / fractional">Ongoing / fractional</option><option value="Not set yet">Not set yet</option></select></div>
            <div class="form-field form-field-wide"><label for="contact-message"><span>05</span>What are you building?</label><textarea id="contact-message" name="message" rows="5" placeholder="The product, the protocol and where you are today." required></textarea></div>
            <div class="form-field form-field-wide"><label for="contact-timeline"><span>06</span>Target timeline</label><select id="contact-timeline" name="timeline" required><option value="" selected>Choose a timeframe</option><option value="As soon as possible">As soon as possible</option><option value="1–3 months">1–3 months</option><option value="3–6 months">3–6 months</option><option value="6+ months">6+ months</option><option value="Exploring an idea">Exploring an idea</option></select></div>
          </div>
          <div class="form-actions"><p>By sending this form, you agree that Ceno Studio may use your details to respond to your enquiry. <a href="/privacy">Privacy notice ↗</a></p><button class="form-submit" type="submit" data-submit-button><span data-submit-label>Send project brief</span><span aria-hidden="true">↗</span></button></div>
          <p class="form-status" role="status" aria-live="polite" data-form-status></p>
        </form>
      </section>
    </main>
    ${footer('#top')}`
}

const caseStudyPage = (project: CaseStudy) => {
  const otherProjects = (Object.values(caseStudies) as CaseStudy[]).filter(({ slug }) => slug !== project.slug)
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    ${header(false)}
    <main id="main" class="case-main">
      <section class="case-hero">
        <div class="hero-grid" aria-hidden="true"></div>
        <div class="case-hero-copy reveal">
          <div class="case-overline"><span>${project.index}</span><span>${project.label}</span>${project.status ? `<span class="status-label"><i></i>${project.status}</span>` : '<span>PROJECT NOTE / LIVE</span>'}</div>
          <h1>${project.name}</h1><p>${project.shortOutcome}</p>
          <div class="tag-line tag-line-light">${tagLine(project.tags)}</div>
        </div>
        <div class="case-hero-diagram reveal">${diagram(project.slug)}</div>
        <div class="hero-index" aria-hidden="true">CASE / ${project.index}</div>
      </section>

      <section class="case-notes">
        <aside class="case-index reveal" aria-label="Case study contents"><span>TECHNICAL PROJECT NOTES</span><a href="#context">01 / CONTEXT</a><a href="#role">02 / CENO'S ROLE</a><a href="#built">03 / WHAT WAS BUILT</a><a href="#systems">04 / SYSTEMS</a><a href="#outcome">05 / OUTCOME</a></aside>
        <div class="case-content">
          <section class="case-section reveal" id="context"><div class="case-section-label"><span>01</span>Context / challenge</div><h2>${project.summary}</h2>${project.context.map((text) => `<p>${text}</p>`).join('')}</section>
          <section class="case-section reveal" id="role"><div class="case-section-label"><span>02</span>Ceno's role</div><h2>Direct technical ownership across the system.</h2>${project.role.map((text) => `<p>${text}</p>`).join('')}</section>
          <section class="case-section reveal" id="built"><div class="case-section-label"><span>03</span>What was built</div><h2>One system, multiple layers.</h2><ol class="build-list">${project.built.map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${item}</li>`).join('')}</ol></section>
          <section class="case-section reveal" id="systems"><div class="case-section-label"><span>04</span>Technical depth</div><h2>Notable systems.</h2><div class="systems-grid">${project.systems.map((system, index) => `<article><span>SYS / ${String(index + 1).padStart(2, '0')}</span><h3>${system.title}</h3><p>${system.text}</p></article>`).join('')}</div></section>
          <section class="case-section reveal" id="outcome"><div class="case-section-label"><span>05</span>${project.status ? 'Current status' : 'Outcome'}</div><div class="outcome-heading"><h2>${project.status ?? 'Production experience, carried forward.'}</h2>${project.status ? `<span class="status-label status-label-dark"><i></i>${project.status}</span>` : ''}</div>${project.outcome.map((text) => `<p>${text}</p>`).join('')}${project.links.length ? `<div class="case-links">${project.links.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer"><span>${link.label}</span><span aria-hidden="true">↗</span></a>`).join('')}</div>` : '<div class="pending-links"><span>PUBLIC LINKS</span><strong>PENDING LAUNCH</strong></div>'}</section>
        </div>
      </section>

      <section class="demonstrates"><span>WHAT THIS DEMONSTRATES / ${project.index}</span><p>${project.demonstrates}</p></section>
      <nav class="next-projects" aria-label="More case studies">${otherProjects.map((item) => `<a href="/work/${item.slug}"><span>${item.index} / NEXT PROJECT</span><strong>${item.name}</strong><i aria-hidden="true">↗</i></a>`).join('')}</nav>
    </main>
    ${footer('/')}`
}

const privacyPage = () => `
  <a class="skip-link" href="#main">Skip to content</a>
  ${header(false)}
  <main id="main" class="privacy-main">
    <section class="privacy-hero"><div class="hero-grid" aria-hidden="true"></div><div><div class="case-overline"><span>LEGAL / 001</span><span>FORM DATA NOTICE</span></div><h1>Privacy.</h1><p>A concise notice about the information sent through this site.</p></div></section>
    <article class="privacy-content">
      <div class="privacy-meta"><span>CONTROLLER</span><strong>CENO LABS LTD</strong><span>OPERATING AS CENO STUDIO</span></div>
      <div class="privacy-copy">
        <section><span>01</span><div><h2>What is collected</h2><p>When you send a project brief, Ceno Studio receives the name, email address, project or company, project description, budget range and target timeline you provide.</p></div></section>
        <section><span>02</span><div><h2>Why it is used</h2><p>This information is used only to review your enquiry, respond to you and, if relevant, discuss or manage a potential engagement.</p></div></section>
        <section><span>03</span><div><h2>How it is handled</h2><p>Form submissions are processed by Web3Forms for delivery to Ceno Studio. Information is retained only for as long as it is needed for the enquiry, a resulting engagement or applicable legal obligations. It is not sold.</p></div></section>
        <section><span>04</span><div><h2>Your choices</h2><p>You can ask to access, correct or delete information submitted through the site. Use the project form and include “privacy request” in your message so the request can be identified.</p></div></section>
        <section><span>05</span><div><h2>Operator</h2><p>Ceno Studio is operated by Ceno Labs Ltd. This notice may be updated if the form or data-handling process changes.</p></div></section>
        <a class="button button-dark" href="/#contact"><span>Contact Ceno Studio</span><span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </main>
  ${footer('/')}`

const normalisedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const caseMatch = normalisedPath.match(/^\/work\/(symmetric|datadex|setwise)$/)

if (normalisedPath === '/') app.innerHTML = homePage()
else if (normalisedPath === '/privacy') app.innerHTML = privacyPage()
else if (caseMatch) app.innerHTML = caseStudyPage(caseStudies[caseMatch[1] as CaseStudy['slug']])
else {
  document.title = 'Page not found — Ceno Studio'
  app.innerHTML = `${header(false)}<main class="not-found"><span>ERROR / 404</span><h1>Page not found.</h1><a class="button button-primary" href="/"><span>Return home</span><span>↗</span></a></main>${footer('/')}`
}

const siteHeader = document.querySelector<HTMLElement>('[data-header]')
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const mobileNav = document.querySelector<HTMLElement>('.mobile-nav')

const closeMenu = () => {
  menuToggle?.setAttribute('aria-expanded', 'false')
  siteHeader?.classList.remove('menu-open')
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  siteHeader?.classList.toggle('menu-open', !isOpen)
})
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))

let previousScroll = 0
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY
  siteHeader?.classList.toggle('is-scrolled', currentScroll > 20 || normalisedPath !== '/')
  siteHeader?.classList.toggle('is-hidden', currentScroll > previousScroll && currentScroll > 160 && !siteHeader.classList.contains('menu-open'))
  previousScroll = currentScroll
}, { passive: true })

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
} else document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))

document.querySelectorAll<HTMLElement>('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()) })

const contactForm = document.querySelector<HTMLFormElement>('[data-contact-form]')
const formStatus = document.querySelector<HTMLElement>('[data-form-status]')
const submitButton = document.querySelector<HTMLButtonElement>('[data-submit-button]')
const submitLabel = document.querySelector<HTMLElement>('[data-submit-label]')

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity()
    return
  }
  const originalLabel = submitLabel?.textContent ?? 'Send project brief'
  if (submitButton) submitButton.disabled = true
  if (submitLabel) submitLabel.textContent = 'Transmitting…'
  if (formStatus) { formStatus.textContent = 'Securely sending your project brief…'; formStatus.className = 'form-status' }
  try {
    const response = await fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' } })
    const result = await response.json() as { success?: boolean; message?: string }
    if (!response.ok || !result.success) throw new Error(result.message ?? 'The form could not be sent.')
    contactForm.reset()
    if (formStatus) { formStatus.textContent = 'Message received. I’ll be in touch shortly.'; formStatus.className = 'form-status is-success' }
  } catch {
    if (formStatus) { formStatus.textContent = 'Something went wrong. Please wait a moment and try again.'; formStatus.className = 'form-status is-error' }
  } finally {
    if (submitButton) submitButton.disabled = false
    if (submitLabel) submitLabel.textContent = originalLabel
  }
})
