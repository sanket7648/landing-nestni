import { BedDouble, Building2, FileCheck2, ShieldCheck, WalletCards } from 'lucide-react'

const stats = [
  { label: 'Pending rent', value: 'INR 42K', note: 'Follow up today', icon: WalletCards, color: 'bg-orange-50 text-orange-700' },
  { label: 'Vacant rooms', value: '8', note: 'Ready to fill', icon: BedDouble, color: 'bg-emerald-50 text-emerald-700' },
  { label: 'Occupied rooms', value: '42', note: 'Active tenants', icon: Building2, color: 'bg-blue-50 text-blue-700' },
  { label: 'Documents saved', value: '126', note: 'Tenant records', icon: FileCheck2, color: 'bg-green-50 text-green-700' },
]

const tasks = [
  { icon: ShieldCheck, title: 'Aadhaar check - Room 204', status: 'Verify', tone: 'text-blue-700 bg-blue-50' },
  { icon: WalletCards, title: 'Rent due - Tenant A', status: 'Pending', tone: 'text-orange-700 bg-orange-50' },
  { icon: BedDouble, title: 'Room 3B ready to list', status: 'Vacant', tone: 'text-emerald-700 bg-emerald-50' },
  { icon: FileCheck2, title: 'Old tenant record updated', status: 'Saved', tone: 'text-green-700 bg-green-50' },
]

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[590px]">
      <div className="absolute -inset-5 rounded-[36px] bg-[#e6f7f4]/60 blur-3xl" />
      <div className="relative overflow-hidden rounded-[26px] border border-[#e5e7eb] bg-white p-3.5 shadow-[0_30px_90px_-42px_rgba(0,169,143,0.42)] sm:p-4">
        <div className="flex min-w-0 items-start justify-between gap-2 border-b border-[#e5e7eb] pb-3 sm:items-center">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f7f4] text-[#111111] sm:size-10">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[#4b5563]">Property account</p>
              <p className="mt-0.5 break-words text-xs font-semibold leading-4 text-[#111111] sm:text-sm sm:leading-5">Tenant & room overview</p>
            </div>
          </div>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-[#e6f7f4] px-2 py-1 text-xs font-medium leading-4 text-[#00a98f] sm:px-3 sm:py-1.5 sm:text-sm">Check today</span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2.5 min-[380px]:grid-cols-2">
          {stats.map(({ label, value, note, icon: Icon, color }) => (
            <article key={label} className="flex min-w-0 items-center gap-2.5 rounded-2xl border border-[#e5e7eb] p-2.5 sm:gap-3 sm:p-3">
              <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg sm:size-9 ${color}`}>
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="break-words text-xs leading-4 text-[#4b5563]">{label}</p>
                <p className="text-lg font-bold leading-6 tracking-[-0.05em] text-[#111111]">{value}</p>
                <p className="break-words text-xs leading-4 text-[#6b7280]">{note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-[#e5e7eb] p-3">
          <div className="mb-2 flex min-w-0 items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-[#111111]">Today&apos;s tasks</h2>
            <span className="shrink-0 whitespace-nowrap text-xs text-[#4b5563] sm:text-sm">Check today</span>
          </div>
          <div className="divide-y divide-[#e5e7eb]">
            {tasks.map(({ icon: Icon, title, status, tone }) => (
              <div key={title} className="flex min-w-0 items-center gap-2 py-2 first:pt-1 last:pb-1 sm:gap-2.5">
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${tone}`}>
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                <p className="min-w-0 flex-1 break-words text-xs font-medium leading-4 text-[#111111]">{title}</p>
                <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium leading-4 sm:text-xs ${tone}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
