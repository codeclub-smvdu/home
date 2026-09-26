import { ChevronRight, Code, Zap, Terminal, Github, Mic, Hammer, Users, Network } from 'lucide-react'

interface ActivityCardProps {
  title: string
  description?: string
  desc?: string
  category?: string
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Weekly Contests': <Code className="w-5 h-5" aria-hidden="true" />,
  'Workshops': <Hammer className="w-5 h-5" aria-hidden="true" />,
  'Tech Talks': <Mic className="w-5 h-5" aria-hidden="true" />,
  'Hackathons': <Zap className="w-5 h-5" aria-hidden="true" />,
  'Open Source': <Github className="w-5 h-5" aria-hidden="true" />,
  'Community': <Users className="w-5 h-5" aria-hidden="true" />,
}

export function ActivityCard({ title, description, desc, category }: ActivityCardProps) {
  const text = description || desc
  const CategoryIcon = categoryIcons[category || ''] || <Terminal className="w-5 h-5" aria-hidden="true" />

  return (
    <article className="group p-6 rounded-xl border border-border bg-surface hover:border-primary/50 hover:shadow-lg transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform duration-200">
        {CategoryIcon}
      </div>
      <h3 className="font-heading text-headline-sm text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-sans text-body-sm text-muted leading-relaxed mb-4">{text}</p>
      <div className="inline-flex items-center gap-1.5 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Explore
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </div>
    </article>
  )
}