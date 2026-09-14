import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "a97a26d4-af72-44d5-9ca0-5fa60ed4c87c";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setState("sending");
    setMessage("Securely sending your project brief…");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const payload = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "The form could not be sent.");
      }
      form.reset();
      setState("success");
      setMessage("Message received. I will be in touch shortly.");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please wait a moment and try again.");
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New project enquiry — Ceno Studio" />
      <input type="hidden" name="from_name" value="Ceno Studio website" />
      <div className="botcheck" aria-hidden="true">
        <label htmlFor="contact-botcheck">Leave this field empty</label>
        <input id="contact-botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-header">
        <span>PROJECT INTAKE / 001</span>
        <span>
          <i></i> ENCRYPTED CONNECTION
        </span>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">
            <span>01</span> Name
          </label>
          <input id="contact-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">
            <span>02</span> Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@protocol.xyz"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="contact-company">
            <span>03</span> Project / company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Protocol or organisation"
            autoComplete="organization"
          />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="contact-message">
            <span>04</span> What are you building?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me about the protocol, the problem and where you are today."
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-budget">
            <span>05</span> Budget range
          </label>
          <select id="contact-budget" name="budget" required defaultValue="">
            <option value="" disabled>
              Choose a range
            </option>
            <option value="Exploring / not set">Exploring / not set</option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000–$25,000">$10,000–$25,000</option>
            <option value="$25,000–$50,000">$25,000–$50,000</option>
            <option value="$50,000+">$50,000+</option>
            <option value="Fractional / ongoing">Fractional / ongoing</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="contact-timeline">
            <span>06</span> Target timeline
          </label>
          <select id="contact-timeline" name="timeline" required defaultValue="">
            <option value="" disabled>
              Choose a timeframe
            </option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="1–3 months">1–3 months</option>
            <option value="3–6 months">3–6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Exploring an idea">Exploring an idea</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <p>
          By sending this form, you agree that Ceno Studio may contact you about your enquiry. See the{" "}
          <Link to="/privacy">privacy notice</Link>.
        </p>
        <button className="form-submit" type="submit" disabled={state === "sending"}>
          <span>{state === "sending" ? "Transmitting…" : "Send project brief"}</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <p
        className={`form-status${state === "success" ? " is-success" : ""}${state === "error" ? " is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
