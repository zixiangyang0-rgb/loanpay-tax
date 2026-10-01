"use client";

import { useState } from "react";

export default function EstimatedTaxCalculator() {
  const [profit, setProfit] = useState(60000);
  const [w2wages, setW2wages] = useState(0);
  const [withheld, setWithheld] = useState(0);

  const seBase = profit * 0.9235;
  const ssCap = 184500;
  const ssWagesUsed = Math.min(w2wages, ssCap);
  const ssRoom = Math.max(0, ssCap - ssWagesUsed);
  const ssTax = Math.min(seBase, ssRoom) * 0.124;
  const medTax = seBase * 0.029;
  const totalAGI = profit + w2wages;
  const addlMed = Math.max(0, totalAGI - 200000) * 0.009;
  const seTax = ssTax + medTax + addlMed;
  const halfSE = seTax / 2;
  const agi = Math.max(0, totalAGI - halfSE);
  const taxable = Math.max(0, agi - 16100);
  const single = [12400, 50400, 105700, 201775, 256225, 640600];
  const rates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
  let incomeTax = 0;
  let prev = 0;
  for (let i = 0; i < single.length; i++) {
    const cap = Math.min(taxable, single[i]);
    if (cap > prev) incomeTax += (cap - prev) * rates[i];
    prev = single[i];
    if (taxable <= single[i]) break;
  }
  if (taxable > single[single.length - 1])
    incomeTax += (taxable - single[single.length - 1]) * 0.37;
  const total = incomeTax + seTax;
  const stillOwed = Math.max(0, total - withheld);
  const quarterly = stillOwed / 4;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 quarterly payment estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Single filer, standard deduction, 2026 Social Security base $184,500. Deadlines: Apr 15,
        Jun 15, Sep 15 2026 and Jan 15 2027.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <label className="block text-sm text-slate-300">
          Self-employment profit ($)
          <input
            type="number"
            min={0}
            value={profit}
            onChange={(e) => setProfit(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          W-2 wages, if any ($)
          <input
            type="number"
            min={0}
            value={w2wages}
            onChange={(e) => setW2wages(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Already withheld / prepaid ($)
          <input
            type="number"
            min={0}
            value={withheld}
            onChange={(e) => setWithheld(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Est. income tax</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(incomeTax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Est. SE tax (15.3%)</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(seTax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Total federal bill</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(total).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Suggested per quarter</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(quarterly).toLocaleString()}</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified estimate ignoring credits, state tax, and retirement deductions. Official
        vouchers: Form 1040-ES. Pay online at IRS Direct Pay.
      </p>
    </div>
  );
}
