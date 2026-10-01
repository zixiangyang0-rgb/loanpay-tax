"use client";

import { useState } from "react";

export default function W4Calculator() {
  const [salary, setSalary] = useState(80000);
  const [payPeriods, setPayPeriods] = useState(26);
  const [currentPerCheck, setCurrentPerCheck] = useState(300);
  const [dependents, setDependents] = useState(2000);

  const std = 16100;
  const single = [12400, 50400, 105700, 201775, 256225, 640600];
  const rates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
  const taxable = Math.max(0, salary - std);
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < single.length; i++) {
    const cap = Math.min(taxable, single[i]);
    if (cap > prev) tax += (cap - prev) * rates[i];
    prev = single[i];
    if (taxable <= single[i]) break;
  }
  if (taxable > single[single.length - 1])
    tax += (taxable - single[single.length - 1]) * 0.37;
  const liability = Math.max(0, tax - dependents);
  const annualWithheld = currentPerCheck * payPeriods;
  const gap = liability - annualWithheld;
  const perCheckAdj = gap / payPeriods;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">W-4 paycheck withholding checkup</h2>
      <p className="mt-2 text-sm text-slate-400">
        Simplified for one single-filer job taking the 2026 standard deduction. Multi-job homes
        should use the IRS Tax Withholding Estimator for the official answer.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Annual salary ($)
          <input
            type="number"
            min={0}
            value={salary}
            onChange={(e) => setSalary(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Pay periods per year
          <select
            value={payPeriods}
            onChange={(e) => setPayPeriods(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value={52}>52 — weekly</option>
            <option value={26}>26 — biweekly</option>
            <option value={24}>24 — semimonthly</option>
            <option value={12}>12 — monthly</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          Current federal withholding per check ($)
          <input
            type="number"
            min={0}
            value={currentPerCheck}
            onChange={(e) => setCurrentPerCheck(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Expected Step-3 dependent credits ($)
          <input
            type="number"
            min={0}
            value={dependents}
            onChange={(e) => setDependents(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Est. annual liability</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(liability).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Currently withheld / yr</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(annualWithheld).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Suggested Step-4(b) per-check tweak</p>
          <p className="mt-1 text-lg font-bold text-amber-200">
            {perCheckAdj >= 0 ? "+" : "−"}${Math.round(Math.abs(perCheckAdj)).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Positive means withhold more per check; negative means you are over-withholding. Enter the
        tweak on Form W-4 Step 4(a)/(b) or (c). Ignores state tax, pre-tax benefits, and other
        income.
      </p>
    </div>
  );
}
