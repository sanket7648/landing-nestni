import { useEffect, useState } from 'react'
import { LandingFooter } from '@/components/landing/landing-footer'
import { LandingHeader } from '@/components/landing/landing-header'
import { DemoRequestModal } from '@/components/landing/demo-request-modal'

type LegalDocumentPageProps = {
  title: string
  content: string
}

type MarkdownBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

function parseMarkdown(content: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = []
  let paragraph: string[] = []
  let list: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
      paragraph = []
    }
  }
  const flushList = () => {
    if (list.length > 0) {
      blocks.push({ type: 'list', items: list })
      list = []
    }
  }

  for (const line of content.split(/\r?\n/)) {
    const heading = /^(#{1,3})\s+(.+)$/.exec(line)
    if (heading) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] })
    } else if (line.startsWith('- ')) {
      flushParagraph()
      list.push(line.slice(2))
    } else if (line.trim() === '') {
      flushParagraph()
      flushList()
    } else {
      flushList()
      paragraph.push(line.trim())
    }
  }

  flushParagraph()
  flushList()
  return blocks
}

export function LegalDocumentPage({ title, content }: LegalDocumentPageProps) {
  const [demoOpen, setDemoOpen] = useState(false)
  const blocks = parseMarkdown(content)

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | Nestni`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <main className="min-h-screen bg-[#e6f7f4] text-[#111111]">
      <LandingHeader onDemoRequest={() => setDemoOpen(true)} />
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <article className="rounded-3xl bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <div className="legal-document">
            {blocks.map((block, index) => {
              if (block.type === 'heading') {
                if (block.level === 1) {
                  return <h1 key={index}>{block.text}</h1>
                }
                if (block.level === 2) {
                  return <h2 key={index}>{block.text}</h2>
                }
                return <h3 key={index}>{block.text}</h3>
              }
              if (block.type === 'list') {
                return (
                  <ul key={index}>
                    {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                  </ul>
                )
              }
              return <p key={index}>{block.text}</p>
            })}
          </div>
        </article>
      </div>
      <LandingFooter onDemoRequest={() => setDemoOpen(true)} />
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  )
}
