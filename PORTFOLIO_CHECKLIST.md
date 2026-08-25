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

### Next.js Upgrade
- [ ] Plan upgrade path (current version → Next.js 14 → 15)
- [ ] Create a new Next.js 14+ project using `create-next-app`
- [ ] Migrate pages from `/pages` directory to `/app` directory (App Router)
- [ ] Update all dynamic routing to use App Router conventions
- [ ] Test all routes after migration
- [ ] Verify environment variables are properly configured
- [ ] Update Next.js config for new features (Image Optimization, etc.)

### Simplify CMS & Content Management
- [ ] Decide: Keep Sanity, or migrate to simpler solution?
  - **Option A (Keep Sanity):** Update to latest version, clean up schema
  - **Option B (Migrate):** Choose alternative:
    - MDX + Git-based content (simplest)
    - Contentful (middle ground)
    - Payload CMS (self-hosted, flexible)
- [ ] Set up content structure for projects, blog posts, experience
- [ ] Migrate existing content to new CMS
- [ ] Test content querying in Next.js

### Remove Unnecessary Dependencies
- [ ] Replace Styled Components with Tailwind CSS (already installed)
- [ ] Delete Styled Components from `package.json`
- [ ] Audit and remove unused packages:
  - [ ] Apollo Client (if using simple REST, remove it)
  - [ ] GraphQL (unless needed for multi-source data)
  - [ ] Nodemailer (consolidate with EmailJS or use Resend)
  - [ ] AOS (Animate On Scroll - use Framer Motion instead)
- [ ] Run `npm audit fix` to address vulnerabilities
- [ ] Update all major dependencies to latest stable versions

### Email Solution
- [ ] Choose: EmailJS (frontend) OR Resend (backend)
- [ ] Implement contact form with chosen solution
- [ ] Test email delivery
- [ ] Add error handling and user feedback

### Analytics & Performance
- [ ] Keep or verify Vercel Analytics integration
- [ ] Add Core Web Vitals monitoring
- [ ] Set up error tracking (optional: Sentry)

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
