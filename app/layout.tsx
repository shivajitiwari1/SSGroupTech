import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'

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

export const metadata: Metadata = {
  title: {
    default: 'SSGroup | AI-Powered Software Development Company',
    template: '%s | SSGroup',
  },
  description:
    'Premium software agency specialising in Next.js, ERP, AI automation, SaaS & web development. Trusted by startups, enterprises & factories.',
  openGraph: {
    type: 'website',
    siteName: 'SSGroup',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
