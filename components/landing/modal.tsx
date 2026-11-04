import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  onClose: () => void
  titleId: string
  title: string
  description?: string
  children: ReactNode
  contentClassName?: string
}

export function Modal({
  open,
  onClose,
  titleId,
  title,
  description,
  children,
  contentClassName = '',
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    document.body.style.overflow = 'hidden'

    const focusFrame = window.requestAnimationFrame(() => {
      const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
        'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
      )
      ;(firstFocusable ?? dialogRef.current)?.focus()
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (focusable.length === 0) {
        event.preventDefault()
        dialogRef.current.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss dialog overlay"
        className="absolute inset-0 cursor-default bg-[#111111]/65 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? `${titleId}-description` : undefined}
        tabIndex={-1}
        className={`relative z-10 max-h-[calc(100dvh-24px)] w-full overflow-y-auto rounded-[24px] bg-white shadow-[0_30px_100px_-35px_rgba(0,0,0,0.5)] outline-none sm:max-h-[calc(100dvh-48px)] ${contentClassName}`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-[#e5e7eb] bg-white px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <h2 id={titleId} className="text-xl font-semibold tracking-[-0.04em] text-[#111111]">
              {title}
            </h2>
            {description && (
              <p id={`${titleId}-description`} className="mt-1 text-sm leading-6 text-[#4b5563]">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e6f7f4] text-[#4b5563] transition hover:bg-[#d6f1ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a98f]"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
