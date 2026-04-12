'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'
import { PixelWaves } from '@/components/PixelWaves'
import { NewsletterForm } from '@/components/NewsletterForm'
import { SocialIcons } from '@/components/SocialIcons'
import { ArchiveGrid } from '@/components/ArchiveGrid'

const currentProjects = [
  {
    name: 'GRRO',
    description: 'Get recommended by AI',
    url: 'https://grro.io',
    display: 'grro.io',
    logo: '/grro-logo.svg',
  },
  {
    name: 'SHEATH',
    description: 'Premium knife rolls for chefs',
    url: 'https://sheath.store',
    display: 'sheath.store',
    logo: 'https://www.google.com/s2/favicons?domain=sheath.store&sz=32',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-20">
        {/* Subtle radial glow behind hero */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-full max-w-[600px] rounded-full bg-accent/[0.04] blur-[120px]" />

        <div className="relative w-full max-w-xl space-y-10 text-center">
          {/* Globe + Identity */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <PixelWaves />
            </motion.div>
          </motion.div>

          {/* Newsletter Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              AI Edge Newsletter
            </h1>
            <p className="text-lg text-muted max-w-md mx-auto leading-relaxed">
              Weekly AI news, free tools, and real lessons from building companies.
            </p>
          </motion.div>

          {/* Author line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted"
          >
            by <span className="text-foreground font-medium">Jason DeBerardinis</span>
          </motion.p>

          {/* Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-md mx-auto"
          >
            <NewsletterForm />
            <p className="mt-3 text-xs text-muted/60">
              Join for free. Unsubscribe anytime.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center"
          >
            <SocialIcons />
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ── What You Get ── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              label: 'AI News',
              desc: 'The biggest stories of the week, explained without the hype.',
            },
            {
              label: 'Free Tools',
              desc: 'Guides, templates, and AI tools I build and give away.',
            },
            {
              label: 'Founder Lessons',
              desc: 'Real lessons from building GRRO, SHEATH, and what comes next.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card-bg p-6 transition-colors hover:border-accent/30"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                {item.label}
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ── Archive ── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-8">
            Archive
          </p>
          <ArchiveGrid />
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ── Currently Building ── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-8">
            Currently Building
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentProjects.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group block rounded-2xl border border-border bg-card-bg p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={24}
                    height={24}
                    className="rounded-sm"
                    unoptimized
                  />
                  <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </span>
                </div>
                <p className="text-sm text-muted mb-1">{p.description}</p>
                <span className="text-xs text-accent">{p.display} &rarr;</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Jason DeBerardinis</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-accent">&hearts;</span>
            <span>and too much coffee</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
