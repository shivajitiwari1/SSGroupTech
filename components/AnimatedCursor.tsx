'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    setVisible(true)

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovered(!!el.closest('a, button, [role="button"]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovered ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full z-[99998] pointer-events-none"
      />
      {/* Ring */}
      <motion.div
        animate={{ x: pos.x - 16, y: pos.y - 16, scale: hovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-orange/60 rounded-full z-[99997] pointer-events-none"
      />
    </>
  )
}
