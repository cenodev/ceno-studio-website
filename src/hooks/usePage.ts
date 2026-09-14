import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "../content/site";

export function usePageMeta(title: string, description: string, path = "/") {
  const canonical = `${SITE.domain}${path}`;

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [title, description, canonical]);
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let node = document.querySelector(`meta[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return () => window.cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [location.pathname, location.hash]);
}
