'use client'

import { SectionHeader } from '@/components/SectionHeader'
import { EventCard } from '@/components/EventCard'
import { events } from '@/data/events'
import { useState } from 'react'
import { Code, Mic, Hammer, Github, Zap, Network } from 'lucide-react'

const categories = ['All', 'Coding Contest', 'Workshop', 'Tech Talk', 'Open Source', 'Hackathon'] as const

const categoryIcons: Record<string, React.ReactNode> = {
  'Coding Contest': <Code className="w-4 h-4" aria-hidden="true" />,
  'Tech Talk': <Mic className="w-4 h-4" aria-hidden="true" />,
  'Workshop': <Hammer className="w-4 h-4" aria-hidden="true" />,
  'Hackathon': <Zap className="w-4 h-4" aria-hidden="true" />,
  'Open Source': <Github className="w-4 h-4" aria-hidden="true" />,
  'All': <Network className="w-4 h-4" aria-hidden="true" />,
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory)

  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-4">
            <span className="material-symbols-outlined text-primary">event</span>
            <span className="font-sans text-xs uppercase tracking-wider text-muted">COMMUNITY TIMELINE & SESSIONS</span>
          </div>
          <SectionHeader
            label=""
            title="UPCOMING & PAST EVENTS"
            description="Participate in rigorous competitive programming battles, technical workshops, open-source sprints, and collaborative hackathons organized by Code Club SMVDU."
          />
        </header>

        <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md py-4 mb-12 border-b border-border overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-150 active:scale-95 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface hover:bg-surface-dim text-muted hover:text-foreground border border-border'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat === 'All' ? (
                  <>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>apps</span>
                    <span>All Events</span>
                  </>
                ) : (
                  <>
                    {categoryIcons[cat]}
                    <span>{cat}</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 text-muted">
            No events found for this category.
          </div>
        )}
      </div>
    </div>
  )
}