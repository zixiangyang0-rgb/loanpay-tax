"use client";

import { useState } from "react";

export default function IllinoisTaxCalculator() {
  const [income, setIncome] = useState(90000);
  const [exemptions, setExemptions] = useState(1);

  // 2026: flat 4.95% on federal AGI with $2,775 personal exemption per person (2025 figure,
  // inflation-adjusted yearly; confirm with IL Dept. of Revenue for exact 2026 amount).
  const EXEMPTION = 2775;
  const base = Math.max(0, income - exemptions * EXEMPTION);
  const tax = base * 0.0495;
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 Illinois tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Flat 4.95% on Illinois base income after $2,775 per personal exemption.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Illinois base income (federal AGI) ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Personal exemptions (1 per filer + dependents)
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
            ${(exemptions * EXEMPTION).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. IL tax (4.95%)</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified: excludes property-tax and education credits, retirement subtractions, and
        local taxes. Verify exemption amount with the Illinois Department of Revenue.
      </p>
    </div>
  );
}
