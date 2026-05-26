'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function ContactCTA() {
  const { ref, isInView } = useInView()
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-navy/30 rounded-full blur-[60px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
              Ready to Build Something{' '}
              <span className="text-gradient">Remarkable?</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your project. We respond within 2 hours on business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                Book a Call <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass hover:border-green-500/30 text-[var(--text-primary)] font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                <MessageCircle size={18} className="text-green-400" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
