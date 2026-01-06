export interface JobOpening {
  id: string
  title: string
  company: string
  type: 'full-time' | 'freelance'
  location: string
  category: string
  description: string
  requirements: string[]
  postedDate: string
  applyLink: string
}

export const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior DevOps Engineer',
    company: 'TechCorp',
    type: 'full-time',
    location: 'Remote / Bangalore',
    category: 'DevOps',
    description: 'We are looking for an experienced DevOps Engineer to join our team and help build scalable infrastructure.',
    requirements: [
      '5+ years of experience in DevOps',
      'Strong knowledge of Kubernetes, Docker, CI/CD',
      'Experience with AWS/GCP',
      'Excellent problem-solving skills'
    ],
    postedDate: '2024-01-15',
    applyLink: 'mailto:careers@techcorp.com?subject=Senior DevOps Engineer Application'
  },
  {
    id: '3',
    title: 'Linux System Admin - Freelance',
    company: 'StartupXYZ',
    type: 'freelance',
    location: 'Remote',
    category: 'Linux',
    description: 'Part-time freelance opportunity to manage Linux servers and infrastructure for a growing startup.',
    requirements: [
      '3+ years Linux administration experience',
      'Strong scripting skills (Bash, Python)',
      'Available 20 hours/week',
      'Remote work capability'
    ],
    postedDate: '2024-01-18',
    applyLink: 'mailto:projects@startupxyz.com?subject=Linux System Admin Freelance Application'
  },
  {
    id: '4',
    title: 'Full-Stack Developer',
    company: 'InnovateLabs',
    type: 'full-time',
    location: 'Mumbai',
    category: 'Development',
    description: 'Join our team to build cutting-edge web applications using modern technologies.',
    requirements: [
      '3+ years full-stack development experience',
      'Proficiency in React, Node.js, TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Strong communication skills'
    ],
    postedDate: '2024-01-22',
    applyLink: 'mailto:jobs@innovatelabs.com?subject=Full-Stack Developer Application'
  },
]













