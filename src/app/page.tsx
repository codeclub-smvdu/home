import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'
import { EventCard } from '@/components/EventCard'
import { ProjectCard } from '@/components/ProjectCard'
import { TeamCard } from '@/components/TeamCard'
import { ActivityCard } from '@/components/ActivityCard'
import { CTA } from '@/components/CTA'
import { events } from '@/data/events'
import { projects } from '@/data/projects'
import { team, groupOrder, groupLabels } from '@/data/team'
import Link from 'next/link'
import { ArrowRight, Code, Terminal, Users, Network, Zap, Mic, Hammer, Github } from 'lucide-react'

const whatWeDo = [
  { title: 'Problem Solving', desc: 'Daily algorithmic challenges, competitive programming contests, and structured DSA practice to build ironclad logical reasoning.', icon: <Code className="w-6 h-6" aria-hidden="true" /> },
  { title: 'Technical Learning', desc: 'Workshops, tech talks, and mentorship sessions covering systems, web, AI/ML, and modern tooling from industry practitioners.', icon: <Terminal className="w-6 h-6" aria-hidden="true" /> },
  { title: 'Community Practice', desc: 'Collaborative hackathons, open-source contribution drives, and peer-led learning circles that compound growth.', icon: <Users className="w-6 h-6" aria-hidden="true" /> },
]

const activities = [
  { title: 'Weekly Contests', desc: 'Budhwar Battle Code — our signature Wednesday competitive programming challenge testing algorithmic efficiency and speed under pressure.', category: 'Weekly Contests' },
  { title: 'Workshops', desc: 'Hands-on sessions covering Git/GitHub, Linux, React, Docker, and cloud fundamentals — practical skills for real engineering.', category: 'Workshops' },
  { title: 'Tech Talks', desc: 'Industry experts and alumni share insights on emerging technologies, system design, and career pathways in software engineering.', category: 'Tech Talks' },
  { title: 'Hackathons', desc: 'Flagship 36-hour national hackathon (Hackathon 2025) with ₹1,00,000+ prize pool, mentorship, and industry judging panels.', category: 'Hackathons' },
  { title: 'Open Source', desc: 'Guided contribution drives to real projects — first PRs, issue triaging, and maintainer mentorship for sustainable open-source careers.', category: 'Open Source' },
]

export default function HomePage() {
  const upcomingEvents = events.filter(e => e.status !== 'completed').slice(0, 4)
  const featuredProjects = projects.slice(0, 4)

  return (
    <>
      <Hero />

      <section id="what-we-do" className="py-section bg-background" aria-labelledby="what-we-do-heading">
        <div className="max-w-7xl mx-auto px-container">
          <SectionHeader
            label="Core Focus"
            title="WHAT WE DO"
            description="We build better problem-solvers through consistent practice, logical thinking, and technical exploration."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {whatWeDo.map((item) => (
              <article key={item.title} className="group p-6 rounded-xl border border-border bg-surface hover:border-primary/50 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-body-md text-muted leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-section bg-background" aria-labelledby="events-heading">
        <div className="max-w-7xl mx-auto px-container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeader
              label="High Priority"
              title="UPCOMING EVENTS"
              description="Join our next coding contests, workshops, and tech talks."
            />
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors shrink-0 mt-auto"
            >
              View All Events
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-section bg-background" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-container">
          <SectionHeader
            label="Our Approach"
            title="CONSISTENT PRACTICE > SPORADIC BURSTS"
            description="Code Club encourages students to move beyond passive learning through daily practice, technical exploration, collaboration, and real-world problem solving."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-start">
            <div className="space-y-6">
              <h3 className="font-heading text-headline-md text-foreground">Think. Code. Solve. Grow.</h3>
              <p className="font-sans text-body-lg text-muted leading-relaxed">
                We don't believe in cramming. Real engineering competence comes from showing up daily, solving one problem at a time, 
                and building a portfolio of shipped code. Our members don't just learn — they build, break, debug, and ship.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border bg-surface">
                  <div className="font-heading text-3xl font-bold text-primary">500+</div>
                  <div className="font-sans text-sm text-muted">Active Coders</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface">
                  <div className="font-heading text-3xl font-bold text-primary">48+</div>
                  <div className="font-sans text-sm text-muted">Weekly Contests</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface">
                  <div className="font-heading text-3xl font-bold text-highlight">14</div>
                  <div className="font-sans text-sm text-muted">Hackathon Wins</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-surface">
                  <div className="font-heading text-3xl font-bold text-primary">12</div>
                  <div className="font-sans text-sm text-muted">Core Team</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl bg-surface-dim overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted">
                  <Code className="w-16 h-16" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="py-section bg-background" aria-labelledby="activities-heading">
        <div className="max-w-7xl mx-auto px-container">
          <SectionHeader
            label="What We Run"
            title="ACTIVITIES"
            description="The complete range of events and sessions we organize throughout the year."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-section bg-background" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeader
              label="Student Work"
              title="PROJECT SHOWCASE"
              description="Explore projects built through club activities, hackathons, and collaborative development."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors shrink-0 mt-auto"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-section bg-background" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-container">
          <SectionHeader
            label="Meet Us"
            title="THE TEAM"
            description="The people building Code Club — passionate students driving our technical community forward."
          />
          <div className="mt-12 space-y-16">
            {groupOrder.map((group) => (
              <div key={group}>
                <h3 className="font-heading font-semibold uppercase tracking-wider text-sm text-foreground mb-6 pb-2 border-b border-border inline-block">
                  {groupLabels[group]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                  {team.filter(m => m.group === group).map((member) => (
                    <TeamCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
            >
              View Full Team
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}