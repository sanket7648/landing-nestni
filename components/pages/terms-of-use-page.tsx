import termsOfUse from '@/legal/terms-of-use.md?raw'
import { LegalDocumentPage } from './legal-document-page'

export function TermsOfUsePage() {
  return <LegalDocumentPage title="Terms of Use" content={termsOfUse} />
}
