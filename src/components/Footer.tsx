import { Link } from "react-router-dom";
import wordmark from "../assets/ceno-wordmark.svg";

export function Footer() {
  return (
    <footer>
      <Link className="brand footer-brand" to="/#top" aria-label="Back to top">
        <img src={wordmark} alt="Ceno" />
        <span>STUDIO</span>
      </Link>
      <p>
        Independent protocol studio for onchain finance.
        <span className="footer-legal">Ceno Studio is operated by Ceno Labs Ltd. · <Link to="/privacy">Privacy</Link></span>
      </p>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} CENO STUDIO</span>
        <Link to="/#top">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
