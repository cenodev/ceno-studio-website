import { useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useHashScroll } from "./hooks/usePage";
import { useReveal } from "./hooks/useReveal";
import { CaseStudyPage } from "./pages/CaseStudy";
import { HomePage } from "./pages/Home";
import { PrivacyPage } from "./pages/Privacy";

export function App() {
  const root = useRef<HTMLDivElement>(null);
  useHashScroll();
  useReveal(root);

  return (
    <div className="page-shell" ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
