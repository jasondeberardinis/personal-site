'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

// Generate a deterministic gradient for each issue based on index
function getGradient(index: number) {
  const gradients = [
    'from-amber-700/20 to-orange-900/20',
    'from-stone-600/20 to-amber-800/20',
    'from-amber-800/20 to-yellow-900/20',
    'from-stone-700/20 to-stone-500/20',
    'from-orange-800/20 to-amber-700/20',
    'from-yellow-800/20 to-stone-700/20',
  ]
  return gradients[index % gradients.length]
}

export function ArchiveGrid() {
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

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] animate-pulse rounded-2xl bg-card-bg border border-border"
          />
        ))}
      </div>
    )
  }

  if (broadcasts.length === 0) {
    return (
      <div className="rounded-2xl border border-border border-dashed bg-card-bg/50 p-12 text-center">
        <p className="font-display text-xl text-foreground/40">First issue dropping soon.</p>
        <p className="mt-2 text-sm text-muted/60">Subscribe above so you don't miss it.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {broadcasts.map((b, i) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card-bg transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:scale-[1.02] cursor-pointer"
        >
          {/* Gradient header */}
          <div className={`aspect-[16/9] bg-gradient-to-br ${getGradient(i)} flex items-center justify-center p-6`}>
            <span className="font-display text-3xl text-foreground/10 select-none">
              #{broadcasts.length - i}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <p className="text-xs font-medium text-accent">
              {formatDate(b.published_at)}
            </p>
            <h3 className="font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-accent transition-colors">
              {b.subject}
            </h3>
            {b.description && (
              <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                {b.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
