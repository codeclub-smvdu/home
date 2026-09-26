import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { TeamMember } from '@/data/team'

interface TeamCardProps {
  member: TeamMember
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
}

interface SocialLink {
  key: string
  url: string
}

export function TeamCard({ member }: TeamCardProps) {
  const socials: SocialLink[] = [
    { key: 'github', url: member.github ?? '' },
    { key: 'linkedin', url: member.linkedin ?? '' },
    { key: 'instagram', url: member.instagram ?? '' },
    { key: 'email', url: `mailto:${member.email}` },
  ].filter((s): s is SocialLink => Boolean(s.url))

  return (
    <article className="group text-center p-6 rounded-xl border border-border bg-surface hover:border-primary/50 hover:shadow-lg transition-all duration-200">
      <div className="relative w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-surface-dim">
        {member.image && (
          <img
            src={member.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <h3 className="font-heading text-headline-sm text-foreground mb-1">
        {member.name}
      </h3>

      <p className="font-sans text-sm text-primary font-medium mb-3">{member.role}</p>
      <p className="font-sans text-xs text-muted uppercase tracking-wider">{member.group.replace('-', ' ')}</p>

      <div className="flex items-center justify-center gap-2 mt-4">
        {socials.map(({ key, url }) => {
          const Icon = socialIcons[key as keyof typeof socialIcons]
          const isExternal = url.startsWith('http')
          return (
            <a
              key={key}
              href={url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="w-8 h-8 rounded-lg border border-border bg-surface-dim flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </article>
  )
}