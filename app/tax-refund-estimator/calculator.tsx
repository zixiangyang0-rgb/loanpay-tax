"use client";

import { useState } from "react";

export default function RefundEstimator() {
  const [income, setIncome] = useState(75000);
  const [withheld, setWithheld] = useState(9000);
  const [status, setStatus] = useState("single");
  const [credits, setCredits] = useState(2000);

  const std = status === "mfj" ? 32200 : status === "hoh" ? 24150 : 16100;
  const single = [12400, 50400, 105700, 201775, 256225, 640600];
  const rates = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
  const tops =
    status === "mfj"
      ? single.map((t) => t * 2)
      : status === "hoh"
        ? [17700, 67450, 105700, 201750, 256200, 640600]
        : single;
  const taxable = Math.max(0, income - std);
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < tops.length; i++) {
    const cap = Math.min(taxable, tops[i]);
    if (cap > prev) tax += (cap - prev) * rates[i];
    prev = tops[i];
    if (taxable <= tops[i]) break;
  }
  if (taxable > tops[tops.length - 1]) tax += (taxable - tops[tops.length - 1]) * 0.37;
  const afterCredits = Math.max(0, tax - credits);
  const diff = withheld - afterCredits;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 refund vs. balance-due estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        Compares your total withholding and credits against simplified 2026 federal liability.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Filing status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="single">Single</option>
            <option value="mfj">Married filing jointly</option>
            <option value="hoh">Head of household</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          Gross income ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Total federal tax withheld ($)
          <input
            type="number"
            min={0}
            value={withheld}
            onChange={(e) => setWithheld(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Credits (child, education, other) ($)
          <input
            type="number"
            min={0}
            value={credits}
            onChange={(e) => setCredits(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Est. tax after credits</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(afterCredits).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Already withheld</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(withheld).toLocaleString()}</p>
        </div>
        <div
          className={`rounded-xl border p-4 ${diff >= 0 ? "border-emerald-300/20 bg-emerald-300/5" : "border-rose-300/20 bg-rose-300/5"}`}
        >
          <p className="text-xs text-slate-400">{diff >= 0 ? "Est. refund" : "Est. amount owed"}</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(Math.abs(diff)).toLocaleString()}</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified: standard deduction, no state tax, no AMT or self-employment tax. Your W-2 box 2
        shows withheld amounts; your actual refund depends on the full return.
      </p>
    </div>
  );
}
