export interface TeamMember {
  name: string
  role: string
  group: 'leadership' | 'core' | 'technical' | 'design-media'
  image: string
  github?: string
  linkedin?: string
  instagram?: string
  email?: string
  bio?: string
}

export const team: TeamMember[] = [
  // Leadership
  {
    name: 'Rahul Sharma',
    role: 'President',
    group: 'leadership',
    image: '/team/rahul.jpg',
    github: 'https://github.com/rahulsharma',
    linkedin: 'https://linkedin.com/in/rahulsharma',
    bio: 'Final year CSE. Competitive programmer. Building scalable systems.'
  },
  {
    name: 'Priya Singh',
    role: 'Vice President',
    group: 'leadership',
    image: '/team/priya.jpg',
    github: 'https://github.com/priyasingh',
    linkedin: 'https://linkedin.com/in/priyasingh',
    bio: 'Final year CSE. Full-stack developer. Open source enthusiast.'
  },
  {
    name: 'Amit Kumar',
    role: 'General Secretary',
    group: 'leadership',
    image: '/team/amit.jpg',
    github: 'https://github.com/amitkumar',
    linkedin: 'https://linkedin.com/in/amitkumar',
    bio: 'Third year CSE. DevOps & cloud native. Kubernetes practitioner.'
  },
  // Core Team
  {
    name: 'Sneha Reddy',
    role: 'Events Lead',
    group: 'core',
    image: '/team/sneha.jpg',
    github: 'https://github.com/sneha',
    linkedin: 'https://linkedin.com/in/sneha',
    bio: 'Third year IT. Community builder. Hackathon organizer.'
  },
  {
    name: 'Vikram Patel',
    role: 'Technical Lead',
    group: 'core',
    image: '/team/vikram.jpg',
    github: 'https://github.com/vikram',
    linkedin: 'https://linkedin.com/in/vikram',
    bio: 'Third year CSE. Frontend specialist. React ecosystem.'
  },
  {
    name: 'Arjun Mehta',
    role: 'Outreach Lead',
    group: 'core',
    image: '/team/arjun.jpg',
    github: 'https://github.com/arjun',
    linkedin: 'https://linkedin.com/in/arjun',
    bio: 'Second year ECE. Community partnerships. Speaker relations.'
  },
  {
    name: 'Kavya Nair',
    role: 'Content Lead',
    group: 'core',
    image: '/team/kavya.jpg',
    github: 'https://github.com/kavya',
    linkedin: 'https://linkedin.com/in/kavya',
    bio: 'Second year CSE. Technical writing. Documentation advocate.'
  },
  // Technical Team
  {
    name: 'Aditya Joshi',
    role: 'Backend Developer',
    group: 'technical',
    image: '/team/aditya.jpg',
    github: 'https://github.com/aditya',
    bio: 'Second year CSE. Go, Python, distributed systems.'
  },
  {
    name: 'Meera Shah',
    role: 'Mobile Developer',
    group: 'technical',
    image: '/team/meera.jpg',
    github: 'https://github.com/meera',
    bio: 'Second year IT. Flutter, React Native, cross-platform.'
  },
  {
    name: 'Rohan Gupta',
    role: 'DevOps Engineer',
    group: 'technical',
    image: '/team/rohan.jpg',
    github: 'https://github.com/rohan',
    bio: 'Third year CSE. CI/CD, AWS, Terraform, monitoring.'
  },
  // Design / Media
  {
    name: 'Ishita Verma',
    role: 'UI/UX Designer',
    group: 'design-media',
    image: '/team/ishita.jpg',
    github: 'https://github.com/ishita',
    bio: 'Second year CSE. Figma, design systems, accessibility.'
  },
  {
    name: 'Karan Malhotra',
    role: 'Media & Comms',
    group: 'design-media',
    image: '/team/karan.jpg',
    github: 'https://github.com/karan',
    bio: 'Second year ECE. Video editing, social media, branding.'
  }
]

export const getTeamByGroup = (group: TeamMember['group']) =>
  team.filter(m => m.group === group)

export const groupOrder = ['leadership', 'core', 'technical', 'design-media'] as const
export const groupLabels: Record<TeamMember['group'], string> = {
  leadership: 'Leadership',
  core: 'Core Team',
  technical: 'Technical Team',
  'design-media': 'Design & Media'
}