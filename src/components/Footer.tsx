import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/join', label: 'Join the Club' },
]

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { href: '/', label: 'Home' },
      { href: '/events', label: 'Events' },
      { href: '/projects', label: 'Projects' },
      { href: '/team', label: 'Team' },
      { href: '/join', label: 'Join the Club' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { href: 'https://github.com/codeclub-smvdu', label: 'GitHub', external: true },
      { href: 'https://discord.gg/codeclub-smvdu', label: 'Discord', external: true },
      { href: '/guidelines', label: 'Guidelines' },
    ],
  },
  {
    title: 'Administration',
    links: [
      { href: '/contact-faculty', label: 'Contact Faculty' },
    ],
  },
]

const socialLinks = [
  { href: 'https://github.com/codeclub-smvdu', label: 'GitHub' },
  { href: 'https://linkedin.com/company/codeclub-smvdu', label: 'LinkedIn' },
  { href: 'https://instagram.com/codeclub_smvdu', label: 'Instagram' },
  { href: 'mailto:codeclub@smvdu.ac.in', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-foreground font-heading font-bold text-lg tracking-tight" aria-label="Code Club Home">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span>Code Club SMVDU</span>
          </Link>
          <p className="text-muted text-sm leading-relaxed">
            Think. Code. Solve. Grow. The official technical society fostering algorithmic excellence and open source innovation at SMVDU.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <span className="material-symbols-outlined text-base">{social.label.toLowerCase() === 'github' ? 'code' : social.label.toLowerCase() === 'linkedin' ? 'business' : social.label.toLowerCase() === 'instagram' ? 'camera_alt' : 'mail'}</span>
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-foreground">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="max-w-7xl mx-auto px-container mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Code Club SMVDU. Think. Code. Solve. Grow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}