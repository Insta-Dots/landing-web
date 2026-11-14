import { DotQr } from "@/shared/components/DotQr";
import { SharePass } from "./SharePass";

const PAYLOAD = JSON.stringify({ rfl: 1, bn: "Acme Traders", gst: "29ABCDE1234F1Z5" });

const FEATURES = [
  "GSTIN and PAN for B2B invoices, without spelling them out",
  "Billing address, phone and email in one scan",
  "Bank accounts, with a UPI payment QR made from your UPI ID",
  "As many businesses as you run, next to your personal details",
];

export function BusinessSection() {
  return (
    <section id="business" className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
      <div>
        <h2 className="max-w-[18ch] text-3xl font-extrabold tracking-tight sm:text-4xl">
          Run a shop? Your GST details fit in a code too.
        </h2>
        <p className="mt-5 max-w-[32rem] text-lg leading-relaxed text-muted">
          Add business profiles alongside your own. When a supplier or customer needs your details for an invoice,
          show the code instead of reading out fifteen characters of GSTIN.
        </p>
        <ul className="mt-8 flex flex-col gap-3.5">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex gap-3 text-lg">
              <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <SharePass title="Acme Traders" sharing="Business name, GSTIN">
          <DotQr value={PAYLOAD} label="QR code holding Acme Traders' business name and GSTIN" className="mx-auto w-full max-w-60" />
          <p className="mt-3 text-center text-sm text-muted">Ask them to scan this code</p>
        </SharePass>
      </div>
    </section>
  );
}
