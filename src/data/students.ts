export interface Student {
  slug: string
  name: string
  tag: string
  category: string
  batchEnrolled: string
  performance: string
  projectsDone: string[]
  skillLevel: string
  photo?: string
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

export const students: Student[] = [
  {
    slug: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    tag: 'DevOps Expert',
    category: 'DevOps',
    batchEnrolled: 'DevOps Batch 2024',
    performance: 'Top Performer',
    projectsDone: [
      'CI/CD Pipeline Automation',
      'Kubernetes Cluster Setup',
      'Terraform Infrastructure',
      'Docker Containerization'
    ],
    skillLevel: 'Expert',
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
    slug: 'sneha-reddy',
    name: 'Sneha Reddy',
    tag: 'DevOps Specialist',
    category: 'DevOps',
    batchEnrolled: 'DevOps Batch 2024',
    performance: 'Excellent',
    projectsDone: [
      'GitOps Workflow Implementation',
      'Container Orchestration',
      'Monitoring & Alerting System',
      'Disaster Recovery Solution'
    ],
    skillLevel: 'Advanced',
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
    slug: 'amit-patel',
    name: 'Amit Patel',
    tag: 'AWS Solutions Architect',
    category: 'AWS',
    batchEnrolled: 'AWS Batch 2024',
    performance: 'Outstanding',
    projectsDone: [
      'Multi-Region AWS Infrastructure',
      'Serverless Application',
      'Cloud Cost Optimization',
      'Scalable Architecture Design'
    ],
    skillLevel: 'Expert',
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
    slug: 'vikram-singh',
    name: 'Vikram Singh',
    tag: 'AWS Cloud Engineer',
    category: 'AWS',
    batchEnrolled: 'AWS Batch 2024',
    performance: 'Excellent',
    projectsDone: [
      'Cloud Migration Project',
      'Auto-Scaling Implementation',
      'RDS Performance Optimization',
      'Cost-Effective Solutions'
    ],
    skillLevel: 'Advanced',
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
  },
  {
    slug: 'ananya-krishnan',
    name: 'Ananya Krishnan',
    tag: 'AWS Cloud Developer',
    category: 'AWS',
    batchEnrolled: 'AWS Batch 2024',
    performance: 'Very Good',
    projectsDone: [
      'Lambda Function Development',
      'S3 Bucket Management',
      'CloudWatch Monitoring',
      'API Gateway Setup'
    ],
    skillLevel: 'Intermediate',
    portfolio: [
      'Developed serverless applications on AWS',
      'Implemented S3-based storage solutions',
      'Set up CloudWatch monitoring dashboards',
      'Created RESTful APIs using API Gateway'
    ],
    achievements: [
      'AWS Developer Associate Certified',
      'Serverless Innovation Award',
      'Top Learner: AWS Training Program'
    ],
    competitions: [
      'AWS Serverless Challenge - 2nd Place',
      'API Development Contest - Top 5',
      'Cloud Innovation Hackathon - Participant'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ananya-krishnan',
      github: 'https://github.com/ananya-krishnan'
    },
    contactEmail: 'ananya.krishnan@example.com',
    contactPhone: '+91-9876543206'
  },
  {
    slug: 'priya-sharma',
    name: 'Priya Sharma',
    tag: 'Linux System Admin',
    category: 'Linux',
    batchEnrolled: 'Linux Batch 2024',
    performance: 'Top Performer',
    projectsDone: [
      'Server Management System',
      'Automated Backup Solution',
      'Performance Optimization',
      'Shell Scripting Automation'
    ],
    skillLevel: 'Advanced',
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
  }
]

// Helper function to get all students
export function getAllStudents(): Student[] {
  return students
}

// Helper function to get student by slug
export function getStudentBySlug(slug: string): Student | undefined {
  return students.find(student => student.slug === slug)
}

// Helper function to get students by category
export function getStudentsByCategory(category: string): Student[] {
  return students.filter(student => 
    student.category.toLowerCase() === category.toLowerCase()
  )
}



