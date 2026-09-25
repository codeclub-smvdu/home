import { SectionHeader } from '@/components/SectionHeader'
import { CTA } from '@/components/CTA'
import { Check, Code, Users, Award, Rocket, BookOpen } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join',
  description: 'Join Code Club SMVDU — improve problem-solving skills, participate in coding challenges, learn practical technologies, work on projects, and connect with peers.',
}

const whyJoin = [
  { icon: Code, title: 'Improve Problem-Solving', desc: 'Sharpen your algorithmic thinking through consistent practice and guided sessions.' },
  { icon: Award, title: 'Compete & Win', desc: 'Participate in coding contests, hackathons, and debugging competitions with prizes.' },
  { icon: Rocket, title: 'Learn Practical Tech', desc: 'Workshops on Git, Linux, Docker, Kubernetes, cloud, and modern development tools.' },
  { icon: Users, title: 'Build Real Projects', desc: 'Collaborate on web apps, mobile apps, open source, and hackathon projects.' },
  { icon: BookOpen, title: 'Explore Open Source', desc: 'Guided first contributions, contribution drives, and maintainer mentorship.' },
  { icon: Users, title: 'Connect & Grow', desc: 'Network with peers, seniors, alumni, and industry mentors who share your interests.' },
]

const whoCanJoin = [
  'All SMVDU students (any year, any branch)',
  'No prior coding experience required',
  'Just curiosity and willingness to learn',
  'Open to students from other colleges for select events',
]

export default function JoinPage() {
  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            label="Get Involved"
            title="JOIN CODE CLUB"
            description="Learn. Practice. Build. Compete."
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <section aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-label text-accent mb-6 pb-2 border-b border-border inline-block">
              WHO CAN JOIN?
            </h2>
            <ul className="space-y-4" role="list">
              {whoCanJoin.map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                  <Check className="w-6 h-6 text-highlight shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-label text-accent mb-6 pb-2 border-b border-border inline-block">
              WHY JOIN?
            </h2>
            <div className="space-y-6">
              {whyJoin.map((item, i) => (
                <article key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-background">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted mb-8">
            Ready to start your journey? Fill out the registration form and join our community of problem-solvers.
          </p>
          <CTA
            title="JOIN THE CLUB"
            description="Take the first step towards becoming a better problem-solver."
            buttonText="REGISTER NOW →"
            buttonHref="https://forms.gle/example"
            variant="primary"
          />
        </div>

        <section className="mt-16 p-8 rounded-2xl border border-border bg-background text-center" aria-labelledby="faq-heading">
          <h3 id="faq-heading" className="text-label text-accent mb-4">Questions?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Is there a membership fee?</h4>
              <p className="text-muted text-sm">No. Code Club is completely free for all students.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Do I need to know coding?</h4>
              <p className="text-muted text-sm">Not at all. We welcome beginners and help you learn from scratch.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">What is the time commitment?</h4>
              <p className="text-muted text-sm">Flexible. Attend events that fit your schedule — no mandatory attendance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Can non-CSE students join?</h4>
              <p className="text-muted text-sm">Absolutely. We have members from ECE, IT, ME, and other branches.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}