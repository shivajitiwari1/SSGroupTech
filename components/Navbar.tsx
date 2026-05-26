'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'py-3 border-b border-[var(--border-glass)] backdrop-blur-md'
          : 'py-5'
      )}
      style={scrolled || mobileOpen ? { backgroundColor: 'rgba(8, 12, 20, 0.96)' } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-bold text-xl leading-none">
            <span className="text-gradient">SS</span>
            <span className="text-[var(--text-primary)]">Group</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  pathname === link.href
                    ? 'text-[color:var(--accent-orange)]'
                    : 'text-[var(--text-muted)] hover:text-[color:var(--accent-orange)]'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-brand-orange hover:bg-brand-deep text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
            style={{ boxShadow: undefined }}
          >
            Start Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--text-primary)]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[var(--border-glass)] overflow-hidden"
            style={{ backgroundColor: 'rgba(8, 12, 20, 0.98)' }}
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors border-l-2',
                      pathname === link.href
                        ? 'text-[color:var(--accent-orange)] border-brand-orange bg-brand-orange/5'
                        : 'text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] border-transparent'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[var(--border-glass)] mt-2 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="flex-1 text-center bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-lg mr-2"
                >
                  Start Project
                </Link>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
