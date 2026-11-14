import { DotMark, Wordmark } from "@/shared/components/DotMark";

export function GetTheApp() {
  return (
    <section id="get" className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div>
          <h2 className="max-w-[20ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Coming soon to Android and iPhone.
          </h2>
          <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-muted">
            Insta Dots works without an account and needs no internet at the counter.
          </p>
        </div>
        <DotMark size={120} className="hidden text-ink lg:block" />
      </div>
    </section>
  );
}

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <Wordmark className="text-base text-ink" />
      <p>© {YEAR} Insta Dots</p>
    </footer>
  );
}
