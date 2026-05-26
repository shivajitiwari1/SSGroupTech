'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, Globe, Link as LinkIcon } from 'lucide-react'
import { sendContactEmail, type ContactFormData } from '@/lib/emailjs'
import { useInView } from '@/hooks/useInView'

const serviceOptions = [
  'Web Development',
  'Next.js Application',
  'AI Automation',
  'ERP System',
  'CRM Solution',
  'SaaS Development',
  'API Integration',
  'SEO Optimisation',
  'Other',
]

const inputClass =
  'w-full glass rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-brand-orange/50 transition-colors bg-transparent'

export default function ContactLayout() {
  const { ref, isInView } = useInView()

  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendContactEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com'

  return (
    <section className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-brand-orange" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-1">Email Us</div>
                <a
                  href="mailto:hello@ssgroup.in"
                  className="text-[var(--text-muted)] text-sm hover:text-[color:var(--accent-orange)] transition-colors"
                >
                  hello@ssgroup.in
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-1">WhatsApp</div>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors mt-1"
                >
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Calendly */}
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar size={18} className="text-brand-orange" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-1">Book a Call</div>
                <p className="text-[var(--text-muted)] text-sm mb-2">
                  Schedule a free 30-min discovery call.
                </p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass text-[color:var(--accent-orange)] text-sm font-medium px-4 py-2 rounded-lg hover:border-brand-orange/30 transition-all"
                >
                  <Calendar size={14} /> Schedule Now
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <div className="font-semibold text-[var(--text-primary)] mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { Icon: Globe, label: 'Twitter' },
                  { Icon: LinkIcon, label: 'LinkedIn' },
                  { Icon: Globe, label: 'GitHub' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="p-2.5 glass rounded-lg text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden h-48 flex items-center justify-center">
              <div className="text-center text-[var(--text-muted)]">
                <div className="text-4xl mb-2">📍</div>
                <div className="text-sm font-medium">India — Remote Worldwide</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-6">
                Send Us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Service *
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Message *
                </label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={inputClass}
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-3 rounded-xl">
                  Message sent! We&apos;ll get back to you within 2 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                  Something went wrong. Please email us directly at hello@ssgroup.in
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brand-orange hover:bg-brand-deep disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
