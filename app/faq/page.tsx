import type { Metadata } from 'next'
import Link from 'next/link'
import { faqs } from '@/data/faq'

export const metadata: Metadata = {
  title: 'FAQ | SSGroupTech — Frequently Asked Questions',
  description: 'Answers to common questions about SSGroupTech services, timelines, payment terms, tech stack, and support.',
  alternates: { canonical: 'https://ssgrouptech.com/faq' },
  openGraph: {
    url: 'https://ssgrouptech.com/faq',
    title: 'FAQ | SSGroupTech — Frequently Asked Questions',
    description: 'Answers about SSGroupTech services, timelines, payment terms, revisions, and post-launch support.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ssgrouptech.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://ssgrouptech.com/faq' },
  ],
}

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h1 className="text-5xl font-display font-bold text-[var(--text-primary)] mt-3 mb-5">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-[var(--text-muted)]">Everything you need to know before starting your project.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="glass rounded-xl group"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-[var(--text-primary)] hover:text-brand-orange transition-colors list-none">
                {faq.question}
                <span className="ml-4 text-brand-orange flex-shrink-0 text-xl leading-none group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-5 text-[var(--text-muted)] text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <h2 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3">Still have questions?</h2>
          <p className="text-[var(--text-muted)] text-sm mb-6">Book a free 30-min discovery call and we&apos;ll answer everything.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-glass)]">
          <Link href="/" className="text-brand-orange hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
