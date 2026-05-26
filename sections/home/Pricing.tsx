'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { pricingTiers } from '@/data/pricing'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export default function Pricing() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Transparent <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto mt-4">
            No hidden fees. No surprise invoices. Just clear value for your investment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={cn(
                'glass rounded-2xl p-8 relative',
                tier.highlighted && 'border-brand-orange/50 glow-orange md:scale-105'
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1">
                {tier.name}
              </h3>
              <div className="text-2xl font-display font-bold text-gradient mb-2">
                {tier.priceRange}
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                    <Check size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  'block text-center font-semibold py-3 px-6 rounded-xl transition-all duration-200',
                  tier.highlighted
                    ? 'bg-brand-orange text-white hover:bg-brand-deep'
                    : 'glass border border-[var(--border-glass)] text-[var(--text-primary)] hover:border-brand-orange/50'
                )}
              >
                {tier.ctaLabel}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
