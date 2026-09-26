import Link from 'next/link'
import { ArrowRight, Github, Terminal } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

const categoryColors: Record<string, string> = {
  'hackathon': 'bg-primary/10 text-primary border-primary/20',
  'open-source': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'web': 'bg-primary/10 text-primary border-primary/20',
  'ai-ml': 'bg-violet-100 text-violet-800 border-violet-200',
  'systems': 'bg-amber-100 text-amber-800 border-amber-200',
  'other': 'bg-muted/10 text-muted border-muted/20',
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative bg-surface border border-border rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-lg" data-category={project.category}>
      <div>
        <div className="relative h-64 w-full overflow-hidden bg-surface-dim">
          {project.image && (
            <img
              src={project.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 bg-surface/90 backdrop-blur-sm border border-border/40 rounded-full font-sans text-sm text-primary font-semibold`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-headline-md text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-body-md text-muted mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-surface-dim border border-border/30 rounded font-sans text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border/20 pt-4 mt-auto">
        <span className="font-sans text-xs text-muted">Maintained by Code Club Core</span>
        <div className="flex items-center gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-surface-dim hover:bg-surface hover:border-border transition-colors flex items-center gap-1"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span className="font-sans text-sm">GitHub</span>
            </Link>
          )}
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary text-white hover:bg-primary-dark rounded-lg transition-colors flex items-center gap-1"
            aria-label="Live Demo"
          >
            <Terminal className="w-4 h-4" aria-hidden="true" />
            <span className="font-sans text-sm">Live Demo</span>
          </Link>
        </div>
      </div>
    </article>
  )
}