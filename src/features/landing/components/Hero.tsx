import { CounterDemo } from "./CounterDemo";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-16 lg:pb-28"
    >
      <div>
        <h1 className="max-w-[12ch] text-[clamp(2.75rem,6.4vw,5.25rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          Your number is nobody else’s business.
        </h1>
        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted sm:text-xl">
          At the billing counter, show a code instead of saying your phone number, name or address out loud.
          Insta Dots keeps your details on your phone and shares only what you pick.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#how"
            className="rounded-2xl bg-ink px-6 py-4 text-base font-bold text-white hover:bg-ink-soft"
          >
            See how it works
          </a>
          <p className="text-sm font-semibold text-muted">Coming soon to Android and iPhone</p>
        </div>
      </div>

      <CounterDemo />
    </section>
  );
}
