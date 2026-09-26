import { ArrowRight } from 'lucide-react'
import { Button } from './Button'
import Link from 'next/link'

interface CTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: 'primary' | 'secondary'
}

export function CTA({
  title = 'Ready to grow?',
  description = 'Join Code Club SMVDU and start your journey towards algorithmic excellence.',
  buttonText = 'Join the Club',
  buttonHref = '/join',
  variant = 'primary'
}: CTAProps) {
  return (
    <section className="relative py-section" aria-labelledby="cta-title">
      <div className="relative max-w-3xl mx-auto px-container text-center">
        <h2 id="cta-title" className="text-section-title text-foreground mb-4 font-heading font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-lg lg:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Button size="lg" variant={variant === 'primary' ? 'primary' : 'outline'} asChild>
          <Link href={buttonHref}>
            {buttonText}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}