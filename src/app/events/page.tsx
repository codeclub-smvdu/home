import { SectionHeader } from '@/components/SectionHeader'
import { EventCard } from '@/components/EventCard'
import { events } from '@/data/events'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming and past events at Code Club SMVDU — coding contests, workshops, tech talks, hackathons, and more.',
}

const categories = ['All', 'Coding Contest', 'Workshop', 'Tech Talk', 'Open Source', 'Hackathon'] as const

export default function EventsPage() {
  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            label="What's Happening"
            title="EVENTS"
            description="Learn. Compete. Build. Join our upcoming coding contests, workshops, and tech talks."
          />
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter events by category">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                cat === 'All'
                  ? 'bg-highlight text-white shadow-sm'
                  : 'bg-background border border-border text-muted hover:text-foreground hover:border-accent/50'
              }`}
              aria-pressed={cat === 'All'}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted">
            Past events are archived.{' '}
            <a href="#" className="text-accent hover:underline">View event history →</a>
          </p>
        </div>
      </div>
    </div>
  )
}