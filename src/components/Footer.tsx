import { Link } from "react-router-dom";
import wordmark from "../assets/ceno-wordmark.svg";

export function Footer() {
  return (
    <footer>
      <Link className="brand footer-brand" to="/" aria-label="Ceno Studio home">
        <img src={wordmark} alt="Ceno" />
        <span>STUDIO</span>
      </Link>
      <p className="site-footer-copy">
        Independent protocol studio for onchain finance.
        <span className="footer-legal">Ceno Studio is operated by Ceno Labs Ltd.</span>
      </p>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} CENO STUDIO</span>
        <Link to="/privacy">Privacy</Link>
        <Link to="/#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
