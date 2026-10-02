# Portfolio Website: Design Brief (v1, for review)

Owner: Erwin Austria. Project folder: the existing Astro project in the repo root.
Status: **plan approved by the owner; no code generated yet.**

---

## 0. Rules for any AI agent working on this project (read first)

1. **Do not create a new Astro project, a nested project folder, or a new repo.** Work inside the existing project.
2. **No destructive actions.** Do not delete files, folders, or git history. Do not run `git push --force`. Do not run `git reset --hard`.
3. **Static output only.** Do not add an SSR adapter (no `@astrojs/cloudflare`). The site is deployed with Wrangler static assets (`wrangler.jsonc`, `assets.directory: ./dist`). **Do not edit `wrangler.jsonc`** unless asked.
4. **Ask before installing any new dependency**, and say why it is needed and how large it is. Prefer no dependency.
5. **Verify current docs** (Astro 7.x, Cloudflare, any library) before using an API. Do not rely on memory. Say what you verified.
6. **Build in phases (section 9).** Do one phase per request, run `npx astro build` at the end, and stop for review. Do not build the whole site in one pass.
7. **Privacy is absolute (section 7).** Never write a client or company name anywhere: code, content, alt text, filenames, comments, commit messages.
8. The repo is **public**. Never commit secrets, tokens, or original un-blurred screenshots.
9. Keep the budget at **$0**: no paid services, no paid APIs.

---

## 1. Positioning

- **Name:** Erwin Austria
- **Role line (exact):** HighLevel Certified Admin · CRM & Automation Systems Specialist · AI Automation
- **Hero headline (exact):** The invisible engine behind your business.
- **Primary identity:** GoHighLevel (GHL) expert across all features.
- **Secondary skills:** AI automation, WordPress and web development, technical support.
- **Voice:** calm, precise, confident, plain verbs, sentence case, no hype and no filler. Claims are specific, and nothing is invented (no years, no numbers, no results unless the owner supplies them).

## 2. Visual direction: "premium control room"

Dark, calm and precise. Luxury comes from restraint: very dark surfaces, one disciplined accent, thin precise lines, generous spacing, slow smooth motion. The technical feel comes from system maps, monospace labels and status-style indicators, **not** from loud effects. The glow is soft and atmospheric, never hard neon.

**It must NOT look like:** a Bootstrap/Tailwind freelancer template, a "hero + three identical cards + contact" layout, a gaming or crypto site, or a stock AI-generated page.

### Color tokens (starting values; check contrast and adjust)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#07090A` | page background (near-black, faint green tint) |
| `--surface` | `#0D1211` | panels |
| `--line` | `#1A2623` | thin borders and rules |
| `--emerald` | `#0F5C48` | large areas and glows, at low opacity |
| `--emerald-soft` | `#2E8B6E` | small details, links, "live" indicators (the only emerald that must be legible as text-size detail) |
| `--text` | `#E8ECEA` | main text (off-white, not pure white) |
| `--text-muted` | `#8A9A94` | secondary text |

Every text/background pair must meet **WCAG AA** contrast. Measure it and fix any failures. The owner dislikes very bright colors.

### Typography

- **Display/headlines: Syne.** **Small technical labels: JetBrains Mono.**
- Verify both are available, and prefer **self-hosting** (for example via Fontsource) over third-party requests. Subset and preload only what is used. Provide real fallback stacks.
- Set a deliberate type scale. Body line length under ~75 characters.
- Make the headline treatment part of the design (width, weight, spacing), not a neutral delivery of text.

### Glow and motion

- **Glow:** emerald light bleeding from behind elements, thin lines that pulse faintly, soft glowing edges on hover. Low opacity. Always limited to a few elements.
- **Spend boldness in one place.** The memorable moment is the **hero** (slow emerald glow plus a faint system-map of lines and nodes drawing themselves). Everything else stays quiet.
- **Avoid generic tells:** a fade-and-slide-up on every section, hover transitions on every card, all-caps tracked eyebrow labels above every heading, numbered markers (01/02/03) on content that is not a real sequence, a grid of identical rounded cards with identical shadows.
- Motion answers the visitor's action (opening the modal, switching the archive menu, hovering a map node) or draws attention once. Slow and smooth.
- **Respect `prefers-reduced-motion`:** remove or reduce all non-essential motion.
- Prefer CSS and native browser APIs (IntersectionObserver, `<dialog>`). Check browser support before relying on newer features like scroll-driven animations. Add a library only if it is clearly justified and light.

## 3. Site map

1. **Home**: one cinematic scroll page.
2. **Projects**: the archive, with a category menu.
3. **Project (case study) pages**: one per major project. The flagship (the utility services project) comes first.

Contact is a section on Home plus a link in the navigation. There is no separate contact page.

## 4. Home page: scroll order

1. **Hero.** Name, role line, headline, a short supporting line, and two actions ("View projects", "Contact"). Slow emerald glow and the faint system-map animation behind the text.
2. **GHL Mastery (the main section).** An interactive map of GHL areas (section 5). Hovering or focusing a node reveals what Erwin does with it.
3. **Selected work.** 3 to 4 featured projects, with the flagship largest. A "View all projects" link goes to the archive.
4. **Beyond GHL.** Smaller section: AI automation (n8n, Make, Zapier, chatbots), WordPress and web development, technical support.
5. **Bio.** A dedicated section with a **clickable element** (the framed portrait, using the photo with the glowing circle behind the head) that opens a **modal** containing a *different* photo and the longer bio (section 6). It uses the native `<dialog>`: Esc closes it, an X button closes it, a click outside closes it, focus is trapped and then restored, and screen readers announce it.
6. **How I work.** A connected process diagram: Discover, Map, Build, Test, Support. (This is a real sequence, so numbering is fine here.)
7. **Credibility.** GHL Certified Admin badge (image and verification link pending from the owner), tools list, testimonials (section 8).
8. **Contact.** Three clear options: email, WhatsApp, book a call.

## 5. GHL map: two levels

**Core (delivered in real projects): solid, softly glowing nodes**
CRM setup and system architecture; Workflows and lead management; Pipelines and opportunities; Funnels, landing pages, forms and surveys; Email and SMS automation; Calendars and booking; API, webhook and third-party integrations; AI agents, Conversation AI and Voice AI; IVR and call routing; A2P 10DLC and SMS compliance; Payments, Stripe and invoices; Reputation management; Snapshots and custom values; Sub-accounts and agency setup; Custom fields and objects; Custom client portals; CRM troubleshooting and optimization.

**Also in the toolkit (configured, ready for projects that need them): thinner outlined nodes with a small "ready when needed" label**
Missed-call text-back; Memberships and courses; Communities; Social planner; Reporting and dashboards.

The map must stay usable by keyboard and on a phone (list fallback on small screens is acceptable).

## 6. Bio copy

**Teaser (next to the clickable portrait):**
I build the CRM and automation systems that keep a business running, not just the funnels on top.

**Modal bio:**
I'm Erwin Austria, a HighLevel Certified Admin and CRM & automation systems specialist based in the Philippines.

My work goes beyond building funnels. I focus on the CRM and automation infrastructure underneath, the part that connects the different areas of a business and keeps the customer journey organized: pipelines, workflows, calendars, email and SMS, forms and landing pages, payments, and the integrations between them.

I enjoy solving technical problems, especially when systems stop working together: a broken workflow, incorrect field mapping, a failing integration. I look for the root cause and build a reliable fix.

Around GoHighLevel, I add AI agents and chatbots, API and webhook integrations, WordPress development, and hands-on technical support. I work best with businesses and agencies that want someone to take ownership of their CRM and automation systems, not just complete individual tasks.

**Photos:** three portraits supplied by the owner (warm amber circle on a dark background). Bio section uses the seated portrait with the circle behind the head; the modal uses a different pose. Treatment (natural vs. slightly emerald-graded) to be decided on screen. Source files are low-resolution (about 500 px wide), so do not display them large. The owner may supply higher-resolution originals.

## 7. Privacy rules (non-negotiable)

- **No company or client names anywhere.** Titles use industry or niche, for example "Utility Services Company: Full CRM, Portal and Funnel System".
- **Screenshots** that show names, logos, domains or client data must be **blurred or cropped before they enter the repo.** The agent never receives or commits originals. Originals stay in the owner's private Drive.
- Image filenames and alt text are generic and descriptive ("Workflow automation canvas"), never client-specific.
- Testimonials are credited by **role and industry only** unless the owner explicitly approves otherwise.
- The owner's hourly rate and availability are not published.

## 8. Content model (Astro content collections)

Verify the current content collections API for the installed Astro version before writing the config. The intended design: one file per project, loaded from a folder, with a validated schema and optimized local images (`image()` helper). **Adding a project must need no code changes**, and the archive must not be limited to the current screenshots.

Project fields: `title` (anonymous), `industry`, `categories` (one or more of the four below), `tools` (list), `summary`, `result` (optional, only if supplied by the owner), `cover` (image), `gallery` (images with alt text), `featured` (boolean), `order`, `date`, and `caseStudy` (boolean: full page or lighter detail view).

**The four archive categories:** Automations; Websites & Landing Pages; Webhook & API Integration Workflows; AI Automation.

**Archive navigation:** a **menu**, not a filter bar. Options: All plus the four categories. On desktop it is a vertical or tab-style menu; on mobile it collapses to a compact dropdown. Switching categories uses a smooth transition. It must work with the keyboard and announce the change to screen readers.

**Initial projects (anonymous):**

| Title | Categories |
|---|---|
| Utility Services Company: Full CRM, Portal and Funnel System (flagship) | Automations; Websites & Landing Pages |
| Construction Mentorship: Bootcamp Funnel, Email and WordPress Integration | Websites & Landing Pages; Automations |
| Real Estate Investors: Lead Funnel and Conversation AI | AI Automation; Automations; Websites & Landing Pages |
| Real Estate Investors: IVR, Nurture and Cold Outreach Workflows | Automations |
| n8n AI Customer Support and Lead Qualification System | AI Automation; Webhook & API Workflows |
| Talent Recruitment: Pipeline and Workflow Automation | Automations |

**Case study layout:** Challenge, System design (diagram), What was built, Tools used, Result. Smaller projects can use a shorter version. No result or number is shown unless the owner provides it.

**Testimonials:** two long-term clients. **Text pending**: the owner is asking each client for their own words. Never write or invent testimonial text. Use clearly marked placeholders until real text arrives.

## 9. Contact

- Email: `eaustria963@gmail.com` (temporary; a professional address will replace it later, so store it in **one** config file only).
- WhatsApp: `https://wa.me/639107188536`
- Booking: Google Calendar appointment page (link pending from the owner).
- Public contact details can be scraped. Keep them in one place, and consider assembling the `mailto:` link in small JS rather than writing it in plain HTML.

## 10. Technical, performance, accessibility, SEO

- **Stack:** Astro (static), plain CSS with custom properties for the tokens, minimal JavaScript.
- **Free-plan limits (verified):** Cloudflare Workers Free allows 20,000 static files per deployment and 25 MiB per file. Compress all images anyway.
- **Images:** use Astro's image optimization (AVIF/WebP), correct dimensions, lazy loading below the fold, a prioritized hero. Large source PNGs must be resized before use.
- **Performance targets:** fast first load, minimal layout shift, no render-blocking third-party requests. Audit with Lighthouse and report the results.
- **Accessibility:** semantic landmarks, visible keyboard focus, full keyboard operation (menu, map, modal), WCAG AA contrast, meaningful alt text, no text baked into images, reduced motion respected.
- **Responsive:** design for a phone first (a narrow viewport), then scale up.
- **SEO:** unique title and description per page, Open Graph and social preview image, sitemap and robots (verify how the sitemap integration needs the `site` setting), JSON-LD `Person` data. The site URL is the workers.dev address for now and will change when a custom domain is added.

## 11. Build phases (one request each; review and commit between phases)

0. **Foundation:** tokens, fonts, base layout, global styles, one config file for contact details and role line. No content yet.
1. **Hero and navigation** (the memorable moment).
2. **GHL Mastery map.**
3. **Projects:** content collection, archive with menu, flagship case study page. Only blurred and compressed images.
4. **Bio section and modal.**
5. **Beyond GHL, How I work, Credibility, Contact.**
6. **Polish and audit:** motion review, performance, accessibility, SEO, mobile pass. Then deploy with `npx astro build` and `npx wrangler@latest deploy`.

After each phase the agent reports: what was built, what it verified in the docs, any dependency added, and the build result.

## 12. Open items (waiting on the owner)

- Real testimonial text and approved credit lines.
- Google Calendar booking link.
- GHL Certified Admin badge image and verification link.
- Blurred and compressed project images (prepared project by project).
- Higher-resolution portraits, if available.
- Any results or numbers the owner is happy to publish.
