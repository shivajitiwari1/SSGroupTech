import type { Metadata } from 'next'
import ServicesHero from '@/sections/services/ServicesHero'
import ServicesGrid from '@/sections/services/ServicesGrid'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Software Development Services | Next.js, AI, ERP & SaaS — SSGroupTech',
  description:
    'End-to-end software development services: Next.js web apps, AI automation, ERP systems, CRM solutions, SaaS platforms, API integrations & SEO. India-based, global clients.',
  alternates: { canonical: 'https://ssgrouptech.com/services' },
  openGraph: {
    url: 'https://ssgrouptech.com/services',
    title: 'Software Development Services | Next.js, AI, ERP & SaaS — SSGroupTech',
    description:
      'Next.js, AI automation, ERP, CRM, SaaS, API integrations & SEO services from SSGroupTech.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SSGroupTech Services' }],
  },
  twitter: {
    title: 'Software Development Services | SSGroupTech',
    description: 'Next.js, AI, ERP, CRM, SaaS, API & SEO services from India\'s AI-first software agency.',
  },
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
