import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const fieldClassName = 'h-12 w-full rounded-xl border border-[#dce6e2] bg-white px-3.5 text-base font-normal text-[#111111] shadow-sm outline-none transition placeholder:text-[#9ca3af] hover:border-[#b6cbc3] focus:border-[#00a98f] focus:ring-4 focus:ring-[#00a98f]/15'
const textAreaClassName = 'w-full rounded-xl border border-[#dce6e2] bg-white px-3.5 py-3 text-base font-normal text-[#111111] shadow-sm outline-none transition placeholder:text-[#9ca3af] hover:border-[#b6cbc3] focus:border-[#00a98f] focus:ring-4 focus:ring-[#00a98f]/15'
const labelClassName = 'grid gap-2 text-sm font-semibold leading-6 text-[#243b35] sm:text-base'
const sectionClassName = 'space-y-5 rounded-2xl border border-[#e4ece8] bg-[#fbfdfc] p-4 sm:p-6'

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className={labelClassName}>
      <span>{label}{required && <span className="text-[#d14343]"> *</span>}</span>
      {children}
    </label>
  )
}

function SectionHeading({ number, children, id }: { number: string; children: ReactNode; id: string }) {
  return (
    <h3 id={id} className="flex items-center gap-3 text-base font-semibold tracking-tight text-[#183147] sm:text-lg">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#e6f7f4] text-xs font-bold tracking-wide text-[#007d6c]">
        {number}
      </span>
      {children}
    </h3>
  )
}

function SelectField({ label, required, options }: { label: string; required?: boolean; options: string[] }) {
  return (
    <Field label={label} required={required}>
      <select className={fieldClassName} name={label} defaultValue="" required={required}>
        <option value="" disabled>Choose an option</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </Field>
  )
}

function RadioChoices({
  legend,
  options,
  name,
  required = false,
}: {
  legend: string
  options: string[]
  name: string
  required?: boolean
}) {
  return (
    <fieldset className="grid gap-3">
      <legend className="text-base font-semibold leading-6 text-[#111111]">
        {legend}{required && <span className="text-[#d14343]"> *</span>}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option, index) => (
          <label key={option} className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl border border-[#e4ece8] bg-white px-3 py-2 text-base leading-6 font-normal text-[#374151] shadow-sm transition hover:border-[#00a98f]/50 hover:bg-[#f8fcfa] has-[:checked]:border-[#00a98f] has-[:checked]:bg-[#e6f7f4]/70 has-[:checked]:text-[#183147]">
            <input
              type="radio"
              name={name}
              value={option}
              required={required && index === 0}
              className="size-4 accent-[#00a98f]"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function RatingScale({
  name,
  legend,
  lowLabel,
  highLabel,
  required = true,
}: {
  name: string
  legend: string
  lowLabel?: string
  highLabel?: string
  required?: boolean
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-base leading-6 text-[#374151]">{legend}</legend>
      <div className="flex flex-wrap items-center gap-2">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((rating) => (
          <label key={rating} className="flex size-11 cursor-pointer items-center justify-center rounded-xl border border-[#e4ece8] bg-white text-base font-semibold text-[#374151] shadow-sm transition hover:-translate-y-0.5 hover:border-[#00a98f] has-[:checked]:border-[#00a98f] has-[:checked]:bg-[#00a98f] has-[:checked]:text-white has-[:checked]:shadow-[0_6px_16px_-8px_rgba(0,169,143,0.8)]">
            <input
              className="sr-only"
              type="radio"
              name={name}
              value={rating}
              required={required && rating === 1}
              aria-label={`${rating} out of 5`}
            />
            {rating}
          </label>
        ))}
      </div>
      {(lowLabel || highLabel) && (
        <div className="flex justify-between gap-4 text-xs text-[#6b7280]">
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      )}
    </fieldset>
  )
}

const managementMethods = [
  'WhatsApp',
  'Diary / notebook',
  'Excel / Google Sheets',
  'Accountant',
  'Property management software/app',
  'I manage everything from memory',
]

const difficultyActivities = [
  'Finding tenants',
  'Tenant verification, documentation and rental agreement',
  'Rent due-date reminders, on-time collection and tracking unpaid/late rent',
  'Electricity/water/other bills',
  'Keeping tenant documents',
  'Security deposit tracking and rent increase/renewal reminders',
]

export function SurveyForm() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([])
  const [hasOtherActivity, setHasOtherActivity] = useState(false)
  const [methodError, setMethodError] = useState('')
  const [submissionMessage, setSubmissionMessage] = useState('')

  const toggleMethod = (method: string) => {
    setSelectedMethods((current) => current.includes(method)
      ? current.filter((value) => value !== method)
      : [...current, method])
    setMethodError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedMethods.length === 0) {
      setMethodError('Choose at least one way you currently manage your rentals.')
      return
    }

    setSubmissionMessage('Not sent: survey responses are not connected to a submission service yet.')
  }

  return (
      <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
        <div className="flex gap-3 rounded-2xl border border-[#cce9e1] bg-[#eff9f6] p-4 text-sm leading-6 text-[#456158] sm:p-5 sm:text-base">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#008b75]" aria-hidden="true" />
          <p>Your feedback is kept private and used only for Nestni market research and any follow-up you choose.</p>
        </div>

        <section className={sectionClassName} aria-labelledby="survey-contact">
          <SectionHeading id="survey-contact" number="01">About you and your rentals</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" required>
              <input className={fieldClassName} name="name" autoComplete="name" required />
            </Field>
            <Field label="Mobile No" required>
              <input className={fieldClassName} name="mobile" type="tel" autoComplete="tel" inputMode="tel" required />
            </Field>
            <Field label="Email (optional)">
              <input className={fieldClassName} name="email" type="email" autoComplete="email" />
            </Field>
            <SelectField
              label="How many rental properties/units do you currently manage?"
              required
              options={['1 to 10 Room Property', '10 to 50 Room Property', '50+ Room Property', "I don't have any rental property"]}
            />
            <Field label="On average, how many rooms or rental units are vacant each month?" required>
              <input className={fieldClassName} name="averageVacancies" type="number" min="0" step="1" required />
            </Field>
          </div>
        </section>

        <section className={sectionClassName} aria-labelledby="survey-operations">
          <SectionHeading id="survey-operations" number="02">Your current operations</SectionHeading>
          <fieldset className="grid gap-3" aria-required="true" aria-describedby={methodError ? 'management-method-error' : undefined}>
            <legend className="text-base font-semibold leading-6 text-[#111111]">How do you currently manage your tenants and rental properties? <span className="text-[#d14343]">*</span></legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {managementMethods.map((method) => (
                <label key={method} className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl border border-[#e5e7eb] px-3 py-2 text-base leading-6 text-[#374151] transition hover:border-[#00a98f]/50 has-[:checked]:border-[#00a98f] has-[:checked]:bg-[#e6f7f4]/60">
                  <input
                    type="checkbox"
                    name="managementMethods"
                    value={method}
                    checked={selectedMethods.includes(method)}
                    onChange={() => toggleMethod(method)}
                    className="size-4 accent-[#00a98f]"
                  />
                  {method}
                </label>
              ))}
            </div>
            {methodError && <p id="management-method-error" className="text-sm text-[#b42318]" role="alert">{methodError}</p>}
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="mb-4 text-base leading-6 font-semibold text-[#111111]">
              How difficult is each of the following property-management activities for you? <span className="text-[#d14343]">*</span>
            </legend>
            <p className="mb-4 text-sm text-[#6b7280]">Rate every activity from 1 (not difficult) to 5 (extremely difficult).</p>
            {difficultyActivities.map((activity, index) => (
              <RatingScale key={activity} name={`difficulty-${index}`} legend={activity} />
            ))}
            <label className="flex cursor-pointer items-center gap-2 text-base font-medium text-[#111111]">
              <input
                type="checkbox"
                name="hasAnotherActivity"
                checked={hasOtherActivity}
                onChange={(event) => setHasOtherActivity(event.target.checked)}
                className="size-4 accent-[#00a98f]"
              />
              I have another activity to rate
            </label>
            {hasOtherActivity && (
              <div className="grid gap-4 rounded-xl border border-[#e5e7eb] p-4 sm:grid-cols-2">
                <Field label="Other activity" required>
                  <input className={fieldClassName} name="otherActivity" required />
                </Field>
                <RatingScale name="difficulty-other" legend="How difficult is it?" />
              </div>
            )}
          </fieldset>

          <Field label="Which one of these challenges would you most like Nestni to solve first?">
            <textarea className={textAreaClassName} name="priorityChallenge" rows={3} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField
              label="On average, how much time do you spend onboarding a new tenant, including collecting documents and completing KYC verification etc.?"
              required
              options={['I do not currently track this', 'Less than 15 minutes', '15 to 30 minutes', '30 to 60 minutes', '1 to 2 hours', 'More than 2 hours']}
            />
            <SelectField
              label="How long do you keep old tenant records?"
              required
              options={['I do not keep past tenant records', 'Less than 6 months', '6 to 12 months', '1 to 3 years', '3 to 5 years', 'More than 5 years', 'I keep them indefinitely']}
            />
          </div>
          <RatingScale
            name="documentConfidence"
            legend="How quickly can you find tenant documents during an emergency or police verification?"
            lowLabel="1 — Not at all confident"
            highLabel="5 — Extremely confident"
          />
        </section>

        <section className={sectionClassName} aria-labelledby="survey-services">
          <SectionHeading id="survey-services" number="03">Services and pricing</SectionHeading>
          <RadioChoices
            name="aadhaarVerificationPrice"
            legend="How much would you charge a tenant for Aadhaar verification?"
            options={['₹25', '₹50', '₹100', 'Above ₹100', 'Below ₹25', 'Cannot say']}
          />
          <RadioChoices
            name="paidManagementHelp"
            legend="Have you ever paid a person, service, or software provider to help manage your rental property?"
            required
            options={["I didn't know such apps existed", 'Yes, regularly', 'Yes, occasionally', 'Tried once', 'No, but I would consider it', 'No, I prefer managing everything myself']}
          />
          <Field label="Which app, if any, do you currently use to manage your tenants?">
            <input className={fieldClassName} name="currentApp" />
          </Field>
          <RadioChoices
            name="monthlyFee"
            legend="What should be the monthly fee for an app that manages all your rental properties?"
            required
            options={['I would only use a free service', '₹49–₹200/month', '₹200–₹499/month', '₹500–₹999/month', '₹999–₹2999/month', '₹2999–₹4999/month', '₹5,000+/month', 'Depends on number of properties', 'I would prefer a one-time annual fee']}
          />
          <RadioChoices
            name="followUpInterview"
            legend="Would you be willing to share your feedback in a short interview after using our app for 1–2 months?"
            required
            options={['Yes', 'Maybe', 'No']}
          />
        </section>

        <section className={sectionClassName} aria-labelledby="survey-about">
          <SectionHeading id="survey-about" number="04">A little more about this response</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Property location information (city / area / state)" required>
              <input className={fieldClassName} name="propertyLocation" autoComplete="address-level2" required />
            </Field>
            <Field label="Who is submitting this survey?" required>
              <input className={fieldClassName} name="submittedBy" required />
            </Field>
            <div className="sm:col-span-2">
              <SelectField
                label="Who is providing this information?"
                required
                options={['Property Owner / Landlord', 'Property Manager', 'Property Caretaker', 'Other']}
              />
            </div>
          </div>
        </section>

        <p className="flex gap-3 rounded-2xl border border-[#f0dfc0] bg-[#fff9ed] p-4 text-sm leading-6 text-[#765b2d]">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#b47a1d]" aria-hidden="true" />
          <span>Please do not include passwords, bank details, or identity-document numbers in your answers.</span>
        </p>
        <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#008f79] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_24px_-14px_rgba(0,143,121,0.9)] transition hover:-translate-y-0.5 hover:bg-[#007d6c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a98f]">
          Submit survey <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
        {submissionMessage && (
          <p className="text-center text-base font-medium text-[#9a3412]" role="status" aria-live="polite">
            {submissionMessage}
          </p>
        )}
      </form>
  )
}
