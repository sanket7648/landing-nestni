import React from 'react'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { NestniLanding } from '@/components/ownerflow-landing'
import { PageTransitionProvider } from '@/components/landing/page-transition'
import { SurveyPage } from '@/components/pages/survey-page'
import { PrivacyPolicyPage } from '@/components/pages/privacy-policy-page'
import { TermsOfUsePage } from '@/components/pages/terms-of-use-page'
import { AboutUsPage } from '@/components/pages/about-us-page'
import { ThemeProvider } from '@/components/landing/theme-provider'
import '@/src/globals.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PageTransitionProvider>
          <Routes>
            <Route path="/" element={<NestniLanding />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransitionProvider>
        {import.meta.env.PROD && <Analytics />}
      </BrowserRouter>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
