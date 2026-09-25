import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail, Code } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/codeclub-smvdu', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/company/codeclub-smvdu', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://instagram.com/codeclub_smvdu', label: 'Instagram', icon: Instagram },
  { href: 'mailto:codeclub@smvdu.ac.in', label: 'Email', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-foreground mb-4" aria-label="Code Club Home">
              <div className="w-8 h-8 rounded-lg bg-highlight flex items-center justify-center">
                <Code className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Code Club</span>
            </Link>
            <p className="text-muted text-base leading-relaxed mb-6 max-w-xs">
              Think. Code. Solve. Grow.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted hover:text-highlight transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/events', label: 'Events' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/team', label: 'Team' },
                  { href: '/join', label: 'Join the Club' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted hover:text-foreground transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <address className="text-muted text-sm not-italic space-y-3">
              <p>Code Club, SMVDU</p>
              <p>Shri Mata Vaishno Devi University</p>
              <p>Katra, Reasi - 182320</p>
              <p>Jammu & Kashmir, India</p>
              <a href="mailto:codeclub@smvdu.ac.in" className="hover:text-highlight transition-colors">
                codeclub@smvdu.ac.in
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Code Club, SMVDU. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built by students, for students.
          </p>
        </div>
      </div>
    </footer>
  )
}