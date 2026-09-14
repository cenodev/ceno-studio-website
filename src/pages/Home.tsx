import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { HeroSystem } from "../components/HeroSystem";
import { ProjectVisual } from "../components/ProjectVisual";
import { ECOSYSTEMS, PROCESS, SITE, STACK, SYSTEMS, WAYS, WORK } from "../content/site";
import { usePageMeta } from "../hooks/usePage";

function MarqueeRow({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {items.flatMap((item) => [
        <span key={`label-${item}`}>{item}</span>,
        <i key={`sep-${item}`}></i>,
      ])}
    </div>
  );
}

function Marquee({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="capability-marquee" aria-label={label}>
      <div className="marquee-track">
        <MarqueeRow items={items} />
        <MarqueeRow items={items} hidden />
      </div>
    </div>
  );
}

export function HomePage() {
  usePageMeta(SITE.title, SITE.description, "/");

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-one" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-two" aria-hidden="true"></div>

        <div className="hero-copy reveal">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot"></span>
            Independent protocol studio / Global
            <span>UK / GLASGOW</span>
          </div>
          <h1>
            Onchain finance, engineered <em>end to end.</em>
          </h1>
          <p>A solo protocol studio helping teams design, build and launch onchain financial systems.</p>
          <p>
            Protocol architecture, smart contracts, interfaces and infrastructure — from idea to
            production.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#contact">
              <span>Start a project</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-ghost" to="/#work">
              <span>View work</span>
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <HeroSystem />
        <div className="hero-index" aria-hidden="true">
          01
        </div>
      </section>

      <section className="proof" id="proof">
        <div className="proof-heading reveal">
          <div className="section-kicker">
            <span>02</span> Ecosystem proof
          </div>
          <h2>Built with leading onchain ecosystems.</h2>
          <p>Grant-funded development, ecosystem infrastructure and custom protocol engineering.</p>
        </div>
        <div className="ecosystem-rail reveal">
          {ECOSYSTEMS.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className="work section-dark" id="work">
        <div className="section-heading section-heading-dark reveal">
          <div className="section-kicker">
            <span>03</span> Selected work
          </div>
          <h2>
            Built in the <em>real world.</em>
          </h2>
          <p>
            Three production engagements spanning multi-chain DeFi, ecosystem infrastructure and an
            original Ceno protocol.
          </p>
        </div>

        <div className="project-list">
          {WORK.map((project, index) => (
            <article
              key={project.slug}
              className={`project-card reveal ${
                project.slug === "symmetric"
                  ? "project-green project-card-wide"
                  : project.slug === "datadex"
                    ? "project-cyan"
                    : "project-black"
              }`}
            >
              <div className="project-meta">
                <span>
                  {project.number} / {project.label}
                </span>
                {project.status ? <span className="coming-soon">{project.status}</span> : <span>Case study</span>}
              </div>
              <ProjectVisual work={project} />
              <div className="project-body">
                <div>
                  {project.status ? (
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span className="coming-soon">{project.status}</span>
                    </div>
                  ) : (
                    <h3>{project.title}</h3>
                  )}
                  <p>{project.summary}</p>
                  <Link className="project-source" to={project.href}>
                    View project <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <ul>
                  {project.demonstrates
                    .split(" · ")
                    .slice(0, 3)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="project-tech">{project.tags}</div>
              <span className="sr-only">Project {index + 1}</span>
            </article>
          ))}
        </div>
        <p className="work-support reveal">
          Supporting ecosystem / protocol work — Balancer · Tezos · Taiko · Vana · Revolv
        </p>
      </section>

      <section className="services section-light" id="ways">
        <div className="section-heading reveal">
          <div className="section-kicker">
            <span>04</span> Ways to work
          </div>
          <h2>
            Ways to work <em>with me.</em>
          </h2>
          <p>Short, priced engagements. You work with me directly on the protocol.</p>
        </div>

        <div className="service-grid ways-grid">
          {WAYS.map((item) => (
            <article
              key={item.number}
              className={`service-card reveal${item.featured ? " service-card-featured" : ""}`}
            >
              <div className="service-number">{item.number}</div>
              <div className="service-price">{item.price}</div>
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.summary} {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-light" id="systems" style={{ paddingTop: 0 }}>
        <div className="section-heading reveal">
          <div className="section-kicker">
            <span>05</span> What I work on
          </div>
          <h2>
            Onchain financial <em>systems.</em>
          </h2>
          <p>A compact view of the protocol surfaces and delivery stack I work with.</p>
        </div>
        <div className="stack-grid">
          <div className="stack-panel reveal">
            <h3>Systems</h3>
            <div className="stack-chips">
              {SYSTEMS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="stack-panel reveal">
            <h3>Stack</h3>
            <div className="stack-chips">
              {STACK.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee items={[...SYSTEMS, ...STACK]} label="Onchain systems and delivery stack" />

      <section className="section-light" id="about">
        <div className="section-heading reveal">
          <div className="section-kicker">
            <span>06</span> About
          </div>
          <h2>
            A solo studio for <em>onchain finance.</em>
          </h2>
          <p>When you hire the studio, you work directly with the person designing and building the system.</p>
        </div>
        <div className="about-grid reveal">
          <div className="about-panel">
            <div className="eyebrow">
              <span className="status-dot"></span>
              Founder / sole operator
            </div>
            <h3>Stephen Horsfall</h3>
            <p>
              I'm Stephen Horsfall, founder and sole operator of Ceno Studio. I've been building
              onchain systems since 2018, working across protocol architecture, smart contracts,
              governance, incentives, indexing, interfaces and production deployments.
            </p>
            <p>
              Ceno is deliberately small. There is no hidden delivery team. I take senior technical
              ownership of the work — including internal security review — and independent audit
              remains a separate third-party engagement unless a proposal says otherwise.
            </p>
          </div>
          <div className="about-meta">
            <div>
              <span>Studio</span>
              <b>Independent protocol studio</b>
            </div>
            <div>
              <span>Focus</span>
              <b>Onchain financial systems</b>
            </div>
            <div>
              <span>Operator</span>
              <b>One senior builder</b>
            </div>
            <div>
              <span>Legal entity</span>
              <b>Ceno Labs Ltd</b>
            </div>
          </div>
        </div>
      </section>

      <section className="process section-light" id="process">
        <div className="process-intro reveal">
          <div className="section-kicker">
            <span>07</span> How I work
          </div>
          <h2>
            Design → Build → Secure → <em>Launch</em>
          </h2>
        </div>
        <div className="process-grid">
          {PROCESS.map((step) => (
            <article className="process-step reveal" key={step.number}>
              <div className="process-number">{step.number}</div>
              <div className="process-line">
                <i></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <span>{step.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy reveal">
          <div className="section-kicker">
            <span>08</span> Start a project
          </div>
          <h2>Building something onchain?</h2>
          <p>Tell me what you're working on.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
