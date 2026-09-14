export function initHeader(): void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const mobileNav = document.querySelector<HTMLElement>(".mobile-nav");
  if (!header || !toggle || !mobileNav) return;

  const closeMenu = (): void => {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("menu-open", !open);
  });

  mobileNav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", closeMenu)
  );

  let last = window.scrollY;
  const sync = (): void => {
    const y = window.scrollY;
    header.classList.toggle("at-top", y <= 20);
    header.classList.toggle(
      "is-hidden",
      y > last && y > 160 && !header.classList.contains("menu-open")
    );
    last = y;
  };
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

export function initReveals(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

export function initYear(): void {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}

export function initCommon(): void {
  initHeader();
  initReveals();
  initYear();
}
