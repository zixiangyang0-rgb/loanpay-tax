"use client";

import { useState } from "react";

// 2026 NJ single schedule (published structure): thresholds and rates.
const TOPS = [20000, 35000, 40000, 75000, 500000, 1000000];
const RATES = [0.014, 0.0175, 0.035, 0.05525, 0.0637, 0.0897, 0.1075];

function njTax(taxable: number, tops: number[]): number {
  if (taxable <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < tops.length; i++) {
    const cap = Math.min(taxable, tops[i]);
    if (cap > prev) tax += (cap - prev) * RATES[i];
    prev = tops[i];
    if (taxable <= tops[i]) return tax;
  }
  return tax + (taxable - tops[tops.length - 1]) * RATES[RATES.length - 1];
}

export default function NewJerseyTaxCalculator() {
  const [income, setIncome] = useState(120000);
  const [status, setStatus] = useState("single");

  // Joint thresholds roughly 2x single at low end; simplified with 1.6x scaling above $75k.
  const tops =
    status === "joint"
      ? TOPS.map((t) => (t <= 75000 ? t * 2 : t * 1.6))
      : TOPS;
  const taxable = Math.max(0, income - 1000); // $1,000 personal exemption proxy
  const tax = njTax(taxable, tops);
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 New Jersey tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Seven bands from 1.4% to 10.75%. Simplified single/joint proxy — verify with NJ
        Division of Taxation tables.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Filing status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="single">Single / separate</option>
            <option value="joint">Married filing jointly</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          NJ gross income ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <input
        type="range"
        min={0}
        max={600000}
        step={1000}
        value={Math.min(income, 600000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Income slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">NJ taxable income</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(taxable).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. NJ tax</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified estimate ignoring pensions exclusions, property-tax deduction, and credits.
        Confirm with NJ Division of Taxation.
      </p>
    </div>
  );
}
