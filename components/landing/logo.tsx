import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './theme-provider'
import { useStartPageTransition } from './page-transition'

export function Logo({ light = false }: { light?: boolean }) {
  const { pathname } = useLocation()
  const { isDark } = useTheme()
  const startPageTransition = useStartPageTransition()
  const useLightLogo = light || isDark

  return (
    <Link
      to="/#top"
      onClick={() => { if (pathname !== '/') startPageTransition() }}
      className={`flex items-center gap-2.5 ${useLightLogo ? 'text-white' : 'text-[#111111]'}`}
      aria-label="Nestni home"
    >
      <img
        src={useLightLogo ? '/nestni-logo-dark-theme.png' : '/nestni-logo-light-theme.png'}
        alt=""
        aria-hidden="true"
        width="40"
        height="40"
        className="size-10 shrink-0 object-contain"
      />
      <span
        className={`inline-flex h-[38px] min-w-0 items-center text-2xl font-bold leading-6 tracking-normal ${useLightLogo ? 'text-white' : 'text-[#183147]'}`}
        style={{ fontFamily: '"Instrument Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
      >
        Nest<span className="text-[#00a98f]">ni</span>
      </span>
    </Link>
  )
}
