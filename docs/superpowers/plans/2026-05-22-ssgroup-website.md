# SSGroup Website Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development to implement task-by-task.

**Goal:** Build a premium 5-page Next.js 15 agency website for SSGroup with dark UI, orange+navy brand, Framer Motion animations, and EmailJS contact form.

**Architecture:** Section-based — thin page assemblers, focused section components, typed data files.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Shadcn UI, Lucide React, next-themes, Lenis, EmailJS

---

### Task 1: Initialize Project & Install Dependencies

- [ ] Run in `e:\Demo Website\SSGroup`:
```bash
npx create-next-app@15 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```
- [ ] Install all dependencies:
```bash
npm install framer-motion lucide-react next-themes @emailjs/browser lenis clsx tailwind-merge
npm install -D @types/node
npx shadcn@latest init -d
npx shadcn@latest add button badge card accordion toast separator
```
- [ ] Commit: `git init && git add . && git commit -m "feat: initialize Next.js 15 project"`

---

### Task 2: Tailwind Config + Global Styles

- [ ] Replace `tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          deep: '#EA580C',
          glow: '#FB923C',
          navy: '#1E3A5F',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        glowPulse: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] Replace `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-primary: #F8F9FC;
    --bg-secondary: #FFFFFF;
    --bg-glass: rgba(248, 249, 252, 0.7);
    --accent-orange: #EA580C;
    --navy: #1E3A5F;
    --border-glass: rgba(234, 88, 12, 0.15);
    --text-primary: #0F172A;
    --text-muted: #475569;
  }
  .dark {
    --bg-primary: #080C14;
    --bg-secondary: #0D1422;
    --bg-glass: rgba(13, 20, 34, 0.6);
    --accent-orange: #F97316;
    --navy: #1E3A5F;
    --border-glass: rgba(249, 115, 22, 0.15);
    --text-primary: #F8FAFC;
    --text-muted: #94A3B8;
  }
  * { @apply border-border; }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s, color 0.3s;
    @apply font-body;
  }
  h1, h2, h3, h4 { @apply font-display; }
}

@layer utilities {
  .glass {
    backdrop-filter: blur(12px);
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
  }
  .text-gradient {
    background: linear-gradient(135deg, #F97316, #FB923C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .glow-orange {
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
  }
}
```
- [ ] Commit: `git add . && git commit -m "feat: configure tailwind and global styles"`

---

### Task 3: Types + Data Files

- [ ] Create `types/index.ts`:
```ts
import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  shortDesc: string
  description: string
  benefits: string[]
  category: string
}

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  category: 'web' | 'erp' | 'ai' | 'saas'
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface PricingTier {
  name: string
  priceRange: string
  description: string
  features: string[]
  highlighted: boolean
  ctaLabel: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role: string
  rating: number
}

export interface FAQItem {
  question: string
  answer: string
}
```

- [ ] Create `data/services.ts`:
```ts
import { Globe, Zap, Bot, BarChart3, Users, Cloud, Plug, Search } from 'lucide-react'
import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Web Development',
    shortDesc: 'High-performance websites built to convert.',
    description: 'We craft fast, modern websites using cutting-edge technologies that drive real business results.',
    benefits: ['Custom responsive design', 'SEO-optimised structure', 'CMS integration ready', 'Sub-2s load times'],
    category: 'web',
  },
  {
    id: 'nextjs',
    icon: Zap,
    title: 'Next.js Applications',
    shortDesc: 'Full-stack React apps with server-side power.',
    description: 'Production-grade Next.js 15 apps with App Router, server components, and edge deployment.',
    benefits: ['App Router architecture', 'Server Components', 'Edge & CDN deployment', 'API routes included'],
    category: 'web',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Automation',
    shortDesc: 'Intelligent systems that work while you sleep.',
    description: 'Custom AI integrations using OpenAI, LangChain, and automation pipelines that save thousands of hours.',
    benefits: ['OpenAI / LLM integration', 'Workflow automation', 'Chatbot & AI agents', 'Data extraction & processing'],
    category: 'ai',
  },
  {
    id: 'erp',
    icon: BarChart3,
    title: 'ERP Systems',
    shortDesc: 'End-to-end enterprise resource planning.',
    description: 'Custom ERP solutions built for factories, wholesalers, and enterprises to manage operations at scale.',
    benefits: ['Inventory management', 'Financial reporting', 'Multi-user roles', 'Real-time dashboards'],
    category: 'erp',
  },
  {
    id: 'crm',
    icon: Users,
    title: 'CRM Solutions',
    shortDesc: 'Know your customers. Grow your revenue.',
    description: 'Bespoke CRM platforms that track leads, automate follow-ups, and close more deals.',
    benefits: ['Lead pipeline tracking', 'Automated follow-ups', 'Sales analytics', 'WhatsApp integration'],
    category: 'erp',
  },
  {
    id: 'saas',
    icon: Cloud,
    title: 'SaaS Development',
    shortDesc: 'Scalable software-as-a-service products.',
    description: 'We build multi-tenant SaaS platforms from MVP to scale — with auth, billing, and analytics built in.',
    benefits: ['Multi-tenant architecture', 'Stripe billing integration', 'Auth & user management', 'Analytics dashboard'],
    category: 'saas',
  },
  {
    id: 'api',
    icon: Plug,
    title: 'API Integrations',
    shortDesc: 'Connect everything. Automate anything.',
    description: 'Seamless third-party API integrations: payment gateways, logistics, ERPs, CRMs, and more.',
    benefits: ['Payment gateway integration', 'Logistics & shipping APIs', 'Webhook automation', 'REST & GraphQL'],
    category: 'web',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimisation',
    shortDesc: 'Rank higher. Get found. Grow organically.',
    description: 'Technical and on-page SEO that puts your business on the first page of Google and keeps it there.',
    benefits: ['Technical SEO audit', 'Core Web Vitals optimisation', 'Content strategy', 'Monthly reporting'],
    category: 'web',
  },
]
```

- [ ] Create `data/portfolio.ts`:
```ts
import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'nexstock',
    title: 'NexStock ERP',
    description: 'Full-featured inventory and stock management ERP for a mid-size manufacturer with 500+ SKUs.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    category: 'erp',
    imageUrl: '/images/projects/nexstock.jpg',
    featured: true,
  },
  {
    id: 'agroai',
    title: 'AgroAI Dashboard',
    description: 'AI-powered crop yield prediction and farm management platform for agricultural cooperatives.',
    techStack: ['Next.js', 'Python', 'OpenAI', 'TailwindCSS'],
    category: 'ai',
    imageUrl: '/images/projects/agroai.jpg',
    featured: true,
  },
  {
    id: 'shopflow',
    title: 'ShopFlow SaaS',
    description: 'Multi-tenant ecommerce management SaaS with Stripe billing and real-time analytics.',
    techStack: ['Next.js', 'Stripe', 'Supabase', 'Framer Motion'],
    category: 'saas',
    imageUrl: '/images/projects/shopflow.jpg',
    featured: true,
  },
  {
    id: 'buildpro',
    title: 'BuildPro CRM',
    description: 'Construction company CRM tracking 200+ leads, site visits, and contractor management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'erp',
    imageUrl: '/images/projects/buildpro.jpg',
  },
  {
    id: 'launchpad',
    title: 'LaunchPad Agency Site',
    description: 'Premium Next.js marketing site with CMS, blog, and lead capture — 98 Lighthouse score.',
    techStack: ['Next.js', 'Sanity', 'TypeScript', 'Vercel'],
    category: 'web',
    imageUrl: '/images/projects/launchpad.jpg',
  },
  {
    id: 'chatwise',
    title: 'ChatWise AI Bot',
    description: 'WhatsApp AI assistant for a wholesale distributor handling 1,000+ daily customer queries.',
    techStack: ['Node.js', 'OpenAI', 'Twilio', 'Redis'],
    category: 'ai',
    imageUrl: '/images/projects/chatwise.jpg',
  },
  {
    id: 'meditrack',
    title: 'MediTrack Portal',
    description: 'Patient management and appointment scheduling web app for a multi-clinic healthcare group.',
    techStack: ['Next.js', 'PostgreSQL', 'NextAuth', 'Prisma'],
    category: 'saas',
    imageUrl: '/images/projects/meditrack.jpg',
  },
  {
    id: 'factorylink',
    title: 'FactoryLink Dashboard',
    description: 'Real-time factory floor monitoring and production reporting dashboard with live data feeds.',
    techStack: ['Next.js', 'WebSockets', 'Chart.js', 'Node.js'],
    category: 'erp',
    imageUrl: '/images/projects/factorylink.jpg',
  },
]
```

- [ ] Create `data/pricing.ts`:
```ts
import { PricingTier } from '@/types'

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    priceRange: '₹15,000 – ₹30,000',
    description: 'Perfect for businesses needing a professional online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      'Google Analytics',
      '1 revision round',
      '30-day support',
    ],
    highlighted: false,
    ctaLabel: 'Get Started',
  },
  {
    name: 'Growth',
    priceRange: '₹50,000 – ₹1,50,000',
    description: 'For growing businesses that need powerful web applications.',
    features: [
      'Custom web application',
      'ERP or CRM module',
      'Database & API development',
      'Admin dashboard',
      'Authentication system',
      '3 revision rounds',
      '90-day support',
      'Deployment included',
    ],
    highlighted: true,
    ctaLabel: 'Most Popular',
  },
  {
    name: 'Enterprise',
    priceRange: 'Custom Quote',
    description: 'Full-scale AI systems, SaaS platforms, and enterprise solutions.',
    features: [
      'AI / ML integration',
      'SaaS multi-tenant platform',
      'Full ERP system',
      'Custom integrations',
      'Dedicated project manager',
      'Unlimited revisions',
      '1-year support',
      'Priority delivery',
    ],
    highlighted: false,
    ctaLabel: 'Contact Us',
  },
]
```

- [ ] Create `data/testimonials.ts`:
```ts
import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'SSGroup delivered our ERP system 2 weeks ahead of schedule. The quality was exceptional and the team was incredibly responsive throughout.',
    author: 'Rajesh Mehta',
    company: 'Mehta Industries',
    role: 'Managing Director',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Our new website has tripled our leads in just 3 months. The design is stunning and the performance scores are through the roof.',
    author: 'Priya Sharma',
    company: 'ShopNest Ecommerce',
    role: 'Founder & CEO',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The AI chatbot they built now handles 80% of our customer queries automatically. It paid for itself in the first month.',
    author: 'Anil Verma',
    company: 'SwiftDistrib Co.',
    role: 'Operations Head',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Professional, fast, and technically excellent. SSGroup understood our factory workflow better than we explained it.',
    author: 'Sunita Patel',
    company: 'Patel Precision Parts',
    role: 'General Manager',
    rating: 5,
  },
  {
    id: '5',
    quote: 'Their SaaS platform scaled from 10 to 500 users without a single issue. The architecture they chose was perfect for our growth.',
    author: 'Vikram Singh',
    company: 'GrowStack Solutions',
    role: 'CTO',
    rating: 5,
  },
  {
    id: '6',
    quote: 'Best investment we made this year. Our CRM now gives us real-time visibility into every lead and deal in the pipeline.',
    author: 'Meera Joshi',
    company: 'BuildRight Constructions',
    role: 'Sales Director',
    rating: 5,
  },
]
```

- [ ] Create `data/faq.ts`:
```ts
import { FAQItem } from '@/types'

export const faqs: FAQItem[] = [
  { question: 'How long does a typical project take?', answer: 'Timelines vary by scope. A standard website takes 2–3 weeks. A web application or ERP takes 4–12 weeks. We provide a detailed timeline during our discovery call before any work begins.' },
  { question: 'What technologies do you use?', answer: 'We specialise in Next.js 15, TypeScript, React, Node.js, PostgreSQL, MongoDB, and AI tools like OpenAI. We choose the stack that best fits your project requirements — not the other way around.' },
  { question: 'Do you work with international clients?', answer: 'Yes. We work with clients across India, the UAE, UK, and USA. All communication is in English and we adjust to your timezone for meetings.' },
  { question: 'How many revisions are included?', answer: 'Starter projects include 1 revision round. Growth projects include 3 rounds. Enterprise projects have unlimited revisions. Additional rounds can be purchased for any plan.' },
  { question: 'Do you provide ongoing support after launch?', answer: 'Yes. Every project includes a dedicated support period (30–365 days depending on plan). After that, we offer monthly maintenance retainers for bug fixes, updates, and feature additions.' },
  { question: 'What are your payment terms?', answer: 'We work on a 50% upfront, 50% on delivery model for most projects. Enterprise projects use milestone-based payments. We accept bank transfer, UPI, and international wire.' },
  { question: 'Can you integrate with our existing systems?', answer: 'Absolutely. We have experience integrating with Tally, SAP, WooCommerce, Shopify, Zoho, Razorpay, Stripe, WhatsApp Business API, and many more. Share your requirements and we\'ll confirm compatibility.' },
  { question: 'Will my website be mobile-friendly?', answer: 'Every project we deliver is fully responsive — mobile, tablet, and desktop. We test across devices before delivery and target Core Web Vitals scores of 90+ on all platforms.' },
  { question: 'Do you handle hosting and deployment?', answer: 'Yes. We deploy to Vercel, AWS, or your preferred hosting provider. Domain setup, SSL certificates, and CI/CD pipelines are all handled by our team.' },
  { question: 'Can I see examples of your previous work?', answer: 'Yes — visit our Portfolio page for project showcases. We can also share case studies and live demos during a discovery call for projects relevant to your industry.' },
]
```

- [ ] Create `data/tech.ts`:
```ts
export const technologies = [
  { name: 'Next.js', logo: '▲' },
  { name: 'React', logo: '⚛' },
  { name: 'TypeScript', logo: 'TS' },
  { name: 'Node.js', logo: '⬡' },
  { name: 'Python', logo: '🐍' },
  { name: 'PostgreSQL', logo: '🐘' },
  { name: 'MongoDB', logo: '🍃' },
  { name: 'Tailwind CSS', logo: '🌊' },
  { name: 'Prisma', logo: '◭' },
  { name: 'OpenAI', logo: '◎' },
  { name: 'AWS', logo: '☁' },
  { name: 'Vercel', logo: '▲' },
  { name: 'Docker', logo: '🐳' },
  { name: 'Redis', logo: '⚡' },
]
```

- [ ] Commit: `git add . && git commit -m "feat: add types and data files"`

---

### Task 4: Utilities + Hooks

- [ ] Create `lib/utils.ts`:
```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] Create `lib/emailjs.ts`:
```ts
import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
}
```

- [ ] Create `hooks/useScrollProgress.ts`:
```ts
'use client'
import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}
```

- [ ] Create `hooks/useAnimatedCounter.ts`:
```ts
'use client'
import { useState, useEffect, useRef } from 'react'

export function useAnimatedCounter(target: number, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(startOnMount)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setHasStarted(true); observer.disconnect() }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { count, ref }
}
```

- [ ] Create `hooks/useInView.ts`:
```ts
'use client'
import { useInView as useFramerInView } from 'framer-motion'
import { useRef } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
```

- [ ] Commit: `git add . && git commit -m "feat: add utilities and hooks"`

---

### Task 5: Root Layout, Fonts, ThemeProvider

- [ ] Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/ssgroup
```

- [ ] Replace `app/layout.tsx`:
```tsx
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('@/components/AnimatedCursor'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'SSGroup | AI-Powered Software Development Company', template: '%s | SSGroup' },
  description: 'Premium software agency specialising in Next.js, ERP, AI automation, SaaS & web development. Trusted by startups, enterprises & factories.',
  openGraph: {
    type: 'website',
    siteName: 'SSGroup',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          <AnimatedCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

Note: Install `geist` package first: `npm install geist`. If unavailable, replace with `import { JetBrains_Mono } from 'next/font/google'` and update variable name to `--font-geist-mono`.

- [ ] Create `components/SmoothScrollProvider.tsx` (Lenis):
```tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    let raf: number
    const animate = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(animate) }
    raf = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(raf); lenis.destroy() }
  }, [])
  return <>{children}</>
}
```

- [ ] Update `app/layout.tsx` to add `SmoothScrollProvider` and `AnimatePresence` page transitions — replace the `<main>` section:
```tsx
// Add these imports at top of layout.tsx:
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
// Keep existing imports, replace <main>{children}</main> with:
<SmoothScrollProvider>
  <main>{children}</main>
</SmoothScrollProvider>
```

- [ ] Commit: `git add . && git commit -m "feat: root layout with providers and fonts"`

---

### Task 6: Navbar Component

- [ ] Create `components/Navbar.tsx`:
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass border-b border-brand-orange/10 py-3' : 'py-5'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl">
            <span className="text-gradient">SS</span>
            <span className="text-[var(--text-primary)]">Group</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-brand-orange',
                pathname === link.href ? 'text-brand-orange' : 'text-[var(--text-muted)]'
              )}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="bg-brand-orange hover:bg-brand-deep text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/25">
            Start Project
          </Link>
        </div>

        <button className="md:hidden text-[var(--text-primary)]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-brand-orange/10"
          >
            <ul className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)}
                    className={cn('block py-2 text-sm font-medium transition-colors',
                      pathname === link.href ? 'text-brand-orange' : 'text-[var(--text-muted)]'
                    )}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-lg mt-2">
                  Start Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

- [ ] Create `components/ThemeToggle.tsx`:
```tsx
'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg text-[var(--text-muted)] hover:text-brand-orange transition-colors">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: navbar and theme toggle"`

---

### Task 7: Extra Feature Components

- [ ] Create `components/ScrollProgress.tsx`:
```tsx
'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-brand-orange z-[9999]"
    />
  )
}
```

- [ ] Create `components/LoadingScreen.tsx`:
```tsx
'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('ss-loaded')) {
      setShow(true)
      const t = setTimeout(() => {
        setShow(false)
        sessionStorage.setItem('ss-loaded', '1')
      }, 1800)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080C14]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-display font-bold mb-8"
          >
            <span className="text-gradient">SS</span>
            <span className="text-white">Group</span>
          </motion.div>
          <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-brand-orange rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

- [ ] Create `components/AnimatedCursor.tsx`:
```tsx
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setVisible(true)
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovered(!!el.closest('a, button, [role="button"]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [])

  if (!visible) return null

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovered ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full z-[99998] pointer-events-none"
      />
      <motion.div
        animate={{ x: pos.x - 16, y: pos.y - 16, scale: hovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-orange/60 rounded-full z-[99997] pointer-events-none"
      />
    </>
  )
}
```

- [ ] Create `components/Footer.tsx`:
```tsx
import Link from 'next/link'
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'AI Automation', href: '/services' },
    { label: 'ERP Systems', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-2xl mb-3">
              <span className="text-gradient">SS</span>
              <span className="text-[var(--text-primary)]">Group</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
              Building tomorrow's software today. AI-first, quality-obsessed, deadline-driven.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg glass text-[var(--text-muted)] hover:text-brand-orange transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[var(--text-primary)] mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[var(--text-muted)] hover:text-brand-orange transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm">© 2026 SSGroup. All rights reserved.</p>
          <a href="mailto:hello@ssgroup.in" className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-brand-orange transition-colors">
            <Mail size={14} /> hello@ssgroup.in
          </a>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: extra feature components and footer"`

---

### Task 8: Hero Section

- [ ] Create `sections/home/Hero.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = ['Web Applications', 'AI Automation', 'ERP Systems', 'SaaS Platforms', 'API Integrations']

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '5+', label: 'Years Experience' },
]

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setServiceIndex(i => (i + 1) % services.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]" />
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-navy/40 rounded-full blur-[120px]" />
        <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-glow/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-brand-orange mb-8">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            AI-First Software Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-[var(--text-primary)] leading-tight mb-4"
        >
          We Build Software That<br />
          <span className="text-gradient">Works While You Sleep</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[var(--text-muted)] mb-10 h-8"
        >
          Specialising in{' '}
          <motion.span key={serviceIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} className="text-brand-orange font-semibold">
            {services[serviceIndex]}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact"
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5">
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link href="/portfolio"
            className="flex items-center gap-2 glass hover:border-brand-orange/30 text-[var(--text-primary)] font-semibold px-8 py-4 rounded-xl transition-all duration-200">
            View Our Work
          </Link>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              className="glass px-6 py-4 rounded-2xl text-center">
              <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: hero section"`

---

### Task 9: Home Sections — Services, WhyUs, TechStack, Process

- [ ] Create `sections/home/Services.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { useInView } from '@/hooks/useInView'

export default function ServicesSection() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Services Built for <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Every service we offer is engineered for performance, scalability, and business growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id}
                initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(249,115,22,0.4)' }}
                className="glass rounded-2xl p-6 cursor-default transition-all duration-300 hover:glow-orange group">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{service.shortDesc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/WhyUs.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Rocket, Brain, Layers, Headphones } from 'lucide-react'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { useInView } from '@/hooks/useInView'

const stats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 30, suffix: '+', label: 'Happy Clients' },
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 99, suffix: '%', label: 'Uptime Guaranteed' },
]

const values = [
  { icon: Rocket, title: 'Fast Delivery', desc: 'We ship on time. Every time. No excuses, no delays.' },
  { icon: Brain, title: 'AI-First Thinking', desc: 'Every solution is designed with automation and intelligence at its core.' },
  { icon: Layers, title: 'Full-Stack Expertise', desc: 'From database schema to pixel-perfect UI — we own the entire stack.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Post-launch support that actually responds within hours, not days.' },
]

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useAnimatedCounter(target)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-display font-bold text-gradient">{count}{suffix}</div>
      <div className="text-[var(--text-muted)] text-sm mt-1">{label}</div>
    </div>
  )
}

export default function WhyUs() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Why SSGroup</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Numbers That <span className="text-gradient">Speak For Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}>
              <StatCounter {...s} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-6">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/TechStack.tsx`:
```tsx
import { technologies } from '@/data/tech'

export default function TechStack() {
  const doubled = [...technologies, ...technologies]
  return (
    <section className="py-20 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Tech Stack</span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] mt-3">
          Built With <span className="text-gradient">Industry-Leading Tools</span>
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-8 w-max">
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 glass px-6 py-3 rounded-xl whitespace-nowrap flex-shrink-0">
              <span className="text-xl">{tech.logo}</span>
              <span className="font-medium text-[var(--text-primary)] text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/Process.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const steps = [
  { number: '01', title: 'Discovery', desc: 'We learn your business, goals, and technical requirements inside out.' },
  { number: '02', title: 'Design', desc: 'Wireframes, UI design, and architecture planning before a single line of code.' },
  { number: '03', title: 'Develop', desc: 'Agile sprints with weekly demos so you see progress at every stage.' },
  { number: '04', title: 'Test', desc: 'Rigorous QA across devices, browsers, and real user scenarios.' },
  { number: '05', title: 'Launch', desc: 'Seamless deployment with zero downtime and full handover documentation.' },
]

export default function Process() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Our Process</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            How We <span className="text-gradient">Deliver Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }} className="text-center relative">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-brand-orange flex items-center justify-center glow-orange">
                <span className="font-display font-bold text-brand-orange text-sm">{step.number}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[2px] bg-gradient-to-r from-brand-orange/50 to-transparent" />
              )}
              <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: home sections services whyus techstack process"`

---

### Task 10: Home Sections — Portfolio Preview, Testimonials, Pricing, FAQ, ContactCTA

- [ ] Create `sections/home/Portfolio.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { useInView } from '@/hooks/useInView'

export default function PortfolioPreview() {
  const { ref, isInView } = useInView()
  const featured = projects.filter(p => p.featured)

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
              Projects That <span className="text-gradient">Drive Results</span>
            </h2>
          </div>
          <Link href="/portfolio" className="flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all">
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }} whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-brand-navy/50 to-brand-orange/10 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-gradient">{project.title[0]}</span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-brand-orange/10 text-brand-orange rounded-md">{tech}</span>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{project.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/Testimonials.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { useInView } from '@/hooks/useInView'

export default function Testimonials() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Clients Who <span className="text-gradient">Trust Us</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-sm">{t.author}</div>
                <div className="text-xs text-[var(--text-muted)]">{t.role}, {t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/Pricing.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { pricingTiers } from '@/data/pricing'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export default function Pricing() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Transparent <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto mt-4">No hidden fees. No surprise invoices. Just clear value for your investment.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={cn('glass rounded-2xl p-8 relative', tier.highlighted && 'border-brand-orange/50 glow-orange scale-105')}>
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1">{tier.name}</h3>
              <div className="text-2xl font-display font-bold text-gradient mb-2">{tier.priceRange}</div>
              <p className="text-sm text-[var(--text-muted)] mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[var(--text-primary)]">
                    <Check size={14} className="text-brand-orange flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className={cn('block text-center font-semibold py-3 px-6 rounded-xl transition-all duration-200',
                  tier.highlighted
                    ? 'bg-brand-orange text-white hover:bg-brand-deep hover:shadow-lg hover:shadow-brand-orange/30'
                    : 'glass border border-brand-orange/20 text-[var(--text-primary)] hover:border-brand-orange/50')}>
                {tier.ctaLabel}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/FAQ.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/data/faq'
import { useInView } from '@/hooks/useInView'

export default function FAQ() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass rounded-xl border-none px-6">
                <AccordionTrigger className="font-semibold text-[var(--text-primary)] hover:text-brand-orange text-left py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--text-muted)] text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/home/ContactCTA.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function ContactCTA() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-navy/30 rounded-full blur-[60px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
              Ready to Build Something <span className="text-gradient">Remarkable?</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss your project. We respond within 2 hours on business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"
                className="flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30">
                Book a Call <ArrowRight size={18} />
              </Link>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 glass hover:border-green-500/30 text-[var(--text-primary)] font-semibold px-8 py-4 rounded-xl transition-all duration-200">
                <MessageCircle size={18} className="text-green-400" /> WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: home portfolio testimonials pricing faq cta sections"`

---

### Task 11: Home Page Assembly + Services Page

- [ ] Replace `app/page.tsx`:
```tsx
import Hero from '@/sections/home/Hero'
import ServicesSection from '@/sections/home/Services'
import WhyUs from '@/sections/home/WhyUs'
import TechStack from '@/sections/home/TechStack'
import Process from '@/sections/home/Process'
import PortfolioPreview from '@/sections/home/Portfolio'
import Testimonials from '@/sections/home/Testimonials'
import Pricing from '@/sections/home/Pricing'
import FAQ from '@/sections/home/FAQ'
import ContactCTA from '@/sections/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <TechStack />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </>
  )
}
```

- [ ] Create `sections/services/ServicesHero.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg">End-to-end digital solutions engineered for performance, scale, and real business impact.</p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/services/ServicesGrid.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { useInView } from '@/hooks/useInView'

export default function ServicesGrid() {
  const { ref, isInView } = useInView()
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 hover:border-brand-orange/30 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                    <Icon size={26} className="text-brand-orange" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">{service.title}</h2>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.benefits.map(b => (
                        <li key={b} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <Check size={12} className="text-brand-orange flex-shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all">
                      Get a Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `app/services/page.tsx`:
```tsx
import type { Metadata } from 'next'
import ServicesHero from '@/sections/services/ServicesHero'
import ServicesGrid from '@/sections/services/ServicesGrid'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Services | SSGroup — Web, AI, ERP & SaaS Development',
  description: 'Explore our full range of software development services: Next.js, AI automation, ERP, CRM, SaaS, API integrations, and SEO.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ContactCTA />
    </>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: home page assembly and services page"`

---

### Task 12: Portfolio Page

- [ ] Create `sections/portfolio/PortfolioHero.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'

export default function PortfolioHero() {
  return (
    <section className="pt-32 pb-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-navy/30 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Projects That <span className="text-gradient">Define Us</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg">Real solutions. Real results. Explore our portfolio of delivered projects.</p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/portfolio/PortfolioGrid.tsx`:
```tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const filters = ['all', 'web', 'erp', 'ai', 'saas'] as const
type Filter = typeof filters[number]

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={cn('px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200',
                active === f ? 'bg-brand-orange text-white' : 'glass text-[var(--text-muted)] hover:text-brand-orange')}>
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-brand-navy/60 to-brand-orange/10 flex items-center justify-center relative">
                  <span className="font-display font-bold text-3xl text-gradient">{project.title[0]}</span>
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-brand-orange uppercase tracking-wide">{project.category}</span>
                  <h3 className="font-display font-semibold text-[var(--text-primary)] mt-1 mb-2">{project.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-0.5 bg-brand-orange/10 text-brand-orange rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 text-center text-xs py-2 glass rounded-lg text-[var(--text-muted)] hover:text-brand-orange transition-colors">
                      Live Preview
                    </button>
                    <button className="flex-1 text-center text-xs py-2 glass rounded-lg text-[var(--text-muted)] hover:text-brand-orange transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Create `app/portfolio/page.tsx`:
```tsx
import type { Metadata } from 'next'
import PortfolioHero from '@/sections/portfolio/PortfolioHero'
import PortfolioGrid from '@/sections/portfolio/PortfolioGrid'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Portfolio | SSGroup — Our Work & Projects',
  description: 'Explore our portfolio of delivered projects across web development, ERP systems, AI automation, and SaaS platforms.',
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <ContactCTA />
    </>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: portfolio page"`

---

### Task 13: About Page

- [ ] Create `sections/about/AboutStory.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

export default function AboutStory() {
  const { ref, isInView } = useInView()
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="text-5xl font-display font-bold text-[var(--text-primary)] mt-3 mb-6">
              Built by Builders, <span className="text-gradient">For Business</span>
            </h1>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              SSGroup was founded with one mission: make enterprise-grade software accessible to every business — from corner-shop startups to multi-crore factories.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We got tired of watching great businesses struggle with clunky spreadsheets, disconnected systems, and agencies that overpromised and underdelivered. So we built the agency we always wished existed.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Today, SSGroup powers businesses across manufacturing, retail, services, and ecommerce — with software that's fast, reliable, and built to last.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4">
            {[
              { value: '2019', label: 'Founded' },
              { value: '50+', label: 'Projects' },
              { value: '30+', label: 'Clients' },
              { value: '100%', label: 'Remote-Ready' },
            ].map(stat => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/about/AboutMission.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Bot, Zap, Shield } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const pillars = [
  { icon: Bot, title: 'AI-First by Default', desc: 'Every system we build has automation and intelligence embedded from day one — not bolted on later.' },
  { icon: Zap, title: 'Speed Without Compromise', desc: 'Fast delivery cycles with zero sacrifice on code quality, security, or scalability.' },
  { icon: Shield, title: 'Built to Last', desc: 'We write code we\'d stake our reputation on. Clean architecture. Comprehensive docs. No tech debt.' },
]

export default function AboutMission() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Our Mission</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            An <span className="text-gradient">AI-First Philosophy</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">{p.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/about/AboutProcess.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const steps = [
  { icon: '🔍', title: 'Consult', desc: 'Deep-dive into your business, challenges, and goals. We ask the questions others skip.' },
  { icon: '⚡', title: 'Craft', desc: 'Design-first development with regular demos. You see the product taking shape from week one.' },
  { icon: '🚀', title: 'Deliver', desc: 'On-time launch with full documentation, training, and post-launch support built in.' },
]

export default function AboutProcess() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">How We Work</span>
          <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mt-3">
            Simple. <span className="text-gradient">Effective. Reliable.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.2 }}
              className="text-center glass rounded-2xl p-8">
              <div className="text-5xl mb-5">{s.icon}</div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">{s.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/about/AboutValues.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Award, Timer, Handshake } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We never stop exploring better ways to solve problems.' },
  { icon: Award, title: 'Quality', desc: 'Good enough is never good enough. We ship excellence.' },
  { icon: Timer, title: 'Speed', desc: 'We move fast without breaking things. Or your trust.' },
  { icon: Handshake, title: 'Partnership', desc: 'Your success is the only metric we track.' },
]

export default function AboutValues() {
  const { ref, isInView } = useInView()
  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Our Values</span>
          <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mt-3">
            What We <span className="text-gradient">Stand For</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 text-center hover:border-brand-orange/30 transition-all duration-300">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `app/about/page.tsx`:
```tsx
import type { Metadata } from 'next'
import AboutStory from '@/sections/about/AboutStory'
import AboutMission from '@/sections/about/AboutMission'
import AboutProcess from '@/sections/about/AboutProcess'
import AboutValues from '@/sections/about/AboutValues'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'About SSGroup | AI-First Software Agency',
  description: 'Learn about SSGroup — our story, mission, AI-first philosophy, and the values that drive everything we build.',
}

export default function AboutPage() {
  return (
    <>
      <AboutStory />
      <AboutMission />
      <AboutProcess />
      <AboutValues />
      <ContactCTA />
    </>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: about page"`

---

### Task 14: Contact Page

- [ ] Create `sections/contact/ContactHero.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg">We respond within 2 hours on business days. No sales pitches — just straight talk about your project.</p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] Create `sections/contact/ContactLayout.tsx`:
```tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, Twitter, Linkedin, Github } from 'lucide-react'
import { sendContactEmail, ContactFormData } from '@/lib/emailjs'
import { useInView } from '@/hooks/useInView'

const serviceOptions = [
  'Web Development', 'Next.js Application', 'AI Automation',
  'ERP System', 'CRM Solution', 'SaaS Development',
  'API Integration', 'SEO Optimisation', 'Other',
]

export default function ContactLayout() {
  const { ref, isInView } = useInView()
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendContactEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
            className="space-y-8">
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-brand-orange" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-1">Email Us</div>
                <a href="mailto:hello@ssgroup.in" className="text-[var(--text-muted)] text-sm hover:text-brand-orange transition-colors">hello@ssgroup.in</a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-1">WhatsApp</div>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors mt-1">
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar size={18} className="text-brand-orange" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-1">Book a Call</div>
                <p className="text-[var(--text-muted)] text-sm mb-2">Schedule a free 30-min discovery call.</p>
                <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass text-brand-orange text-sm font-medium px-4 py-2 rounded-lg hover:border-brand-orange/30 transition-all">
                  <Calendar size={14} /> Schedule Now
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="font-semibold text-[var(--text-primary)] mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="p-2.5 glass rounded-lg text-[var(--text-muted)] hover:text-brand-orange transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden h-48 flex items-center justify-center">
              <div className="text-center text-[var(--text-muted)]">
                <div className="text-4xl mb-2">📍</div>
                <div className="text-sm">India — Remote Worldwide</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-6">Send Us a Message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-orange/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-orange/50 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Phone</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+91 00000 00000"
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-orange/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Service *</label>
                  <select required value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-brand-orange/50 transition-colors bg-transparent">
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message *</label>
                <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5} placeholder="Tell us about your project..."
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-brand-orange/50 transition-colors resize-none" />
              </div>

              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-3 rounded-xl">
                  Message sent! We'll get back to you within 2 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                  Something went wrong. Please email us directly at hello@ssgroup.in
                </div>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full bg-brand-orange hover:bg-brand-deep disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30 flex items-center justify-center gap-2">
                {status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] Create `app/contact/page.tsx`:
```tsx
import type { Metadata } from 'next'
import ContactHero from '@/sections/contact/ContactHero'
import ContactLayout from '@/sections/contact/ContactLayout'

export const metadata: Metadata = {
  title: 'Contact SSGroup | Start Your Project Today',
  description: 'Get in touch with SSGroup. Book a free discovery call, WhatsApp us, or fill out our contact form.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLayout />
    </>
  )
}
```

- [ ] Commit: `git add . && git commit -m "feat: contact page with emailjs form"`

---

### Task 15: SEO, Sitemap, Robots + Final Build

- [ ] Create `app/sitemap.ts`:
```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ssgroup.in'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ]
}
```

- [ ] Create `app/robots.ts`:
```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ssgroup.in/sitemap.xml',
  }
}
```

- [ ] Create `public/images/.gitkeep` and `public/logo/.gitkeep` (placeholder dirs):
```bash
mkdir -p public/images public/logo
touch public/images/.gitkeep public/logo/.gitkeep
```

- [ ] Create `next.config.ts`:
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
}

export default nextConfig
```

- [ ] Run build to verify:
```bash
npm run build
```
Expected: Build completes with no type errors. Any type errors must be fixed before proceeding.

- [ ] Run dev server to visually verify all pages:
```bash
npm run dev
```
Check: `/`, `/services`, `/portfolio`, `/about`, `/contact` — all load without console errors.

- [ ] Commit: `git add . && git commit -m "feat: seo sitemap robots and final build verification"`
