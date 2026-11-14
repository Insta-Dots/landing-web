import { useCallback, useEffect, useRef, useState } from "react";
import { DotQr } from "@/shared/components/DotQr";
import { SharePass } from "./SharePass";

const SPOKEN = "98765 43210";

/** What the demo QR holds: the app's own format, so Insta Dots can scan it. */
const PAYLOAD = JSON.stringify({ rfl: 1, fn: "Asha", ph: "9876543210" });

const DIGITS = SPOKEN.replace(/\s/g, "").length;

/** Long enough to read the number, then quick: about 1.3 s end to end. */
const START_MS = 450;
const DIGIT_MS = 55;
const SETTLE_MS = 250;

/** Plays even if the line is never reported on screen. */
const FALLBACK_MS = 2500;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Phase = "speaking" | "dotting" | "pass";

/**
 * The page's one moment of motion: a number said out loud turns into dots,
 * then into a code only the cashier's scanner reads.
 */
export function CounterDemo() {
  // Reduced motion starts (and stays) on the finished state.
  const [still] = useState(prefersReducedMotion);
  const [phase, setPhase] = useState<Phase>(still ? "pass" : "speaking");
  const [dotted, setDotted] = useState(still ? DIGITS : 0);
  const timers = useRef<number[]>([]);

  /** Queues the sequence from the start; state changes happen in the timers. */
  const schedule = useCallback(() => {
    timers.current.forEach(clearTimeout);
    const at = (ms: number, fn: () => void) => window.setTimeout(fn, ms);
    timers.current = [
      at(START_MS, () => setPhase("dotting")),
      ...Array.from({ length: DIGITS }, (_, i) => at(START_MS + (i + 1) * DIGIT_MS, () => setDotted(i + 1))),
      at(START_MS + DIGITS * DIGIT_MS + SETTLE_MS, () => setPhase("pass")),
    ];
  }, []);

  // Plays once the spoken line is fully on screen — on phones the demo sits
  // below the fold, and a sequence that finished unseen is wasted. The pass
  // sits right under the line, so it appears where the reader is looking.
  // If that never happens (an embed, a preview), it plays anyway rather than
  // leaving an empty gap where the pass belongs.
  const bubble = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = bubble.current;
    if (still || !element) return;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      observer.disconnect();
      window.clearTimeout(fallback);
      schedule();
    };
    const observer = new IntersectionObserver(([entry]) => entry?.isIntersecting && start(), { threshold: 1 });
    const fallback = window.setTimeout(start, FALLBACK_MS);
    observer.observe(element);
    const pending = timers;
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      pending.current.forEach(clearTimeout);
    };
  }, [still, schedule]);

  const replay = () => {
    if (still) return;
    setPhase("speaking");
    setDotted(0);
    schedule();
  };

  let seen = 0;
  const spoken = [...SPOKEN].map((ch, i) => {
    if (ch === " ") return <span key={i}> </span>;
    const isDot = seen++ < dotted;
    return (
      <span key={i} className={`inline-block w-[0.62em] text-center ${isDot ? "text-brand-500" : ""}`}>
        {isDot ? "•" : ch}
      </span>
    );
  });

  const showPass = phase === "pass";

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <figure aria-label="Saying a phone number out loud, replaced by a code">
        <div
          ref={bubble}
          className={`relative ml-auto w-fit max-w-full rounded-3xl rounded-br-md bg-surface px-5 py-3.5 text-lg font-semibold ring-1 ring-line transition duration-500 ${
            showPass ? "opacity-45" : ""
          }`}
        >
          <span className="text-muted">My number is </span>
          <span className="tabular-nums" aria-label={showPass ? "kept private" : SPOKEN}>
            {spoken}
          </span>
        </div>

        <div
          className={`mt-5 transition duration-500 ease-out ${
            showPass ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
          }`}
          aria-hidden={!showPass}
        >
          <SharePass title="Asha" sharing="First name, Phone number">
            <DotQr value={PAYLOAD} label="QR code holding Asha's first name and phone number" className="mx-auto w-full max-w-60" />
            <p className="mt-3 text-center text-sm text-muted">Ask the cashier to scan this code</p>
          </SharePass>
        </div>
      </figure>

      {!still && (
      <button
        type="button"
        onClick={replay}
        className="mt-4 ml-auto block rounded-full px-3 py-1.5 text-sm font-semibold text-muted hover:text-ink"
      >
        Play again
      </button>
      )}
    </div>
  );
}
