import privacyPolicy from '@/legal/privacy-policy.md?raw'
import { LegalDocumentPage } from './legal-document-page'

export function PrivacyPolicyPage() {
  return <LegalDocumentPage title="Privacy Policy" content={privacyPolicy} />
}
