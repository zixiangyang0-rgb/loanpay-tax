import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tax.loanpaylogic.com"),
  title: {
    default: "LoanPay Tax | Federal & State Tax Estimators and Guides",
    template: "%s | LoanPay Tax",
  },
  description:
    "LoanPay Tax offers simple United States tax estimators, refund guides, and plain-English explainers for employees, freelancers, and crypto holders.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
    description:
      "Estimate federal and state taxes, self-employment taxes, and crypto taxes with free educational tools and guides.",
    url: "https://tax.loanpaylogic.com",
    siteName: "LoanPay Tax",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Tax | Federal & State Tax Estimators and Guides",
    description:
      "Estimate federal and state taxes, self-employment taxes, and crypto taxes with free educational tools and guides.",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-bold tracking-tight">
        LoanPay <span className="text-gradient">Tax</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 text-sm text-slate-400">
      <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} tax.loanpaylogic.com. Educational estimates only, not tax advice.
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
