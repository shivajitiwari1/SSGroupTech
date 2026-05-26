import type { Metadata } from 'next'
import AboutStory from '@/sections/about/AboutStory'
import AboutMission from '@/sections/about/AboutMission'
import AboutProcess from '@/sections/about/AboutProcess'
import AboutValues from '@/sections/about/AboutValues'
import ContactCTA from '@/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'About SSGroup | AI-First Software Agency',
  description:
    'Learn about SSGroup — our story, mission, AI-first philosophy, and the values that drive everything we build.',
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
