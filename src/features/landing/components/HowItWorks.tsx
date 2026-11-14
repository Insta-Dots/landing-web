/** A real sequence, so the steps are numbered. */
const STEPS = [
  {
    title: "Save your details once",
    body: "Name, phone numbers, email, addresses, bank accounts and social links. They stay encrypted on your phone.",
  },
  {
    title: "Pick what this counter needs",
    body: "Tick the details to share, or tap a preset like Quick bill (name and phone) or Home delivery.",
  },
  {
    title: "Show the code",
    body: "A QR code, or one barcode per detail for older scanners. The screen brightens on its own so it scans first time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <h2 className="max-w-[18ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
        Three taps between you and the bill.
      </h2>

      <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {STEPS.map((step, i) => (
          <li key={step.title} className="border-t-2 border-ink pt-6">
            <span className="text-sm font-bold text-brand-500">Step {i + 1}</span>
            <h3 className="mt-2 text-xl font-bold tracking-tight">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-14 max-w-[40rem] text-muted">
        Someone shows you their Insta Dots code? Scan it in the app to save them, or add them straight to your
        contacts.
      </p>
    </section>
  );
}
