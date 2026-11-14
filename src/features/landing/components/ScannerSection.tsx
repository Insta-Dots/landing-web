import { SharePass } from "./SharePass";

/** Bar widths derived from the text, so each illustration differs. Decorative. */
const barsFor = (text: string) => {
  const widths: number[] = [2, 1, 1, 2];
  // Six runs per character, like a real symbology, so it reads as a barcode.
  for (const [i, ch] of [...text].entries()) {
    const code = ch.charCodeAt(0) * 7 + i * 13;
    for (let shift = 0; shift < 6; shift++) widths.push(((code >> shift) % 3) + 1);
  }
  return [...widths, 2, 1, 3];
};

/** Alternating bar/space runs laid end to end; even runs are bars. */
const layout = (widths: number[]) => {
  const starts = widths.map((_, i) => widths.slice(0, i).reduce((sum, w) => sum + w, 0));
  const total = widths.reduce((sum, w) => sum + w, 0);
  return { total, bars: widths.map((w, i) => ({ x: starts[i]!, w })).filter((_, i) => i % 2 === 0) };
};

function Barcode({ text }: { text: string }) {
  const { total, bars } = layout(barsFor(text));
  return (
    <svg viewBox={`0 0 ${total} 40`} preserveAspectRatio="none" className="h-14 w-full" aria-hidden="true">
      {bars.map((bar) => (
        <rect key={bar.x} x={bar.x} y={0} width={bar.w} height={40} fill="#000" />
      ))}
    </svg>
  );
}

const BARCODES = [
  { label: "First name", value: "Asha" },
  { label: "Phone number", value: "9876543210" },
];

export function ScannerSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="order-2 mx-auto w-full max-w-sm lg:order-1">
          <SharePass title="Asha" sharing="First name, Phone number">
            <ol className="flex flex-col gap-5" aria-label="Barcodes, one per detail">
              {BARCODES.map((barcode, i) => (
                <li key={barcode.label}>
                  <p className="mb-2 text-sm font-semibold text-muted">
                    {i + 1}. {barcode.label}
                  </p>
                  <Barcode text={barcode.value} />
                </li>
              ))}
            </ol>
          </SharePass>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="max-w-[18ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Works with the scanner already on the counter.
          </h2>
          <p className="mt-5 max-w-[32rem] text-lg leading-relaxed text-muted">
            Most billing scanners read barcodes, one field at a time. Insta Dots gives each detail its own barcode,
            so the cashier scans your name into the name field and your number into the number field. Nothing to
            install at the shop.
          </p>
          <p className="mt-4 max-w-[32rem] text-lg leading-relaxed text-muted">
            Phones and newer scanners read the QR code, which carries everything you picked in one go.
          </p>
        </div>
      </div>
    </section>
  );
}
