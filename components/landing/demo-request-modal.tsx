import { ChevronDown, X } from 'lucide-react'

type DemoRequestModalProps = {
  open: boolean
  onClose: () => void
}

export function DemoRequestModal({ open, onClose }: DemoRequestModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
      <button type="button" onClick={onClose} aria-label="Close demo request" className="absolute inset-0 cursor-default bg-[#111111]/65 backdrop-blur-sm" />
      <div role="dialog" aria-modal="true" aria-labelledby="demo-heading" className="relative z-10 max-h-[calc(100dvh-24px)] w-full max-w-[620px] overflow-y-auto rounded-[24px] bg-white shadow-[0_30px_100px_-35px_rgba(0,0,0,0.5)] sm:max-h-[calc(100dvh-48px)]">
        <div className="flex items-start justify-between px-5 pb-0 pt-5 sm:px-8 sm:pt-7">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00a98f]">A quick walkthrough</p>
            <h2 id="demo-heading" className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[#111111]">Book a Demo</h2>
            <p className="mt-1 text-sm text-[#4b5563]">Our team will contact you soon.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close demo request" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e6f7f4] text-[#4b5563] transition hover:bg-[#e6f7f4]">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <form className="p-5 pt-5 sm:p-8 sm:pt-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-semibold text-[#111111]">
              Your name
              <input required autoFocus name="name" autoComplete="name" type="text" placeholder="Your name" className="h-11 min-w-0 rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] px-3.5 text-sm font-normal text-[#111111] outline-none transition placeholder:text-[#6b7280] focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111111]">
              Email
              <input required name="email" autoComplete="email" type="email" placeholder="Email" className="h-11 min-w-0 rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] px-3.5 text-sm font-normal text-[#111111] outline-none transition placeholder:text-[#6b7280] focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]" />
            </label>
            <div className="grid gap-1.5 text-sm font-semibold text-[#111111] sm:col-span-2">
              <label htmlFor="phone">Phone number</label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <label className="relative sm:w-[142px]">
                  <span className="sr-only">Country code</span>
                  <select name="countryCode" defaultValue="+91" className="h-11 w-full appearance-none rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] pl-3.5 pr-9 text-sm font-normal text-[#111111] outline-none focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]">
                    <option value="+91">IN +91</option><option value="+1">US +1</option><option value="+44">GB +44</option><option value="+971">AE +971</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#4b5563]" aria-hidden="true" />
                </label>
                <div className="flex min-w-0 flex-1 gap-2">
                  <input required id="phone" name="phone" autoComplete="tel-national" type="tel" placeholder="Phone number" className="h-11 min-w-0 flex-1 rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] px-3.5 text-sm font-normal text-[#111111] outline-none transition placeholder:text-[#6b7280] focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]" />
                  <button type="button" className="shrink-0 rounded-xl border border-[#e5e7eb] px-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#e6f7f4] sm:px-4">Send OTP</button>
                </div>
              </div>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111111]">
              What best describes you?
              <span className="relative">
                <select required name="role" defaultValue="" className="h-11 w-full appearance-none rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] px-3.5 pr-9 text-sm font-normal text-[#111111] outline-none focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]">
                  <option value="" disabled>Pick one</option><option>Property owner</option><option>PG owner</option><option>Hostel owner</option><option>Property manager</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#4b5563]" aria-hidden="true" />
              </span>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111111]">
              How many units?
              <span className="relative">
                <select required name="units" defaultValue="" className="h-11 w-full appearance-none rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] px-3.5 pr-9 text-sm font-normal text-[#111111] outline-none focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]">
                  <option value="" disabled>Pick one</option><option>Up to 10 units</option><option>More than 10 units</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#4b5563]" aria-hidden="true" />
              </span>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#111111] sm:col-span-2">
              Anything you would like to see?
              <textarea name="details" rows={3} className="resize-y rounded-xl border border-[#e5e7eb] bg-[#e6f7f4] px-3.5 py-3 text-sm font-normal text-[#111111] outline-none transition placeholder:text-[#6b7280] focus:border-[#e5e7eb] focus:ring-4 focus:ring-[#00a98f]" />
            </label>
            <button type="submit" className="flex items-center justify-center rounded-full bg-[#00a98f] px-5 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#008f79] sm:col-span-2">
              Send my request
            </button>
            <p className="text-center text-sm text-[#4b5563] sm:col-span-2">No spam. Just a quick walkthrough.</p>
          </div>
        </form>
      </div>
    </div>
  )
}
