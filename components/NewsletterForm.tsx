'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const FORM_ID = '9319130'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
          email,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center"
      >
        <p className="font-display text-2xl text-foreground">You're in.</p>
        <p className="mt-2 text-sm text-muted">Check your email for a welcome note.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 rounded-xl border border-border bg-card-bg px-5 py-4 text-[15px] text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-xl bg-accent px-8 py-4 text-[15px] font-semibold text-background transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-500">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
