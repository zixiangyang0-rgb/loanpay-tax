import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LoanPay Tax",
  description:
    "Contact the editors of tax.loanpaylogic.com for corrections, questions, or feedback at support@loanpaylogic.com.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Contact us</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Have a question about a guide on tax.loanpaylogic.com, found a number that looks outdated,
        or want to suggest a new estimator? We read every message.
      </p>
      <div className="glass-card mt-8 rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Email</h2>
        <p className="mt-2 text-sm text-slate-300">
          Reach us at{" "}
          <a href="mailto:support@loanpaylogic.com" className="font-semibold text-amber-200 underline underline-offset-2">
            support@loanpaylogic.com
          </a>
          . Please include the page URL you are writing about and a short description of the
          issue.
        </p>
        <h2 className="mt-6 text-lg font-semibold">What to expect</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          We usually reply within two business days. Note that we can only provide general
          information about our educational estimates — we cannot prepare returns, review personal
          documents, or give individualized tax advice by email.
        </p>
        <h2 className="mt-6 text-lg font-semibold">What to include</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          To help us answer quickly, include the page URL you are writing about, the tax year
          your question refers to, and the exact figure or sentence that looks wrong. Screenshots
          of an estimator&apos;s inputs and results are especially useful, because a single
          checkbox such as filing status or state can change the entire calculation. If you are
          suggesting a new estimator, tell us who it is for — for example, tipped workers,
          rideshare drivers, or first-time crypto sellers — and what inputs you would expect to
          enter.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Corrections policy</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Accuracy is the reason this site exists. When a reader reports an error, our research
          lead Emily Roberts checks the claim against current IRS publications, our reviewer
          David Chen, CPA, confirms the correct treatment, and managing editor Sarah Mitchell
          updates the page with the tax year the fix applies to. Straightforward typos are
          usually corrected within a few days; changes tied to new legislation or annual
          inflation adjustments follow our regular year-end review cycle each autumn.
        </p>
        <h2 className="mt-6 text-lg font-semibold">Privacy and scope</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Please do not send Social Security numbers, bank details, or copies of your tax forms —
          email is not a secure channel and we cannot review personal documents in any case.
          Describe your situation in general terms instead. Messages may be kept briefly for
          quality assurance, but we never sell reader information or share it with marketers.
          For anything time-sensitive, such as a filing deadline or an IRS notice, contact the
          IRS or a licensed tax professional directly rather than waiting on our reply.
        </p>
      </div>
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
