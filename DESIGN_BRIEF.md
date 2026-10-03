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

- **Glow:** emerald light bleeding from behind elements, thin lines that pulse faintly, soft glowing edges on hover. Low opacity. Always limited to a few elements. The main glow effect in the hero comes from **signals travelling between neurons** (see "Hero visual").
- **Spend boldness in two places only:** the **hero neural sphere** (below) and the **scroll motion system** (below). Everything else stays quiet.
- **Avoid generic tells:** the same fade-and-slide-up on every element, hover transitions on every card, all-caps tracked eyebrow labels above every heading, numbered markers (01/02/03) on content that is not a real sequence, a grid of identical rounded cards with identical shadows.
- Motion also answers the visitor's action (opening the modal, switching the archive menu, hovering a map node). Slow and smooth.
- **Respect `prefers-reduced-motion`:** remove all non-essential motion and show final states immediately.
- Prefer CSS and native browser APIs (IntersectionObserver, `<dialog>`, canvas). Add a library only if it is clearly justified and light, and ask the owner first.

### Hero visual: neural sphere (owner-approved concept)

Inspired by the owner's reference (a spinning sphere of "brain cells"). **Build our own version. Do not copy another designer's work.**

- **Placement:** the right side of the **hero section only**. It does NOT follow the visitor, does NOT react to scroll, and does NOT react to the mouse. It must never overlap the hero text. On phones it sits behind or below the text at lower opacity.
- **What it is:** a sphere made of identical small dots (neurons), thin faint lines between neighbouring neurons, and the whole sphere spinning slowly (Y-axis rotation with a slight X tilt). Each neuron drifts a tiny amount and **pulses softly** (size/opacity, random phase), like neurons in typical brain animations.
- **Signals (the glow):** small bright points travel along the connection lines from neuron to neuron, with a short fading trail. Several at once (about 3 to 6 on desktop). The glow comes from the signals and the pulsing, not from a big blurry halo. Soft emerald, never neon.
- **Hub neurons:** 8 slightly larger neurons carry the GHL labels (CRM, Workflows, Pipelines, Forms, SMS, Calendars, API, AI) in tiny JetBrains Mono. A label is visible only while its hub faces the viewer and fades as it rotates to the back.
- **Colors:** neurons `--emerald-soft` at varying low opacity, lines `--emerald`, signals a lighter emerald. Stay dark and restrained, no bright colors.
- **Technique:** one `<canvas>` with plain JavaScript and simple 3D projection math. **No three.js and no other library.** Cap devicePixelRatio (2 on desktop, 1.5 on phones). About 200 to 260 neurons on desktop, about 100 to 140 on phones. Add an adaptive step: if frames run slow, reduce neuron count and signals.
- **Performance and access:** pause when the sphere is off-screen (IntersectionObserver) and when the tab is hidden. Under `prefers-reduced-motion`, draw one still frame. The canvas is `aria-hidden` and decorative. Text over or near it must keep WCAG AA contrast.
- **Build it in three small steps:** (a) static sphere with neurons and lines, (b) rotation, pulsing and signals, (c) hub labels, mobile reduction, pause/reduced-motion. Owner reviews on screen between steps.
- This replaces the earlier 2D "system map" SVG in the hero, which is removed.

### Scroll motion system (owner-approved, intensity: MEDIUM)

The owner wants scroll animation on elements across the **whole website**. It must play forward when scrolling down and **backward when scrolling up**. Build it **once** as a small set of reusable classes or attributes (for example `data-motion="headline"`) in the shared styles, then each section just uses them.

- **Technique:** CSS scroll-driven animations (`animation-timeline: view()`), wrapped in `@supports (animation-timeline: view())`. Verified facts: Chrome and Edge support it (since version 115), Safari since version 26, Firefox does not support it (behind a setting). **Content must look complete and correct with no animation at all** (Firefox, reduced motion, no support). A tiny IntersectionObserver fallback for simple reveals in unsupported browsers is allowed if it stays very small. Check browser support again before relying on it.
- **No scroll-jacking:** do not hijack or smooth the scroll, and do not add a smooth-scroll library.
- **Animate only `transform` and `opacity`** (and `stroke-dashoffset` for drawn lines). Never animate layout properties.
- **Effects by element type** (starting values for MEDIUM; tune on screen):

| Element | Effect |
|---|---|
| Headlines | start slightly oversized and faint (scale about 1.06, opacity about 0.15), then zoom out and settle (scale 1, opacity 1) as they enter |
| Paragraphs | opacity 0 to 1 with a small rise (about 24px) |
| Images and screenshots | opacity 0 to 1 and scale about 0.94 to 1, with a soft emerald edge glow |
| Lines and diagrams (process flow, GHL map) | stroke draws itself with scroll |
| Lists and cards | enter one after another with staggered ranges |
| Backgrounds | gentle parallax, drifting about 24px slower than the text |

- Do not use the same effect on everything. Assign each element the effect for its type.
- **Reduced motion:** no scroll animation at all, everything fully visible immediately.
- **Build order:** create the system and test it on the existing hero text first, then each new section adopts it.

## 3. Site map

1. **Home**: one cinematic scroll page.
2. **Projects**: the archive, with a category menu.
3. **Project (case study) pages**: one per major project. The flagship (the utility services project) comes first.

Contact is a section on Home plus a link in the navigation. There is no separate contact page.

## 4. Home page: scroll order

1. **Hero.** Name, role line, headline, a short supporting line, and two actions ("View projects", "Contact"). The **neural sphere** sits on the right of the hero (see "Hero visual"). The role line fits on one row on desktop. The navigation and the hero share the same container, so their left edges align.
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
1. **Hero and navigation**, in sub-steps:
   - 1a: fix the current hero (nav and hero share one container so left edges align; role line on one row on desktop; remove the old SVG map) and add a static neural sphere.
   - 1b: sphere rotation, pulsing and travelling signals.
   - 1c: hub labels, mobile reduction, pause when off-screen, reduced-motion still frame.
   - 1d: the scroll motion system (section 2), tested on the hero text.
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
- Phone-width review of the hero and menu (owner to test on a real phone).
- Owner to check frame smoothness of the sphere and scroll motion on their own PC and phone.
