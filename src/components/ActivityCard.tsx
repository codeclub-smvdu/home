import { ChevronRight } from 'lucide-react'

interface ActivityCardProps {
  title: string
  description?: string
  desc?: string
  category?: string
}

export function ActivityCard({ title, description, desc, category }: ActivityCardProps) {
  const text = description || desc
  return (
    <article className="group p-5 rounded-xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      {category && (
        <span className="text-label text-accent mb-3 inline-block">{category}</span>
      )}
      <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-highlight transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{text}</p>
      <div className="mt-4 inline-flex items-center gap-1.5 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Explore
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </div>
    </article>
  )
}