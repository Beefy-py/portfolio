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

### Layout & Structure
- [ ] Create base layout component for App Router
- [ ] Build navigation component (sticky/responsive)
- [ ] Create footer component
- [ ] Implement mobile-responsive design
- [ ] Add dark mode support (optional but recommended)

### Home Page
- [ ] Hero section (updated intro, tagline)
- [ ] Featured projects section
- [ ] Skills overview
- [ ] CTA (Contact / View More)
- [ ] Call-to-action for newsletter or contact

### Projects Page
- [ ] Grid/list view of projects
- [ ] Filtering by technology/category
- [ ] Individual project detail pages
- [ ] Links to live demos and GitHub repos
- [ ] Responsive image gallery

### Experience Page (if separate from home)
- [ ] Timeline or list of work experience
- [ ] Education section
- [ ] Certifications and achievements
- [ ] Skills breakdown by category

### About/Bio Page
- [ ] Personal/professional bio
- [ ] Photo (professional headshot)
- [ ] Links to social profiles
- [ ] Brief career narrative

### Contact Page
- [ ] Contact form (EmailJS or Resend)
- [ ] Social media links
- [ ] Email link
- [ ] Optional: Calendar booking link (Calendly, Typeform)

### Blog (Optional but Recommended)
- [ ] Set up blog collection in CMS
- [ ] Blog list page with filtering/search
- [ ] Individual blog post pages
- [ ] Syntax highlighting for code blocks
- [ ] Social share buttons

---

## PHASE 4: Design & UX Polish

### Visual Design
- [ ] Define color palette (2-3 primary colors + neutrals)
- [ ] Choose typography (2-3 font families max)
- [ ] Create design system for buttons, cards, spacing
- [ ] Ensure consistent styling across all pages
- [ ] Design mobile-first, then enhance for desktop

### User Experience
- [ ] Add smooth page transitions
- [ ] Implement loading states
- [ ] Add proper error pages (404, 500)
- [ ] Test navigation flow
- [ ] Add breadcrumbs where helpful
- [ ] Ensure accessibility (ARIA labels, keyboard navigation)

### Performance Optimization
- [ ] Optimize images (use Next.js Image component)
- [ ] Enable static generation where possible
- [ ] Implement proper caching headers
- [ ] Minify CSS and JavaScript
- [ ] Test Lighthouse score (target: 90+)

---

## PHASE 5: Testing & Deployment

### Testing
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile browsers
- [ ] Test responsive design at all breakpoints
- [ ] Test all forms and interactive elements
- [ ] Test CMS content updates reflect on site
- [ ] Check all external links work

### SEO & Metadata
- [ ] Add proper meta tags (title, description) to each page
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Add Open Graph tags for social sharing
- [ ] Write descriptive alt text for all images

### Deployment
- [ ] Connect GitHub repository
- [ ] Set up CI/CD pipeline (if not using Vercel)
- [ ] Deploy to Vercel (recommended) or alternative hosting
- [ ] Configure domain name (if needed)
- [ ] Set up SSL/HTTPS
- [ ] Test live site thoroughly

### Post-Launch
- [ ] Monitor error logs
- [ ] Track analytics
- [ ] Gather feedback
- [ ] Plan future improvements

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
