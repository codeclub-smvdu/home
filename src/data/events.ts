export interface Event {
  slug: string
  title: string
  category: string
  description: string
  date: string
  time: string
  format: string
  status: 'upcoming' | 'ongoing' | 'completed'
  details?: string
  whatToExpect?: string[]
  whoCanParticipate?: string
  registerLink?: string
}

export const events: Event[] = [
  {
    slug: 'budhwar-battle-code',
    title: 'Budhwar Battle Code',
    category: 'Coding Contest',
    description: 'Weekly DSA-based coding challenge to sharpen problem-solving skills.',
    date: 'Every Wednesday',
    time: '7:00 PM - 8:30 PM',
    format: 'Online (Codeforces/LeetCode)',
    status: 'upcoming',
    details: 'A weekly coding contest series focused on Data Structures and Algorithms. Each session features 3-4 problems of varying difficulty, designed to build consistency and speed.',
    whatToExpect: [
      '3-4 algorithmic problems per session',
      'Live leaderboard and discussion',
      'Post-contest editorial and walkthrough',
      'Points accumulate for semester leaderboard'
    ],
    whoCanParticipate: 'All SMVDU students (any year, any branch)',
    registerLink: 'https://forms.gle/example'
  },
  {
    slug: 'tech-talk-kubernetes',
    title: 'Introduction to Kubernetes',
    category: 'Tech Talk',
    description: 'Learn container orchestration basics and deploy your first cluster.',
    date: 'Saturday, March 15, 2025',
    time: '10:00 AM - 12:00 PM',
    format: 'Hybrid (Auditorium + Online)',
    status: 'upcoming',
    details: 'A beginner-friendly session covering containers vs VMs, Kubernetes architecture, core concepts (pods, services, deployments), and a hands-on demo deploying a sample app.',
    whatToExpect: [
      'Core Kubernetes concepts explained simply',
      'Live deployment demo',
      'Q&A with industry practitioner',
      'Resource handout for self-study'
    ],
    whoCanParticipate: 'All SMVDU students with basic Linux/Docker knowledge',
    registerLink: 'https://forms.gle/example'
  },
  {
    slug: 'git-github-workshop',
    title: 'Git & GitHub Mastery',
    category: 'Workshop',
    description: 'From basic commits to collaborative workflows — master version control.',
    date: 'Saturday, March 22, 2025',
    time: '2:00 PM - 5:00 PM',
    format: 'In-person (Lab 3, CSE Block)',
    status: 'upcoming',
    details: 'Hands-on workshop covering Git fundamentals, branching strategies, pull requests, code review practices, GitHub Actions basics, and contributing to open source.',
    whatToExpect: [
      'Interactive exercises with real repos',
      'Pair programming simulation',
      'Open source contribution walkthrough',
      'Cheatsheet and reference materials'
    ],
    whoCanParticipate: 'All SMVDU students',
    registerLink: 'https://forms.gle/example'
  },
  {
    slug: 'hackathon-2025',
    title: 'CodeSMVDU Hackathon 2025',
    category: 'Hackathon',
    description: '48-hour building sprint — turn ideas into working prototypes.',
    date: 'April 12-14, 2025',
    time: 'Friday 6 PM - Sunday 6 PM',
    format: 'Hybrid (Campus + Online)',
    status: 'upcoming',
    details: 'Our flagship annual hackathon. Build anything — web, mobile, AI, systems, hardware. Prizes, mentors, workshops, and swag. Teams of 2-4.',
    whatToExpect: [
      '₹50,000+ prize pool',
      'Industry mentors and judges',
      'Tech workshops during event',
      'Networking with sponsors'
    ],
    whoCanParticipate: 'All students (SMVDU + other colleges welcome)',
    registerLink: 'https://hackathon.smvdu.codeclub.in'
  }
]

export const getUpcomingEvents = () => events.filter(e => e.status === 'upcoming')
export const getEventBySlug = (slug: string) => events.find(e => e.slug === slug)