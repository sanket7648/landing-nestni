import { useEffect, useState } from 'react'
import { DemoRequestModal } from '@/components/landing/demo-request-modal'
import { LandingFooter } from '@/components/landing/landing-footer'
import { LandingHeader } from '@/components/landing/landing-header'

export function AboutUsPage() {
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Us | Nestni'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#e6f7f4] text-[#111111]">
      <LandingHeader onDemoRequest={() => setDemoOpen(true)} />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <section className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14" aria-labelledby="about-heading">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00a98f]">What We Do</p>
          <h1 id="about-heading" className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.055em] text-[#173f35] sm:text-5xl">
            We make rental property management easier.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
            Nestni helps property owners, PG and hostel owners, and property managers keep property details, rooms, tenant records, documents, and rent status organized in one place.
          </p>
        </section>
      </div>
      <LandingFooter onDemoRequest={() => setDemoOpen(true)} />
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  )
}
