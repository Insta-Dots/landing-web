import type { ReactNode } from "react";

/**
 * The app's share pass: who is sharing, which details (never the values),
 * and the code. Mirrors the "Show at the counter" screen.
 */
export function SharePass({
  title,
  sharing,
  children,
  className = "",
}: {
  title: string;
  sharing: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-pass bg-ink p-2 shadow-[0_24px_60px_-28px_rgba(22,26,46,0.55)] ${className}`}>
      <div className="px-4 pt-3 pb-4">
        <p className="text-lg font-bold text-white">{title}</p>
        <p className="text-sm text-on-ink-muted">Sharing {sharing}</p>
      </div>
      <div className="rounded-[22px] bg-white p-4">{children}</div>
    </div>
  );
}
