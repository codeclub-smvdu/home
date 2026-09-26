import { SectionHeader } from '@/components/SectionHeader'
import { CTA } from '@/components/CTA'
import { Check, Code, Users, Award, Rocket, BookOpen, CheckCircle, Github } from 'lucide-react'
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

const faqs = [
  { q: 'Is there a membership fee?', a: 'No. Code Club is completely free for all students.' },
  { q: 'Do I need to know coding?', a: 'Not at all. We welcome beginners and help you learn from scratch.' },
  { q: 'What is the time commitment?', a: 'Flexible. Attend events that fit your schedule — no mandatory attendance.' },
  { q: 'Can non-CSE students join?', a: 'Absolutely. We have members from ECE, IT, ME, and other branches.' },
  { q: 'What tech stacks do you use?', a: 'We explore everything — React, Node.js, Python, Go, Rust, and more. No single stack.' },
  { q: 'How do I contact the team?', a: 'Email us at codeclub@smvdu.ac.in or reach out on Discord/GitHub.' },
]

export default function JoinPage() {
  return (
    <div className="py-section">
      <div className="max-w-7xl mx-auto px-container">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full mb-4">
            <span className="material-symbols-outlined text-primary">person_add</span>
            <span className="font-sans text-xs uppercase tracking-wider text-muted">MEMBERSHIP INTAKE</span>
          </div>
          <SectionHeader
            label=""
            title="READY TO GROW? JOIN CODE CLUB SMVDU"
            description="The premier collegiate engineering society at SMVDU. We build problem-solvers through daily algorithmic practice, open source contributions, and hands-on systems hacking."
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <section aria-labelledby="who-heading">
            <h2 id="who-heading" className="font-heading text-headline-sm text-foreground mb-6">WHO WE ARE</h2>
            <div className="space-y-4">
              <article className="p-6 rounded-xl border border-border bg-surface">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2">Community Ethos</h3>
                <p className="font-sans text-body-md text-muted">A diverse, inclusive community where every member — regardless of branch, year, or background — contributes to a culture of mutual growth and technical excellence.</p>
              </article>
              <article className="p-6 rounded-xl border border-border bg-surface">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items_center justify-center text-primary mb-3">
                  <Code className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2">Technical Rigor</h3>
                <p className="font-sans text-body-md text-muted">We don't do surface-level learning. Deep-dive sessions, rigorous problem sets, and real engineering challenges that prepare you for industry and research.</p>
              </article>
              <article className="p-6 rounded-xl border border-border bg-surface">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Github className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2">Open Source Culture</h3>
                <p className="font-sans text-body-md text-muted">First PRs, contribution drives, maintainer mentorship — we believe the best way to learn is by building in the open, together.</p>
              </article>
            </div>
          </section>

          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="font-heading text-headline-sm text-foreground mb-6">WHY JOIN</h2>
            <div className="space-y-6">
              {whyJoin.map((item, i) => (
                <article key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-headline-sm text-foreground mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-muted">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-headline-md text-foreground mb-4">HOW TO JOIN</h2>
            <p className="text-muted mb-8">Our 3-step intake pipeline ensures every member starts strong.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="p-6 rounded-xl border border-border bg-surface text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">01</div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2">Register Profile</h3>
                <p className="font-sans text-body-md text-muted">Fill out the intake form with your interests, background, and availability.</p>
              </article>
              <article className="p-6 rounded-xl border border-border bg-surface text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">02</div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2">Attend Onboarding Sprint</h3>
                <p className="font-sans text-body-md text-muted">Join a 2-week guided sprint covering Git, problem-solving basics, and club culture.</p>
              </article>
              <article className="p-6 rounded-xl border border-border bg-surface text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">03</div>
                <h3 className="font-heading text-headline-sm text-foreground mb-2">Get Assigned to Squads</h3>
                <p className="font-sans text-body-md text-muted">Matched to core squads (CP, Web, Systems, Design, Events) based on your interests.</p>
              </article>
            </div>
          </div>

          <section className="p-8 rounded-xl border border-border bg-surface text-center" aria-labelledby="faq-heading">
            <h3 id="faq-heading" className="font-heading text-headline-sm text-foreground mb-6">FREQUENTLY ASKED QUESTIONS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center gap-3 cursor-pointer list-none">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <h4 className="font-semibold text-foreground">{faq.q}</h4>
                  </summary>
                  <p className="text-muted text-sm mt-3 pl-8">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="text-center">
            <CTA
              title="Ready to grow?"
              description="Join Code Club SMVDU and start your journey towards algorithmic excellence."
              buttonText="Join the Club"
              buttonHref="https://forms.gle/example"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}