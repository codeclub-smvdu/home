import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin, UserPlus, MapPin as LocationOn, Trophy, UserCheck, Timer, Gavel, Network, CheckCircle, Download, ArrowRight as ArrowForward } from 'lucide-react'
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
      <div className="max-w-7xl mx-auto px-container">
        <div className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link
            href="/events"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Events</span>
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{event.title}</span>
        </div>

        <section className="space-y-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span>Upcoming Flagship Event</span>
          </div>
          <h1 className="text-hero text-foreground tracking-tight">{event.title}</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">{event.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="bg-surface border border-border p-4 rounded-lg flex items-start gap-3">
              <Calendar className="w-8 h-8 text-primary" aria-hidden="true" />
              <div>
                <div className="font-sans text-xs text-muted uppercase tracking-wider">Date & Time</div>
                <div className="font-heading font-medium text-foreground mt-0.5">{event.date}</div>
                <div className="font-sans text-sm text-muted">Starts 10:00 AM IST</div>
              </div>
            </div>
            <div className="bg-surface border border-border p-4 rounded-lg flex items-start gap-3">
              <LocationOn className="w-8 h-8 text-primary" aria-hidden="true" />
              <div>
                <div className="font-sans text-xs text-muted uppercase tracking-wider">Venue / Format</div>
                <div className="font-heading font-medium text-foreground mt-0.5">{event.format.split('(')[0] || event.format}</div>
                <div className="font-sans text-sm text-muted">SMVDU Campus, Hybrid</div>
              </div>
            </div>
            <div className="bg-surface border border-border p-4 rounded-lg flex items-start gap-3">
              <UserPlus className="w-8 h-8 text-primary" aria-hidden="true" />
              <div>
                <div className="font-sans text-xs text-muted uppercase tracking-wider">Status</div>
                <div className="font-heading font-medium text-foreground mt-0.5 text-primary">Registrations Open</div>
                <div className="font-sans text-sm text-muted">Deadline: March 10</div>
              </div>
            </div>
            <div className="bg-surface border border-border p-4 rounded-lg flex items-start gap-3">
              <Trophy className="w-8 h-8 text-highlight" aria-hidden="true" />
              <div>
                <div className="font-sans text-xs text-muted uppercase tracking-wider">Prize Pool</div>
                <div className="font-heading font-medium text-foreground mt-0.5">₹1,50,000+</div>
                <div className="font-sans text-sm text-muted">Cash & Swag Prizes</div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-headline-md text-foreground">About The Event</h2>
              <div className="font-sans text-body-md text-muted space-y-4 leading-relaxed">
                <p>
                  {event.details || event.description}
                </p>
                <p>
                  Our mission is to foster a rigorous yet supportive environment where collegiate engineers push their boundaries, test innovative architectures, and network with industry leaders who serve as mentors and judges throughout the development cycle.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h2 className="font-heading text-headline-md text-foreground">What to Expect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.whatToExpect && event.whatToExpect.length > 0 ? (
                  event.whatToExpect.map((item, i) => (
                    <div key={i} className="bg-surface border border-border p-6 rounded-lg space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <UserCheck className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-headline-sm text-foreground">Hands-on Mentoring</h3>
                      <p className="font-sans text-sm text-muted">
                        Direct guidance from seasoned software engineers, alumni, and tech leads available round-the-clock during the build phase.
                      </p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="bg-surface border border-border p-6 rounded-lg space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <UserCheck className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-headline-sm text-foreground">Hands-on Mentoring</h3>
                      <p className="font-sans text-sm text-muted">
                        Direct guidance from seasoned software engineers, alumni, and tech leads available round-the-clock during the build phase.
                      </p>
                    </div>
                    <div className="bg-surface border border-border p-6 rounded-lg space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Timer className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-headline-sm text-foreground">36 Hours Non-Stop</h3>
                      <p className="font-sans text-sm text-muted">
                        An uninterrupted marathon of creation, fuelled by caffeine, lightning-fast Wi-Fi, and late-night tech talks.
                      </p>
                    </div>
                    <div className="bg-surface border border-border p-6 rounded-lg space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Gavel className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-headline-sm text-foreground">Industry Judges</h3>
                      <p className="font-sans text-sm text-muted">
                        Pitch your final deliverables to esteemed panel members representing top-tier technology corporations and startups.
                      </p>
                    </div>
                    <div className="bg-surface border border-border p-6 rounded-lg space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Network className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-headline-sm text-foreground">Networking</h3>
                      <p className="font-sans text-sm text-muted">
                        Connect with passionate peers from universities across the region, forming long-lasting professional partnerships.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="font-heading text-headline-md text-foreground">Who Can Participate</h2>
              <div className="border border-border rounded-lg p-6 bg-surface space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="text-foreground">Eligibility:</strong>
                    <span className="text-muted ml-1">Open to all undergraduate and postgraduate students enrolled in recognized academic institutions.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="text-foreground">Team Size:</strong>
                    <span className="text-muted ml-1">Teams may consist of 2 to 4 members. Individual entries are also permitted but teamwork is strongly encouraged.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="text-foreground">Prerequisites:</strong>
                    <span className="text-muted ml-1">A working laptop, a collaborative spirit, and a passion for building software solutions. No prior hackathon winning experience required.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 bg-surface border border-border/60 rounded-xl p-6 shadow-sm space-y-6" id="register">
              <div className="flex justify-between items-center">
                <span className="font-sans text-xs text-muted uppercase tracking-wider">Registration Tier</span>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-medium">Free Entry</span>
              </div>
              <div className="space-y-2">
                <div className="font-heading text-headline-md text-foreground">Secure Your Spot</div>
                <p className="text-sm text-muted">
                  Applications are reviewed on a rolling basis. Early submissions receive priority selection status.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center py-2 bg-surface-dim rounded-lg border border-border/30">
                <div>
                  <div className="font-heading text-headline-sm text-foreground font-bold">12</div>
                  <div className="font-sans text-xs text-muted">Days</div>
                </div>
                <div>
                  <div className="font-heading text-headline-sm text-foreground font-bold">08</div>
                  <div className="font-sans text-xs text-muted">Hours</div>
                </div>
                <div>
                  <div className="font-heading text-headline-sm text-foreground font-bold">45</div>
                  <div className="font-sans text-xs text-muted">Mins</div>
                </div>
                <div>
                  <div className="font-heading text-headline-sm text-foreground font-bold">30</div>
                  <div className="font-sans text-xs text-muted">Secs</div>
                </div>
              </div>
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href={event.registerLink || '#'}>
                    Register Team Now
                    <ArrowForward className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="#">
                    Download Rulebook (PDF)
                    <Download className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="border-t border-border/30 pt-4 text-center">
                <span className="font-sans text-sm text-muted">Have questions? </span>
                <a className="font-sans text-sm text-primary font-medium hover:underline" href="#">Contact Organizers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}