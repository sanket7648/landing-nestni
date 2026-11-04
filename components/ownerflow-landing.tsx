import { useEffect, useState } from 'react'
import { FaqSection } from '@/components/landing/faq-section'
import { LandingHeader } from '@/components/landing/landing-header'
import { LandingFooter } from '@/components/landing/landing-footer'
import { DemoRequestModal } from '@/components/landing/demo-request-modal'
import { FeaturesSection } from '@/components/landing/features-section'
import { HeroSection } from '@/components/landing/hero-section'
import { ProblemSection } from '@/components/landing/problem-section'
import { SolutionSection } from '@/components/landing/solution-section'
import { StepsSection } from '@/components/landing/steps-section'

export function NestniLanding() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [allFaqsOpen, setAllFaqsOpen] = useState(false)

  useEffect(() => {
    if (!demoOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDemoOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [demoOpen])

  const openDemo = () => setDemoOpen(true)

  return (
    <main id="top" className="landing-page min-h-screen overflow-hidden bg-[#e6f7f4] text-[#111111]">
      <LandingHeader onDemoRequest={openDemo} />
      <HeroSection onDemoRequest={openDemo} />
      <ProblemSection />
      <SolutionSection onDemoRequest={openDemo} />
      <FeaturesSection />
      <StepsSection />
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <FaqSection open={allFaqsOpen} onOpenChange={setAllFaqsOpen} />
      <LandingFooter onDemoRequest={openDemo} />
    </main>
  )
}
