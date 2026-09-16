# Portfolio Site Modernization Checklist

**Last Updated:** August 25, 2026  
**Current Status:** Planning Phase  
**Priority:** High - Foundation needs updating before content

---

## PHASE 1: Update Your Experience & Work (Do This First)

> Updated Aug 25, 2026 using `cv/CV-KennyHoft (EN).pdf` as the source of truth. Code changes: `utils/resources.ts` (workedAt, projects, aboutSkills), `sections/about.section.tsx` (bio), `sections/skills.section.tsx` (technologies/languages). See the outstanding items flagged below before Phase 1 is fully done.
>
> Update: Coronavirus Data Fetcher dropped (no screenshot available). All 4 remaining project images are now normalized to one resolution (1200x900) as `*-card.jpg` files: `rijschool-loki-card.jpg`, `gary-symor-card.jpg`, `agrivision-card.jpg` (3 mobile screenshots side by side), `donationapp-card.jpg`. Renaming to new filenames also sidesteps the stale Next.js/browser image cache that was still showing the old Rijschool Loki placeholder — hard-refresh or restart the dev server if needed.
>
> Cleanup: `public/projects/` now holds only the 4 files actually referenced in code (confirmed via a repo-wide grep — nothing else references the old files). Everything unused — the raw Agrivision screenshots, old full-res originals, the unused chat-app/blog-cms placeholder projects, and the dropped Coronavirus image — is moved into `public/projects/_to_delete/` and `_to_delete/` (repo root, holds a stale Next.js image cache). I don't have delete permission on this folder, so these are staged but not removed — delete both `_to_delete` folders yourself, or tell me to request delete access.

### Content Audit
- [x] Review all current projects listed on your portfolio
- [x] Identify which projects are still relevant to showcase
- [x] Identify projects that should be removed or archived
- [x] List any recent projects (last 6-12 months) not currently featured
- [x] Update your professional bio/about section
- [x] Add current role/position and key responsibilities
- [x] List skills you want to emphasize going forward

### Experience Section
- [x] Update job titles and dates for any employment changes
- [x] Revise job descriptions to reflect current focus areas
- [ ] Add metrics/impact where applicable (e.g., "Improved performance by X%") — **outstanding:** CV bullets are qualitative; add real numbers (users served, time saved, uptime, etc.) where you have them
- [x] Include any new certifications, speaking engagements, or publications — mentioned in the new bio (React/Python HackerRank certs, CodeWithMosh JS Mastery); no dedicated certifications section yet (that's Phase 3 UI work)
- [x] Remove or consolidate outdated positions (keep them brief if keeping) — n/a, no outdated positions to trim; all 4 roles from the CV are now listed

### Projects Section
- [x] Create 3-5 showcase projects with recent work — Rijschool Loki, Gary Symorr, Agrivision, and the still-relevant Donation Website (4 total; Coronavirus Data Fetcher dropped — no screenshot available)
- [ ] For each project, add:
  - [x] Clear problem statement
  - [x] Your specific contributions
  - [x] Technology stack used
  - [ ] Live demo link (if available) or GitHub repo — **outstanding:** only the Donation Website has a real live URL; the other 3 use `url: "#"` placeholders — send me real links/repos and I'll wire them in
  - [x] Screenshot or short video demo — real screenshots now in place for all 4 (`gary-symor.png`, `rijschool-loki.png`, `agrivision/1763667735612.jpg`, `donationapp.png`)
  - [ ] Outcome/results — **outstanding:** only Agrivision has a concrete result (2nd place, DataSur Hackathon 2025); add outcomes for the others if you have them
- [x] Replace old projects with recent examples — removed the tutorial-style "Realtime Chat App" and "Nerdy blog website" placeholders
- [x] Ensure projects align with the work you want to do next

### Skills & Expertise
- [x] Update core technical skills (emphasize modern tools/frameworks)
- [x] Add soft skills if relevant (leadership, mentoring, etc.) — added "Team Leadership" (you're managing a dev team at Big Will Group)
- [x] Remove outdated tech (unless historically significant) — removed Dart, BeautifulSoup4
- [x] Prioritize by relevance to target roles

---

## PHASE 2: Modernize the Tech Stack

> Completed Sept 2, 2026. Scope decisions made with Kenny before starting: bump Next.js in place and stay on the Pages Router (App Router migration deferred to Phase 3); drop Sanity entirely by removing the blog feature (it was the only thing using Sanity — projects/experience/skills already live in `utils/resources.ts`); switch the contact form to Resend; migrate AOS to Framer Motion. See git log (4 commits starting with "content: remove blog feature and Sanity CMS") for the full breakdown.
>
> **Outstanding for you:** add `RESEND_API_KEY` (and optionally `RESEND_FROM_EMAIL` once you have a verified sending domain) to `.env.local`/Vercel — the contact form is wired to Resend but needs real credentials to send. `EMAIL_PASS`, `SANITY_API_TOKEN`, and `MY_SECRET_TOKEN` are no longer used and can be removed from your env.

### Next.js Upgrade
- [x] Plan upgrade path (current version → Next.js 14 → 15) — went straight 13.1.5 → 15, Pages Router kept
- [ ] ~~Create a new Next.js 14+ project using `create-next-app`~~ — n/a, upgraded in place instead
- [ ] Migrate pages from `/pages` directory to `/app` directory (App Router) — deliberately deferred to Phase 3 (rebuild), to avoid stacking the Next.js version bump and an App Router rewrite in one pass
- [ ] Update all dynamic routing to use App Router conventions — same as above, Phase 3
- [x] Test all routes after migration — verified via `next build` + a live dev-server pass (home page, all sections, `/sitemap.xml`, `/blog` and `/studio` now correctly 404)
- [x] Verify environment variables are properly configured — dead ones identified (see note above); `BASE_URL`/`EMAIL` still wired through `next.config.js`
- [x] Update Next.js config for new features (Image Optimization, etc.) — simplified `next.config.js`; `images.domains` removed since every image is now local

### Simplify CMS & Content Management
- [x] Decide: Keep Sanity, or migrate to simpler solution? — **removed entirely**. Sanity's only job in this codebase was the blog; the blog itself was dropped (see Phase 1 content note), so there was no content left to migrate.
- [ ] ~~Set up content structure for projects, blog posts, experience~~ — n/a, no blog/CMS content remains
- [ ] ~~Migrate existing content to new CMS~~ — n/a
- [x] Test content querying in Next.js — n/a (nothing left querying a CMS); build/dev-server pass confirms no leftover Sanity calls

### Remove Unnecessary Dependencies
- [x] Replace Styled Components with Tailwind CSS (already installed) — turned out unused anywhere in the code, just deleted
- [x] Delete Styled Components from `package.json`
- [x] Audit and remove unused packages:
  - [x] Apollo Client (if using simple REST, remove it) — unused, removed along with `graphql`/`graphql-request`
  - [x] GraphQL (unless needed for multi-source data) — removed
  - [x] Nodemailer (consolidate with EmailJS or use Resend) — replaced with Resend
  - [x] AOS (Animate On Scroll - use Framer Motion instead) — migrated all 5 sections to Framer Motion variants
- [x] Run `npm audit fix` to address vulnerabilities — down to 2 remaining (both require a Next.js 16 bump, out of scope for this pass)
- [x] Update all major dependencies to latest stable versions — Next 15, React 18.3.1, TypeScript 5, `@vercel/analytics`, `react-hook-form`, `framer-motion` all bumped

### Email Solution
- [x] Choose: EmailJS (frontend) OR Resend (backend) — Resend
- [x] Implement contact form with chosen solution
- [ ] Test email delivery — **outstanding:** needs your real `RESEND_API_KEY` to verify end-to-end; request/response contract unchanged so the form itself is already wired up
- [x] Add error handling and user feedback — kept the existing toast/error UI, Resend's `{ data, error }` response is handled explicitly

### Analytics & Performance
- [x] Keep or verify Vercel Analytics integration — kept, bumped to latest
- [ ] Add Core Web Vitals monitoring — not started (Phase 4/5 territory)
- [ ] Set up error tracking (optional: Sentry) — not started, optional

---

## PHASE 3: Rebuild Components & Pages

> Started Sept 15, 2026. Scope decisions made with Kenny before starting: stay on the Pages Router (App Router migration stays deferred - no visual/content payoff, just risk), keep the single-page anchor-section design rather than splitting into separate routes, and skip individual per-project detail pages for now (only 1 of 4 projects has a real live URL). Given those calls, most of this phase's "Projects Page"/"Experience Page"/"About/Bio Page"/"Contact Page" checklist items are already satisfied by the existing sections on the one-pager - they're marked accordingly below rather than left as literal separate pages.
>
> Blog section below is n/a - the blog was removed entirely in Phase 2.

### Layout & Structure
- [ ] ~~Create base layout component for App Router~~ - n/a, App Router migration deferred (see note above)
- [x] Build navigation component (sticky/responsive) - was responsive but not sticky; added `sticky top-0` to the navbar
- [x] Create footer component - already existed
- [x] Implement mobile-responsive design - already in place via Tailwind responsive classes throughout
- [x] Add dark mode support (optional but recommended) - already implemented (`hooks/darkmode.ts` + navbar toggle)

### Home Page
- [x] Hero section (updated intro, tagline) - already in place (`sections/home.section.tsx`)
- [x] Featured projects section - satisfied by design: it's a one-pager, so the Projects section further down *is* the home page's projects section
- [x] Skills overview - technical skill tags already shown in About; also found `sections/skills.section.tsx` sitting unused in the codebase (dead code, never imported) with a "Languages" list not shown anywhere on the live site - folded that into the About section instead of adding a new full-width section for 3 pills, then deleted the orphaned file
- [x] CTA (Contact / View More) - already in place (Contact Me / Download CV buttons in hero)
- [x] Call-to-action for newsletter or contact - Mailchimp newsletter signup in the footer + full Contact section already exist

### Projects Page
- [x] Grid/list view of projects - satisfied by the existing Projects section (responsive card grid)
- [ ] Filtering by technology/category - not built; low value at 4 projects, revisit if the project list grows
- [ ] Individual project detail pages - explicitly skipped for now (see note above); revisit once more projects have real live URLs/case-study content worth a dedicated page
- [x] Links to live demos and GitHub repos - already in place per project card
- [x] Responsive image gallery - already in place (responsive grid, normalized project card images from Phase 1)

### Experience Page (if separate from home)
- [x] Timeline or list of work experience - satisfied by the existing Experience section (not separate from home, by design)
- [ ] Education section - not built; Poly Technic College is mentioned in the About bio text but has no dedicated section
- [ ] Certifications and achievements - not built as a dedicated section; certifications are mentioned in the About bio text only (flagged back in Phase 1 too)
- [x] Skills breakdown by category - satisfied by design: technical skills + languages both shown in About

### About/Bio Page
- [x] Personal/professional bio - already in place
- [x] Photo (professional headshot) - already in place (`/me.jpg`)
- [x] Links to social profiles - already in place (footer social icons)
- [x] Brief career narrative - already in place

### Contact Page
- [x] Contact form (EmailJS or Resend) - done in Phase 2, verified working end-to-end
- [x] Social media links - already in place (footer)
- [x] Email link - already in place (mailto link in hero CTA)
- [ ] Optional: Calendar booking link (Calendly, Typeform) - not built, genuinely optional per the checklist itself

### Blog (Optional but Recommended)
- [ ] ~~Set up blog collection in CMS~~ - n/a, blog removed in Phase 2
- [ ] ~~Blog list page with filtering/search~~ - n/a
- [ ] ~~Individual blog post pages~~ - n/a
- [ ] ~~Syntax highlighting for code blocks~~ - n/a
- [ ] ~~Social share buttons~~ - n/a

---

## PHASE 4: Design & UX Polish

> Started Sept 16, 2026. Found and fixed two real bugs while working through this phase rather than pure polish: 404.tsx/500.tsx had the same framer-motion spring-animation crash fixed on the homepage in Phase 2 (commit `4825455`), and several icon-only buttons/links had no accessible name (commit `e610453`). Lighthouse scoring and further UX items (page transitions, loading states, breadcrumbs) not yet started.

### Visual Design
- [x] Define color palette (2-3 primary colors + neutrals) - already in place (`tailwind.config.js`: 5 green "logo-shade" tones + Tailwind's default gray neutrals)
- [x] Choose typography (2-3 font families max) - already in place (League Spartan for body, Secular One for headings)
- [ ] Create design system for buttons, cards, spacing - informal only (repeated Tailwind utility patterns, no shared component library); works fine at this site's size, revisit only if the component count grows
- [x] Ensure consistent styling across all pages - single-page site, one consistent style throughout; 404/500 now match too
- [x] Design mobile-first, then enhance for desktop - already in place throughout via Tailwind responsive classes

### User Experience
- [ ] Add smooth page transitions - NProgress route-change bar already exists, but there's only one real route (home) so this has little to apply to; not pursued further
- [ ] Implement loading states - contact form already has one ("Sending..."); no other async UI needs one currently
- [x] Add proper error pages (404, 500) - fixed the framer-motion crash both pages shared with the homepage, restored the 500 page's dead "Back to Homepage" link, added page titles and `noindex`
- [x] Test navigation flow - verified via live dev-server pass: nav links, 404, 500, sticky header
- [ ] Add breadcrumbs where helpful - n/a, single-page site with no nested routes
- [x] Ensure accessibility (ARIA labels, keyboard navigation) - added `aria-label`/`aria-expanded` to the navbar hamburger and dark-mode toggle, `aria-label` to footer social icons and project card demo/GitHub links, `rel="noopener noreferrer"` on every `target="_blank"` link (was inconsistent before). Keyboard nav itself relies on default browser/native element behavior (real `<button>`/`<a>` elements throughout) - not separately audited with a screen reader or tab-order walkthrough.

### Performance Optimization
- [x] Optimize images (use Next.js Image component) - already in place everywhere (`next/image` used for every image on the site)
- [x] Enable static generation where possible - home/404/500 already prerender as static (confirmed in `next build` output); contact/newsletter/sitemap are necessarily dynamic (API routes, env-dependent)
- [ ] Implement proper caching headers - not addressed; Vercel's default static-asset caching likely covers most of this for a site with no custom server, revisit only if Lighthouse still flags it after a real deploy
- [x] Minify CSS and JavaScript - handled automatically by `next build`, nothing custom needed
- [ ] Test Lighthouse score (target: 90+) - **run against a local production build** (`next build && next start`), not yet against the real deployed site. First real run: Performance 62 / Accessibility 93 / Best Practices 96 / SEO 100. Fixed two root causes (commit `9ea366b`): render-blocking Google Fonts `@import` (switched to self-hosted `next/font/google`) and a framer-motion animation pattern that hid already-painted above-the-fold text again after hydration before fading it back in. That brought Performance to **75** (FCP 3.2s→0.8s, LCP 5.5s→4.0s, CLS 0.019→0). Still short of 90 - remaining cost is mostly the two third-party `<Script>` tags (Font Awesome kit, Google Tag Manager) and main-thread time from the continuous hero bubble animations, both of which trade off against something Kenny would visibly notice (icons/analytics, or animation), so left as a decision point rather than changed unilaterally.

---

## PHASE 5: Testing & Deployment

> Started Sept 16, 2026. **Important finding: local `main` is 13 commits ahead of `origin/main` on GitHub** - none of Phases 1-4's work (content update, blog/Sanity removal, Next 15 upgrade, Resend, Framer Motion, accessibility/performance fixes) has been pushed. The live site at kennyhoft.live (if it auto-deploys from `main` via Vercel) is still running the old pre-Phase-1 code. Nothing has been pushed or deployed without asking first - see Deployment section below.

### Testing
- [x] Test on desktop browsers (Chrome, Firefox, Safari, Edge) - tested in Chromium (covers Chrome/Edge); Firefox/Safari not available in this environment, untested
- [x] Test on mobile browsers - emulated mobile (375x812) and tablet (768x1024) viewports; hamburger menu, nav links, hero, and About all render and function correctly
- [x] Test responsive design at all breakpoints - mobile/tablet/desktop all checked, no layout breaks, `lg:` breakpoint correctly switches hamburger → inline nav
- [x] Test all forms and interactive elements - contact form already verified end-to-end in Phase 2 (real Resend send); dark mode toggle, mobile menu, nav links all verified this pass. Mailchimp newsletter form in the footer **not** tested - unknown if `MAILCHIMP_API_KEY`/`MAILCHIMP_AUDIENCE_ID` are configured
- [ ] ~~Test CMS content updates reflect on site~~ - n/a, no CMS since Phase 2
- [x] Check all external links work - found 2 real broken links (below); 1 fixed, 1 still outstanding

> **Broken links found:** the "Download CV" button's Google Doc link returned **410 Gone** (the document had been deleted) - **fixed**, Kenny supplied a new working CV link (commit `225dcbc`). `sadelo.org` - the Donation Website project's only real (non-`#`-placeholder) live demo link - still **fails to resolve at the DNS level entirely** (`Could not resolve host`) - outstanding, needs Kenny to check the domain/hosting, not fixable from the codebase.

### SEO & Metadata
- [x] Add proper meta tags (title, description) to each page - home page has full title/description/keywords; 404/500 have titles + `noindex` (Phase 4)
- [x] Create sitemap.xml - done in Phase 2
- [x] Create robots.txt - done, includes `Sitemap:` line (Phase 4)
- [x] Add Open Graph tags for social sharing - already in place on the home page (`og:title`, `og:description`, `og:image`, Twitter card tags)
- [x] Write descriptive alt text for all images - audited in Phase 4, every `next/image` usage has alt text

### Deployment
- [x] Connect GitHub repository - already connected (`github.com/Beefy-py/portfolio`), well before this project even started
- [ ] Set up CI/CD pipeline (if not using Vercel) - n/a assuming Vercel (site is live at kennyhoft.live already, presumably via Vercel's own git integration - not independently confirmed)
- [ ] Deploy to Vercel (recommended) or alternative hosting - **blocked on the push decision above**; the site already appears to be deployed, this is really "push + let it redeploy" at this point, not a fresh setup
- [ ] Configure domain name (if needed) - already configured (kennyhoft.live), not touched
- [ ] Set up SSL/HTTPS - already in place (site meta tags reference `https://www.kennyhoft.live`), not touched
- [ ] Test live site thoroughly - can't do until the above is pushed/deployed; everything tested so far was against a local build

### Post-Launch
- [ ] Monitor error logs - infra exists to do this (Vercel), not an active practice yet
- [x] Track analytics - Vercel Analytics already integrated (Phase 2)
- [ ] Gather feedback - n/a, ongoing practice for Kenny, not a coding task
- [ ] Plan future improvements - see Phase 6 below

---

## PHASE 6: Optional Enhancements

- [ ] Add newsletter signup
- [ ] Create RSS feed for blog
- [ ] Add search functionality
- [ ] Implement project filtering/sorting
- [ ] Add reading time estimates to blog posts
- [ ] Create downloadable resume/CV
- [ ] Add testimonials section
- [ ] Implement comment system on blog (Giscus, Disqus)
- [ ] Add "Recently Updated" or changelog section
- [ ] Create /uses page (tools and tech you use)

---

## Quick Reference: Dependencies to Update/Remove

**Keep & Update:**
- `next` → latest (14 or 15)
- `react` → 18.3+
- `react-dom` → 18.3+
- `framer-motion` → latest
- `react-hook-form` → latest
- `@tailwindcss/*` → latest

**Remove:**
- `styled-components` (replace with Tailwind)
- `@apollo/client` (if not using GraphQL)
- `graphql` and `graphql-request` (if not using GraphQL)
- `nodemailer` (consolidate with EmailJS or use Resend)

**Add (if upgrading):**
- `typescript` (if not already using TS)
- `tailwindcss` forms plugin (if not installed)

---

## Timeline Estimate

- **Phase 1 (Content):** 2-3 hours
- **Phase 2 (Tech Stack):** 4-6 hours
- **Phase 3 (Rebuild):** 6-10 hours
- **Phase 4 (Polish):** 3-5 hours
- **Phase 5 (Testing):** 2-3 hours

**Total:** ~17-27 hours of work (can be done in sprints)

---

## Notes for Kenny

✅ **Focus on content first** — This is what matters most to hiring managers and clients  
✅ **Next.js upgrade is necessary** — It's a major version gap; modern practices require it  
✅ **Simplify where possible** — Fewer dependencies = faster builds, easier maintenance  
✅ **Mobile-first** — Most visitors will view on mobile  
✅ **Show, don't tell** — Use recent projects to demonstrate your skills  

Good luck! 🚀
