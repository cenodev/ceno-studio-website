const header = document.querySelector<HTMLElement>("[data-header]");
const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileNav = document.querySelector<HTMLElement>(".mobile-nav");

const closeMenu = () => {
  if (!header || !menuToggle) return;
  menuToggle.setAttribute("aria-expanded", "false");
  header.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  if (!header) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("menu-open", !isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

let lastScrollY = 0;

window.addEventListener(
  "scroll",
  () => {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 20);
    header.classList.toggle(
      "is-hidden",
      y > lastScrollY && y > 160 && !header.classList.contains("menu-open"),
    );
    lastScrollY = y;
  },
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

document.querySelectorAll<HTMLElement>("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
const statusEl = document.querySelector<HTMLElement>("[data-form-status]");
const submitButton = document.querySelector<HTMLButtonElement>("[data-submit-button]");
const submitLabel = document.querySelector<HTMLElement>("[data-submit-label]");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const label = submitLabel?.textContent ?? "";
  if (submitButton) submitButton.disabled = true;
  if (submitLabel) submitLabel.textContent = "Transmitting…";
  if (statusEl) {
    statusEl.textContent = "Securely sending your project brief…";
    statusEl.className = "form-status";
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    const result = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !result.success) {
      throw new Error(result.message || "The form could not be sent.");
    }
    form.reset();
    if (statusEl) {
      statusEl.textContent = "Message received. I'll be in touch shortly.";
      statusEl.className = "form-status is-success";
    }
  } catch {
    if (statusEl) {
      statusEl.textContent = "Something went wrong. Please wait a moment and try again.";
      statusEl.className = "form-status is-error";
    }
  } finally {
    if (submitButton) submitButton.disabled = false;
    if (submitLabel) submitLabel.textContent = label;
  }
});
