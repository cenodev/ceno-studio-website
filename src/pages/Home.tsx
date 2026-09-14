import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { HeroSystem } from "../components/HeroSystem";
import { ProjectVisual } from "../components/ProjectVisual";
import { ServiceIcon } from "../components/ServiceIcon";
import { ECOSYSTEMS, PROCESS, SITE, STACK, SYSTEMS, WAYS, WORK } from "../content/site";
import { usePageMeta } from "../hooks/usePage";

function Marquee({ items, label }: { items: readonly string[]; label: string }) {
  const cells = items.flatMap((item) => [
    <span key={`label-${item}`}>{item}</span>,
    <i key={`sep-${item}`}></i>,
  ]);

  return (
    <div className="capability-marquee" aria-label={label}>
      <div className="marquee-track">
        <div className="marquee-set">{cells}</div>
        <div className="marquee-set" aria-hidden="true">
          {items.flatMap((item) => [
            <span key={`dup-label-${item}`}>{item}</span>,
            <i key={`dup-sep-${item}`}></i>,
          ])}
        </div>
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
            Independent protocol studio
            <span>UK / GLOBAL</span>
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

      <section className="proof section-dark" id="proof">
        <div className="section-heading section-heading-dark reveal">
          <div className="section-kicker">
            <span>02</span> Ecosystem proof
          </div>
          <h2>Built with leading onchain ecosystems.</h2>
          <p>Grant-funded development, ecosystem infrastructure and custom protocol engineering.</p>
        </div>
      </section>
      <Marquee items={ECOSYSTEMS} label="Ecosystems" />

      <section className="work section-dark" id="work">
        <div className="section-heading section-heading-dark reveal">
          <div className="section-kicker">
            <span>03</span> Selected work
          </div>
          <h2>
            Built in the <em>real world.</em>
          </h2>
          <p>
            Production systems and original protocol work — designed and engineered from first
            principles.
          </p>
        </div>

        <div className="project-list">
          {WORK.map((project) => (
            <article key={project.slug} className={`project-card ${project.card} reveal`}>
              <div className="project-meta">
                <span>{project.meta[0]}</span>
                {project.status ? <span className="coming-soon">{project.status}</span> : <span>{project.meta[1]}</span>}
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
                  {project.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tech">{project.tags}</div>
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

        <div className="service-grid">
          {WAYS.map((item) => (
            <article
              key={item.number}
              className={`service-card reveal${item.featured ? " service-card-featured" : ""}${item.small ? " service-card-small" : ""}`}
            >
              <div className="service-number">{item.number}</div>
              <ServiceIcon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.summary} {item.detail}
                </p>
              </div>
              <div className="service-tags">
                <span className="service-price">{item.price}</span>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-light systems-intro" id="systems">
        <div className="section-heading reveal">
          <div className="section-kicker">
            <span>05</span> What I work on
          </div>
          <h2>
            Onchain financial <em>systems.</em>
          </h2>
          <p>Protocol surfaces and the delivery stack I work with.</p>
        </div>
      </section>
      <Marquee items={[...SYSTEMS, ...STACK]} label="Onchain systems and delivery stack" />

      <section className="services section-light" id="about">
        <div className="section-heading reveal">
          <div className="section-kicker">
            <span>06</span> About
          </div>
          <h2>
            A solo studio for <em>onchain finance.</em>
          </h2>
          <p>When you hire the studio, you work directly with the person designing and building the system.</p>
        </div>
        <div className="service-grid">
          <article className="service-card service-card-featured reveal">
            <div className="service-number">01</div>
            <ServiceIcon name="lead" />
            <div>
              <h3>Stephen Horsfall</h3>
              <p>
                I'm Stephen Horsfall, founder and sole operator of Ceno Studio. I've been building
                onchain systems since 2018, working across protocol architecture, smart contracts,
                governance, incentives, indexing, interfaces and production deployments.
              </p>
            </div>
            <div className="service-tags">
              <span>Founder</span>
              <span>Sole operator</span>
              <span>Since 2018</span>
            </div>
          </article>
          <article className="service-card reveal">
            <div className="service-number">02</div>
            <ServiceIcon name="pulse" />
            <div>
              <h3>Deliberately small</h3>
              <p>
                Ceno is deliberately small. There is no hidden delivery team. I take senior technical
                ownership of the work — including internal security review — and independent audit
                remains a separate third-party engagement unless a proposal says otherwise.
              </p>
            </div>
            <div className="service-tags">
              <span>Independent studio</span>
              <span>Ceno Labs Ltd</span>
            </div>
          </article>
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

      <section className="principle">
        <div className="principle-grid" aria-hidden="true"></div>
        <div className="principle-copy reveal">
          <span className="principle-label">CENO PRINCIPLE / 001</span>
          <p>One builder.</p>
          <p>
            Direct <em>ownership.</em>
          </p>
          <div>
            Ceno is deliberately small. When you hire the studio, you work with the person designing
            and building the system.
          </div>
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
