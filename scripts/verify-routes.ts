import { JSDOM } from "jsdom";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { App } from "../src/App";

const routes = ["/", "/work/symmetric", "/work/datadex", "/work/setwise", "/privacy"] as const;

const expectations: Record<(typeof routes)[number], string[]> = {
  "/": [
    "Ceno Studio",
    "Onchain finance, engineered",
    "solo protocol studio",
    "Symmetric Finance",
    "DataDex × Vana",
    "Setwise",
    "IN DEVELOPMENT",
    "Protocol Design Sprint",
    "From $3,000",
    "Protocol Build",
    "From $10,000",
    "Upgrade &amp; Migration",
    "Fractional Protocol Lead",
    "From $6,000/month",
    "Stephen Horsfall",
    "PROJECT INTAKE / 001",
    "Ceno Studio is operated by Ceno Labs Ltd.",
  ],
  "/work/symmetric": [
    "Symmetric Finance",
    "Multi-chain DeFi",
    "Balancer-based",
    "Taiko",
    "Source code",
  ],
  "/work/datadex": [
    "DataDex × Vana",
    "Vana Foundation",
    "ecosystem",
    "datadex.com",
  ],
  "/work/setwise": [
    "Setwise",
    "IN DEVELOPMENT",
    "tokenized",
    "original Ceno protocol",
  ],
  "/privacy": ["Privacy notice", "Ceno Labs Ltd", "ceno.studio"],
};

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "https://ceno.studio/",
  pretendToBeVisual: true,
});

const { window } = dom;
globalThis.window = window as unknown as Window & typeof globalThis;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
globalThis.Node = window.Node;
globalThis.getComputedStyle = window.getComputedStyle.bind(window);

class Observer {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = Observer as unknown as typeof IntersectionObserver;
globalThis.IntersectionObserver = Observer as unknown as typeof IntersectionObserver;
window.matchMedia = () =>
  ({
    matches: true,
    media: "",
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() {
      return false;
    },
    onchange: null,
  }) as MediaQueryList;

let failed = 0;
for (const route of routes) {
  const html = renderToString(
    createElement(MemoryRouter, { initialEntries: [route] }, createElement(App)),
  );
  const missing = expectations[route].filter((snippet) => !html.includes(snippet));
  if (missing.length) {
    failed += 1;
    console.error(`FAIL ${route}`);
    for (const snippet of missing) console.error(`  missing: ${snippet}`);
  } else {
    console.log(`OK   ${route} (${html.length} chars)`);
  }
}

if (failed) {
  process.exit(1);
}
