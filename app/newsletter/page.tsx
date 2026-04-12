'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'
import { NewsletterForm } from '@/components/NewsletterForm'

interface Broadcast {
  id: number
  subject: string
  description: string | null
  published_at: string
  thumbnail_url: string | null
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function NewsletterPage() {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/newsletters')
      .then((res) => res.json())
      .then((data) => {
        setBroadcasts(data.broadcasts || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="flex min-h-screen justify-center px-6 py-20">
      <ThemeToggle />

      <div className="w-full max-w-lg space-y-12">
        {/* Hero + Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-foreground">
              The AI Edge
            </h1>
            <p className="text-[15px] leading-relaxed text-muted">
              by Jason DeBerardinis
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-foreground">
              Every week I break down the biggest AI news, share free tools I'm
              building, and tell you what I'm learning from running two companies
              in the AI space.
            </p>
            <p className="text-[15px] leading-relaxed text-foreground">
              No fluff. No hype. Just the stuff that actually matters if you're
              building a business right now.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              What you get
            </p>
            <ul className="space-y-2 text-[15px] text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                The biggest AI news of the week, explained simply
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Free AI tools, guides, and templates you can use today
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Real lessons from building GRRO and SHEATH
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                One email a week. Unsubscribe anytime.
              </li>
            </ul>
          </div>

          <NewsletterForm />
        </motion.div>

        {/* Past Issues */}
        {!loading && broadcasts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-t border-border pt-8">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Past Issues
              </p>
            </div>

            <div className="space-y-4">
              {broadcasts.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="group block rounded-lg bg-card-bg p-4 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">
                        {b.subject}
                      </p>
                      {b.description && (
                        <p className="text-sm text-muted line-clamp-2">
                          {b.description}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 text-xs text-muted mt-1">
                      {formatDate(b.published_at)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back link */}
        <a
          href="/"
          className="block text-center text-sm text-muted transition-colors hover:text-foreground"
        >
          jasondeberardinis.com
        </a>
      </div>
    </div>
  )
}
