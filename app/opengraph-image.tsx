import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SSGroupTech — AI-Powered Software Development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #080C14 0%, #0D1422 50%, #111827 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow accent */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(249,115,22,0.15)',
            filter: 'blur(80px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(249,115,22,0.08)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
          <span style={{ color: '#F97316', fontSize: 52, fontWeight: 800, letterSpacing: -1 }}>SS</span>
          <span style={{ color: '#F8FAFC', fontSize: 52, fontWeight: 800, letterSpacing: -1 }}>GroupTech</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#F8FAFC',
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          AI-Powered Software Development
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            color: '#94A3B8',
            fontSize: 20,
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          Next.js · ERP · AI Automation · SaaS · CRM · API Integration
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            color: '#F97316',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          ssgrouptech.com
        </div>
      </div>
    ),
    { ...size }
  )
}
