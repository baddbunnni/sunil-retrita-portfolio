# Sunil Mangtani Retrita — Personal Portfolio

Dark Tech portfolio starter built with Next.js App Router, TypeScript, Tailwind CSS v4 and Lucide icons. It includes a responsive homepage, projects index, and individual project detail pages.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before deploying, run:

```bash
npm run build
```

## Personalise before launch

Search the code for `TODO`, `confirm`, `placeholder`, `example.com`, and the generic social links.

1. Replace the portrait placeholder in `app/page.tsx` with a professional image you have permission to publish.
2. Replace `hello@example.com` with your preferred public email or contact form.
3. Replace generic GitHub and LinkedIn URLs with your profiles.
4. Add your verified CV as `public/Sunil-Retrita-CV.pdf`, or change/remove the CV link in `components/navbar.tsx`.
5. Verify the exact name, institution, dates and wording of each qualification.
6. Verify role responsibilities and add outcomes only when you have evidence.
7. Review each project in `lib/projects.ts`. Project pages deliberately include “details to confirm” checklists; don't publish those checklists as final portfolio copy. Replace them with verified features, screenshots, your role, links and measurable outcomes.
8. Update `metadataBase` in `app/layout.tsx` after choosing your domain.
9. Remove technologies you have not used enough to discuss confidently in an interview.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Sign in to Vercel and import the repository.
3. Keep the detected Next.js build settings and deploy.
4. In Vercel project Settings → Domains, add your purchased domain (for example, `sunilretrita.co.uk` if available).
5. Follow Vercel's displayed DNS instructions at your domain registrar and wait for verification/HTTPS.
6. Update `metadataBase` in `app/layout.tsx` to the real production URL.

A domain is purchased separately and availability must be checked. Do not publish your private phone number or personal address.

## Project notes

- Project content is intentionally cautious: known context is used, and unconfirmed implementation details are marked for review.
- This starter does not claim the taxi app, AI project or proof-of-delivery app has any particular production status.
- The contact and social links are placeholders.
