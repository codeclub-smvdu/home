'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Terminal } from 'lucide-react'
import { Button } from './Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 w-full z-50 h-16 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-background/80 backdrop-blur-md border-b border-border'
    }`}>
      <nav className="max-w-7xl mx-auto px-container" aria-label="Main navigation">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity font-heading font-bold text-xl tracking-tight" aria-label="Code Club Home">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span>Code Club SMVDU</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal text-muted hover:text-foreground transition-colors font-heading"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" asChild>
              <Link href="/join">Join the Club →</Link>
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Terminal className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="sm">
              <span className="material-symbols-outlined text-sm">code</span>
            </Button>
            <Button size="sm" asChild>
              <Link href="/join">Join Us</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-muted/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-base font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full mt-2" asChild>
              <Link href="/join" onClick={() => setIsOpen(false)}>Join the Club →</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}