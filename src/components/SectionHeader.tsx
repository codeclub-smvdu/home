interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <span className="text-label uppercase tracking-wider text-primary mb-3 block font-heading font-semibold">{label}</span>
      <h2 className="text-section-title text-foreground mb-4 font-heading font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}