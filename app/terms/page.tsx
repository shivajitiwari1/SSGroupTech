import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | SSGroupTech',
  description: 'Terms and conditions for using SSGroupTech software development services.',
  alternates: { canonical: 'https://ssgrouptech.com/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-2">Terms of Service</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-[var(--text-muted)] leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">1. Acceptance of Terms</h2>
            <p>By engaging SSGroupTech for software development services, you agree to these Terms of Service. These terms govern all projects, contracts, and communications between you (the Client) and SSGroupTech.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">2. Services</h2>
            <p>SSGroupTech provides custom software development services including but not limited to web development, ERP systems, AI automation, SaaS platforms, CRM solutions, and API integrations. The scope, timeline, and cost of each project is agreed upon in writing before work commences.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Standard projects: 50% upfront, 50% on delivery</li>
              <li>Enterprise projects: milestone-based payments as agreed</li>
              <li>Accepted methods: Bank transfer, UPI, international wire transfer</li>
              <li>Invoices are due within 7 days of issue</li>
              <li>Late payments may attract a 2% monthly interest charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">4. Intellectual Property</h2>
            <p>Upon receipt of full payment, the Client owns the custom code written specifically for their project. SSGroupTech retains ownership of any proprietary frameworks, libraries, or tools used during development. Open-source components remain subject to their respective licences.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">5. Revisions & Scope</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Starter plan: 1 revision round included</li>
              <li>Growth plan: 3 revision rounds included</li>
              <li>Enterprise plan: unlimited revisions as per agreement</li>
              <li>Requests outside the agreed scope will be quoted separately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">6. Confidentiality</h2>
            <p>SSGroupTech treats all client information, business data, and project details as strictly confidential. We will not disclose your proprietary information to any third party without your written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">7. Limitation of Liability</h2>
            <p>SSGroupTech&apos;s liability is limited to the total amount paid by the Client for the specific project in question. We are not liable for indirect, incidental, or consequential damages arising from the use of delivered software.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">8. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">9. Contact</h2>
            <p>For questions about these terms, contact <a href="mailto:ssgrouptechindia@gmail.com" className="text-brand-orange hover:underline">ssgrouptechindia@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-glass)]">
          <Link href="/" className="text-brand-orange hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
