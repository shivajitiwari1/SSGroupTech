import Hero from '@/sections/home/Hero'
import ServicesSection from '@/sections/home/Services'
import WhyUs from '@/sections/home/WhyUs'
import TechStack from '@/sections/home/TechStack'
import Process from '@/sections/home/Process'
import PortfolioPreview from '@/sections/home/PortfolioPreview'
import Testimonials from '@/sections/home/Testimonials'
import Pricing from '@/sections/home/Pricing'
import FAQ from '@/sections/home/FAQ'
import ContactCTA from '@/sections/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <TechStack />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </>
  )
}
