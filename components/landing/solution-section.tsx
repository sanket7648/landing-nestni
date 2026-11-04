import { ArrowRight, BedDouble, Building2, CheckCircle2, Sparkles } from 'lucide-react'
import { solutionOverview, solutionTasks } from './landing-data'

export function SolutionSection({ onDemoRequest }: { onDemoRequest: () => void }) {
  return (
    <section id="solution" className="relative overflow-hidden bg-[#e6f7f4] py-16 sm:py-20 lg:py-24" aria-labelledby="solution-heading">
      <div className="pointer-events-none absolute -right-36 top-0 size-[460px] rounded-full bg-white/80 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white/75 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#00a98f]">
            <Sparkles className="size-3.5 text-[#00a98f]" aria-hidden="true" /> An easy way to manage
          </p>
          <h2 id="solution-heading" className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[0.01em] text-[#111111] sm:text-4xl lg:text-[46px]">
            All in one place, everything together
          </h2>
          <p className="mt-4 max-w-lg text-justify text-sm leading-6 text-[#4b5563] sm:leading-7">
            Nestni brings tenant details, documents, identity verification, rent tracking, and room availability together - so the next step is always clear.
          </p>
          <button type="button" onClick={onDemoRequest} className="mt-7 inline-flex items-center rounded-full bg-[#00a98f] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#008f79]">
            See Nestni in action <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </button>
          <p className="mt-4 flex items-center gap-2 text-sm text-[#4b5563]"><CheckCircle2 className="size-4 text-[#00a98f]" aria-hidden="true" /> Less chasing. More clarity.</p>
        </div>

        <div className="relative mx-auto w-full max-w-[590px]">
          <div className="solution-glow absolute -inset-5 rounded-[32px] bg-[#f3f4f6]/35 blur-2xl" />
          <div className="solution-float relative overflow-hidden rounded-[26px] border border-[#e5e7eb] bg-white p-5 shadow-[0_30px_80px_-40px_rgba(0,169,143,0.4)] sm:p-7">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[#e6f7f4] text-[#111111]"><Building2 className="size-[18px]" aria-hidden="true" /></span>
                <div><p className="text-xs text-[#6b7280]">Your property</p><p className="mt-0.5 text-base font-semibold text-[#111111]">Everything in sync</p></div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f7f4] px-2.5 py-1.5 text-xs font-semibold text-[#00a98f]"><span className="solution-dot size-1.5 rounded-full bg-[#00a98f]" /> Up to date</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {solutionOverview.map(({ icon: Icon, title, status }) => (
                <div key={title} className="rounded-xl bg-[#e6f7f4] p-3">
                  <Icon className="size-4 text-[#00a98f]" aria-hidden="true" />
                  <p className="mt-2 text-justify text-xs text-[#4b5563]">{title}</p>
                  <p className="mt-0.5 text-justify text-sm font-semibold text-[#111111]">{status}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-[#e5e7eb] p-3.5 sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-[#111111]">A clear list of what needs attention</p>
                <span className="text-xs text-[#6b7280]">Today</span>
              </div>
              {solutionTasks.map(({ icon: Icon, title, text, status, tone }, index) => (
                <div key={title} className={`solution-row flex items-center gap-2.5 border-t border-[#e5e7eb] py-2.5 ${index === 0 ? 'border-t-0' : ''}`} style={{ animationDelay: `${index * 180}ms` }}>
                  <span className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${tone}`}><Icon className="size-3.5" aria-hidden="true" /></span>
                  <div className="min-w-0 flex-1"><p className="text-justify text-xs font-semibold text-[#111111]">{title}</p><p className="text-justify text-xs text-[#6b7280]">{text}</p></div>
                  <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${tone}`}><CheckCircle2 className="size-3" aria-hidden="true" />{status}</span>
                </div>
              ))}
            </div>
            <div className="solution-sheen pointer-events-none absolute inset-0" />
          </div>
          <div className="solution-float-slow absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-3 py-2.5 text-xs font-semibold text-[#00a98f] shadow-lg sm:-left-7">
            <CheckCircle2 className="size-4" aria-hidden="true" /> Old records kept close
          </div>
        </div>

      </div>
    </section>
  )
}
