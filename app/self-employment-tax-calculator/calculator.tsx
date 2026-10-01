"use client";

import { useState } from "react";

export default function SelfEmploymentCalculator() {
  const [profit, setProfit] = useState(75000);
  const [wages, setWages] = useState(0);

  const seBase = profit * 0.9235;
  const room = Math.max(0, 184500 - Math.min(wages, 184500));
  const ss = Math.min(seBase, room) * 0.124;
  const med = seBase * 0.029;
  const addl = Math.max(0, profit + wages - 200000) * 0.009;
  const total = ss + med + addl;
  const half = total / 2;
  const effIncome = profit > 0 ? (total / profit) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 self-employment tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        15.3% on 92.35% of profit (12.4% Social Security to $184,500 + 2.9% Medicare), plus 0.9%
        above $200,000 single. Half is deductible.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Net self-employment profit ($)
          <input
            type="number"
            min={0}
            value={profit}
            onChange={(e) => setProfit(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          W-2 wages elsewhere ($)
          <input
            type="number"
            min={0}
            value={wages}
            onChange={(e) => setWages(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <input
        type="range"
        min={0}
        max={250000}
        step={1000}
        value={Math.min(profit, 250000)}
        onChange={(e) => setProfit(Number(e.target.value))}
        aria-label="Profit slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Social Security part</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(ss).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Medicare (+0.9% if any)</p>
          <p className="mt-1 text-lg font-bold text-white">
            ${Math.round(med + addl).toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Total SE tax</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(total).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Deductible half / eff.</p>
          <p className="mt-1 text-lg font-bold text-white">
            ${Math.round(half).toLocaleString()} / {effIncome.toFixed(1)}%
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Covers only SE tax — income tax is additional (see quarterly estimator). No SE tax under
        $400 net earnings. Verify on Schedule SE.
      </p>
    </div>
  );
}
