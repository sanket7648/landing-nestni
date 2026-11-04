import { features } from './landing-data'

export function FeaturesSection() {
  return (
    <section id="why-nestni" className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00a98f]">Why Nestni</p>
          <h2 id="why-heading" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#111111] sm:text-4xl">
            Manage Your Tenants, Rooms, Rent & Documents Easily.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#4b5563] sm:text-base sm:leading-7">
            Nestni helps property owners manage tenant documents, verify tenant identity, track vacant rooms, monitor pending rent, and keep old tenant records - all in one simple app.
          </p>
        </div>
        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="group rounded-2xl border border-[#e5e7eb] bg-[#e6f7f4] p-5 transition hover:-translate-y-1 hover:border-[#e5e7eb] hover:shadow-[0_18px_40px_-30px_rgba(0,169,143,0.45)] sm:p-6">
              <span className={`flex size-11 items-center justify-center rounded-xl ${index % 2 === 0 ? 'bg-[#e6f7f4] text-[#111111]' : 'bg-[#e6f7f4] text-[#00a98f]'}`}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-[-0.025em] text-[#111111]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
