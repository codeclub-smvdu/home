'use client'

import { SectionHeader } from '@/components/SectionHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, getProjectsByCategory } from '@/data/projects'
import { useState } from 'react'

const categories = ['All', 'Hackathon', 'Open Source', 'Web', 'AI/ML', 'Systems', 'Other'] as const

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory.toLowerCase())

  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-section pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full mb-6">
              <span className="material-symbols-outlined text-primary">code</span>
              <span className="font-sans text-xs uppercase tracking-wider text-muted">Engineering Showcase</span>
            </div>
            <SectionHeader
              label=""
              title="PROJECTS SHOWCASE"
              description="Explore innovative student-built tools, web applications, and systems."
            />
          </div>
        </section>

        <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border py-3">
          <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn px-4 py-1.5 rounded-lg font-sans text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface hover:bg-surface-dim text-muted hover:text-foreground border border-border'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  )
}