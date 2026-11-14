import { useEffect, useState } from "react";
import { Wordmark } from "@/shared/components/DotMark";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#business", label: "For shops" },
];

/** Stays on top while scrolling; the border only appears once content passes under it. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-md transition-colors duration-200 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" aria-label="Insta Dots home">
          <Wordmark />
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#get" className="rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white hover:bg-ink-soft">
          Get the app
        </a>
      </header>
    </div>
  );
}
