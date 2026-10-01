"use client";

import { useState } from "react";

// 2026 NY State single brackets (published schedule, unchanged structure for 2026)
const TOPS = [8500, 11700, 13900, 80650, 215400, 1077550, 5000000, 25000000];
const RATES = [0.04, 0.045, 0.0525, 0.055, 0.06, 0.0685, 0.0965, 0.103, 0.109];

function nyTax(taxable: number, tops: number[]): number {
  if (taxable <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < tops.length; i++) {
    const cap = Math.min(taxable, tops[i]);
    if (cap > prev) tax += (cap - prev) * RATES[i];
    prev = tops[i];
    if (taxable <= tops[i]) return tax;
  }
  return tax + (taxable - tops[tops.length - 1]) * RATES[RATES.length - 1];
}

export default function NewYorkTaxCalculator() {
  const [income, setIncome] = useState(120000);
  const [status, setStatus] = useState("single");
  const [city, setCity] = useState("none");

  const std = status === "joint" ? 16050 : 8000;
  const tops = status === "joint" ? TOPS.map((t) => t * 2) : TOPS;
  const taxable = Math.max(0, income - std);
  const stateTax = nyTax(taxable, tops);
  const cityTax = city === "nyc" ? income * 0.03 : city === "yonkers" ? income * 0.005 : 0;
  const total = stateTax + cityTax;
  const effective = income > 0 ? (total / income) * 100 : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white">2026 New York tax estimator</h2>
      <p className="mt-2 text-sm text-slate-400">
        State brackets 4%–10.9% with $8,000 single / $16,050 joint standard deduction. Optional
        NYC (~3% effective) or Yonkers add-on.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <label className="block text-sm text-slate-300">
          Filing status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="single">Single / separate</option>
            <option value="joint">Married filing jointly</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          NY gross income ($)
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm text-slate-300">
          City tax
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-white"
          >
            <option value="none">No city tax</option>
            <option value="nyc">NYC resident (~3%)</option>
            <option value="yonkers">Yonkers (~0.5%)</option>
          </select>
        </label>
      </div>
      <input
        type="range"
        min={0}
        max={500000}
        step={1000}
        value={Math.min(income, 500000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Income slider"
        className="mt-6"
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Est. NY state tax</p>
          <p className="mt-1 text-lg font-bold text-white">${Math.round(stateTax).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-amber-200/20 bg-amber-200/5 p-4">
          <p className="text-xs text-amber-200/80">Est. state + city</p>
          <p className="mt-1 text-lg font-bold text-amber-200">${Math.round(total).toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs text-slate-400">Combined effective rate</p>
          <p className="mt-1 text-lg font-bold text-white">{effective.toFixed(2)}%</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Simplified: no credits, AMT, or MTA payroll nuances; NYC uses a blended ~3% proxy for its
        3.078%–3.876% schedule. Verify with NY Tax and Finance.
      </p>
    </div>
  );
}
