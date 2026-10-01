"use client";

import { useState } from "react";

function incomeTaxSingle(taxable: number): number {
  const tops = [12400, 50400, 105700, 201775, 256225, 640600];
  const rates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < tops.length; i++) {
    const cap = Math.min(taxable, tops[i]);
    if (cap > prev) tax += (cap - prev) * rates[i];
    prev = tops[i];
    if (taxable <= tops[i]) return tax;
  }
  return tax + (taxable - tops[tops.length - 1]) * 0.37;
}

export default function W2Vs1099Calculator() {
  const [pay, setPay] = useState(90000);
  const [benefits, setBenefits] = useState(8000);
  const [bizExp, setBizExp] = useState(5000);

  // W-2: employee 7.65% on wages (SS to cap), income tax on pay minus std deduction.
  const w2ssmed = Math.min(pay, 184500) * 0.062 + pay * 0.0145;
  const w2inc = incomeTaxSingle(Math.max(0, pay - 16100));
  const w2total = w2ssmed + w2inc;
  const w2take = pay + benefits - w2total;

  // 1099: SE tax on 92.35% of (pay - expenses) + income tax after half-SE + std deduction.
  const profit = Math.max(0, pay - bizExp);
  const seBase = profit * 0.9235;
  const se = Math.min(seBase, 184500) * 0.124 + seBase * 0.029;
  const inc1099 = incomeTaxSingle(Math.max(0, profit - se / 2 - 16100));
  const total1099 = se + inc1099;
  const take1099 = pay - bizExp - total1099;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">W-2 vs. 1099 take-home comparison</h2>
      <p className="mt-2 text-sm text-slate-400">
        Same gross pay, single filer, 2026 standard deduction. W-2 side includes employer
        benefits value; 1099 side deducts business expenses first.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <label className="block text-sm text-slate-300">
          Gross offer ($)
          <input
            type="number"
            min={0}
            value={pay}
            onChange={(e) => setPay(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          W-2 benefits value ($)
          <input
            type="number"
            min={0}
            value={benefits}
            onChange={(e) => setBenefits(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          1099 business expenses ($)
          <input
            type="number"
            min={0}
            value={bizExp}
            onChange={(e) => setBizExp(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-semibold text-white">W-2 employee</p>
          <p className="mt-2 text-xs text-slate-400">Payroll + income tax: ${Math.round(w2total).toLocaleString()}</p>
          <p className="mt-1 text-xl font-bold text-white">${Math.round(w2take).toLocaleString()} <span className="text-xs font-normal text-slate-400">take-home + benefits</span></p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-5">
          <p className="text-sm font-semibold text-amber-200">1099 contractor</p>
          <p className="mt-2 text-xs text-slate-400">SE + income tax: ${Math.round(total1099).toLocaleString()}</p>
          <p className="mt-1 text-xl font-bold text-white">${Math.round(take1099).toLocaleString()} <span className="text-xs font-normal text-slate-400">after taxes &amp; expenses</span></p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Rule of thumb visible above: contractors need ~15–20% more gross to match W-2 take-home.
        Simplified — ignores state tax, QBI deduction, and health-premium deductions.
      </p>
    </div>
  );
}
