import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | LoanPay Tax",
  description:
    "Disclaimer for tax.loanpaylogic.com: educational estimates only, not professional tax advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Everything published on tax.loanpaylogic.com is for general education and illustration
        only. It is not tax advice, legal advice, or financial advice, and it does not create a
        professional-client relationship.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Federal and state tax rules change frequently and depend on your filing status, income
        sources, deductions, credits, residency, and deadlines. Our simplified estimators cannot
        reflect every exception, phase-out, or local rule. Before acting — including adjusting
        withholding, making estimated payments, or reporting crypto sales — verify the current
        rules with the IRS, your state tax agency, or a licensed tax professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We work to keep guides accurate, but we make no warranty of completeness or timeliness. If
        you spot an error, please tell us at support@loanpaylogic.com so we can correct it.
      </p>
    </div>
  );
}
