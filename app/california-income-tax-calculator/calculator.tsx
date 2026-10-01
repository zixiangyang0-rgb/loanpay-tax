"use client";

import { useState } from "react";

// 2026 CA single brackets (FTB); joint thresholds are 2x single.
const TOPS = [11079, 26264, 41452, 57542, 72724, 371479, 445771, 742953, 1000000];
const RATES = [0.01, 0.02, 0.04, 0.06, 0.08, 0.093, 0.103, 0.113, 0.123, 0.133];

function caTax(taxable: number, tops: number[]): number {
  if (taxable <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < tops.length; i++) {
    const cap = Math.min(taxable, tops[i]);
    if (cap > prev) tax += (cap - prev) * RATES[i];
    prev = tops[i];
    if (taxable <= tops[i]) {
      // 1% mental-health surcharge applies above $1M on the excess
      return tax;
    }
  }
  // above $1M: 12.3% + 1% MHSA = 13.3% on excess (handled by last rate)
  return tax + (taxable - tops[tops.length - 1]) * RATES[RATES.length - 1];
}

export default function CaliforniaTaxCalculator() {
  const [income, setIncome] = useState(100000);
  const [status, setStatus] = useState("single");

  const std = status === "joint" ? 11412 : 5706;
  const tops = status === "joint" ? TOPS.map((t) => t * 2) : TOPS;
  const taxable = Math.max(0, income - std);
  const tax = caTax(taxable, tops);
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 California tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Nine brackets (1%–12.3%) plus the 1% mental-health surcharge above $1M. Standard deduction
        $5,706 single / $11,412 joint.
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
          CA gross income ($)
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
        max={500000}
        step={1000}
        value={Math.min(income, 500000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Income slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">CA taxable income</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(taxable).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. CA tax</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective CA rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified: no credits, exemptions, AMT, or other income adjustments. Excludes SDI and
        federal tax. Verify with the Franchise Tax Board.
      </p>
    </div>
  );
}
