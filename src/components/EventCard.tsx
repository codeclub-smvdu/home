import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight, Code, Mic, Hammer, Flame } from 'lucide-react'
import { Event } from '@/data/events'

interface EventCardProps {
  event: Event
  variant?: 'default' | 'compact'
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Coding Contest': <Code className="w-4 h-4" aria-hidden="true" />,
  'Tech Talk': <Mic className="w-4 h-4" aria-hidden="true" />,
  'Workshop': <Hammer className="w-4 h-4" aria-hidden="true" />,
  'Hackathon': <Flame className="w-4 h-4" aria-hidden="true" />,
  'Open Source': <Code className="w-4 h-4" aria-hidden="true" />,
}

const statusColors = {
  upcoming: 'bg-primary/10 text-primary border-primary/20',
  ongoing: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  completed: 'bg-muted/10 text-muted border-muted/20',
}

export function EventCard({ event, variant = 'default' }: EventCardProps) {
  const CategoryIcon = categoryIcons[event.category] || <Code className="w-4 h-4" aria-hidden="true" />

  if (variant === 'compact') {
    return (
      <Link
        href={`/events/${event.slug}`}
        className="group block p-5 rounded-xl border border-border bg-surface hover:border-primary/30 hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-start gap-4">
          <span className={`text-label ${statusColors[event.status]} px-3 py-1 rounded-full shrink-0 flex items-center gap-1.5`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            {event.status}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {event.title}
            </h3>
            <p className="text-sm text-muted line-clamp-2 mb-2">{event.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" aria-hidden="true" />{event.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" />{event.time}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" aria-hidden="true" />{event.format}</span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors shrink-0" aria-hidden="true" />
        </div>
      </Link>
    )
  }

  return (
    <article className="group p-6 rounded-xl border border-border bg-surface hover:border-primary/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between" data-category={event.category}>
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 text-primary text-label-sm font-medium">
            {CategoryIcon}
            {event.category}
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded ${statusColors[event.status]} text-label-sm font-medium`}>
            {event.status === 'ongoing' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />}
            {event.status}
          </span>
        </div>
        <h3 className="font-heading text-headline-md text-foreground mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="font-sans text-body-md text-muted mb-6 leading-relaxed">{event.description}</p>
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-border mb-6 font-sans text-sm text-muted">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" aria-hidden="true" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            <span>{event.format}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2">
        <Link
          href={`/events/${event.slug}`}
          className="text-primary hover:underline font-sans text-sm flex items-center gap-1 font-medium"
        >
          <span>Register & Participate</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <span className="text-muted text-sm">Free Entry</span>
      </div>
    </article>
  )
}