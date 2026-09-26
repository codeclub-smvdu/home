import { SectionHeader } from '@/components/SectionHeader'
import { TeamCard } from '@/components/TeamCard'
import { team, groupOrder, groupLabels } from '@/data/team'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the Code Club SMVDU team — passionate students building a technical community through code, events, and mentorship.',
}

export default function TeamPage() {
  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full mb-4">
            <span className="material-symbols-outlined text-primary">groups</span>
            <span className="font-sans text-xs uppercase tracking-wider text-muted">TEAM DIRECTORY</span>
          </div>
          <SectionHeader
            label=""
            title="THE TEAM"
            description="The people building Code Club — passionate students driving our technical community forward."
          />
        </header>

        <div className="space-y-16">
          {groupOrder.map((group) => (
            <section key={group} aria-labelledby={`group-${group}`}>
              <h2 id={`group-${group}`} className="font-heading font-semibold uppercase tracking-wider text-sm text-foreground mb-6 pb-2 border-b border-border inline-block">
                {groupLabels[group]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {team.filter(m => m.group === group).map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16 p-8 rounded-xl border border-border bg-surface">
          <h3 className="font-heading text-headline-sm text-foreground mb-3">Want to join the team?</h3>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            We're always looking for passionate students to help run events, build projects, design graphics, and grow the community.
          </p>
          <a href="/join" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors">
            Join the Club →
          </a>
        </div>
      </div>
    </div>
  )
}