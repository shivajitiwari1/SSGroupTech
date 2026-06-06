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
      'Meet the team behind SSGroupTech — India\'s AI-first software development agency delivering ERP, SaaS, and web solutions worldwide.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About SSGroupTech' }],
  },
  twitter: {
    title: 'About SSGroupTech | AI-First Software Agency India',
    description: 'Meet the team behind SSGroupTech — AI-first software agency delivering ERP, SaaS & web solutions worldwide.',
  },
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
