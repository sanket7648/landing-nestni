import { ArrowDownRight } from 'lucide-react'
import { steps } from './landing-data'

export function StepsSection() {
  return (
    <section id="flow" className="relative overflow-hidden bg-[#e6f7f4] py-16 sm:py-20 lg:py-24" aria-labelledby="flow-heading">
      <div className="pointer-events-none absolute -right-40 top-10 size-96 rounded-full bg-white/80 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00a98f]">How it works</p>
            <h2 id="flow-heading" className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#111111] sm:text-4xl">
              Manage Property in 3 Simple Steps
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4b5563] sm:text-base">
              Start with room details, add tenants, verify documents, and track rent - all from one easy app.
            </p>
          </div>
          <ArrowDownRight className="hidden size-10 text-[#00a98f] md:block" aria-hidden="true" />
        </div>
        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3">
          {steps.map(({ number, title, text, icon: Icon }) => (
            <article key={number} className="relative rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium tracking-[0.12em] text-[#00a98f]">{number}</span>
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#e6f7f4] text-[#111111]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-7 text-justify text-lg font-semibold tracking-[-0.035em] text-[#111111]">{title}</h3>
              <p className="mt-2 text-justify text-sm leading-6 text-[#4b5563]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
