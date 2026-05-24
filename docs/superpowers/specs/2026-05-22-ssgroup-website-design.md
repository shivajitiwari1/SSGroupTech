# SSGroup Website — Design Spec
**Date:** 2026-05-22  
**Status:** Approved  
**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Shadcn UI, Lucide React

---

## 1. Project Overview

A premium, conversion-focused agency website for **SSGroup** — a software development & digital solutions company. The site must feel modern, futuristic, and trustworthy. Visual inspiration from Orbento-style agencies but with a completely unique identity: SSGroup's own brand colors (orange + navy), original content, and distinct UI patterns.

**Primary goal:** Generate leads, convert visitors into clients, showcase expertise.

**Target audience:** Startups, local businesses, ecommerce, enterprises, factories, wholesalers, service providers.

---

## 2. Architecture — Approach A (Section-Based)

Each page is a thin assembler of focused section components. Data lives in typed `/data` constants. Components are pure UI receiving props.

```
/app
  layout.tsx                  → root layout: fonts, theme provider, cursor, loader
  page.tsx                    → Home page
  /services/page.tsx
  /portfolio/page.tsx
  /about/page.tsx
  /contact/page.tsx
  sitemap.ts                  → Next.js 15 native sitemap
  robots.ts                   → Next.js 15 native robots

/components
  /ui                         → Shadcn primitives + custom atoms (Button, Badge, Card)
  Navbar.tsx                  → sticky, glassmorphism, scroll-aware, mobile hamburger
  Footer.tsx
  AnimatedCursor.tsx          → custom cursor (desktop only, hidden on touch)
  LoadingScreen.tsx           → brand splash, sessionStorage flag
  ScrollProgress.tsx          → fixed orange bar top of viewport
  ThemeToggle.tsx             → dark/light switch using next-themes

/sections
  /home
    Hero.tsx
    Services.tsx
    WhyUs.tsx
    TechStack.tsx
    Process.tsx
    Portfolio.tsx
    Testimonials.tsx
    Pricing.tsx
    FAQ.tsx
    ContactCTA.tsx
  /services
    ServicesHero.tsx
    ServicesGrid.tsx
  /portfolio
    PortfolioHero.tsx
    PortfolioGrid.tsx
  /about
    AboutStory.tsx
    AboutMission.tsx
    AboutProcess.tsx
    AboutValues.tsx
  /contact
    ContactHero.tsx
    ContactLayout.tsx         → split: info (left) + form (right)

/data
  services.ts                 → 8 service objects
  portfolio.ts                → 8 placeholder projects
  pricing.ts                  → 3 tier objects
  testimonials.ts             → 6 placeholder reviews
  faq.ts                      → 10 Q&A pairs
  tech.ts                     → technology logos/names list

/lib
  utils.ts                    → cn() helper
  emailjs.ts                  → EmailJS send wrapper

/hooks
  useScrollProgress.ts
  useAnimatedCounter.ts
  useInView.ts

/types
  index.ts                    → Service, Project, PricingTier, Testimonial, FAQ interfaces

/public
  /logo                       → SSGroup logo (PNG, SVG)
  /images                     → project thumbnails, og-image.png

/styles
  globals.css                 → Tailwind base + CSS variable tokens
```

---

## 3. Visual Design System

### Color Tokens

```css
/* Dark Mode (default) */
--bg-primary:    #080C14;
--bg-secondary:  #0D1422;
--bg-glass:      rgba(13, 20, 34, 0.6);
--accent-orange: #F97316;
--accent-deep:   #EA580C;
--accent-glow:   #FB923C;
--navy:          #1E3A5F;
--border-glass:  rgba(249, 115, 22, 0.15);
--text-primary:  #F8FAFC;
--text-muted:    #94A3B8;
--text-dim:      #475569;

/* Light Mode */
--bg-primary:    #F8F9FC;
--bg-secondary:  #FFFFFF;
--accent-orange: #EA580C;
--navy:          #1E3A5F;
--text-primary:  #0F172A;
--text-muted:    #475569;
```

### Typography
- **Display / Hero headings:** Space Grotesk (bold, geometric)
- **Body / UI text:** Inter (clean, readable)
- **Monospace accents:** Geist Mono (stats, code snippets)
- Loaded via `next/font/google` with `display: swap`

### Glassmorphism Recipe
```css
backdrop-filter: blur(12px);
background: var(--bg-glass);
border: 1px solid var(--border-glass);
border-radius: 16px;
box-shadow: 0 0 40px rgba(249, 115, 22, 0.05);
```

### Animation Principles (Framer Motion)
| Type | Duration | Easing |
|---|---|---|
| Fade-in on scroll | 0.6s | easeOut |
| Stagger children | 0.1s gap | easeOut |
| Hover lift (cards) | 0.2s | spring |
| Float (hero elements) | 4s loop | easeInOut |
| Page transition | 0.4s | easeInOut |
| Glow pulse | 3s loop | easeInOut |

### Hero Background
Three CSS radial-gradient orbs (orange, navy, dark) slowly drifting via Framer Motion opacity pulses. Pure CSS + minimal JS — no WebGL/canvas. Performant.

---

## 4. Pages & Sections

### 4.1 Home Page

| # | Section | Content |
|---|---|---|
| 1 | Hero | Headline: *"We Build Software That Works While You Sleep"*. Animated typewriter cycling sub-services. Primary CTA: "Start Your Project" (orange). Ghost CTA: "View Our Work". 3 floating glass stat chips (50+ Projects, 98% Retention, 5yr Experience). Animated orb background. |
| 2 | Services | 3-col card grid, 8 cards. Each: Lucide icon in orange glow circle, title, 1-line desc. Hover: lift + orange border glow. |
| 3 | Why Choose Us | 4 animated counters (50+ Projects, 30+ Clients, 5+ Years, 99% Uptime) + 4 value prop cards (Fast Delivery, AI-First, Full Stack, Dedicated Support). |
| 4 | Tech Stack | Auto-scrolling CSS marquee — React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, Tailwind, Prisma, OpenAI, Docker. |
| 5 | Process | 5-step timeline: Discovery → Design → Develop → Test → Launch. Each step: orange glow numbered ring + title + short desc. |
| 6 | Portfolio | 3 featured project cards (teaser). "View All Projects →" CTA → /portfolio. |
| 7 | Testimonials | Auto-scroll carousel. 6 cards: star rating, quote, client name + company. |
| 8 | Pricing | 3 cards: **Starter** (₹15K–₹30K, websites/landing pages), **Growth** (₹50K–₹1.5L, web apps/ERP/CRM), **Enterprise** (Custom quote, AI/SaaS/full systems). Middle card: orange border + "Most Popular" badge. All cards: feature checklist. |
| 9 | FAQ | 10-item Shadcn Accordion. Common questions: timeline, tech, revisions, support, payment terms. |
| 10 | Contact CTA | Full-width glass banner: *"Ready to Build Something Remarkable?"* + "Book a Call" + "WhatsApp Us" buttons. |
| 11 | Footer | SSGroup logo, tagline, 4-col nav links, social icons, copyright. |

### 4.2 Services Page
Full-width hero with page title + breadcrumb. 8 detailed service cards in 2-col grid. Each card: Lucide icon, title, 3-line description, 4 benefit bullets, "Get a Quote" CTA.

Services: Web Development, Next.js Applications, AI Automation, ERP Systems, CRM Solutions, SaaS Development, API Integrations, SEO Optimization.

### 4.3 Portfolio Page
Filterable grid with tabs: All / Web / ERP / AI / SaaS. 8 placeholder project cards. Each: image placeholder, title, tech stack badges (Shadcn Badge), category tag, "Live Preview" + "Details" buttons. Filter animates with Framer Motion layout animation.

### 4.4 About Page
4 sections:
1. **Our Story** — SSGroup founding narrative, mission statement
2. **Our Mission** — AI-first philosophy, modern development approach
3. **How We Work** — 3-step visual: Consult → Craft → Deliver
4. **Our Values** — 4 value cards: Innovation, Quality, Speed, Partnership

### 4.5 Contact Page
Split layout (50/50 on desktop, stacked on mobile):
- **Left:** Email address, WhatsApp CTA button (opens `https://wa.me/{number}` — number to be configured via env var `NEXT_PUBLIC_WHATSAPP_NUMBER`), Calendly placeholder button (links to `https://calendly.com` — URL to be configured), social media links, dummy map placeholder (static image or iframe)
- **Right:** EmailJS form — Name, Email, Phone, Service (dropdown, 8 options), Message (textarea), Submit button with loading spinner + success/error toast (Shadcn Toast)

---

## 5. Extra Features

| Feature | Implementation Detail |
|---|---|
| **Animated Cursor** | `AnimatedCursor.tsx` — orange dot (8px) + ring follower (32px), ring scales 1.5x on button/link hover. Hidden on `pointer: coarse` (mobile/touch). |
| **Loading Screen** | SSGroup logo fade-in + orange progress bar. 1.8s auto-dismiss. `sessionStorage` flag prevents repeat on navigation — only shows on first visit per session. |
| **Scroll Progress** | Fixed 3px orange bar (`position: fixed; top: 0; z-index: 9999`). `useScrollProgress` hook drives `scaleX` transform. |
| **Dark/Light Toggle** | `next-themes` with `ThemeProvider`. Persists to `localStorage`. 0.3s CSS variable transition. Sun/moon Lucide icon in Navbar. Default: dark. |
| **Sticky Navbar** | Transparent at top. On scroll > 80px: `backdrop-blur-md` + `border-b border-orange-500/10`. Active route highlighted orange. Mobile: hamburger → slide-down drawer. |
| **Page Transitions** | `AnimatePresence` in root layout. Fade + 20px vertical slide. 0.4s easeInOut. |
| **Smooth Scroll** | Lenis library for momentum scroll. Integrates with Framer Motion scroll callbacks. |

---

## 6. SEO

Each page exports `generateMetadata()`:

```ts
// Home
title: "SSGroup | AI-Powered Software Development Company"
description: "Premium software agency specialising in Next.js, ERP, AI automation, SaaS & web development. Trusted by startups, enterprises & factories."

// Services
title: "Services | SSGroup — Web, AI, ERP & SaaS Development"

// Portfolio
title: "Portfolio | SSGroup — Our Work & Projects"

// About
title: "About SSGroup | AI-First Software Agency"

// Contact
title: "Contact SSGroup | Start Your Project Today"
```

All pages: OpenGraph tags, canonical URLs, semantic HTML (`<main>`, `<section>`, `<article>`, proper `h1–h3` hierarchy).

Files: `sitemap.ts` (Next.js 15 native), `robots.ts`.

---

## 7. Performance Strategy

- Heavy animation-only components (cursor, loader) use `dynamic(() => import(...), { ssr: false })`
- Images: Next.js `<Image>` with lazy loading, WebP, explicit dimensions
- Fonts: `next/font/google` with `display: swap`, subset to Latin
- Tech marquee: pure CSS animation (no JS runtime cost)
- `will-change: transform` only on actively animating elements
- Animations respect `prefers-reduced-motion`
- Target: **Lighthouse 90+ on all pages**

---

## 8. Data Shapes (TypeScript Interfaces)

```ts
interface Service {
  id: string
  icon: LucideIcon
  title: string
  shortDesc: string
  description: string
  benefits: string[]
  category: string
}

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  category: 'web' | 'erp' | 'ai' | 'saas'
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

interface PricingTier {
  name: string
  priceRange: string
  description: string
  features: string[]
  highlighted: boolean
  ctaLabel: string
}

interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role: string
  rating: number
}

interface FAQ {
  question: string
  answer: string
}
```

---

## 9. Deployment

- Vercel deployment (zero config with Next.js 15)
- Environment variables: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CALENDLY_URL`
- SSGroup logo files (PNG + SVG) must be placed in `/public/logo/` before deployment
- `next.config.ts`: image domains configured for future external images
- Ready for future: CMS data layer swap (Sanity/Contentful), backend API routes, auth

---

## 10. Decisions Log

| Decision | Reason |
|---|---|
| Orange + Navy palette | Matches SSGroup logo brand colors exactly |
| Dark mode default | Premium agency aesthetic, glassmorphism hits hardest on dark |
| EmailJS for contact | Zero backend required, works immediately |
| Placeholder portfolio | No real projects available at launch |
| Actual pricing tiers | Client requested ₹ ranges for Starter/Growth/Enterprise |
| No purple/violet | Initial suggestion overridden by brand logo colors |
| Lenis smooth scroll | Better momentum feel than CSS-only scroll-behavior |
| next-themes | Industry standard for Next.js dark/light mode |
