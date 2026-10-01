"use client";

import { useState } from "react";

export default function HomeOfficeCalculator() {
  const [method, setMethod] = useState("simplified");
  const [sqft, setSqft] = useState(150);
  const [marginal, setMarginal] = useState(22);
  // Actual-expense inputs
  const [rent, setRent] = useState(24000);
  const [utilities, setUtilities] = useState(3600);
  const [insurance, setInsurance] = useState(1200);
  const [homeSqft, setHomeSqft] = useState(1500);

  const simplified = Math.min(sqft, 300) * 5;
  const pct = homeSqft > 0 ? Math.min(sqft, 300) / homeSqft : 0;
  const actual = (rent + utilities + insurance) * pct;
  const deduction = method === "simplified" ? simplified : actual;
  const savings = deduction * (marginal / 100);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">Home-office deduction estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Simplified: $5/sq ft to 300 sq ft. Actual: business-use % of rent, utilities, insurance
        (owners add mortgage interest, taxes, depreciation).
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <label className="block text-sm text-slate-300">
          Method
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="simplified">Simplified</option>
            <option value="actual">Actual expenses</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          Office sq ft
          <input
            type="number"
            min={0}
            max={1000}
            value={sqft}
            onChange={(e) => setSqft(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Marginal rate (%)
          <select
            value={marginal}
            onChange={(e) => setMarginal(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value={10}>10%</option>
            <option value={12}>12%</option>
            <option value={22}>22%</option>
            <option value={24}>24%</option>
            <option value={32}>32%</option>
          </select>
        </label>
      </div>
      {method === "actual" && (
        <div className="mt-5 grid gap-5 sm:grid-cols-4">
          <label className="block text-sm text-slate-300">
            Annual rent ($)
            <input
              type="number"
              min={0}
              value={rent}
              onChange={(e) => setRent(Math.max(0, Number(e.target.value) || 0))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Utilities ($)
            <input
              type="number"
              min={0}
              value={utilities}
              onChange={(e) => setUtilities(Math.max(0, Number(e.target.value) || 0))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Insurance ($)
            <input
              type="number"
              min={0}
              value={insurance}
              onChange={(e) => setInsurance(Math.max(0, Number(e.target.value) || 0))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Whole home sq ft
            <input
              type="number"
              min={1}
              value={homeSqft}
              onChange={(e) => setHomeSqft(Math.max(1, Number(e.target.value) || 1))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
            />
          </label>
        </div>
      )}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Business-use %</p>
          <p className="mt-1 text-lg font-bold text-white">{(pct * 100).toFixed(1)}%</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. deduction</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(deduction).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Est. tax savings</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(savings).toLocaleString()}</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Requires exclusive, regular business use as principal place of business (employees need
        employer convenience too). Simplified shown for comparison: ${simplified.toLocaleString()}.
      </p>
    </div>
  );
}
