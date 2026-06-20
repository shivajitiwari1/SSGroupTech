import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | SSGroupTech',
  description: 'How SSGroupTech collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://ssgrouptech.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-2">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[var(--text-muted)] leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">1. Information We Collect</h2>
            <p>When you use our contact form or communicate with us, we collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your name and email address</li>
              <li>Phone number (optional)</li>
              <li>Project details and messages you send us</li>
              <li>Browser type and IP address (via server logs)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your enquiries and project requests</li>
              <li>Send project updates and deliverable notifications</li>
              <li>Invoice and manage client relationships</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">3. Data Storage & Security</h2>
            <p>Your data is transmitted over encrypted HTTPS connections. Contact form submissions are delivered via secure Gmail SMTP. We do not store form submissions in any database — they are delivered directly to our team inbox.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">4. Cookies</h2>
            <p>This website uses minimal session cookies necessary for the site to function. We do not use tracking cookies or advertising cookies. We do not use Google Analytics or similar tracking tools unless explicitly stated.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">5. Third-Party Services</h2>
            <p>This site is hosted on Vercel. By using our site you are also subject to <a href="https://vercel.com/legal/privacy-policy" className="text-brand-orange hover:underline" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>. We may link to third-party tools (Calendly, WhatsApp) which have their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">6. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, email us at <a href="mailto:ssgrouptechindia@gmail.com" className="text-brand-orange hover:underline">ssgrouptechindia@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">7. Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="mailto:ssgrouptechindia@gmail.com" className="text-brand-orange hover:underline">ssgrouptechindia@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-glass)]">
          <Link href="/" className="text-brand-orange hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
