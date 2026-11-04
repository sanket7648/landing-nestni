import { Link } from 'react-router-dom'
import { Logo } from './logo'

export function LandingFooter({ onDemoRequest }: { onDemoRequest: () => void }) {
  return (
    <footer className="bg-[#173f35] text-white">
      <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-4 text-sm leading-6 text-white/65">
              Nestni is your digital partner that makes rental property management simple, secure, and organized for every property owner.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">Product</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <a href="#why-nestni" className="hover:text-white">Why Nestni</a>
              <a href="#flow" className="hover:text-white">How it works</a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">Access</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <a href="https://nestni.com/login" className="hover:text-white">Owner access</a>
              <a href="https://nestni.com/login" className="hover:text-white">Tenant portal</a>
              <a href="https://nestni.com/register" className="hover:text-white">Register</a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">Company</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <button type="button" onClick={onDemoRequest} className="text-left hover:text-white">Contact</button>
              <button type="button" onClick={onDemoRequest} className="text-left hover:text-white">Early access</button>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <Link to="/about-us" className="hover:text-white">About Us</Link>
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-5 text-sm text-white/55">
          Copyright @2026 Nestni. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
