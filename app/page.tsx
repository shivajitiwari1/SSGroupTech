import type { Metadata } from 'next'
import Hero from '@/sections/home/Hero'
import ServicesSection from '@/sections/home/Services'
import WhyUs from '@/sections/home/WhyUs'
import TechStack from '@/sections/home/TechStack'
import Process from '@/sections/home/Process'
import PortfolioPreview from '@/sections/home/PortfolioPreview'
import Testimonials from '@/sections/home/Testimonials'
import Pricing from '@/sections/home/Pricing'
import FAQ from '@/sections/home/FAQ'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'SSGroupTech | AI-Powered Software Development Company India',
  description:
    'SSGroupTech builds Next.js apps, ERP systems, AI automation, SaaS platforms & CRM solutions for startups and enterprises worldwide. India-based, global delivery.',
  alternates: { canonical: 'https://ssgrouptech.com' },
  openGraph: {
    url: 'https://ssgrouptech.com',
    title: 'SSGroupTech | AI-Powered Software Development Company India',
    description:
      'SSGroupTech builds Next.js apps, ERP systems, AI automation, SaaS platforms & CRM solutions for startups and enterprises worldwide.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SSGroupTech' }],
  },
  twitter: {
    title: 'SSGroupTech | AI-Powered Software Development Company India',
    description:
      'Next.js, ERP, AI automation, SaaS & CRM development. India-based, global delivery.',
  },
}

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
