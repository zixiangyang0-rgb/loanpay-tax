"use client";

import { useState } from "react";

export default function CryptoTaxCalculator() {
  const [proceeds, setProceeds] = useState(30000);
  const [basis, setBasis] = useState(18000);
  const [term, setTerm] = useState("long");
  const [otherIncome, setOtherIncome] = useState(80000);
  const [status, setStatus] = useState("single");

  const gain = proceeds - basis;
  let fedTax = 0;
  if (gain > 0) {
    if (term === "short") {
      // taxed as ordinary income: stack on top of other income (single schedule)
      const tops = [12400, 50400, 105700, 201775, 256225, 640600];
      const rates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
      const m = status === "mfj" ? 2 : 1;
      const std = status === "mfj" ? 32200 : 16100;
      const base = Math.max(0, otherIncome - std);
      const stacked = (t: number) => {
        let x = 0;
        let p = 0;
        for (let i = 0; i < tops.length; i++) {
          const cap = Math.min(t, tops[i] * m);
          if (cap > p) x += (cap - p) * rates[i];
          p = tops[i] * m;
          if (t <= tops[i] * m) return x;
        }
        return x + (t - tops[tops.length - 1] * m) * 0.37;
      };
      fedTax = stacked(base + gain) - stacked(base);
    } else {
      // long-term 0/15/20 stacking on taxable income
      const zero = status === "mfj" ? 98900 : 49450;
      const top15 = status === "mfj" ? 613700 : 545500;
      const std = status === "mfj" ? 32200 : 16100;
      const base = Math.max(0, otherIncome - std);
      let remaining = gain;
      let cursor = base;
      if (cursor < zero) {
        const room = zero - cursor;
        const at0 = Math.min(remaining, room);
        remaining -= at0;
        cursor += at0;
      }
      if (remaining > 0 && cursor < top15) {
        const room = top15 - cursor;
        const at15 = Math.min(remaining, room);
        fedTax += at15 * 0.15;
        remaining -= at15;
        cursor += at15;
      }
      if (remaining > 0) fedTax += remaining * 0.2;
    }
  }
  const magi = otherIncome + Math.max(0, gain);
  const niitThresh = status === "mfj" ? 250000 : 200000;
  const niit = magi > niitThresh && gain > 0 ? Math.min(gain, magi - niitThresh) * 0.038 : 0;
  const total = fedTax + niit;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">Crypto gains tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        2026 federal long-term rates 0/15/20% (stacked) vs. short-term ordinary rates, plus 3.8%
        NIIT check. No state tax included.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Sale proceeds ($)
          <input
            type="number"
            min={0}
            value={proceeds}
            onChange={(e) => setProceeds(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Cost basis incl. fees ($)
          <input
            type="number"
            min={0}
            value={basis}
            onChange={(e) => setBasis(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Holding period
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="long">Long-term (over 1 year)</option>
            <option value="short">Short-term (1 year or less)</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          Other taxable income before gain ($)
          <input
            type="number"
            min={0}
            value={otherIncome}
            onChange={(e) => setOtherIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm text-slate-300">
        Filing status
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
        >
          <option value="single">Single</option>
          <option value="mfj">Married filing jointly</option>
        </select>
      </label>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Gain / loss</p>
          <p className="mt-1 text-lg font-bold text-white">
            {gain >= 0 ? "+" : "−"}${Math.abs(Math.round(gain)).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. federal tax{niit > 0 ? " (incl. NIIT)" : ""}</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(total).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">After-tax proceeds</p>
          <p className="mt-1 text-lg font-bold text-white">
            ${Math.round(proceeds - total).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        {gain < 0
          ? "Losses offset gains plus up to $3,000 of ordinary income yearly ($1,500 separate); excess carries forward."
          : "Simplified stacking estimate. Wash-sale rules do not currently apply to crypto (proposed changes pending) — confirm current law."}
      </p>
    </div>
  );
}
