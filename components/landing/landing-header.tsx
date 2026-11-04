import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './logo'
import { useStartPageTransition } from './page-transition'

type LandingHeaderProps = {
  onDemoRequest?: () => void
}

const navigationLinks = [
  ['Problem', '#problem'],
  ['Solution', '#solution'],
  ['How it works', '#flow'],
  ['FAQ', '#faq'],
]

export function LandingHeader({ onDemoRequest }: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const startPageTransition = useStartPageTransition()
  const sectionHref = (hash: string) => `/${hash}`
  const navigateWithLoader = (to: string) => {
    const destinationPathname = to.split(/[?#]/, 1)[0] || pathname
    if (destinationPathname !== pathname) startPageTransition()
  }

  useEffect(() => {
    if (!hash) return

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname])

  return (
    <header className="sticky top-0 z-30 border-b border-[#e5e7eb]/80 bg-[#e6f7f4]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigationLinks.map(([label, href]) => (
            <Link
              key={href}
              to={sectionHref(href)}
              onClick={() => navigateWithLoader(sectionHref(href))}
              className="text-sm text-[#4b5563] transition-colors hover:text-[#111111]"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://nestni.com/login" className="px-3 py-2 text-sm font-medium text-[#4b5563] hover:text-[#111111]">
            Sign in
          </a>
          <Link
            to="/survey"
            onClick={() => navigateWithLoader('/survey')}
            className="rounded-full border border-[#00a98f]/40 px-4 py-2.5 text-sm font-semibold text-[#007d6c] transition hover:bg-white"
          >
            Market survey
          </Link>
          {onDemoRequest && (
            <button
              type="button"
              onClick={onDemoRequest}
              className="rounded-full bg-[#00a98f] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:bg-[#008f79]"
            >
              Book a demo <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
            </button>
          )}
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-[#111111] md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="flex flex-col gap-1 border-t border-[#e5e7eb] px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {navigationLinks.map(([label, href]) => (
            <Link
              key={href}
              to={sectionHref(href)}
              onClick={() => {
                navigateWithLoader(sectionHref(href))
                setMenuOpen(false)
              }}
              className="rounded-lg px-3 py-3 text-sm text-[#4b5563] hover:bg-white"
            >
              {label}
            </Link>
          ))}
          <a href="https://nestni.com/login" className="rounded-lg px-3 py-3 text-sm text-[#4b5563]">
            Sign in
          </a>
          <Link
            to="/survey"
            onClick={() => {
              navigateWithLoader('/survey')
              setMenuOpen(false)
            }}
            className="mt-1 rounded-full border border-[#00a98f]/40 px-4 py-3 text-center text-sm font-semibold text-[#007d6c]"
          >
            Market survey
          </Link>
          {onDemoRequest && (
            <button
              type="button"
              onClick={() => { setMenuOpen(false); onDemoRequest() }}
              className="mt-1 rounded-full bg-[#00a98f] px-4 py-3 text-center text-sm font-semibold text-[#111111]"
            >
              Book a demo
            </button>
          )}
        </nav>
      )}
    </header>
  )
}
