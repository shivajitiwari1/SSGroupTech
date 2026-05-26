import type { Metadata } from 'next'
import ServicesHero from '@/sections/services/ServicesHero'
import ServicesGrid from '@/sections/services/ServicesGrid'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Services | SSGroup — Web, AI, ERP & SaaS Development',
  description:
    'Explore our full range of software development services: Next.js, AI automation, ERP, CRM, SaaS, API integrations, and SEO.',
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
