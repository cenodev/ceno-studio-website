import mark from "../assets/ceno-mark.svg";

export function HeroSystem() {
  return (
    <div className="hero-system reveal" aria-label="Ceno protocol systems graphic">
      <div className="system-topbar">
        <span>CENO // PROTOCOL</span>
        <span className="system-live">
          <i></i> SYSTEM ONLINE
        </span>
      </div>
      <div className="system-canvas">
        <div className="system-coordinates">
          55.8642° N
          <br />
          4.2518° W
        </div>
        <div className="network-lines" aria-hidden="true">
          <svg viewBox="0 0 640 480" role="presentation">
            <path className="line line-a" d="M70 360 L178 265 L302 302 L402 168 L570 98" />
            <path className="line line-b" d="M178 265 L245 118 L402 168 L510 354" />
            <path className="line line-c" d="M302 302 L510 354 L570 98" />
            <circle cx="70" cy="360" r="5" />
            <circle cx="178" cy="265" r="7" />
            <circle cx="245" cy="118" r="5" />
            <circle cx="302" cy="302" r="5" />
            <circle cx="402" cy="168" r="8" />
            <circle cx="510" cy="354" r="5" />
            <circle cx="570" cy="98" r="5" />
          </svg>
        </div>
        <div className="system-logo-wrap">
          <div className="logo-shadow" aria-hidden="true"></div>
          <img src={mark} alt="" />
          <div className="logo-index">
            NODE
            <br />
            001
          </div>
        </div>
        <div className="data-chip chip-one">
          <span>MODE</span>
          <b>SOLO</b>
        </div>
        <div className="data-chip chip-two">
          <span>SCOPE</span>
          <b>PROTOCOL</b>
        </div>
        <div className="data-chip chip-three">
          <span>STATUS</span>
          <b>ONLINE</b>
        </div>
      </div>
      <div className="system-footer">
        <span>SECURE BY DESIGN</span>
        <span>PROGRAMMABLE BY DEFAULT</span>
        <span>BUILT TO SCALE</span>
      </div>
    </div>
  );
}
