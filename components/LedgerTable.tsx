import type { ReactNode } from "react";

/**
 * LedgerTable — tax-distinct filing-workspace table frame (paper identity).
 * Pattern reuses the shared ledger concept (scroll cue + region + tabIndex +
 * sticky first column + focus-visible + reduced-motion) read-only as reference;
 * styles are tax paper, NOT auto steel / tech neon / guides sand: white #FFFFFF
 * surface, ink #17211B text, muted #55625B cue, hairline #D8DDD6 edge, focus
 * accent #245A4A. Per-route distinct via `label` prop. Nests inside the
 * existing div.tax-interior-table-wrap so current shell assertions keep passing.
 */

type Props = {
  label: string;
  children: ReactNode;
};

export default function LedgerTable({ label, children }: Props) {
  return (
    <div data-ledger-table={label} className="tax-ledger-block mt-4">
      <p aria-hidden="true" style={{ color: "#55625B" }} className="text-xs">
        Scroll sideways to see all columns <span aria-hidden="true">→</span>
      </p>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        style={{
          border: "1px solid #D8DDD6",
          borderRadius: 10,
          overflowX: "auto",
          background: "#FFFFFF",
        }}
        className="tax-ledger-wrap mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245A4A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3]"
      >
        {children}
      </div>
      <style>{`.tax-ledger-wrap table{width:100%;min-width:560px;text-align:left;font-size:14px;color:#17211B;font-variant-numeric:tabular-nums;border-collapse:collapse;background:#fff}.tax-ledger-wrap thead th{color:#55625B;font-size:12px;text-transform:uppercase;letter-spacing:.06em}.tax-ledger-wrap th,.tax-ledger-wrap td{padding:12px 16px}.tax-ledger-wrap tbody tr{border-top:1px solid #D8DDD6}.tax-ledger-wrap tbody tr:hover{background:rgba(36,90,74,.05)}.tax-ledger-wrap tbody th[scope="row"],.tax-ledger-wrap tbody td:first-child{position:sticky;left:0;background:#fff;z-index:1;box-shadow:1px 0 0 #D8DDD6}@media (prefers-reduced-motion: reduce){.tax-ledger-block *{transition:none!important;transform:none!important}}`}</style>
    </div>
  );
}
