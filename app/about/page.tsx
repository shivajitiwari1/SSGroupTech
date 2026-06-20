import type { Metadata } from 'next'
import AboutStory from '@/sections/about/AboutStory'
import AboutMission from '@/sections/about/AboutMission'
import AboutProcess from '@/sections/about/AboutProcess'
import AboutValues from '@/sections/about/AboutValues'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'About SSGroupTech | AI-First Software Agency India',
  description:
    'Learn about SSGroupTech — our story, mission, AI-first philosophy, and the values behind our software development agency in India.',
  alternates: { canonical: 'https://ssgrouptech.com/about' },
  openGraph: {
    url: 'https://ssgrouptech.com/about',
    title: 'About SSGroupTech | AI-First Software Agency India',
    description:
      "Meet the team behind SSGroupTech — India's AI-first software development agency delivering ERP, SaaS, and web solutions worldwide.",
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About SSGroupTech' }],
  },
  twitter: {
    title: 'About SSGroupTech | AI-First Software Agency India',
    description: 'Meet the team behind SSGroupTech — AI-first software agency delivering ERP, SaaS & web solutions worldwide.',
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ssgrouptech.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://ssgrouptech.com/about' },
  ],
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SSGroupTech',
  url: 'https://ssgrouptech.com',
  description:
    "India's AI-first software development agency specialising in Next.js, ERP, AI automation, SaaS and CRM solutions.",
  areaServed: ['India', 'USA', 'UK', 'UAE', 'Worldwide'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
  },
  knowsAbout: ['Next.js', 'ERP Development', 'AI Automation', 'SaaS Platforms', 'CRM Solutions', 'API Integration'],
  foundingDate: '2019',
  email: 'ssgrouptechindia@gmail.com',
  telephone: '+91-9555839357',
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <AboutStory />
      <AboutMission />
      <AboutProcess />
      <AboutValues />
      <ContactCTA />
    </>
  )
}
