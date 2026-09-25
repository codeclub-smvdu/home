interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <span className="text-label text-accent mb-3 block">{label}</span>
      <h2 className="text-section-title text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}