import { useEffect } from 'react'
import { ArrowDown, ClipboardList, ShieldCheck, Sparkles } from 'lucide-react'
import { LandingHeader } from '@/components/landing/landing-header'
import { SurveyForm } from '@/components/landing/survey-form'

export function SurveyPage() {
  useEffect(() => {
    document.title = 'Nestni Market Survey'
  }, [])

  return (
    <main id="top" className="min-h-screen overflow-clip bg-[#f3f8f6] text-[#111111]">
      <LandingHeader />
      <section className="relative mx-auto max-w-6xl px-4 pb-14 pt-7 sm:px-8 sm:pb-20 sm:pt-10 lg:px-10" aria-labelledby="survey-heading">
        <div className="pointer-events-none absolute -right-36 top-0 size-[430px] rounded-full bg-[#d6f2ec]/70 blur-3xl" />
        <header className="relative mb-6 grid gap-6 py-3 sm:gap-8 sm:py-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.17em] text-[#007d6c] sm:text-sm">
              <Sparkles className="size-4" aria-hidden="true" />
              Nestni market survey
            </p>
            <h1 id="survey-heading" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#183147] sm:text-4xl lg:text-[42px]">
              Help us understand your property management needs.
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#596b66] sm:text-lg">
              Your feedback will help us build a better Nestni experience for owners and tenants.
            </p>
          </div>
          <a
            href="#survey-form"
            className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#008f79] px-5 text-sm font-semibold text-white shadow-[0_8px_20px_-12px_rgba(0,143,121,0.8)] transition hover:-translate-y-0.5 hover:bg-[#007d6c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a98f]"
          >
            Start survey <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </header>
        <div id="survey-form" className="relative scroll-mt-24 rounded-[28px] border border-[#dfeae6] bg-white p-4 shadow-[0_20px_60px_-40px_rgba(23,63,53,0.3)] sm:p-7 lg:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#e8efec] pb-5 sm:mb-8 sm:pb-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e6f7f4] text-[#007d6c]">
                <ClipboardList className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-[#183147] sm:text-xl">Tell us about your rental operations</h2>
                <p className="mt-1 text-sm text-[#6b7280]">Fields marked with an asterisk are required.</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eff9f6] px-3 py-2 text-xs font-medium text-[#456158]">
              <ShieldCheck className="size-4 text-[#008b75]" aria-hidden="true" />
              Private market research
            </span>
          </div>
          <SurveyForm />
        </div>
      </section>
    </main>
  )
}
