"use client";

import { useState } from "react";

export default function NorthCarolinaTaxCalculator() {
  const [income, setIncome] = useState(90000);
  const [status, setStatus] = useState("single");

  // NC 2026: flat 3.99% on NC taxable income.
  // Standard deduction: $12,750 single / $25,500 joint (statutory, not indexed).
  const STD = status === "joint" ? 25500 : 12750;
  const base = Math.max(0, income - STD);
  const tax = base * 0.0399;
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 North Carolina tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Flat 3.99% — down from 4.25% in 2025 — after a generous $12,750 / $25,500 standard
        deduction. No brackets, no local income tax.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Filing status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="single">Single / separate / head</option>
            <option value="joint">Married filing jointly</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          NC AGI ($)
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
        max={300000}
        step={1000}
        value={Math.min(income, 300000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Income slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">NC taxable income</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(base).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. NC tax (3.99%)</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified: excludes child deduction phase-outs and credits. Verify with the NC
        Department of Revenue (NCDOR).
      </p>
    </div>
  );
}
