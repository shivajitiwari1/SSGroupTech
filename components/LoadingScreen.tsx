'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!sessionStorage.getItem('ss-loaded')) {
      setShow(true)
      const t = setTimeout(() => {
        setShow(false)
        sessionStorage.setItem('ss-loaded', '1')
      }, 1800)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#080C14' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display font-bold text-4xl mb-8 tracking-tight"
          >
            <span className="text-gradient">SS</span>
            <span className="text-white">Group</span>
          </motion.div>

          <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-brand-orange rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
