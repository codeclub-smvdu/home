import { SectionHeader } from '@/components/SectionHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, getProjectsByCategory } from '@/data/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects built by Code Club SMVDU members — hackathon winners, open source contributions, web apps, and more.',
}

const categories = ['All', 'Hackathon', 'Open Source', 'Web', 'AI/ML', 'Systems', 'Other'] as const

export default function ProjectsPage() {
  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            label="Student Work"
            title="PROJECTS"
            description="Ideas into working solutions. Explore projects built through club activities, hackathons, and collaborative development."
          />
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by category">
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
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted">
            More projects coming soon.{' '}
            <a href="#" className="text-accent hover:underline">View on GitHub →</a>
          </p>
        </div>
      </div>
    </div>
  )
}