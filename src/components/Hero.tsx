'use client'

import { ArrowRight, Code, Zap, Terminal, Github } from 'lucide-react'
import { Button } from './Button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-container py-20 lg:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-8" role="status">
          <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" aria-hidden="true" />
          <span>Active Community Since 2022</span>
        </div>

        <h1 id="hero-title" className="text-hero text-foreground mb-6 leading-tight">
          CODE CLUB
        </h1>

        <p className="text-2xl lg:text-3xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          Think. Code. Solve. Grow.
        </p>

        <p className="text-lg lg:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          A student-driven technical community focused on problem-solving, coding, technical learning, and continuous practice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" asChild>
            <Link href="/join">Join the Club <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50">
            <Code className="w-4 h-4 text-accent" aria-hidden="true" /> DSA
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50">
            <Terminal className="w-4 h-4 text-accent" aria-hidden="true" /> Coding
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50">
            <Zap className="w-4 h-4 text-accent" aria-hidden="true" /> Technology
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50">
            <Github className="w-4 h-4 text-accent" aria-hidden="true" /> Projects
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}