'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { useInView } from '@/hooks/useInView'

export default function ServicesGrid() {
  const { ref, isInView } = useInView()

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-brand-orange/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors duration-200">
                    <Icon size={26} className="text-brand-orange" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <Check size={12} className="text-brand-orange flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[color:var(--accent-orange)] font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      Get a Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
