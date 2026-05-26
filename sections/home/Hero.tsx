'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  'Web Applications',
  'AI Automation',
  'ERP Systems',
  'SaaS Platforms',
  'API Integrations',
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '5+', label: 'Years Experience' },
]

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(
      () => setServiceIndex((i) => (i + 1) % services.length),
      2500
    )
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-navy/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-glow/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[color:var(--accent-orange)] mb-8">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            AI-First Software Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-[var(--text-primary)] leading-tight mb-4"
        >
          We Build Software That
          <br />
          <span className="text-gradient">Works While You Sleep</span>
        </motion.h1>

        {/* Typewriter sub-line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[var(--text-muted)] mb-10 h-8 flex items-center justify-center gap-2"
        >
          <span>Specialising in</span>
          <motion.span
            key={serviceIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-[color:var(--accent-orange)] font-semibold"
          >
            {services[serviceIndex]}
          </motion.span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: '0 0 0 0 transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(249,115,22,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
            }}
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 glass hover:border-brand-orange/30 text-[var(--text-primary)] font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
              className="glass px-6 py-4 rounded-2xl text-center min-w-[120px]"
            >
              <div className="text-2xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
