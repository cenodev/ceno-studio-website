export function ServiceIcon({ name }: { name: "pulse" | "build" | "swap" | "lead" }) {
  const paths = {
    pulse: <path d="M8 32h13l7-16 10 32 7-16h11" />,
    build: (
      <>
        <circle cx="32" cy="32" r="20" />
        <path d="M20 27h24M20 37h24M27 19l-7 8 7 8M37 29l7 8-7 8" />
      </>
    ),
    swap: (
      <>
        <rect x="12" y="12" width="40" height="40" rx="4" />
        <circle cx="25" cy="29" r="3" />
        <circle cx="39" cy="29" r="3" />
        <path d="M23 39h18M32 12V5M5 25h7M52 25h7" />
      </>
    ),
    lead: (
      <>
        <path d="M13 17h38v30H13zM13 25h38M22 36h8M22 41h18" />
        <circle cx="19" cy="21" r="1" />
      </>
    ),
  } as const;

  return (
    <div className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 64 64">{paths[name]}</svg>
    </div>
  );
}
