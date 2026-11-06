import type { MetadataRoute } from "next";

const BASE = "https://tax.loanpaylogic.com";

const ROUTES: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  // Cluster A — federal
  { url: "/federal-income-tax-calculator-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/federal-tax-brackets-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/standard-deduction-vs-itemized-2026", priority: 0.8, changeFrequency: "monthly" },
  { url: "/tax-refund-estimator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/w4-withholding-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/quarterly-estimated-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  // Cluster B — states
  { url: "/california-income-tax-calculator", priority: 0.9, changeFrequency: "monthly" },
  { url: "/texas-no-income-tax-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/new-york-income-tax-calculator", priority: 0.9, changeFrequency: "monthly" },
  { url: "/florida-no-income-tax-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/illinois-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/pennsylvania-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ohio-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/georgia-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/north-carolina-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/michigan-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/new-jersey-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/washington-no-income-tax-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/virginia-income-tax-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/paycheck-tax-calculator-by-state-2026", priority: 0.9, changeFrequency: "monthly" },
  // Cluster C — freelance
  { url: "/self-employment-tax-calculator", priority: 0.9, changeFrequency: "monthly" },
  { url: "/w2-vs-1099-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/freelancer-quarterly-tax-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/home-office-deduction-calculator", priority: 0.8, changeFrequency: "monthly" },
  { url: "/sep-ira-vs-solo-401k-tax", priority: 0.8, changeFrequency: "monthly" },
  // Cluster D — investing
  { url: "/crypto-tax-calculator", priority: 0.9, changeFrequency: "monthly" },
  { url: "/capital-gains-tax-calculator-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/rsu-stock-options-tax-guide", priority: 0.8, changeFrequency: "monthly" },
  // Cluster E — seasonal
  { url: "/when-are-taxes-due-2027", priority: 0.8, changeFrequency: "monthly" },
  { url: "/tax-filing-checklist", priority: 0.8, changeFrequency: "monthly" },
  { url: "/roth-vs-traditional-ira-tax", priority: 0.8, changeFrequency: "monthly" },
  { url: "/student-loan-interest-deduction", priority: 0.8, changeFrequency: "monthly" },
  // Existing legal pages
  { url: "/about", priority: 0.5, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { url: "/terms", priority: 0.4, changeFrequency: "monthly" },
  { url: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  return ROUTES.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
