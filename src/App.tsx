import { FormEvent, useState } from 'react'

type ProjectKey = 'symmetric' | 'datadex' | 'setwise'

const projectData: Record<ProjectKey, {
  number: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  variant: string
  status?: string
}> = {
  symmetric: {
    number: '01',
    eyebrow: 'MULTI-CHAIN DEFI',
    title: 'Symmetric Finance',
    subtitle: 'Multi-chain DeFi infrastructure',
    description: 'Built and operated a Balancer-based financial protocol across multiple networks, covering smart contracts, pools, governance, incentives, indexing, SDKs, frontends and deployments. The work also led to grant-funded development for Balancer and Tezos, and custom liquidity-locking infrastructure for Taiko.',
    tags: ['PROTOCOL ARCHITECTURE', 'AMMS', 'GOVERNANCE', 'INCENTIVES', 'MULTI-CHAIN SYSTEMS'],
    variant: 'symmetric',
  },
  datadex: {
    number: '02',
    eyebrow: 'ECOSYSTEM INFRASTRUCTURE',
    title: 'DataDex × Vana',
    subtitle: 'Exchange infrastructure for the Vana ecosystem',
    description: 'Built in collaboration with the Vana Foundation, DataDex provides trading, liquidity and market infrastructure for the Vana blockchain. The project spans the DEX interface, pool management, routing, network integrations, subgraphs and market analytics.',
    tags: ['ECOSYSTEM INFRASTRUCTURE', 'DEX ENGINEERING', 'INDEXING', 'ANALYTICS', 'FULL-STACK DELIVERY'],
    variant: 'datadex',
  },
  setwise: {
    number: '03',
    eyebrow: 'TOKENIZED ASSETS',
    title: 'Setwise',
    subtitle: 'Infrastructure for tokenized financial assets',
    description: 'An original Ceno protocol bringing together tokenized asset discovery, portfolio-style products, market data and multi-source execution.',
    tags: ['RWA INFRASTRUCTURE', 'PROTOCOL DESIGN', 'ROUTING', 'GOVERNANCE', 'SMART-CONTRACT SECURITY'],
    variant: 'setwise',
    status: 'IN DEVELOPMENT',
  },
}

function Arrow({ down = false }: { down?: boolean }) {
  return <span className={`arrow ${down ? 'arrow-down' : ''}`} aria-hidden="true">↗</span>
}

function Mark() {
  return (
    <span className="brand" aria-label="Ceno Studio">
      <img src="/ceno-wordmark.svg" alt="Ceno" />
      <span>STUDIO</span>
    </span>
  )
}

function SectionHeader({ number, label, id }: { number: string; label: string; id?: string }) {
  return (
    <div className="section-header" id={id}>
      <span className="section-number">{number}</span>
      <span className="terminal-label">{label}</span>
      <span className="header-rule" />
    </div>
  )
}

function Header({ compact = false }: { compact?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const home = window.location.pathname === '/'
  const anchor = (id: string) => home ? `#${id}` : `/#${id}`

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${compact ? 'site-header-compact' : ''}`}>
        <a className="brand-link" href="/" aria-label="Ceno Studio home"><Mark /></a>
        <div className="header-right">
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            <a href={anchor('work')} onClick={() => setMenuOpen(false)}>WORK</a>
            <a href={anchor('ways')} onClick={() => setMenuOpen(false)}>WAYS TO WORK</a>
            <a href={anchor('about')} onClick={() => setMenuOpen(false)}>ABOUT</a>
            <a className="nav-cta" href={anchor('contact')} onClick={() => setMenuOpen(false)}>START A PROJECT <Arrow /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  )
}

function SystemGraphic({ variant = 'hero' }: { variant?: string }) {
  if (variant === 'symmetric') {
    return (
      <div className="project-visual schematic-symmetric" aria-hidden="true">
        <div className="visual-topline"><span>POOL ROUTER / 001</span><span>ACTIVE</span></div>
        <div className="symmetric-graphic">
          <div className="pool-node pool-node-a"><b>A</b><small>POOL A</small></div>
          <div className="pool-node pool-node-b"><b>B</b><small>POOL B</small></div>
          <div className="pool-core">S</div>
          <span className="orbit-line orbit-one" /><span className="orbit-line orbit-two" />
          <div className="visual-chip chip-left">BALANCER</div><div className="visual-chip chip-right">MULTI-CHAIN</div>
        </div>
        <div className="visual-bottomline"><span>LIQUIDITY / BALANCED</span><span>ROUTE READY</span></div>
      </div>
    )
  }
  if (variant === 'datadex') {
    return (
      <div className="project-visual schematic-datadex" aria-hidden="true">
        <div className="visual-topline"><span>MARKET GRAPH / VANA</span><span>INDEXED</span></div>
        <div className="market-graphic">
          <div className="graph-axis graph-axis-y" /><div className="graph-axis graph-axis-x" />
          <div className="graph-line"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="graph-label label-one">ROUTE</div><div className="graph-label label-two">POOL</div><div className="graph-label label-three">DATA</div>
          <div className="market-ring"><span>DX</span></div>
        </div>
        <div className="visual-bottomline"><span>LIQUIDITY / VANA</span><span>DATADEX</span></div>
      </div>
    )
  }
  if (variant === 'setwise') {
    return (
      <div className="project-visual schematic-setwise" aria-hidden="true">
        <div className="visual-topline"><span>ASSET ROUTER / 003</span><span>BUILDING</span></div>
        <div className="setwise-graphic">
          <div className="asset-stack"><span>ASSET</span><span>ASSET</span><span>ASSET</span></div>
          <div className="setwise-path"><i /><i /><i /></div>
          <div className="setwise-core">S<span>W</span></div>
          <div className="setwise-endpoints"><span>RFQ</span><span>SETTLE</span></div>
        </div>
        <div className="visual-bottomline"><span>RWA / MULTI-ISSUER</span><span>IN DEVELOPMENT</span></div>
      </div>
    )
  }
  return (
    <div className="system-graphic" aria-hidden="true">
      <div className="visual-topline"><span>CENO // PROTOCOL SYSTEM ONLINE</span><span>LIVE LINK</span></div>
      <div className="system-graphic-body">
        <div className="system-orbit orbit-outer"><span className="orbit-marker marker-one" /><span className="orbit-marker marker-two" /></div>
        <div className="system-orbit orbit-middle"><span className="orbit-marker marker-three" /></div>
        <div className="system-core"><span>CENO</span><small>STUDIO</small></div>
        <div className="system-label label-origin">ORIGIN / 00</div>
        <div className="system-label label-exec">EXECUTION / 01</div>
        <div className="system-label label-settle">SETTLEMENT / 02</div>
        <div className="system-line line-a" /><div className="system-line line-b" /><div className="system-line line-c" />
      </div>
      <div className="visual-bottomline"><span>ARCHITECTURE</span><span>CONTRACTS</span><span>INTERFACE</span><span>INFRASTRUCTURE</span></div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero site-container">
          <div className="hero-copy">
            <p className="eyebrow">INDEPENDENT PROTOCOL STUDIO / GLOBAL</p>
            <h1>Onchain finance,<br /><em>engineered end to end.</em></h1>
            <p className="hero-lede">A solo protocol studio helping teams design, build and launch onchain financial systems.</p>
            <p className="hero-detail">Protocol architecture, smart contracts, interfaces and infrastructure — from idea to production.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">START A PROJECT <Arrow /></a>
              <a className="text-link" href="#work">VIEW WORK <span className="down-arrow">↓</span></a>
            </div>
          </div>
          <SystemGraphic />
          <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </section>

        <section className="proof section-shell site-container" aria-labelledby="proof-title">
          <SectionHeader number="02" label="ECOSYSTEM PROOF" />
          <div className="proof-grid">
            <h2 id="proof-title">Built with leading<br /><em>onchain ecosystems.</em></h2>
            <div className="proof-copy"><p>Grant-funded development, ecosystem infrastructure and custom protocol engineering.</p></div>
          </div>
          <div className="ecosystem-list" aria-label="Ecosystems">
            <span>BALANCER</span><span>TEZOS</span><span>TAIKO</span><span>VANA</span>
          </div>
        </section>

        <section className="work section-shell site-container" id="work" aria-labelledby="work-title">
          <SectionHeader number="03" label="SELECTED WORK" />
          <div className="section-intro"><h2 id="work-title">Built in the<br /><em>real world.</em></h2><p>Production systems, ecosystem infrastructure and original protocols — engineered from first principles.</p></div>
          <div className="work-list">
            {(Object.keys(projectData) as ProjectKey[]).map((key) => <ProjectCard key={key} project={projectData[key]} />)}
          </div>
          <div className="supporting-work"><span className="terminal-label">SUPPORTING ECOSYSTEM / PROTOCOL WORK</span><span>BALANCER · TEZOS · TAIKO · VANA · REVOLV</span></div>
        </section>

        <section className="ways section-shell site-container" id="ways" aria-labelledby="ways-title">
          <SectionHeader number="04" label="WAYS TO WORK" />
          <div className="section-intro"><h2 id="ways-title">Ways to work<br /><em>with me.</em></h2><p>Engagements shaped around the technical decision in front of you, with scope and pricing clear from the start.</p></div>
          <div className="ways-grid">
            <ServiceCard number="01" title="Protocol Design Sprint" price="From $3,000" description="Turn a protocol idea into a buildable technical design." detail="Architecture, financial flows, risk analysis and an implementation roadmap." />
            <ServiceCard number="02" title="Protocol Build" price="From $10,000" description="I design and build onchain financial protocols from specification through launch." detail="Smart contracts, testing, integrations, interfaces, internal security review, audit support and deployment." />
            <ServiceCard number="03" title="Upgrade & Migration" price="Custom" description="Upgrade, restructure or migrate an existing protocol without treating the surrounding system as an afterthought." detail="Contracts, permissions, integrations, state, liquidity and deployment handled together." />
            <ServiceCard number="04" title="Fractional Protocol Lead" price="From $6,000/month" description="Ongoing senior technical ownership without adding a full-time protocol lead." detail="Architecture, reviews, security, roadmap decisions, audits and releases alongside your existing team." />
          </div>
          <p className="commercial-note">Every engagement is scoped around the agreed production destination. Third-party auditor fees are separate unless included in a proposal.</p>
        </section>

        <section className="capabilities section-shell site-container" aria-labelledby="capabilities-title">
          <SectionHeader number="05" label="WHAT I WORK ON" />
          <h2 id="capabilities-title">Onchain financial<br /><em>systems.</em></h2>
          <div className="capability-grid">
            <div className="capability-line">DEXS / AMMS / LENDING / STABLECOINS / GOVERNANCE / INCENTIVES / TOKENIZED ASSETS / PROTOCOL MIGRATIONS</div>
            <div className="capability-line capability-line-accent">SOLIDITY / VYPER / INDEXING / SDKS / FRONTENDS / DEPLOYMENTS</div>
          </div>
        </section>

        <section className="about section-shell site-container" id="about" aria-labelledby="about-title">
          <SectionHeader number="06" label="ABOUT" />
          <div className="about-grid">
            <div className="about-copy"><h2 id="about-title">A solo studio for<br /><em>onchain finance.</em></h2></div>
            <div className="about-body"><p className="about-lede">I'm Stephen Horsfall, founder and sole operator of Ceno Studio.</p><p>I've been building onchain systems since 2018, working across protocol architecture, smart contracts, governance, incentives, indexing, interfaces and production deployments.</p><p>Ceno is deliberately small. When you hire the studio, you work directly with the person designing and building the system.</p></div>
            <div className="founder-mark" aria-label="Stephen Horsfall, founder and sole operator"><div className="founder-circle"><span>SH</span><i /></div><span className="founder-caption">FOUNDER / SOLE OPERATOR<br />STEPHEN HORSFALL</span></div>
          </div>
        </section>

        <section className="process section-shell site-container" aria-labelledby="process-title">
          <SectionHeader number="07" label="HOW I WORK" />
          <div className="section-intro process-intro"><h2 id="process-title">Design <span>→</span> Build <span>→</span><br />Secure <span>→</span> Launch</h2><p>A clear path from first technical question to a system ready for production.</p></div>
          <div className="process-grid">
            <ProcessStep number="01" title="Design" description="Architecture, mechanics and risk before implementation." label="ARCHITECTURE / RISK" />
            <ProcessStep number="02" title="Build" description="Contracts, infrastructure and interface developed as one system." label="ENGINEERING / INTEGRATION" />
            <ProcessStep number="03" title="Secure" description="Testing, internal review and preparation for independent audit." label="TESTING / REVIEW" />
            <ProcessStep number="04" title="Launch" description="Deployment, validation and production handover." label="DEPLOYMENT / HANDOVER" />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

function ProjectCard({ project }: { project: typeof projectData[ProjectKey] }) {
  return (
    <article className="project-card">
      <div className="project-meta"><span>{project.number} / {project.eyebrow}</span>{project.status && <span className="status-badge">{project.status}</span>}</div>
      <SystemGraphic variant={project.variant} />
      <div className="project-copy"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div><p className="project-description">{project.description}</p></div>
      <div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={`/work/${project.variant}`}>VIEW PROJECT <Arrow /></a></div>
    </article>
  )
}

function ServiceCard({ number, title, price, description, detail }: { number: string; title: string; price: string; description: string; detail: string }) {
  return <article className="service-card"><div className="service-top"><span className="card-number">{number}</span><span className="service-price">{price}</span></div><h3>{title}</h3><p className="service-description">{description}</p><p className="service-detail">{detail}</p><span className="card-cross" aria-hidden="true">+</span></article>
}

function ProcessStep({ number, title, description, label }: { number: string; title: string; description: string; label: string }) {
  return <article className="process-step"><span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="terminal-label">{label}</span></article>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (form.get('website')) return
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const project = String(form.get('project') || '')
    const message = String(form.get('message') || '')
    const budget = String(form.get('budget') || '')
    const timeline = String(form.get('timeline') || '')
    if (!name || !email || !project || !message || !budget || !timeline) {
      setError('Complete each field before sending your brief.')
      return
    }
    const subject = encodeURIComponent(`Project brief — ${project}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject / company: ${project}\nBudget: ${budget}\nTarget timeline: ${timeline}\n\nWhat I'm building:\n${message}`)
    setError('')
    setSent(true)
    window.location.href = `mailto:hello@ceno.studio?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section-shell site-container" id="contact" aria-labelledby="contact-title">
      <SectionHeader number="08" label="CONTACT" />
      <div className="contact-intro"><h2 id="contact-title">Building something<br /><em>onchain?</em></h2><p>Tell me what you're working on.</p></div>
      <form className="intake-form" action="mailto:hello@ceno.studio" method="post" encType="text/plain" onSubmit={handleSubmit}>
        <div className="form-header"><span>PROJECT INTAKE / 001</span><span>ENCRYPTED CONNECTION</span></div>
        <div className="form-fields">
          <label><span>01&nbsp; Name</span><input required name="name" placeholder="Stephen Smith" autoComplete="name" /></label>
          <label><span>02&nbsp; Email</span><input required type="email" name="email" placeholder="you@company.com" autoComplete="email" /></label>
          <label><span>03&nbsp; Project / company</span><input required name="project" placeholder="Organisation or protocol" /></label>
          <label><span>04&nbsp; Budget range</span><select required name="budget" defaultValue=""><option value="" disabled>Select range</option><option>Under $10,000</option><option>$10,000 — $25,000</option><option>$25,000 — $50,000</option><option>$50,000+</option><option>Not sure yet</option></select></label>
          <label><span>05&nbsp; What are you building?</span><textarea required name="message" placeholder="Give me the short version of the system, the users and the open question." rows={5} /></label>
          <label><span>06&nbsp; Target timeline</span><select required name="timeline" defaultValue=""><option value="" disabled>Select timeline</option><option>Exploring now</option><option>Starting this quarter</option><option>Starting in 3–6 months</option><option>Already in production</option></select></label>
          <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        </div>
        <div className="form-bottom"><p>By sending this form, you agree that Ceno Studio may contact you about your enquiry. <a href="/privacy">Privacy notice</a>.</p><button className="button button-primary" type="submit">SEND PROJECT BRIEF <Arrow /></button></div>
        {error && <p className="form-message form-error" role="alert">{error}</p>}
        {sent && !error && <p className="form-message" role="status">Your mail client should open with the brief addressed to hello@ceno.studio.</p>}
      </form>
    </section>
  )
}

const caseStudies: Record<ProjectKey, {
  kicker: string
  title: string
  summary: string
  context: string
  role: string
  built: string[]
  depth: { label: string; value: string }[]
  outcome: string
  capabilities: string
  links: { label: string; href: string }[]
}> = {
  symmetric: {
    kicker: 'MULTI-CHAIN DEFI / 01',
    title: 'Symmetric Finance',
    summary: 'Multi-chain DeFi infrastructure built around Balancer-style pools, with the surrounding system owned from contracts through production.',
    context: 'Symmetric needed a financial protocol that could move beyond a single deployment: a pool system, user interface and operating model that could travel across networks while keeping its core mechanics coherent.',
    role: 'I owned protocol architecture and delivery across smart contracts, pools, governance, incentives, indexing, SDKs, frontends and deployments.',
    built: ['Balancer-based AMM infrastructure', 'Governance, gauges, emissions and rewards', 'Indexing and SDK layers for applications', 'Multi-chain frontends and deployment tooling'],
    depth: [
      { label: 'Ecosystem grants', value: 'Balancer · Tezos' },
      { label: 'Custom infrastructure', value: 'Taiko 80/20 TAIKO/ETH lock-up and Trailblazers integration' },
      { label: 'Supporting work', value: 'Revolv yield-accelerated pools, bribe-marketplace work and lending integrations' },
    ],
    outcome: 'A live, multi-network protocol and the operational experience to migrate, recover and evolve financial infrastructure in production.',
    capabilities: 'PROTOCOL OWNERSHIP · AMMS · GOVERNANCE · INCENTIVES · MULTI-CHAIN DELIVERY',
    links: [{ label: 'SOURCE CODE ↗', href: 'https://github.com/symmetricfinance' }],
  },
  datadex: {
    kicker: 'ECOSYSTEM INFRASTRUCTURE / 02',
    title: 'DataDex × Vana',
    summary: 'Exchange, liquidity and market infrastructure delivered in collaboration with the Vana Foundation.',
    context: 'The Vana ecosystem needed purpose-built market infrastructure for a new network: an exchange experience, liquidity management and the data layer required to make markets legible and usable.',
    role: 'I worked with the Vana Foundation to take the system from product shape through full-stack delivery, joining the interface, contracts, network integrations and data infrastructure into one release path.',
    built: ['DEX interface and pool management', 'Routing and network integrations', 'Subgraphs for protocol and market data', 'Analytics for liquidity and trading activity'],
    depth: [
      { label: 'Delivery mode', value: 'Ecosystem collaboration' },
      { label: 'System surface', value: 'Interface · pools · routes · indexing · analytics' },
      { label: 'Network', value: 'Vana blockchain' },
    ],
    outcome: 'A purpose-built exchange and liquidity foundation for the Vana ecosystem — more than a front end, with the infrastructure underneath to support markets.',
    capabilities: 'ECOSYSTEM DELIVERY · DEX ENGINEERING · INDEXING · ANALYTICS · FULL-STACK',
    links: [{ label: 'VANA FOUNDATION ↗', href: 'https://vana.org/' }],
  },
  setwise: {
    kicker: 'TOKENIZED ASSETS / 03',
    title: 'Setwise',
    summary: 'An original Ceno protocol for tokenized-asset discovery, portfolio products, market data and multi-source execution.',
    context: 'Setwise is being designed for a market where tokenized financial assets come from multiple issuers and execution cannot be assumed to live in one venue or one chain.',
    role: 'Ceno is shaping the protocol from first principles: modelling issuer markets, designing routing and RFQ execution, and treating cross-chain settlement and security controls as core system concerns.',
    built: ['Multi-issuer tokenized-asset market modelling', 'Routing and RFQ execution', 'Cross-chain settlement flows', 'Governance and smart-contract security controls'],
    depth: [
      { label: 'Protocol type', value: 'Original Ceno protocol' },
      { label: 'Execution', value: 'Multi-source routing and RFQ' },
      { label: 'Status', value: 'IN DEVELOPMENT' },
    ],
    outcome: 'Setwise remains in development while the protocol is simplified and prepared for a public launch.',
    capabilities: 'RWA INFRASTRUCTURE · PROTOCOL DESIGN · ROUTING · GOVERNANCE · SMART-CONTRACT SECURITY',
    links: [],
  },
}

function CaseStudy({ projectKey }: { projectKey: ProjectKey }) {
  const project = caseStudies[projectKey]
  const data = projectData[projectKey]
  return (
    <>
      <Header compact />
      <main id="main" className="case-study">
        <div className="case-container">
          <a className="back-link" href="/#work">← BACK TO SELECTED WORK</a>
          <div className="case-hero">
            <div><p className="eyebrow">{project.kicker}</p><h1>{project.title}{data.status && <span className="case-status">{data.status}</span>}</h1><p className="case-summary">{project.summary}</p></div>
            <SystemGraphic variant={data.variant} />
          </div>
          <div className="case-grid">
            <CaseBlock label="CONTEXT / CHALLENGE" text={project.context} />
            <CaseBlock label="CENO'S ROLE" text={project.role} />
          </div>
          <section className="case-section"><div className="case-label">WHAT WAS BUILT</div><div className="built-grid">{project.built.map((item, index) => <div className="built-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></section>
          <section className="case-section technical-depth"><div className="case-label">TECHNICAL DEPTH / NOTABLE SYSTEMS</div><div className="depth-list">{project.depth.map((item) => <div className="depth-row" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div></section>
          <section className="case-section outcome-section"><div className="case-label">OUTCOME / CURRENT STATUS</div><p>{project.outcome}</p></section>
          <div className="case-footer-grid"><div><div className="case-label">WHAT THIS DEMONSTRATES</div><p className="case-capabilities">{project.capabilities}</p></div><div><div className="case-label">LINKS</div><div className="case-links">{project.links.length ? project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>) : <span className="muted-link">PUBLIC LINK PENDING LAUNCH</span>}</div></div></div>
          <a className="case-cta" href="/#contact"><span>BUILDING SOMETHING ONCHAIN?</span><strong>START A PROJECT <Arrow /></strong></a>
        </div>
      </main>
      <Footer />
    </>
  )
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return <div className="case-block"><div className="case-label">{label}</div><p>{text}</p></div>
}

function Privacy() {
  return (
    <>
      <Header compact />
      <main id="main" className="privacy-page"><div className="case-container"><a className="back-link" href="/">← BACK TO HOME</a><p className="eyebrow">LEGAL / PRIVACY</p><h1>Privacy notice</h1><div className="privacy-copy"><p>Ceno Studio is operated by Ceno Labs Ltd. This notice explains how information sent through the project intake form is handled.</p><h2>Project enquiries</h2><p>When you send an enquiry, the name, email address, project details, budget and timeline you provide are used to respond to your request and discuss a potential engagement. The form opens your email client to send the brief to hello@ceno.studio; no form data is stored by this website.</p><h2>Contact</h2><p>For questions about this notice, email <a href="mailto:hello@ceno.studio">hello@ceno.studio</a>.</p><p className="privacy-updated">LAST UPDATED / SEPTEMBER 2026</p></div></div></main>
      <Footer />
    </>
  )
}

function Footer() {
  return <footer className="site-footer"><div className="site-container footer-grid"><a className="brand-link" href="/"><Mark /></a><p>Onchain finance, engineered<br />end to end.</p><div className="footer-links"><a href="/privacy">PRIVACY</a><a href="mailto:hello@ceno.studio">EMAIL ↗</a></div><div className="footer-legal"><span>CENO STUDIO IS OPERATED BY CENO LABS LTD.</span><span>© {new Date().getFullYear()} CENO STUDIO</span></div><a className="back-top" href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</a></div></footer>
}

export function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const pageTitle = path === '/'
    ? 'Ceno Studio — Onchain finance, engineered end to end.'
    : path === '/privacy'
      ? 'Ceno Studio — Privacy notice'
      : caseStudies[path.replace('/work/', '') as ProjectKey]
        ? `${caseStudies[path.replace('/work/', '') as ProjectKey].title} — Ceno Studio`
        : 'Ceno Studio — Onchain finance, engineered end to end.'
  document.title = pageTitle
  if (path === '/privacy') return <Privacy />
  if (path === '/work/symmetric') return <CaseStudy projectKey="symmetric" />
  if (path === '/work/datadex') return <CaseStudy projectKey="datadex" />
  if (path === '/work/setwise') return <CaseStudy projectKey="setwise" />
  return <Home />
}
