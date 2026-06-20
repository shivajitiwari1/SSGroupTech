import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy | SSGroupTech',
  description: 'SSGroupTech refund and cancellation policy for software development projects.',
  alternates: { canonical: 'https://ssgrouptech.com/refund' },
}

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-2">Refund Policy</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-[var(--text-muted)] leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">Overview</h2>
            <p>SSGroupTech is committed to delivering high-quality software solutions. We handle refund requests fairly and transparently. Please read this policy carefully before engaging our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">Upfront Deposit</h2>
            <p>The initial 50% deposit is non-refundable once project work has commenced. This covers discovery, planning, design, and initial development work. If you cancel before any work begins, the deposit will be refunded in full within 7 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">Mid-Project Cancellation</h2>
            <p>If you choose to cancel a project after work has started:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You will be billed for work completed up to the cancellation date</li>
              <li>Any amount paid in excess of work completed will be refunded</li>
              <li>All completed work/code will be delivered to you</li>
              <li>Refunds are processed within 14 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">Final Payment</h2>
            <p>The final 50% payment is due upon project delivery and sign-off. Once the client has approved the deliverables, the final payment is non-refundable.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">Quality Guarantee</h2>
            <p>If the delivered work does not meet the agreed specifications, we will fix it at no additional charge within the post-launch support period. We stand behind our work and will make it right.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-[var(--text-primary)] mb-3">Requesting a Refund</h2>
            <p>To request a refund, email us at <a href="mailto:ssgrouptechindia@gmail.com" className="text-brand-orange hover:underline">ssgrouptechindia@gmail.com</a> with your project details and reason for the request. We will respond within 2 business days.</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-glass)]">
          <Link href="/" className="text-brand-orange hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
