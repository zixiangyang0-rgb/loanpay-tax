"use client";

import { useState } from "react";

export default function OhioTaxCalculator() {
  const [income, setIncome] = useState(80000);

  // Ohio 2025–26 schedule (AARP Mar 2026): $0 to $26,050 exempt;
  // $26,051–$100,000: $342 + 2.75% of excess; over $100,000: $2,394.32 + 3.125% of excess.
  // Same schedule for all filing statuses. Municipal taxes excluded.
  function ohTax(t: number): number {
    if (t <= 26050) return 0;
    if (t <= 100000) return 342 + (t - 26050) * 0.0275;
    return 2394.32 + (t - 100000) * 0.03125;
  }

  const tax = ohTax(Math.max(0, income));
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 Ohio tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        First $26,050 exempt; 2.75% to $100,000; 3.125% above. Municipal income taxes (often
        1–2.5%) are extra and not included.
      </p>
      <label className="mt-6 block text-sm text-slate-300">
        Ohio taxable income ($)
        <input
          type="number"
          min={0}
          value={income}
          onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
        />
      </label>
      <input
        type="range"
        min={0}
        max={300000}
        step={1000}
        value={Math.min(income, 300000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Income slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Exempt amount</p>
          <p className="mt-1 text-lg font-bold text-white">$26,050</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. Ohio tax</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified state-only estimate. Most workers also owe city/village tax up to ~2.5% with
        credit for workplace withholding. Verify with the Ohio Department of Taxation.
      </p>
    </div>
  );
}
