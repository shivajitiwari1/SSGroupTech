'use client'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const AnimatedCursor = dynamic(() => import('@/components/AnimatedCursor'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LoadingScreen />
      <AnimatedCursor />
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
