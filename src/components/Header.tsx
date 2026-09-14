import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import wordmark from "../assets/ceno-wordmark.svg";
import { NAV } from "../content/site";

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > last && y > 160 && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const headerClass = [
    "site-header",
    scrolled || location.pathname !== "/" ? "is-scrolled" : "",
    hidden ? "is-hidden" : "",
    open ? "menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass} data-header>
      <Link className="brand" to="/" aria-label="Ceno Studio home">
        <img src={wordmark} alt="Ceno" />
        <span>STUDIO</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link className="header-cta" to="/#contact">
        Start a project <span aria-hidden="true">↗</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span></span>
        <span></span>
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
        <Link to="/#contact">Start a project ↗</Link>
      </nav>
    </header>
  );
}
