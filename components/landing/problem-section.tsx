import { BedDouble, CircleAlert, Clock3, FileText, FileWarning, WalletCards } from 'lucide-react'

export function ProblemSection() {
  const painPoints = [
    ['Documents', 'Hard to find when you need them'],
    ['Rent & rooms', 'Status spread across different places'],
    ['Follow-ups', 'Easy to lose track of what needs attention'],
  ]

  return (
    <section id="problem" className="relative overflow-hidden bg-[#173f35] py-16 text-white sm:py-20 lg:py-24" aria-labelledby="problem-heading">
      <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-[#d78e4c]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#f0bd7d]">
              <CircleAlert className="size-3.5" aria-hidden="true" /> The everyday rental scramble
            </p>
            <h2 id="problem-heading" className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl lg:text-[46px]">
              Rental details shouldn&apos;t be scattered everywhere.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Tenant documents in one place. Rent reminders in another. Room availability in your notes. Keeping it all straight takes time - and important follow-ups can slip through.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Scattered documents', 'Unclear rent status', 'Missed follow-ups'].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm text-white/75">{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto min-h-[330px] w-full max-w-[530px] sm:min-h-[360px]" aria-label="Illustration of rental tasks scattered across separate records">
            <div className="absolute inset-5 rounded-[32px] border border-dashed border-white/15" />
            <div className="absolute left-[12%] top-[8%] size-40 rounded-full bg-[#e6a05c]/10 blur-3xl" />
            <div className="problem-float absolute left-[4%] top-[10%] w-[57%] rotate-[-7deg] rounded-2xl border border-[#e7e1d3] bg-[#fffdf7] p-4 text-[#111111] shadow-[0_25px_60px_-32px_rgba(0,0,0,0.65)] sm:p-5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold"><FileWarning className="size-4 text-[#bd704c]" aria-hidden="true" /> Tenant files</span>
                <span className="rounded-full bg-[#fff0e9] px-2 py-1 text-xs font-semibold text-[#ae654b]">Needs sorting</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 rounded-lg bg-[#f5f2e9] px-2.5 py-2 text-xs text-[#4b5563]"><FileText className="size-3.5 text-[#b07a42]" aria-hidden="true" /> Room 204 · ID copy</div>
                <div className="flex items-center gap-2 rounded-lg bg-[#f5f2e9] px-2.5 py-2 text-xs text-[#4b5563]"><FileText className="size-3.5 text-[#b07a42]" aria-hidden="true" /> Tenant agreement.pdf</div>
              </div>
            </div>
            <div className="problem-float-slow absolute right-[4%] top-[7%] flex w-[43%] rotate-[7deg] items-center gap-3 rounded-2xl border border-[#f1d8b8] bg-[#fff5e9] p-4 text-[#111111] shadow-[0_25px_60px_-32px_rgba(0,0,0,0.65)] sm:p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#f9e5cb] text-[#a76331]"><WalletCards className="size-[18px]" aria-hidden="true" /></span>
              <div><p className="text-xs text-[#8b8172]">Rent follow-up</p><p className="mt-1 text-base font-bold">Still pending</p></div>
              <CircleAlert className="ml-auto size-4 shrink-0 text-[#bd704c]" aria-hidden="true" />
            </div>
            <div className="problem-float-slower absolute bottom-[8%] left-[12%] flex w-[51%] -rotate-[3deg] items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-4 text-[#111111] shadow-[0_25px_60px_-32px_rgba(0,0,0,0.65)] sm:p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#eff0f8] text-[#67628c]"><BedDouble className="size-[18px]" aria-hidden="true" /></span>
              <div><p className="text-xs text-[#6b7280]">Room status</p><p className="mt-1 text-base font-bold">Check your notes</p></div>
              <Clock3 className="ml-auto size-4 shrink-0 text-[#6b7280]" aria-hidden="true" />
            </div>
            <div className="problem-alert absolute bottom-[15%] right-[4%] flex items-center gap-2 rounded-xl border border-[#efc5ae] bg-[#fff1e9] px-3 py-2 text-xs font-semibold text-[#a85e42] shadow-lg">
              <CircleAlert className="size-3.5" aria-hidden="true" /> Follow-up missed
            </div>
            <div className="absolute bottom-[4%] right-[22%] size-2 rounded-full bg-[#e8a05b] shadow-[0_0_18px_5px_rgba(232,160,91,0.4)]" />
            <div className="absolute right-[17%] top-[45%] size-1.5 rounded-full bg-white/70" />
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-white/15 pt-7 sm:grid-cols-3">
          {painPoints.map(([title, text]) => (
            <div key={title} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-[#f0bd7d]"><CircleAlert className="size-3.5" aria-hidden="true" /></span>
              <div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm text-white/55">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
