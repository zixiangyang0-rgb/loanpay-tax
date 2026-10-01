import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LoanPay Tax",
  description:
    "Learn what tax.loanpaylogic.com covers: free educational US tax estimators and guides for employees, freelancers, and crypto holders.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">About tax.loanpaylogic.com</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Tax is a small editorial project that explains United States personal taxes in
        plain English. We publish short estimators, checklists, and explainers covering federal
        income tax, state income tax, self-employment tax for freelancers, crypto gains, refund
        tracking, and the practical differences between W-2 employment and 1099 contract work.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our goal is to help readers build intuition before they file: how brackets and the
        standard deduction interact, why freelancers pay both halves of payroll tax, and how
        holding periods change crypto results. Every page on tax.loanpaylogic.com provides
        educational estimates only and encourages readers to verify details with the IRS, their
        state revenue agency, or a licensed tax professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We are independent writers and developers, not accountants or attorneys. Questions or
        corrections are welcome at support@loanpaylogic.com.
      </p>
    </div>
  );
}
