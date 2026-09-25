export interface Project {
  slug: string
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
  github?: string
  category: 'hackathon' | 'open-source' | 'web' | 'ai-ml' | 'systems' | 'other'
  team: string[]
  year: string
}

export const projects: Project[] = [
  {
    slug: 'smvdu-campus-app',
    title: 'SMVDU Campus Connect',
    description: 'A comprehensive mobile app for SMVDU students featuring timetable, notices, mess menu, bus tracking, and peer marketplace.',
    image: '/projects/campus-connect.jpg',
    techStack: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    link: 'https://github.com/codeclub-smvdu/campus-connect',
    github: 'https://github.com/codeclub-smvdu/campus-connect',
    category: 'hackathon',
    team: ['Rahul Sharma', 'Priya Singh', 'Amit Kumar'],
    year: '2024'
  },
  {
    slug: 'dsa-visualizer',
    title: 'DSA Visualizer',
    description: 'Interactive web-based visualization of sorting algorithms, graph traversals, and data structure operations with step-by-step animation.',
    image: '/projects/dsa-visualizer.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    link: 'https://dsa-viz.codeclub.in',
    github: 'https://github.com/codeclub-smvdu/dsa-visualizer',
    category: 'web',
    team: ['Sneha Reddy', 'Vikram Patel'],
    year: '2024'
  },
  {
    slug: 'attendance-automation',
    title: 'Attendance Automation Bot',
    description: 'Telegram bot that automates attendance marking via QR codes, generates reports, and sends reminders for low attendance.',
    image: '/projects/attendance-bot.jpg',
    techStack: ['Python', 'Telegram Bot API', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/codeclub-smvdu/attendance-bot',
    github: 'https://github.com/codeclub-smvdu/attendance-bot',
    category: 'open-source',
    team: ['Arjun Mehta', 'Kavya Nair'],
    year: '2023'
  },
  {
    slug: 'placement-prep',
    title: 'Placement Prep Portal',
    description: 'Curated resources, company-wise experiences, mock test scheduler, and peer mentorship matching for placement season.',
    image: '/projects/placement-prep.jpg',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind'],
    link: 'https://placement.codeclub.in',
    github: 'https://github.com/codeclub-smvdu/placement-prep',
    category: 'web',
    team: ['Team Placement Cell'],
    year: '2024'
  }
]

export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category)

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug)