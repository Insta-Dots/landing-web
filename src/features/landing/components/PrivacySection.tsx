const POINTS = [
  {
    title: "Encrypted on your phone",
    body: "Your details live in an encrypted store, locked with a key from your phone’s secure keystore.",
  },
  {
    title: "No account needed",
    body: "Everything works offline. Sign in only if you want a backup that follows you to a new phone.",
  },
  {
    title: "Labels, not values",
    body: "The share screen names what’s in the code, like “Phone number”. The person behind you never sees the number.",
  },
  {
    title: "You pick every time",
    body: "Nothing goes into a code unless you tick it. Close the code once it’s scanned and it’s gone.",
  },
  {
    title: "App lock",
    body: "Ask for your fingerprint, face or phone PIN every time Insta Dots opens.",
  },
  {
    title: "No screenshots",
    body: "On Android the app blocks screenshots and screen recording, so your details can’t be captured by another app.",
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-[20ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
          Built so your details stay yours.
        </h2>

        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point) => (
            <li key={point.title} className="flex gap-4">
              <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-500" />
              <div>
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-on-ink-muted">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
