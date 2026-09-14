import './styles.css';

// Interaction language mirrors the ceno.dev baseline:
// fixed header w/ scroll states, reveal-on-scroll, async intake form.

function initHeader(): void {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!(header instanceof HTMLElement)) return;

  const closeMenu = (): void => {
    toggle?.setAttribute('aria-expanded', 'false');
    header.classList.remove('menu-open');
  };
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('menu-open', !expanded);
  });
  mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  let lastY = 0;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 20);
      header.classList.toggle('is-hidden', y > lastY && y > 160 && !header.classList.contains('menu-open'));
      lastY = y;
    },
    { passive: true },
  );
}

function initReveal(): void {
  const els = Array.from(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

function initYear(): void {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  const status = document.querySelector<HTMLElement>('[data-form-status]');
  const submit = document.querySelector<HTMLButtonElement>('[data-submit-button]');
  const label = document.querySelector<HTMLElement>('[data-submit-label]');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const original = label?.textContent ?? 'Send project brief';
    if (submit) submit.disabled = true;
    if (label) label.textContent = 'Transmitting…';
    if (status) {
      status.textContent = 'Securely sending your project brief…';
      status.className = 'form-status';
    }
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) throw new Error(data.message || 'The form could not be sent.');
      form.reset();
      if (status) {
        status.textContent = 'Brief received. I’ll be in touch shortly.';
        status.className = 'form-status is-success';
      }
    } catch {
      if (status) {
        status.textContent = 'Something went wrong. Please wait a moment and try again.';
        status.className = 'form-status is-error';
      }
    } finally {
      if (submit) submit.disabled = false;
      if (label) label.textContent = original;
    }
  });

  // Plain-text fallback: copy the brief for manual emailing.
  document.querySelector<HTMLButtonElement>('[data-copy-brief]')?.addEventListener('click', async () => {
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const text = [
      'To: hello@ceno.studio',
      `Subject: Project brief — ${String(fd.get('company') || 'new enquiry')}`,
      ``,
      `Name: ${String(fd.get('name') ?? '')}`,
      `Email: ${String(fd.get('email') ?? '')}`,
      `Project: ${String(fd.get('company') ?? '')}`,
      `Budget: ${String(fd.get('budget') ?? '')}`,
      `Timeline: ${String(fd.get('timeline') ?? '')}`,
      ``,
      String(fd.get('message') ?? ''),
    ].join('\n');
    try {
      await navigator.clipboard.writeText(text);
      if (status) {
        status.textContent = 'Brief copied — paste it into an email to hello@ceno.studio.';
        status.className = 'form-status is-success';
      }
    } catch {
      if (status) {
        status.textContent = 'Clipboard blocked — email hello@ceno.studio directly.';
        status.className = 'form-status is-error';
      }
    }
  });
}

initHeader();
initReveal();
initYear();
initForm();
