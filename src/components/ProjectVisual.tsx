import symmetricMark from "../assets/symmetric-mark.svg";
import type { CaseStudy } from "../content/site";

export function ProjectVisual({ work }: { work: CaseStudy }) {
  if (work.visual === "symmetric") {
    return (
      <div className="project-visual visual-symmetric" aria-hidden="true">
        <div className="project-grid-lines"></div>
        <svg className="symmetry-loop" viewBox="0 0 400 240">
          <path d="M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z" />
          <circle className="sym-particle" r="5">
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z" />
          </circle>
          <circle className="sym-particle sym-particle-alt" r="5">
            <animateMotion
              begin="-2.25s"
              dur="4.5s"
              repeatCount="indefinite"
              path="M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z"
            />
          </circle>
        </svg>
        <div className="balance-node balance-node-left">
          <b>80%</b>
          <span>POOL A</span>
        </div>
        <div className="balance-node balance-node-right">
          <b>20%</b>
          <span>POOL B</span>
        </div>
        <div className="project-logo-frame symmetric-logo">
          <img src={symmetricMark} alt="" />
        </div>
        <span className="visual-label">LIQUIDITY / WEIGHTED</span>
      </div>
    );
  }

  if (work.visual === "datadex") {
    return (
      <div className="project-visual visual-datadex" aria-hidden="true">
        <div className="project-grid-lines"></div>
        <div className="route-lines">
          <svg viewBox="0 0 400 240" role="presentation">
            <path d="M50 40 L200 120 L350 40" />
            <path d="M50 200 L200 120 L350 200" />
            <path d="M50 40 L50 200" />
            <path d="M350 40 L350 200" />
          </svg>
        </div>
        <div className="dex-node" style={{ top: "14%", left: "8%" }}>
          <span>SOURCE</span>
          <b>DLP</b>
        </div>
        <div className="dex-node" style={{ top: "14%", right: "8%" }}>
          <span>ROUTE</span>
          <b>V3</b>
        </div>
        <div className="dex-node" style={{ bottom: "16%", left: "8%" }}>
          <span>INDEX</span>
          <b>SUBGRAPH</b>
        </div>
        <div className="dex-node" style={{ bottom: "16%", right: "8%" }}>
          <span>MARKET</span>
          <b>ANALYTICS</b>
        </div>
        <div className="dex-hub">
          DataDex
          <br />
          × Vana
        </div>
        <span className="visual-label">ECOSYSTEM / EXCHANGE</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-setwise" aria-hidden="true">
      <div className="project-grid-lines"></div>
      <div className="set-grid">
        <div className="set-cell">RWA</div>
        <div className="set-cell">RFQ</div>
        <div className="set-cell">ROUTE</div>
        <div className="set-cell">SETTLE</div>
      </div>
      <span className="coming-soon" style={{ position: "absolute", top: "1rem", left: "1rem" }}>
        In development
      </span>
      <span className="visual-label">TOKENIZED ASSETS / PROTOCOL</span>
    </div>
  );
}
