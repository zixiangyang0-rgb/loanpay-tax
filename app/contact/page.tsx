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
      </div>
    </div>
  );
}
