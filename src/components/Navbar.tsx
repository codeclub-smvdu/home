'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code } from 'lucide-react'
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity" aria-label="Code Club Home">
            <div className="w-8 h-8 rounded-lg bg-highlight flex items-center justify-center">
              <Code className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Code Club</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-highlight after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" asChild>
              <Link href="/join">Join the Club →</Link>
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