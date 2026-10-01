"use client";

import { useState } from "react";

export default function PennsylvaniaTaxCalculator() {
  const [income, setIncome] = useState(80000);
  const [incomeClass, setIncomeClass] = useState("wages");

  // PA taxes 8 separate classes at 3.07%; losses in one class cannot offset another.
  // Wages and interest/dividends/gains each face 3.07%. Simplified single-class estimate.
  const tax = Math.max(0, income) * 0.0307;
  const effective = income > 0 ? (tax / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 Pennsylvania tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Flat 3.07% on each qualifying income class. No standard deduction, no personal
        exemptions — but retirement income is fully exempt.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          PA taxable-class income ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Income class
          <select
            value={incomeClass}
            onChange={(e) => setIncomeClass(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="wages">Wages / salaries</option>
            <option value="business">Business / farm / rents</option>
            <option value="gains">Gains, interest, dividends</option>
            <option value="retirement">Pensions / Social Security (exempt)</option>
          </select>
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
          <p className="text-xs text-slate-400">Rate</p>
          <p className="mt-1 text-lg font-bold text-white">
            {incomeClass === "retirement" ? "0% (exempt)" : "3.07%"}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. PA tax</p>
          <p className="mt-1 text-lg font-bold text-amber-200">
            ${Math.round(incomeClass === "retirement" ? 0 : tax).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">
            {incomeClass === "retirement" ? "0.00" : effective.toFixed(2)}%
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified single-class estimate; real PA returns compute 8 classes separately and add
        local EIT (often ~1%). Verify with the PA Department of Revenue.
      </p>
    </div>
  );
}
