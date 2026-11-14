import QRCode from "qrcode";
import { useMemo } from "react";

const FINDER = 7;

/** True for modules inside one of the three corner finder patterns. */
const inFinder = (x: number, y: number, size: number) =>
  (x < FINDER && y < FINDER) || (x >= size - FINDER && y < FINDER) || (x < FINDER && y >= size - FINDER);

/**
 * A real, scannable QR code with round modules — the brand's dots. Finder
 * patterns stay solid rounded squares, which is what scanners lock on to.
 */
export function DotQr({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  const { size, dark } = useMemo(() => {
    const { modules } = QRCode.create(value, { errorCorrectionLevel: "M" });
    const cells: [number, number][] = [];
    for (let y = 0; y < modules.size; y++) {
      for (let x = 0; x < modules.size; x++) {
        if (modules.get(x, y) && !inFinder(x, y, modules.size)) cells.push([x, y]);
      }
    }
    return { size: modules.size, dark: cells };
  }, [value]);

  const quiet = 2;
  const box = size + quiet * 2;
  const finders: [number, number][] = [
    [0, 0],
    [size - FINDER, 0],
    [0, size - FINDER],
  ];

  return (
    <svg viewBox={`${-quiet} ${-quiet} ${box} ${box}`} role="img" aria-label={label} className={className}>
      <rect x={-quiet} y={-quiet} width={box} height={box} fill="#fff" />
      {finders.map(([fx, fy]) => (
        <g key={`${fx}-${fy}`} fill="#000">
          <path
            fillRule="evenodd"
            d={`M${fx + 1.6} ${fy}h3.8a1.6 1.6 0 0 1 1.6 1.6v3.8a1.6 1.6 0 0 1-1.6 1.6h-3.8a1.6 1.6 0 0 1-1.6-1.6v-3.8a1.6 1.6 0 0 1 1.6-1.6z
               M${fx + 1.9} ${fy + 1}h3.2a.9.9 0 0 1 .9.9v3.2a.9.9 0 0 1-.9.9h-3.2a.9.9 0 0 1-.9-.9v-3.2a.9.9 0 0 1 .9-.9z`}
          />
          <rect x={fx + 2} y={fy + 2} width={3} height={3} rx={0.9} />
        </g>
      ))}
      {dark.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x + 0.5} cy={y + 0.5} r={0.46} fill="#000" />
      ))}
    </svg>
  );
}
