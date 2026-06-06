'use client'
import { useState, useEffect } from 'react'

type Locale = 'IN' | 'GLOBAL'

export function useDomainLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('IN')

  useEffect(() => {
    const hostname = window.location.hostname
    // in.ssgrouptech.com → Indian pricing (₹)
    // ssgrouptech.com (without "in." subdomain) → Global pricing ($)
    if (hostname === 'ssgrouptech.com' || hostname === 'www.ssgrouptech.com') {
      setLocale('GLOBAL')
    } else {
      setLocale('IN')
    }
  }, [])

  return locale
}
