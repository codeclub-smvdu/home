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
    { key: 'email', url: member.email ?? '' },
  ].filter((s): s is SocialLink => Boolean(s.url))

  return (
    <article className="group text-center p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      <div className="relative w-28 h-28 mx-auto mb-5 rounded-xl overflow-hidden bg-muted/50">
        {member.image && (
          <img
            src={member.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
        {member.name}
      </h3>

      <p className="text-label text-accent mb-3">{member.role}</p>

      {member.bio && (
        <p className="text-sm text-muted mb-4 leading-relaxed">{member.bio}</p>
      )}

      <div className="flex items-center justify-center gap-3">
        {socials.map(({ key, url }) => {
          const Icon = socialIcons[key as keyof typeof socialIcons]
          const isExternal = url.startsWith('http')
          return (
            <a
              key={key}
              href={url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="w-9 h-9 rounded-lg border border-border bg-background/50 flex items-center justify-center text-muted hover:text-highlight hover:border-highlight/50 hover:bg-highlight/10 transition-all duration-200"
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