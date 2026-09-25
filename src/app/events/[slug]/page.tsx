import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/Button'
import { events, getEventBySlug, Event } from '@/data/events'
import { SectionHeader } from '@/components/SectionHeader'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: 'Event Not Found' }
  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) notFound()

  return (
    <article className="py-section">
      <div className="max-w-4xl mx-auto px-container">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Events
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-label px-3 py-1 rounded-full ${
              event.status === 'upcoming' ? 'bg-accent/10 text-accent' :
              event.status === 'ongoing' ? 'bg-highlight/10 text-highlight' :
              'bg-muted/10 text-muted'
            }`}>
              {event.status.toUpperCase()}
            </span>
            <span className="text-label text-muted">{event.category}</span>
          </div>
          <h1 className="text-section-title text-foreground mb-4">{event.title}</h1>
          {event.details && <p className="text-lg text-muted leading-relaxed">{event.details}</p>}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
            <Calendar className="w-6 h-6 text-accent shrink-0" aria-hidden="true" />
            <div>
              <span className="text-label text-muted block">DATE</span>
              <time className="text-foreground" dateTime={event.date}>{event.date}</time>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
            <Clock className="w-6 h-6 text-accent shrink-0" aria-hidden="true" />
            <div>
              <span className="text-label text-muted block">TIME</span>
              <span className="text-foreground">{event.time}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
            <MapPin className="w-6 h-6 text-accent shrink-0" aria-hidden="true" />
            <div>
              <span className="text-label text-muted block">FORMAT</span>
              <span className="text-foreground">{event.format}</span>
            </div>
          </div>
        </div>

        {event.whatToExpect && event.whatToExpect.length > 0 && (
          <section className="mb-12" aria-labelledby="what-to-expect">
            <h2 id="what-to-expect" className="text-label text-accent mb-6 pb-2 border-b border-border inline-block">
              What to Expect
            </h2>
            <ul className="space-y-3" role="list">
              {event.whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background">
                  <span className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 text-accent" aria-hidden="true">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {event.whoCanParticipate && (
          <section className="mb-12" aria-labelledby="who-can-participate">
            <h2 id="who-can-participate" className="text-label text-accent mb-4 pb-2 border-b border-border inline-block">
              Who Can Participate
            </h2>
            <p className="text-muted leading-relaxed">{event.whoCanParticipate}</p>
          </section>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          {event.registerLink && (
            <Button size="lg" asChild>
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer">
                Register Now
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          )}
          <Button size="lg" variant="outline" asChild>
            <Link href="/events">← Back to All Events</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}