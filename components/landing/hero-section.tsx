import { ArrowRight, Check } from 'lucide-react'
import { DashboardPreview } from './dashboard-preview'

export function HeroSection({ onDemoRequest }: { onDemoRequest: () => void }) {
  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute -right-36 -top-24 size-[520px] rounded-full bg-[#e6f7f4] blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-72 size-[420px] rounded-full bg-[#e6f7f4]/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-10 lg:py-8 xl:gap-12">
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 inline-flex items-center whitespace-nowrap rounded-full border border-[#00a98f]/30 bg-white/80 px-2 py-2 text-[11px] font-semibold text-[#00a98f] shadow-sm sm:gap-2 sm:px-4 sm:text-sm">
            For Property owners, PG owners, Hostel owners, and Managers
          </p>
          <h1 id="hero-heading" className="max-w-[620px] text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[0.01em] text-[#111111]">
            Rental Business, <span className="text-[#00a98f]">Simplified.</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-[#4b5563] sm:text-lg sm:leading-8">
            Digitally manage every rental task from one smart platform.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={onDemoRequest} className="rounded-full bg-[#00a98f] px-6 py-3.5 text-center text-sm font-semibold text-[#111111] shadow-[0_10px_25px_-12px_rgba(0,169,143,0.7)] transition hover:-translate-y-0.5 hover:bg-[#008f79]">
              Book a Free Demo <ArrowRight className="ml-1.5 inline size-4" aria-hidden="true" />
            </button>
            <a href="https://nestni.com/login" className="rounded-full border border-[#e5e7eb] bg-white/80 px-6 py-3.5 text-center text-sm font-semibold text-[#111111] transition hover:bg-white">
              Sign in
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Tenant Records', 'Aadhaar verification', 'Room availability', 'Rent tracking'].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e7eb] bg-white/75 px-2.5 py-1.5 text-xs font-medium text-[#4b5563]">
                <Check aria-hidden="true" className="size-3.5 shrink-0 text-[#00a98f]" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <DashboardPreview />
      </div>
    </section>
  )
}
