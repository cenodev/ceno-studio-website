interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

export function initIntakeForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  const status = document.querySelector<HTMLElement>("[data-form-status]");
  const button = document.querySelector<HTMLButtonElement>("[data-submit-button]");
  const label = document.querySelector<HTMLElement>("[data-submit-label]");
  if (!form || !status || !button || !label) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const original = label.textContent ?? "";
    button.disabled = true;
    label.textContent = "Transmitting…";
    status.textContent = "Securely sending your project brief…";
    status.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as Web3FormsResponse;
      if (!response.ok || !result.success) {
        throw new Error(result.message || "The form could not be sent.");
      }
      form.reset();
      status.textContent =
        "Brief received. I'll read it personally and reply within 1–2 business days.";
      status.className = "form-status is-success";
    } catch {
      status.textContent =
        "Something went wrong. Please wait a moment and try again, or email hello@ceno.studio.";
      status.className = "form-status is-error";
    } finally {
      button.disabled = false;
      label.textContent = original;
    }
  });
}
