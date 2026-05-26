import type { Metadata } from 'next'
import ContactHero from '@/sections/contact/ContactHero'
import ContactLayout from '@/sections/contact/ContactLayout'

export const metadata: Metadata = {
  title: 'Contact SSGroupTech | Start Your Project Today',
  description:
    'Get in touch with SSGroupTech. Book a free discovery call, WhatsApp us, or fill out our contact form.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLayout />
    </>
  )
}
