import type { Metadata } from 'next'
import PortfolioHero from '@/sections/portfolio/PortfolioHero'
import PortfolioGrid from '@/sections/portfolio/PortfolioGrid'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Portfolio | Real Projects — ERP, AI, SaaS & Web | SSGroupTech',
  description:
    'See real projects built by SSGroupTech: stock ERP, AI trading platforms, school ERP, cybersecurity dashboards, real estate portals, and SaaS applications.',
  alternates: { canonical: 'https://ssgrouptech.com/portfolio' },
  openGraph: {
    url: 'https://ssgrouptech.com/portfolio',
    title: 'Portfolio | Real Projects — ERP, AI, SaaS & Web | SSGroupTech',
    description:
      'Real-world projects: stock ERP, AI trading platforms, school ERP, cybersecurity, real estate portals & SaaS — built by SSGroupTech.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'SSGroupTech Portfolio' }],
  },
  twitter: {
    title: 'Portfolio | SSGroupTech — ERP, AI, SaaS & Web Projects',
    description: 'Real projects: stock ERP, AI trading, school ERP, cybersecurity, real estate & SaaS built by SSGroupTech.',
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ssgrouptech.com' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://ssgrouptech.com/portfolio' },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PortfolioHero />
      <PortfolioGrid />
      <ContactCTA />
    </>
  )
}
