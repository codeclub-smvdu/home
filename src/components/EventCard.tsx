import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Event } from '@/data/events'

interface EventCardProps {
  event: Event
  variant?: 'default' | 'compact'
}

export function EventCard({ event, variant = 'default' }: EventCardProps) {
  const statusColors = {
    upcoming: 'bg-accent/10 text-accent border-accent/20',
    ongoing: 'bg-highlight/10 text-highlight border-highlight/20',
    completed: 'bg-muted/10 text-muted border-muted/20',
  }

  if (variant === 'compact') {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group block p-5 rounded-xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <span className={`text-label ${statusColors[event.status]} px-3 py-1 rounded-full shrink-0`}>
            {event.status.toUpperCase()}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-foreground group-hover:text-highlight transition-colors mb-1">
              {event.title}
            </h3>
            <p className="text-sm text-muted line-clamp-2 mb-2">{event.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" aria-hidden="true" />{event.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" />{event.time}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" aria-hidden="true" />{event.format}</span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted group-hover:text-highlight transition-colors shrink-0" aria-hidden="true" />
        </div>
      </Link>
    )
  }

  return (
    <article className="group p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-label ${statusColors[event.status]} px-3 py-1 rounded-full`}>
          {event.status.toUpperCase()}
        </span>
        <span className="text-label text-muted">{event.category}</span>
      </div>

      <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-highlight transition-colors">
        {event.title}
      </h3>

      <p className="text-muted leading-relaxed mb-6 flex-1">{event.description}</p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <time dateTime={event.date}>{event.date}</time>
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" aria-hidden="true" />
          {event.time}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" aria-hidden="true" />
          {event.format}
        </span>
      </div>

      <Link
        href={`/events/${event.slug}`}
        className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors mt-auto"
      >
        View Details
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Link>
    </article>
  )
}