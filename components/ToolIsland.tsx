import type { ReactNode } from "react";

/**
 * ToolIsland — tax-distinct filing-workspace island (paper workspace identity).
 * Structure follows the shared island pattern (labelled section + filing badge +
 * method line + focus-visible ring + reduced-motion guard); visual tokens are
 * tax filing-workspace, NOT guides/auto/tech/pets: dark ledger core retained
 * for contrast on the paper interior, hairline #D8DDD6 edge, accent #245A4A
 * focus, mono method line, paper badge. Wraps existing static content WITHOUT
 * touching formulas (no calculators live on these routes). Per-route distinct
 * via `islandId` + `title` + `method` props (no uniform copy).
 */

type Props = {
  islandId: string;
  title: string;
  method: string;
  children: ReactNode;
};

export default function ToolIsland({ islandId, title, method, children }: Props) {
  return (
    <section
      data-tool-island={islandId}
      aria-label={title}
      style={{
        background: "linear-gradient(180deg, rgba(8, 15, 28, 0.95), rgba(4, 9, 18, 0.86))",
        border: "1px solid #D8DDD6",
        borderRadius: 12,
        padding: 20,
      }}
      className="tax-tool mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245A4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 style={{ color: "#F7F4EE" }} className="text-base font-semibold">
          {title}
        </h3>
        <span
          style={{
            color: "#17211B",
            background: "#F4F5F3",
            borderRadius: 4,
            fontVariantNumeric: "tabular-nums",
          }}
          className="px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em]"
        >
          Filing demo
        </span>
      </div>
      <p
        style={{ color: "#B9C4BC", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" }}
        className="mt-1 text-xs leading-relaxed"
      >
        {method} Illustrative education only — not tax, legal, or financial advice.
      </p>
      <div className="mt-3 [&_input]:focus-visible:outline-none [&_input]:focus-visible:ring-2 [&_input]:focus-visible:ring-[#245A4A] [&_input]:focus-visible:ring-offset-1 [&_input]:focus-visible:ring-offset-[#04090F]">
        {children}
      </div>
      <style>{`@media (prefers-reduced-motion: reduce){.tax-tool *{transition:none!important;transform:none!important}}`}</style>
    </section>
  );
}
