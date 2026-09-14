import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectVisual } from "../components/ProjectVisual";
import { SITE, workBySlug } from "../content/site";
import { usePageMeta } from "../hooks/usePage";

export function CaseStudyPage() {
  const { slug } = useParams();
  const work = slug ? workBySlug(slug) : undefined;

  if (!work) {
    return <Navigate to="/" replace />;
  }

  return <CaseStudyBody work={work} />;
}

function CaseStudyBody({ work }: { work: NonNullable<ReturnType<typeof workBySlug>> }) {
  usePageMeta(`${work.title} — ${SITE.brand}`, work.outcome, work.href);

  const sections = [
    { index: "02 / Context", title: "Context / challenge", body: work.context },
    { index: "03 / Role", title: "Ceno's role", body: work.role },
    { index: "04 / Build", title: "What was built", body: work.built, list: true },
    { index: "05 / Systems", title: "Technical depth", body: work.systems },
    { index: "06 / Status", title: work.status ? "Current status" : "Outcome", body: work.result },
  ];

  return (
    <>
      <section className="case-hero" id="top">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="case-hero-copy reveal">
          <Link className="case-back" to="/#work">
            ← Back to work
          </Link>
          <div className="eyebrow">
            <span className="status-dot"></span>
            {work.number} / {work.label}
          </div>
          <h1>{work.title}</h1>
          <p>{work.outcome}</p>
          {work.status ? <span className="case-status">{work.status}</span> : null}
        </div>
        <div className="case-schematic reveal">
          <ProjectVisual work={work} />
        </div>
        <div className="page-index" aria-hidden="true">
          {work.number}
        </div>
      </section>

      <section className="notes section-light">
        {sections.map((section) => (
          <article className="notes-grid reveal" key={section.index}>
            <div className="notes-index">{section.index}</div>
            <div>
              <h2>{section.title}</h2>
              {"list" in section && section.list ? (
                <ul>
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                section.body.map((item) => <p key={item}>{item}</p>)
              )}
            </div>
          </article>
        ))}

        <article className="notes-grid reveal">
          <div className="notes-index">07 / Links</div>
          <div>
            <h2>References</h2>
            {work.links.length ? (
              <div className="notes-links">
                {work.links.map((link) => (
                  <a className="project-source" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            ) : (
              <p>No public product or source links yet. Setwise remains in development until launch.</p>
            )}
            <p className="capability-line">What this demonstrates — {work.demonstrates}</p>
          </div>
        </article>
      </section>
    </>
  );
}
