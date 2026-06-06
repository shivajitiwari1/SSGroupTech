'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { testimonials } from '@/data/testimonials'
import { useInView } from '@/hooks/useInView'

export default function Testimonials() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Clients Who <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
            Real feedback from real clients — long-term relationships built on consistent delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              {/* Top row: stars + duration badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                {t.duration && (
                  <span className="text-[10px] font-semibold text-[color:var(--accent-orange)] bg-brand-orange/10 px-2 py-0.5 rounded-full">
                    {t.duration}
                  </span>
                )}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Project tag */}
              {t.project && (
                <span className="text-[10px] font-medium text-[var(--text-dim)] border border-[var(--border-glass)] px-2 py-0.5 rounded-full self-start mb-4">
                  {t.project}
                </span>
              )}

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-glass)]">
                {t.imageUrl ? (
                  <Image
                    src={t.imageUrl}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[color:var(--accent-orange)]">
                      {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">{t.author}</div>
                  <div className="text-xs text-[var(--text-muted)]">{t.role}</div>
                  <div className="text-xs text-[var(--text-dim)]">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
