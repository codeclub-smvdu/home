import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="aspect-video relative bg-muted/50 overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex gap-2">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-foreground px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-muted/10 transition-colors flex items-center justify-center gap-2"
          >
            View Project
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-label text-accent bg-accent/10 px-2 py-0.5 rounded">
            {project.category}
          </span>
          <span className="text-label text-muted">{project.year}</span>
        </div>

        <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-highlight transition-colors">
          {project.title}
        </h3>

        <p className="text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded border border-border text-muted bg-background/50">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded border border-border text-muted bg-background/50">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <div className="text-sm text-muted mb-4">
          <span className="font-medium">Team:</span> {' '}
          {project.team.slice(0, 3).join(', ')}
          {project.team.length > 3 && ` +${project.team.length - 3} more`}
        </div>

        <Link
          href={project.github || project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors mt-auto"
        >
          View Code
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}