"use client";

import { useState } from "react";

type Status = "single" | "mfj" | "hoh";

const STD_2026: Record<Status, number> = { single: 16100, mfj: 32200, hoh: 24150 };

// 2026 single bracket tops (taxable income); MFJ tops are 2x single except HoH own schedule
const SINGLE_TOPS = [12400, 50400, 105700, 201775, 256225, 640600];
const HOH_TOPS = [17700, 67450, 105700, 201750, 256200, 640600];
const RATES = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

function fedTax(taxable: number, tops: number[]): number {
  if (taxable <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < tops.length; i++) {
    const cap = Math.min(taxable, tops[i]);
    if (cap > prev) tax += (cap - prev) * RATES[i];
    prev = tops[i];
    if (taxable <= tops[i]) return tax;
  }
  return tax + (taxable - tops[tops.length - 1]) * 0.37;
}

export default function FederalTaxCalculator() {
  const [income, setIncome] = useState(85000);
  const [status, setStatus] = useState<Status>("single");
  const [extraDeduction, setExtraDeduction] = useState(0);

  const std = STD_2026[status];
  const mult = status === "mfj" ? 2 : 1;
  const tops = status === "hoh" ? HOH_TOPS : SINGLE_TOPS.map((t) => t * mult);
  const stdScaled = status === "hoh" ? std : status === "mfj" ? std : std;
  const taxable = Math.max(0, income - stdScaled - extraDeduction);
  const tax = fedTax(taxable, tops);
  const effective = income > 0 ? (tax / income) * 100 : 0;
  let marginal = 10;
  for (let i = 0; i < tops.length; i++) {
    if (taxable > (i === 0 ? 0 : tops[i - 1]) && taxable <= tops[i]) {
      marginal = RATES[i] * 100;
      break;
    }
    if (taxable > tops[tops.length - 1]) marginal = 37;
  }

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 federal income tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Uses 2026 IRS brackets and standard deductions (Rev. Proc. 2025-32, as amended by the One,
        Big, Beautiful Bill). Simplified estimate only.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <label className="block text-sm text-slate-300">
          Filing status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="single">Single</option>
            <option value="mfj">Married filing jointly</option>
            <option value="hoh">Head of household</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          Gross annual income ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Extra deductions / pre-tax items ($)
          <input
            type="number"
            min={0}
            value={extraDeduction}
            onChange={(e) => setExtraDeduction(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <input
        type="range"
        min={0}
        max={400000}
        step={1000}
        value={Math.min(income, 400000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Income slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Standard deduction</p>
          <p className="mt-1 text-lg font-bold text-white">${stdScaled.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Taxable income</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(taxable).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. federal tax</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(tax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Effective / marginal</p>
          <p className="mt-1 text-lg font-bold text-white">
            {effective.toFixed(1)}% / {marginal}%
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Assumes you take the standard deduction and have no credits, AMT, NIIT, or state tax. Real
        returns differ; confirm with the IRS or a licensed professional.
      </p>
    </div>
  );
}
