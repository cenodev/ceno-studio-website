import { useEffect, type RefObject } from "react";
import { useLocation } from "react-router-dom";

export function useReveal(root: RefObject<HTMLElement | null>) {
  const location = useLocation();

  useEffect(() => {
    const scope = root.current ?? document;
    const nodes = Array.from(scope.querySelectorAll(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [root, location.pathname]);
}
