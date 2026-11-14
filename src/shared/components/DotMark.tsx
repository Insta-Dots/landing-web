/** Row-major 3×3; two dots left out so it reads as a pattern, one in cobalt. */
const GAPS = new Set([1, 7]);
const ACCENT = 5;

/** The Insta Dots mark: a QR code reduced to its essence. */
export function DotMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true" className={className}>
      {Array.from({ length: 9 }, (_, i) =>
        GAPS.has(i) ? null : (
          <circle
            key={i}
            cx={5 + (i % 3) * 10}
            cy={5 + Math.floor(i / 3) * 10}
            r={3.6}
            className={i === ACCENT ? "fill-brand-500" : "fill-current"}
          />
        ),
      )}
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-lg font-extrabold tracking-tight ${className}`}>
      <DotMark size={22} />
      Insta Dots
    </span>
  );
}
