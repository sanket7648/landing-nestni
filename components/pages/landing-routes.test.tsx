// Runtime validation coverage for the landing and market-survey routes.
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { NestniLanding } from '@/components/ownerflow-landing'
import { SurveyPage } from '@/components/pages/survey-page'
import { LandingHeader } from '@/components/landing/landing-header'
import { PrivacyPolicyPage } from '@/components/pages/privacy-policy-page'
import { TermsOfUsePage } from '@/components/pages/terms-of-use-page'
import { AboutUsPage } from '@/components/pages/about-us-page'

describe('Nestni landing routes', () => {
  it('renders the landing headline, dashboard, and market survey navigation', () => {
    const markup = renderToStaticMarkup(
      <MemoryRouter>
        <NestniLanding />
      </MemoryRouter>,
    )

    expect(markup).toContain('Rental Business,')
    expect(markup).toContain('Tenant &amp; room overview')
    expect(markup).toContain('href="/survey"')
    expect(markup).toContain('Market survey')
  })

  it('renders the survey heading and required contact fields', () => {
    const markup = renderToStaticMarkup(
      <MemoryRouter>
        <SurveyPage />
      </MemoryRouter>,
    )

    expect(markup).toContain('Help us understand your property management needs.')
    expect(markup).toContain('name="name"')
    expect(markup).toContain('name="mobile"')
  })

  it('routes section navigation back to landing-page anchors from the survey', () => {
    const markup = renderToStaticMarkup(
      <MemoryRouter initialEntries={['/survey']}>
        <LandingHeader />
      </MemoryRouter>,
    )

    expect(markup).toContain('href="/#problem"')
    expect(markup).toContain('href="/#solution"')
    expect(markup).toContain('href="/#flow"')
    expect(markup).toContain('href="/#faq"')
  })

  it('renders the privacy policy and terms with footer navigation', () => {
    const privacyMarkup = renderToStaticMarkup(
      <MemoryRouter>
        <PrivacyPolicyPage />
      </MemoryRouter>,
    )
    const termsMarkup = renderToStaticMarkup(
      <MemoryRouter>
        <TermsOfUsePage />
      </MemoryRouter>,
    )

    expect(privacyMarkup).toContain('Privacy Policy')
    expect(privacyMarkup).toContain('Personal data we collect')
    expect(privacyMarkup).toContain('info@nestni.com')
    expect(privacyMarkup).toContain('Vipul Business Park')
    expect(privacyMarkup).not.toContain('Draft template')
    expect(privacyMarkup).toContain('href="/privacy-policy"')
    expect(privacyMarkup).toContain('href="/terms-of-use"')
    expect(termsMarkup).toContain('Nestni Terms of Use')
    expect(termsMarkup).toContain('Rent records and payment status')
    expect(termsMarkup).toContain('Governing law and dispute resolution')
    expect(termsMarkup).toContain('info@nestni.com')
    expect(termsMarkup).not.toContain('[SUPPORT EMAIL]')
    expect(termsMarkup).not.toContain('[OPTIONAL LIABILITY CAP]')
    expect(termsMarkup).not.toContain('Draft template')
  })

  it('renders the About Us page with company information and footer navigation', () => {
    const markup = renderToStaticMarkup(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>,
    )

    expect(markup).toContain('About Us')
    expect(markup).toContain('Property Management, Simplified.')
    expect(markup).toContain('What We Aim to Do')
    expect(markup).toContain('Our Vision')
    expect(markup).toContain('Our Mission')
    expect(markup).toContain('About Gavox Global')
    expect(markup).toContain('Gavox Global')
    expect(markup).toContain('href="/about-us"')
  })
})
