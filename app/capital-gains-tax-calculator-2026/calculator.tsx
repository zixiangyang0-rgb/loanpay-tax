"use client";

import { useState } from "react";

export default function CapitalGainsCalculator() {
  const [gain, setGain] = useState(25000);
  const [otherIncome, setOtherIncome] = useState(90000);
  const [term, setTerm] = useState("long");
  const [status, setStatus] = useState("single");

  const std = status === "mfj" ? 32200 : status === "hoh" ? 24150 : 16100;
  const zero = status === "mfj" ? 98900 : status === "hoh" ? 66200 : 49450;
  const top15 =
    status === "mfj" ? 613700 : status === "hoh" ? 579600 : status === "mfs" ? 306850 : 545500;
  const base = Math.max(0, otherIncome - std);
  let fedTax = 0;
  if (gain > 0) {
    if (term === "short") {
      const tops =
        status === "mfj"
          ? [24800, 100800, 211400, 403550, 512450, 768700]
          : status === "hoh"
            ? [17700, 67450, 105700, 201750, 256200, 640600]
            : [12400, 50400, 105700, 201775, 256225, 640600];
      const rates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
      const stacked = (t: number) => {
        let x = 0;
        let p = 0;
        for (let i = 0; i < tops.length; i++) {
          const cap = Math.min(t, tops[i]);
          if (cap > p) x += (cap - p) * rates[i];
          p = tops[i];
          if (t <= tops[i]) return x;
        }
        return x + (t - tops[tops.length - 1]) * 0.37;
      };
      fedTax = stacked(base + gain) - stacked(base);
    } else {
      let remaining = gain;
      let cursor = base;
      if (cursor < zero) {
        const at0 = Math.min(remaining, zero - cursor);
        remaining -= at0;
        cursor += at0;
      }
      if (remaining > 0 && cursor < top15) {
        const at15 = Math.min(remaining, top15 - cursor);
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

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 capital-gains tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Long-term 0/15/20% stacked on taxable income (single: $49,450 / $545,500; joint: $98,900
        / $613,700) vs. short-term ordinary rates, plus 3.8% NIIT.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Net capital gain ($)
          <input
            type="number"
            value={gain}
            onChange={(e) => setGain(Number(e.target.value) || 0)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
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
          Filing status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="single">Single</option>
            <option value="mfj">Married filing jointly</option>
            <option value="hoh">Head of household</option>
            <option value="mfs">Married filing separately</option>
          </select>
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Gain</p>
          <p className="mt-1 text-lg font-bold text-white">
            {gain >= 0 ? "+" : "−"}${Math.abs(Math.round(gain)).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. federal tax{niit > 0 ? " (incl. NIIT)" : ""}</p>
          <p className="mt-1 text-lg font-bold text-amber-200">
            ${Math.round(fedTax + niit).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Keep after federal tax</p>
          <p className="mt-1 text-lg font-bold text-white">
            ${Math.round(gain - fedTax - niit).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Excludes state tax (most states tax gains as ordinary income), collectibles (28%) and
        unrecaptured §1250 (25%) special rates. Negative gains can offset ordinary income up to
        $3,000/yr.
      </p>
    </div>
  );
}
