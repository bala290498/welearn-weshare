export interface Talent {
  id: string
  name: string
  category: string
  skillLevel: string
  photo: string
  portfolio: string[]
  achievements: string[]
  competitions: string[]
  socialLinks: {
    linkedin?: string
    github?: string
    website?: string
    twitter?: string
  }
  contactEmail: string
  contactPhone: string
}

export const talents: Talent[] = [
  {
    id: 'talent-1',
    name: 'Rajesh Kumar',
    category: 'DevOps',
    skillLevel: 'Expert',
    photo: '/api/placeholder/300/300',
    portfolio: [
      'Built CI/CD pipeline for 50+ microservices',
      'Reduced deployment time by 80%',
      'Implemented Kubernetes cluster for production',
      'Automated infrastructure with Terraform'
    ],
    achievements: [
      'Winner: DevOps Challenge 2024',
      'Top Performer: Cloud Infrastructure Competition',
      'Featured: Best Automation Solution Award'
    ],
    competitions: [
      'DevOps Master Challenge - 1st Place',
      'Cloud Architecture Hackathon - 2nd Place',
      'Infrastructure Automation Contest - Winner'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/rajesh-kumar',
      github: 'https://github.com/rajesh-kumar',
      website: 'https://rajeshkumar.dev'
    },
    contactEmail: 'rajesh.kumar@example.com',
    contactPhone: '+91-9876543201'
  },
  {
    id: 'talent-2',
    name: 'Priya Sharma',
    category: 'Linux',
    skillLevel: 'Advanced',
    photo: '/api/placeholder/300/300',
    portfolio: [
      'Managed 100+ Linux servers in production',
      'Created automated backup solutions',
      'Optimized system performance by 60%',
      'Developed custom shell scripts for automation'
    ],
    achievements: [
      'Linux System Admin Excellence Award',
      'Top Contributor: Open Source Linux Tools',
      'Featured: Best Scripting Solution'
    ],
    competitions: [
      'Linux Administration Challenge - 1st Place',
      'Shell Scripting Competition - Winner',
      'Server Optimization Contest - Top 3'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priya-sharma',
      github: 'https://github.com/priya-sharma'
    },
    contactEmail: 'priya.sharma@example.com',
    contactPhone: '+91-9876543202'
  },
  {
    id: 'talent-3',
    name: 'Amit Patel',
    category: 'AWS',
    skillLevel: 'Expert',
    photo: '/api/placeholder/300/300',
    portfolio: [
      'Architected multi-region AWS infrastructure',
      'Reduced cloud costs by 45%',
      'Implemented serverless solutions',
      'Designed scalable cloud architectures'
    ],
    achievements: [
      'AWS Solutions Architect Certified',
      'Cloud Innovation Award Winner',
      'Top Performer: AWS Challenge Series'
    ],
    competitions: [
      'AWS Cloud Challenge - 1st Place',
      'Serverless Architecture Competition - Winner',
      'Cost Optimization Hackathon - Top 3'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amit-patel',
      github: 'https://github.com/amit-patel',
      website: 'https://amitpatel.cloud'
    },
    contactEmail: 'amit.patel@example.com',
    contactPhone: '+91-9876543203'
  },
  {
    id: 'talent-4',
    name: 'Sneha Reddy',
    category: 'DevOps',
    skillLevel: 'Advanced',
    photo: '/api/placeholder/300/300',
    portfolio: [
      'Implemented GitOps workflows',
      'Containerized legacy applications',
      'Set up monitoring and alerting systems',
      'Created disaster recovery solutions'
    ],
    achievements: [
      'DevOps Excellence Award',
      'Best CI/CD Implementation',
      'Top Contributor: DevOps Community'
    ],
    competitions: [
      'DevOps Innovation Challenge - 2nd Place',
      'Container Orchestration Contest - Winner',
      'Automation Excellence Award'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sneha-reddy',
      github: 'https://github.com/sneha-reddy'
    },
    contactEmail: 'sneha.reddy@example.com',
    contactPhone: '+91-9876543204'
  },
  {
    id: 'talent-5',
    name: 'Vikram Singh',
    category: 'AWS',
    skillLevel: 'Advanced',
    photo: '/api/placeholder/300/300',
    portfolio: [
      'Migrated on-premise infrastructure to AWS',
      'Implemented auto-scaling solutions',
      'Optimized database performance on RDS',
      'Created cost-effective cloud solutions'
    ],
    achievements: [
      'AWS Migration Specialist',
      'Cloud Cost Optimization Expert',
      'Top Performer: AWS Training Program'
    ],
    competitions: [
      'AWS Migration Challenge - Winner',
      'Cloud Architecture Design - 2nd Place',
      'Performance Optimization Contest - Top 3'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/vikram-singh',
      github: 'https://github.com/vikram-singh'
    },
    contactEmail: 'vikram.singh@example.com',
    contactPhone: '+91-9876543205'
  }
]

