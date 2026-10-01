# LoanPay Tax — tax.loanpaylogic.com

Isolated Next.js 15 App Router project for the `tax.loanpaylogic.com` subdomain. Educational US tax estimators and guides for AdSense monetization. Does not share code with sibling sites.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Type check:

```bash
npx tsc --noEmit
```

## Deploy on Vercel (import steps)

1. Push this `loanpay-tax` folder as its own repository (or Vercel project root).
2. In Vercel, click **Add New → Project → Import** the repository.
3. Framework preset: **Next.js**. Root directory: repository root.
4. Build command: `next build`. Output: default `.next`.
5. Add environment variables if needed (none required for the MVP).
6. Click **Deploy** and verify the `*.vercel.app` URL loads.

## Add Domain tax.loanpaylogic.com steps

1. In the Vercel project, open **Settings → Domains**.
2. Add `tax.loanpaylogic.com`.
3. At your DNS provider, add the CNAME record Vercel shows (typically `cname.vercel-dns.com`).
4. Wait for DNS propagation, then confirm Vercel shows the domain as valid with HTTPS.
5. Re-visit `https://tax.loanpaylogic.com/sitemap.xml` and `https://tax.loanpaylogic.com/ads.txt` to confirm they serve correctly.

## ads.txt note

`public/ads.txt` is served at `/ads.txt` and currently contains:

```text
# ads.txt for tax.loanpaylogic.com
google.com, pub-4906207495792820, DIRECT, f08c47fec0942fa0
```

Keep this exact seller line for Google AdSense verification. After adding the domain in Vercel, open `https://tax.loanpaylogic.com/ads.txt` to confirm it matches.
