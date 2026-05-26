import type { Metadata } from 'next'
import PortfolioHero from '@/sections/portfolio/PortfolioHero'
import PortfolioGrid from '@/sections/portfolio/PortfolioGrid'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Portfolio | SSGroupTech — Our Work & Projects',
  description:
    'Explore our portfolio of delivered projects across web development, ERP systems, AI automation, and SaaS platforms.',
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
