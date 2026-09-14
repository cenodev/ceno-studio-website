import symmetricMark from "../assets/symmetric-mark.svg";
import type { CaseStudy } from "../content/site";

const LOOP = "M65 120C135 18 265 222 335 120C265 18 135 222 65 120Z";

export function ProjectVisual({ work }: { work: CaseStudy }) {
  if (work.visual === "symmetric") {
    return (
      <div className="project-visual visual-symmetric" aria-hidden="true">
        <div className="project-grid-lines"></div>
        <svg className="symmetry-loop" viewBox="0 0 400 240">
          <path d={LOOP} />
          <circle className="sym-particle" r="5">
            <animateMotion dur="4.5s" repeatCount="indefinite" path={LOOP} />
          </circle>
          <circle className="sym-particle sym-particle-alt" r="5">
            <animateMotion begin="-2.25s" dur="4.5s" repeatCount="indefinite" path={LOOP} />
          </circle>
        </svg>
        <div className="balance-node balance-node-left">
          <b>50%</b>
          <span>POOL A</span>
        </div>
        <div className="balance-node balance-node-right">
          <b>50%</b>
          <span>POOL B</span>
        </div>
        <div className="project-logo-frame symmetric-logo">
          <img src={symmetricMark} alt="" />
        </div>
        <span className="visual-label">LIQUIDITY / BALANCED</span>
      </div>
    );
  }

  if (work.visual === "datadex") {
    return (
      <div className="project-visual visual-regen" aria-hidden="true">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>
        <div className="project-logo-frame regen-logo">
          <b className="schematic-mark">DX</b>
        </div>
        <span className="visual-label">VANA / EXCHANGE</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-cable" aria-hidden="true">
      <div className="cable-rail">
        <i className="cable-packet"></i>
        <i className="cable-packet cable-packet-alt"></i>
      </div>
      <div className="cable-endpoint cable-fiat">
        <b>RWA</b>
        <span>DISCOVERY</span>
      </div>
      <div className="project-logo-frame cable-logo">
        <b className="schematic-mark schematic-mark-light">SW</b>
      </div>
      <div className="cable-endpoint cable-crypto">
        <b>RFQ</b>
        <span>EXECUTION</span>
      </div>
      <div className="zk-stamp">
        DEV
        <br />
        /
      </div>
      <span className="visual-label">TOKENIZED / IN DEVELOPMENT</span>
    </div>
  );
}
