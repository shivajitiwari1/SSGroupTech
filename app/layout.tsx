import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = 'https://ssgrouptech.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SSGroupTech | AI-Powered Software Development Company',
    template: '%s | SSGroupTech',
  },
  description:
    'Premium software agency specialising in Next.js, ERP, AI automation, SaaS & web development. Trusted by startups, enterprises & global clients.',
  keywords: [
    'software development company India',
    'Next.js development agency',
    'AI automation software',
    'ERP system development',
    'SaaS development company',
    'CRM software development',
    'web development agency India',
    'API integration services',
    'custom software development',
    'SSGroupTech',
  ],
  authors: [{ name: 'SSGroupTech', url: SITE_URL }],
  creator: 'SSGroupTech',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    siteName: 'SSGroupTech',
    url: SITE_URL,
    title: 'SSGroupTech | AI-Powered Software Development Company',
    description:
      'Premium software agency specialising in Next.js, ERP, AI automation, SaaS & web development. Trusted by startups, enterprises & global clients.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'SSGroupTech' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ssgrouptech',
    creator: '@ssgrouptech',
    title: 'SSGroupTech | AI-Powered Software Development Company',
    description:
      'Premium software agency specialising in Next.js, ERP, AI automation & SaaS development.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SSGroupTech',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9555839357',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.linkedin.com/company/ssgrouptech',
    'https://github.com/ssgrouptech',
    'https://twitter.com/ssgrouptech',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  description:
    'Premium software agency specialising in Next.js, ERP, AI automation, SaaS & web development.',
  foundingDate: '2020',
  email: 'ssgrouptechindia@gmail.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}
      >
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
