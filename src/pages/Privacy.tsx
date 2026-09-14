import { Link } from "react-router-dom";
import { SITE } from "../content/site";
import { usePageMeta } from "../hooks/usePage";

export function PrivacyPage() {
  usePageMeta(`Privacy — ${SITE.brand}`, "How Ceno Studio handles project-intake form data.", "/privacy");

  return (
    <section className="privacy section-light" id="top">
      <Link className="case-back" to="/">
        ← Back to Ceno Studio
      </Link>
      <div className="section-kicker">
        <span>00</span> Notice
      </div>
      <h1>Privacy notice</h1>
      <p>
        Ceno Studio is operated by Ceno Labs Ltd. This notice covers the project-intake form on
        ceno.studio.
      </p>
      <p>
        If you send a brief, I collect the name, email, project or company, description, budget
        range and timeline you submit, plus basic transmission metadata from the form provider. I
        use that information only to assess the enquiry and reply.
      </p>
      <p>
        Form submissions are processed by Web3Forms and then stored in the mailbox used for studio
        enquiries. I do not sell this data, run advertising pixels on the form, or use it to build
        marketing lists.
      </p>
      <p>
        You can ask for a copy or deletion of an enquiry by emailing the address you used in the
        form, or by writing to Ceno Labs Ltd and referencing Ceno Studio.
      </p>
      <p>Canonical site: ceno.studio. Legacy traffic from ceno.dev is redirected here.</p>
    </section>
  );
}
