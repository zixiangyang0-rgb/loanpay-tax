"use client";

import { useState } from "react";

export default function MichiganTaxCalculator() {
  const [income, setIncome] = useState(80000);
  const [exemptions, setExemptions] = useState(2);

  // Michigan 2026: flat 4.25% on AGI after $6,000 personal exemption per person (2025 figure,
  // indexed; confirm with Michigan Treasury for exact 2026 amount).
  const EXEMPT = 6000;
  const base = Math.max(0, income - exemptions * EXEMPT);
  const tax = base * 0.0425;
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 Michigan tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Flat 4.25% after ~$6,000 personal exemption per filer and dependent. Many cities add
        0.5–1% local tax on top.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Michigan AGI ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Personal exemptions (filers + dependents)
          <input
            type="number"
            min={0}
            max={10}
            value={exemptions}
            onChange={(e) => setExemptions(Math.max(0, Number(e.target.value) || 0))}
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
          <p className="text-xs text-slate-400">Exemptions value</p>
          <p className="mt-1 text-lg font-bold text-white">
            ${(exemptions * EXEMPT).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. MI tax (4.25%)</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified: excludes pension subtraction, property-tax and home-heating credits, and
        city taxes. Verify with Michigan Treasury.
      </p>
    </div>
  );
}
