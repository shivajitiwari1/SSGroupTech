import type { Metadata } from 'next'
import ContactHero from '@/sections/contact/ContactHero'
import ContactLayout from '@/sections/contact/ContactLayout'

export const metadata: Metadata = {
  title: 'Contact SSGroupTech | Get a Free Project Quote',
  description:
    'Contact SSGroupTech to start your project. Book a free 30-min discovery call, WhatsApp us on +91-9555839357, or send a message. Fast response guaranteed.',
  alternates: { canonical: 'https://ssgrouptech.com/contact' },
  openGraph: {
    url: 'https://ssgrouptech.com/contact',
    title: 'Contact SSGroupTech | Get a Free Project Quote',
    description:
      'Start your software project with SSGroupTech. Free discovery call, WhatsApp support & fast response guaranteed.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact SSGroupTech' }],
  },
  twitter: {
    title: 'Contact SSGroupTech | Get a Free Project Quote',
    description: 'Book a free discovery call or WhatsApp SSGroupTech to start your software project today.',
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ssgrouptech.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://ssgrouptech.com/contact' },
  ],
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SSGroupTech',
  url: 'https://ssgrouptech.com/contact',
  description: 'Contact SSGroupTech for a free project quote or discovery call.',
  mainEntity: {
    '@type': 'Organization',
    name: 'SSGroupTech',
    email: 'ssgrouptechindia@gmail.com',
    telephone: '+91-9555839357',
    url: 'https://ssgrouptech.com',
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <ContactHero />
      <ContactLayout />
    </>
  )
}
