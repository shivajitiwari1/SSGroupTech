'use client'
import { useInView as useFramerInView } from 'framer-motion'
import { useRef } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
