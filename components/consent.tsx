"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "loanpay-tax-consent";

type Choice = "personalized" | "npa" | null;

export default function ConsentBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(KEY);
      if (v === "personalized" || v === "npa") setChoice(v);
    } catch {
      // storage unavailable; keep banner visible
    }
    setReady(true);
  }, []);

  function save(next: Exclude<Choice, null>) {
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // ignore
    }
    setChoice(next);
  }

  if (!ready || choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-3xl px-4 pb-4"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0b1627]/95 p-5 shadow-2xl backdrop-blur">
        <p className="text-sm font-semibold text-white">We value your privacy</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-300">
          We use Google AdSense and privacy-friendly analytics. Choose personalized ads or
          non-personalized ads (NPA). You can change your choice anytime. See our{" "}
          <Link href="/privacy-policy" className="text-amber-200 underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save("personalized")}
            className="rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Accept personalized
          </button>
          <button
            type="button"
            onClick={() => save("npa")}
            className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold text-slate-100 transition hover:border-white/30"
          >
            Non-personalized only
          </button>
        </div>
      </div>
    </div>
  );
}
