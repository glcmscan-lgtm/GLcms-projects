# Sunlight Childcare — 2026 Redesign

A full rebuild of [sunlightchildcare.com](https://sunlightchildcare.com/) in **Next.js 15 (App Router) + JavaScript + Tailwind CSS v4**.

Same business, same logo, same photos, same words — new design.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Node 20+ required.

## What is in the site

| Route | Page |
| --- | --- |
| `/` | Home — hero, promises, about, programs, trust band, director, gallery, FAQ, blog, CTA |
| `/about` | Full about story, values, promises, Kiran John, FAQs |
| `/programs` | All three programs + how enrolment works |
| `/programs/infant-toddler` · `/preschool` · `/flex-care` | Program detail with focus areas and a typical day |
| `/gallery` | Masonry photo gallery with lightbox |
| `/blog` · `/blog/[slug]` | Articles |
| `/faq` | FAQs (with FAQ schema for Google) |
| `/contact` | Contact cards, enquiry form, map |
| `/terms` · `/privacy` | Legal pages (copy carried over verbatim) |

Old WordPress URLs (`/about-2`, `/programs-2`, `/portfolio`, `/blogs`, `/toddler`, `/preschool`, `/flex-care`, `/terms-conditions`, `/privacy-policy-2`) **301-redirect** to the new routes — see `next.config.mjs`.

## Editing content

Everything editable lives in `data/` — no need to touch components:

| File | Holds |
| --- | --- |
| `data/site.js` | Phone, email, address, hours, nav menu, the four promises, trust numbers, director details |
| `data/programs.js` | Program names, ages, descriptions, focus lists, daily schedules |
| `data/posts.js` | Blog articles |
| `data/faqs.js` | FAQ questions and answers |
| `data/gallery.js` | Gallery photos |
| `data/testimonials.js` | Parent testimonials (currently empty — see below) |
| `data/legal.js` | Terms & Conditions and Privacy Policy text |

Images live in `public/images/`. The logo is `public/logo.png` (and `public/logo-light.png`, a white version generated for the dark footer).

## Two things carried over from the old site that need real content

1. **Testimonials.** The old site's testimonials were theme placeholder text ("This text is a temporary placeholder…") from two fictional people, so nothing real existed to keep. Rather than invent parent reviews, `data/testimonials.js` is empty and the section is hidden. Add real quotes to that array and the section appears on the homepage automatically.
2. **Blog posts.** The old posts were also placeholder text. Three genuine starter articles have been written in `data/posts.js` — edit or replace them freely.

Everything else (about copy, program descriptions, Kiran John's bio, terms, privacy, contact details, the Proverbs 22:6 line) is the original wording, word for word.

## Contact form

`components/ContactForm.js` posts to `app/api/contact/route.js`, which validates the submission and logs it on the server. To actually deliver email, add a provider inside that route — for example with [Resend](https://resend.com):

```bash
npm install resend
```

```js
// app/api/contact/route.js
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'website@sunlightchildcare.com',
  to: 'kiran.john@sunlightchildcare.com',
  subject: `New enquiry from ${enquiry.name}`,
  text: JSON.stringify(enquiry, null, 2),
})
```

Put `RESEND_API_KEY=...` in `.env.local` (git-ignored).

## Design notes

- **Colours** are sampled from the logo: navy `#0B2038` and orange `#F25334`, plus sun yellow, sky, mint and a warm cream background. All defined as tokens in `app/globals.css` under `@theme`.
- **Type**: Fraunces (display) + Plus Jakarta Sans (body), loaded through `next/font`.
- **Motion**: scroll reveals use a small `IntersectionObserver` component (`components/Reveal.js`) — no animation library. Everything respects `prefers-reduced-motion`, and content stays visible if JavaScript never runs.
- **SEO**: per-page metadata, Open Graph, `ChildCare` + `FAQPage` JSON-LD, `sitemap.xml` and `robots.txt` generated automatically.

## Deploy

Works as-is on Vercel (`vercel` or connect the repo). For any other host: `npm run build && npm start`.

Before going live, set the real domain in `data/site.js` (`site.url`) so canonical URLs and the sitemap point to the right place.
