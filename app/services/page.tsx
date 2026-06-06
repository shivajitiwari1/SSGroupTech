import type { Metadata } from 'next'
import ServicesHero from '@/sections/services/ServicesHero'
import ServicesGrid from '@/sections/services/ServicesGrid'
import ContactCTA from '@/sections/home/ContactCTA'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Software Development Services | Next.js, AI, ERP & SaaS — SSGroupTech',
  description:
    'End-to-end software development services: Next.js web apps, AI automation, ERP systems, CRM solutions, SaaS platforms, API integrations & SEO. India-based, global clients.',
  alternates: { canonical: 'https://ssgrouptech.com/services' },
  openGraph: {
    url: 'https://ssgrouptech.com/services',
    title: 'Software Development Services | Next.js, AI, ERP & SaaS — SSGroupTech',
    description: 'Next.js, AI automation, ERP, CRM, SaaS, API integrations & SEO services from SSGroupTech.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SSGroupTech Services' }],
  },
  twitter: {
    title: 'Software Development Services | SSGroupTech',
    description: "Next.js, AI, ERP, CRM, SaaS, API & SEO services from India's AI-first software agency.",
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ssgrouptech.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ssgrouptech.com/services' },
  ],
}

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SSGroupTech Software Development Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description,
      provider: { '@type': 'Organization', name: 'SSGroupTech', url: 'https://ssgrouptech.com' },
      areaServed: 'Worldwide',
      serviceType: 'Software Development',
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <ServicesHero />
      <ServicesGrid />
      <ContactCTA />
    </>
  )
}
