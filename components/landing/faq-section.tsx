import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqs } from './faq-data'
import { Modal } from './modal'

type FaqSectionProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FaqSection({ open, onOpenChange }: FaqSectionProps) {
  const visibleFaqs = faqs.slice(0, 6)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const renderFaqs = (items: ReadonlyArray<(typeof faqs)[number]>, idPrefix: string) => (
    <>
      {items.map(({ question, answer }, index) => {
        const isOpen = openQuestion === question
        const answerId = `${idPrefix}-answer-${index}`

        return (
          <div key={question} className="py-4">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenQuestion(isOpen ? null : question)}
                className="flex w-full cursor-pointer items-center justify-between gap-5 py-1 text-left text-base font-semibold text-[#111111] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00a98f]"
              >
                {question}
                <ChevronDown
                  className={`size-4 shrink-0 text-[#4b5563] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={answerId} hidden={!isOpen}>
              <p className="max-w-2xl pt-3 text-sm leading-6 text-[#4b5563]">{answer}</p>
            </div>
          </div>
        )
      })}
    </>
  )

  return (
    <>
      <section id="faq" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24" aria-labelledby="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00a98f]">Frequently Asked Questions</p>
            <h2 id="faq-heading" className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[0.01em] text-[#111111] sm:text-4xl">
              FAQs
            </h2>
            <p className="mt-4 w-full text-justify text-sm leading-6 text-[#4b5563]">
              Short answers for property owners, PG owners, hostel owners, managers, and tenants evaluating Nestni.
            </p>
          </div>
          <div className="divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
            {renderFaqs(visibleFaqs, 'featured-faq')}
            <button
              type="button"
              onClick={() => onOpenChange(true)}
              className="inline-flex items-center gap-2 py-5 text-sm font-semibold text-[#111111] transition hover:text-[#007d6c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a98f]"
            >
              More FAQs <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => onOpenChange(false)}
        titleId="all-faq-heading"
        title="More FAQs"
        description="Answers to common questions about managing rental properties with Nestni."
        contentClassName="max-w-[760px]"
      >
        <div className="divide-y divide-[#e5e7eb] px-5 pb-6 sm:px-8">
          {renderFaqs(faqs, 'all-faq')}
        </div>
      </Modal>
    </>
  )
}
