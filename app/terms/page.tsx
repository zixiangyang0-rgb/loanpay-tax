import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | LoanPay Tax",
  description: "Terms of use for tax.loanpaylogic.com: permitted use, intellectual property, and limitations.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-2 text-xs text-slate-400">Last updated: October 1, 2026. Applies to tax.loanpaylogic.com.</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        By visiting tax.loanpaylogic.com you agree to these terms. If you do not agree, please do
        not use the site.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Educational use only</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        All calculators, guides, and examples on tax.loanpaylogic.com are educational estimates
        only. They are not tax, legal, or financial advice. Always confirm filing decisions with a
        licensed professional or official IRS and state publications.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Permitted use</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        You may use the site for personal, non-commercial research. You agree not to abuse the
        service, attempt to disrupt it, scrape content at scale, or misrepresent our estimates as
        professional advice.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Intellectual property</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Text, layouts, and graphics on this site belong to LoanPay Tax unless otherwise noted. You
        may quote short excerpts with credit and a link back to tax.loanpaylogic.com.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Limitation of liability</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        To the maximum extent permitted by law, LoanPay Tax is not liable for decisions made from
        using this site. Tax outcomes depend on complete personal facts that an online estimator
        cannot fully capture.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Questions about these terms: support@loanpaylogic.com.
      </p>
    </div>
  );
}
