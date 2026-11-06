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
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our editorial team combines newsroom experience with professional tax training. Sarah
        Mitchell, our managing editor, spent eight years covering personal finance for regional
        newspapers before joining LoanPay Tax; she sets our plain-language standards and reviews
        every guide for clarity. David Chen, a licensed Certified Public Accountant, checks each
        estimator&apos;s logic against current IRS publications, flagging anything that depends on
        filing status, income thresholds, or state-specific rules. Emily Roberts, our research
        lead, tracks annual inflation adjustments, standard deduction figures, and credit phaseout
        ranges so our examples stay current from one tax year to the next.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        How we work is straightforward. We start from primary sources — IRS forms, instructions,
        and revenue procedures — then build simplified examples around common situations: a
        single W-2 employee taking the standard deduction, a freelancer setting aside estimated
        payments, or a long-term investor comparing short-term and long-term capital gains rates.
        Each page goes through two passes, one for readability and one for numerical accuracy,
        before it is published. When tax law changes, we update the affected pages and note the
        tax year the figures apply to.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        What we will not do matters as much as what we cover. We do not prepare tax returns,
        review personal documents, or provide individualized advice, and nothing on this site
        creates an accountant-client relationship. Tax outcomes depend on details our estimators
        cannot see, such as prior-year carryovers, multi-state residency, or employer withholding
        choices. Treat our pages as a starting point for better questions, then confirm your
        specific situation with the IRS, your state revenue agency, or a licensed tax
        professional before you file or make estimated payments.
      </p>
      <div className="mt-8 border-t border-slate-700/60 pt-4 text-sm text-slate-400">
        <p>
          Written by Sarah Mitchell, reviewed by David Chen, CPA, with research by Emily
          Roberts.
        </p>
        <p className="mt-1">Last reviewed: November 2026.</p>
      </div>
    </div>
  );
}
