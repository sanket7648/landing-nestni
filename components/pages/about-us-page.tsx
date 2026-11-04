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
          <h1 id="about-heading" className="text-4xl font-semibold leading-tight tracking-[0.01em] text-[#173f35] sm:text-5xl">
            About Us
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-[#00a98f] sm:text-2xl">
            Property Management, Simplified.
          </h2>
          <div className="mt-6 space-y-4 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
            <p>
              Nestni is a smart and easy-to-use property management platform designed to simplify the way property owners, landlords, tenants, and property managers manage rental properties.
            </p>
            <p>
              Managing rental properties involves more than just collecting rent. From handling tenant information and maintaining property records to tracking payments, managing maintenance requests, organising documents, and keeping track of multiple properties, everyday property management can become complicated and time-consuming.
            </p>
            <p>
              Nestni brings these essential activities together in one digital platform, helping property owners stay organised, save time, and manage their rental operations more efficiently.
            </p>
            <p>
              Whether you own a single rental property or manage multiple buildings and rental units, Nestni helps you keep everything organised and accessible in one place.
            </p>
          </div>

          <div className="mt-9 space-y-8 border-t border-[#e5e7eb] pt-8">
            <div>
              <h2 className="text-xl font-semibold text-[#173f35] sm:text-2xl">What We Aim to Do</h2>
              <p className="mt-3 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
                Our aim is to simplify property management through technology. We want to replace scattered records, manual follow-ups, and complicated management processes with a smarter, more organised digital experience.
              </p>
              <p className="mt-3 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
                We believe property management should be simple, transparent, and convenient for everyone involved.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f35] sm:text-2xl">Our Vision</h2>
              <p className="mt-3 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
                To become a trusted property management platform that transforms the traditional rental property management experience through technology and innovation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f35] sm:text-2xl">Our Mission</h2>
              <p className="mt-3 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
                To empower property owners, landlords, tenants, and property managers with simple and practical digital tools that make property management more efficient, organised, and hassle-free.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f35] sm:text-2xl">About Gavox Global</h2>
              <p className="mt-3 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
                Nestni is a product of <strong className="font-semibold text-[#173f35]">Gavox Global</strong>, a proprietorship business focused on developing technology-driven solutions to address everyday business and management challenges.
              </p>
              <p className="mt-3 text-justify leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
                With Nestni, Gavox Global aims to bring innovation to the real estate and rental property management sector by making property management smarter, simpler, and more accessible.
              </p>
            </div>
          </div>
        </section>
      </div>
      <LandingFooter onDemoRequest={() => setDemoOpen(true)} />
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  )
}
