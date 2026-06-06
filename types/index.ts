import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  shortDesc: string
  description: string
  benefits: string[]
  category: string
}

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  category: 'web' | 'erp' | 'ai' | 'saas'
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface PricingTier {
  name: string
  priceRange: string
  priceRangeUSD: string
  description: string
  features: string[]
  highlighted: boolean
  ctaLabel: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role: string
  rating: number
  imageUrl?: string
  duration?: string
  project?: string
}

export interface FAQItem {
  question: string
  answer: string
}
