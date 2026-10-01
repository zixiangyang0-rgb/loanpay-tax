"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

type AdSlotProps = {
  format: AdFormat;
  slot: string;
  className?: string;
  minHeight?: number;
  label?: string;
};

const FORMAT_STYLE: Record<AdFormat, { format: string; layout?: string; defaultMinHeight: number }> = {
  display: { format: "auto", defaultMinHeight: 280 },
  "in-article": { format: "fluid", layout: "in-article", defaultMinHeight: 120 },
  multiplex: { format: "autorelaxed", defaultMinHeight: 250 },
  anchor: { format: "anchor", defaultMinHeight: 90 },
};

function isNpa(): boolean {
  try {
    return window.localStorage.getItem("loanpay-tax-consent") === "npa";
  } catch {
    return false;
  }
}

export default function AdSlot({ format, slot, className = "", minHeight, label }: AdSlotProps) {
  const insRef = useRef<HTMLElement | null>(null);
  const [closed, setClosed] = useState(false);
  const [npa, setNpa] = useState(false);
  const cfg = FORMAT_STYLE[format];
  const height = minHeight ?? cfg.defaultMinHeight;

  useEffect(() => {
    setNpa(isNpa());
    if (process.env.NODE_ENV !== "production") return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense may not be loaded yet (ad blocker / CMP); fail silently.
    }
  }, []);

  if (closed) return null;

  const isDev = process.env.NODE_ENV !== "production";

  if (format === "anchor") {
    return (
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-2 pb-2 md:hidden ${className}`}
        role="complementary"
        aria-label="Advertisement"
      >
        <div className="relative w-full max-w-xl rounded-t-xl border border-white/10 bg-[#0b1627]/95 shadow-2xl backdrop-blur">
          <button
            type="button"
            onClick={() => setClosed(true)}
            aria-label="Close advertisement"
            className="absolute -top-3 right-2 rounded-full border border-white/15 bg-slate-800 px-2.5 py-0.5 text-xs text-slate-200"
          >
            ✕
          </button>
          {isDev ? (
            <div
              className="flex items-center justify-center rounded-t-xl border border-dashed border-amber-200/40 text-xs text-amber-200/80"
              style={{ minHeight: height }}
            >
              anchor placeholder · {slot}
            </div>
          ) : (
            <ins
              // @ts-expect-error - adsbygoogle custom element attributes
              ref={insRef}
              className="adsbygoogle"
              style={{ display: "block", minHeight: height, textAlign: "center" }}
              data-ad-client="ca-pub-4906207495792820"
              data-ad-slot={slot}
              data-ad-format={cfg.format}
              data-full-width-responsive="true"
              {...(npa ? { "data-npa": "1" } : {})}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`my-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] ${className}`}
      role="complementary"
      aria-label={label ?? "Advertisement"}
    >
      <p className="px-4 pt-2 text-[11px] uppercase tracking-wider text-slate-500">Advertisement</p>
      {isDev ? (
        <div
          className="m-2 flex items-center justify-center rounded-lg border border-dashed border-amber-200/40 text-xs text-amber-200/80"
          style={{ minHeight: height }}
        >
          {format} placeholder · {slot}
        </div>
      ) : (
        <ins
          // @ts-expect-error - adsbygoogle custom element attributes
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", minHeight: height }}
          data-ad-client="ca-pub-4906207495792820"
          data-ad-slot={slot}
          data-ad-format={cfg.format}
          {...(cfg.layout ? { "data-ad-layout": cfg.layout } : {})}
          data-full-width-responsive="true"
          {...(npa ? { "data-npa": "1" } : {})}
        />
      )}
    </div>
  );
}
