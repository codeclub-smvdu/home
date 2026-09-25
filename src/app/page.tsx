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
import { ArrowRight } from 'lucide-react'

const whatWeDo = [
  { num: '01', title: 'PROBLEM SOLVING', desc: 'Strengthening logical and analytical thinking.' },
  { num: '02', title: 'DSA', desc: 'Building strong data structures and algorithms fundamentals.' },
  { num: '03', title: 'CODING', desc: 'Practising through coding challenges and contests.' },
  { num: '04', title: 'TECHNOLOGY', desc: 'Exploring tools, technologies, and development practices.' },
  { num: '05', title: 'OPEN SOURCE', desc: 'Learning through real-world collaboration and contribution.' },
  { num: '06', title: 'BUILDING', desc: 'Creating projects through hackathons and practical work.' },
]

const philosophy = [
  { title: 'LEARN', desc: 'Technical knowledge and guidance', icon: '📚' },
  { title: 'PRACTICE', desc: 'Problems, contests and challenges', icon: '⚡' },
  { title: 'BUILD', desc: 'Projects, hackathons and contributions', icon: '🚀' },
]

const activities = [
  { title: 'Budhwar Battle Code', desc: 'Weekly DSA-based coding challenge.', category: 'Coding' },
  { title: 'Tech Talks', desc: 'Industry experts share insights on emerging technologies.', category: 'Talks' },
  { title: 'Guidance Sessions', desc: 'Academic and career mentorship from seniors and alumni.', category: 'Guidance' },
  { title: 'Debugging Contests', desc: 'Race against time to find and fix bugs in code.', category: 'Coding' },
  { title: 'Introduction to Linux', desc: 'Hands-on sessions for command line mastery.', category: 'Workshop' },
  { title: 'Git & GitHub Sessions', desc: 'Version control workflows and collaboration.', category: 'Workshop' },
  { title: 'Open Source Contribution Drives', desc: 'Guided first contributions to real projects.', category: 'Open Source' },
  { title: 'Resume, LinkedIn & GitHub Workshops', desc: 'Build a standout developer profile.', category: 'Career' },
  { title: 'Hackathons', desc: '48-hour building sprints with prizes and mentorship.', category: 'Hackathon' },
  { title: 'Project Exhibitions', desc: 'Showcase and demo your builds to the community.', category: 'Showcase' },
]

export default function HomePage() {
  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 4)
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whatWeDo.map((item) => (
              <article key={item.num} className="group p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-label text-accent/50 font-mono">{item.num}</span>
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-highlight transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-section bg-muted/30" aria-labelledby="events-heading">
        <div className="max-w-7xl mx-auto px-container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeader
              label="High Priority"
              title="UPCOMING EVENTS"
              description="Join our next coding contests, workshops, and tech talks."
            />
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors shrink-0 mt-auto"
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
            title="LEARN. PRACTICE. BUILD."
            description="Code Club encourages students to move beyond passive learning through consistent practice, technical exploration, collaboration, and real-world problem solving."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {philosophy.map((item) => (
              <article key={item.title} className="group text-center p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="py-section bg-muted/30" aria-labelledby="activities-heading">
        <div className="max-w-7xl mx-auto px-container">
          <SectionHeader
            label="What We Run"
            title="ACTIVITIES"
            description="The complete range of events and sessions we organize throughout the year."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors shrink-0 mt-auto"
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

      <section id="team" className="py-section bg-muted/30" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-container">
          <SectionHeader
            label="Meet Us"
            title="THE TEAM"
            description="The people building Code Club — passionate students driving our technical community forward."
          />
          <div className="mt-12 space-y-16">
            {groupOrder.map((group) => (
              <div key={group}>
                <h3 className="text-label text-accent mb-6 pb-2 border-b border-border inline-block">
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
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors"
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