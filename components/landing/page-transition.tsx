import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransitionContext = createContext<() => void>(() => {})

export function useStartPageTransition() {
  return useContext(PageTransitionContext)
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigationStartedAt = useRef<number | null>(null)
  const previousPathname = useRef(pathname)

  const clearTimer = useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = null
  }, [])

  const startTransition = useCallback(() => {
    clearTimer()
    navigationStartedAt.current = Date.now()
    setVisible(true)
    timer.current = setTimeout(() => {
      setVisible(false)
      navigationStartedAt.current = null
      timer.current = null
    }, 8000)
  }, [clearTimer])

  useEffect(() => {
    const minimumDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 200 : 1800
    timer.current = setTimeout(() => {
      setVisible(false)
      timer.current = null
    }, minimumDuration)
    return clearTimer
  }, [clearTimer])

  useEffect(() => {
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    const elapsed = navigationStartedAt.current === null
      ? 0
      : Date.now() - navigationStartedAt.current
    const minimumDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 200 : 1800
    clearTimer()
    setVisible(true)
    timer.current = setTimeout(() => {
      setVisible(false)
      navigationStartedAt.current = null
      timer.current = null
    }, Math.max(0, minimumDuration - elapsed))

    return clearTimer
  }, [clearTimer, pathname])

  return (
    <PageTransitionContext.Provider value={startTransition}>
      {children}
      {visible && <PageTransitionScreen phase={navigationStartedAt.current === null ? 'initial' : 'navigation'} />}
    </PageTransitionContext.Provider>
  )
}

function PageTransitionScreen({ phase }: { phase: 'initial' | 'navigation' }) {
  return (
    <div className={`boot-loader boot-loader--${phase}`} role="status" aria-label="Loading Nestni" aria-live="polite">
      <div className="boot-loader-stage">
        <div className="boot-loader-mark">
          <img
            src="/nestni-logo-light-theme.png"
            alt=""
            aria-hidden="true"
            width="120"
            height="120"
          />
        </div>
        <div className="boot-loader-brand" aria-label="Nestni">
          <span>Nest</span><span>ni</span>
        </div>
        <p className="boot-loader-tagline">Property management, simplified</p>
        <div className="boot-loader-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
          <span />
        </div>
        <div className="boot-loader-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
    </div>
  )
}
