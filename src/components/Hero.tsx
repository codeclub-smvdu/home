'use client'

import { ArrowRight, Code, Terminal } from 'lucide-react'
import { Button } from './Button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e3dc_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-container w-full text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-xs mb-8 text-xs font-medium text-muted">
          <span className="w-2 h-2 rounded-full bg-highlight"></span>
          <span className="font-mono font-semibold text-foreground">SMVDU</span>
          <span className="text-muted/60">•</span>
          <span>Official Student Developer Community</span>
        </div>

        <h1 id="hero-title" className="text-hero text-foreground mb-6 leading-[1.08]">
          Think. Code. <br className="hidden sm:inline" />
          <span className="text-primary">Solve.</span> <span className="text-foreground">Grow.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10 font-normal">
          The premier collegiate engineering society at Shri Mata Vaishno Devi University. We build problem-solvers through daily algorithmic practice, open source contributions, and hands-on systems hacking.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <Button size="lg" asChild>
            <Link href="/join">
              <span>Join the Club</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              <span className="material-symbols-outlined text-lg leading-none text-muted">code</span>
              <span>Explore Projects</span>
            </Link>
          </Button>
        </div>

        <div className="w-full max-w-2xl grid grid-cols-3 divide-x divide-border bg-surface/80 backdrop-blur-xs border border-border rounded-xl py-4 px-2 shadow-xs text-center">
          <div className="px-3">
            <div className="font-heading text-xl sm:text-2xl font-bold text-foreground">500+</div>
            <div className="text-xs sm:text-xs text-muted font-medium mt-0.5">Active Coders</div>
          </div>
          <div className="px-3">
            <div className="font-heading text-xl sm:text-2xl font-bold text-primary">48+</div>
            <div className="text-xs sm:text-xs text-muted font-medium mt-0.5">Weekly Contests</div>
          </div>
          <div className="px-3">
            <div className="font-heading text-xl sm:text-2xl font-bold text-highlight">14</div>
            <div className="text-xs sm:text-xs text-muted font-medium mt-0.5">Hackathon Wins</div>
          </div>
        </div>
      </div>
    </section>
  )
}