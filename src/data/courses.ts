export interface Course {
  id: string
  title: string
  category: string
  description: string
  duration: string
  level: string
  instructor: string
  price: string
  syllabus: string[]
  features: string[]
  prerequisites: string[]
  contactEmail: string
  contactPhone: string
}

export const courses: Course[] = [
  {
    id: 'devops',
    title: 'DevOps Engineering',
    category: 'DevOps',
    description: 'Master DevOps practices, CI/CD pipelines, containerization, and cloud infrastructure automation.',
    duration: '12 weeks',
    level: 'Intermediate',
    instructor: 'Expert DevOps Engineer',
    price: '₹8,000 - ₹5,000',
    syllabus: [
      'Introduction to DevOps and CI/CD',
      'Version Control with Git',
      'Docker and Containerization',
      'Kubernetes Orchestration',
      'Infrastructure as Code (Terraform)',
      'CI/CD Pipeline Setup',
      'Monitoring and Logging',
      'Cloud Platforms (AWS/Azure/GCP)',
      'Security in DevOps',
      'Project: End-to-end DevOps Pipeline'
    ],
    features: [
      'Hands-on projects with real-world scenarios',
      'Industry-standard tools and practices',
      'Live coding sessions',
      'Community support and peer learning',
      'Certificate of completion',
      'Portfolio-ready projects'
    ],
    prerequisites: [
      'Basic knowledge of Linux commands',
      'Understanding of software development lifecycle',
      'Familiarity with command line interface'
    ],
    contactEmail: 'devops@welearnweshare.com',
    contactPhone: '+91-9876543210'
  },
  {
    id: 'linux',
    title: 'Linux System Administration',
    category: 'Linux',
    description: 'Learn Linux fundamentals, system administration, shell scripting, and server management.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    instructor: 'Senior Linux Administrator',
    price: '₹7,000 - ₹4,500',
    syllabus: [
      'Linux Fundamentals and File System',
      'Command Line Mastery',
      'User and Permission Management',
      'Package Management',
      'Shell Scripting (Bash)',
      'System Services and Process Management',
      'Network Configuration',
      'Server Administration',
      'Security Hardening',
      'Project: Deploy and Manage Linux Server'
    ],
    features: [
      'Practical labs on real Linux systems',
      'Shell scripting exercises',
      'Server management hands-on',
      'Community forum access',
      'Certificate of completion',
      'Career guidance included'
    ],
    prerequisites: [
      'Basic computer skills',
      'Willingness to learn command line',
      'No prior Linux experience required'
    ],
    contactEmail: 'linux@welearnweshare.com',
    contactPhone: '+91-9876543211'
  },
  {
    id: 'aws',
    title: 'AWS Cloud Computing',
    category: 'Cloud',
    description: 'Comprehensive AWS training covering EC2, S3, Lambda, and cloud architecture best practices.',
    duration: '14 weeks',
    level: 'Intermediate',
    instructor: 'AWS Certified Solutions Architect',
    price: '₹9,000 - ₹6,000',
    syllabus: [
      'AWS Fundamentals and Core Services',
      'EC2 and Compute Services',
      'S3 and Storage Solutions',
      'VPC and Networking',
      'Lambda and Serverless Computing',
      'RDS and Database Services',
      'IAM and Security',
      'CloudFormation and Infrastructure',
      'Monitoring with CloudWatch',
      'Project: Build Scalable Cloud Application'
    ],
    features: [
      'AWS free tier hands-on practice',
      'Real-world cloud projects',
      'Preparation for AWS certification',
      'Industry best practices',
      'Certificate of completion',
      'Job placement assistance'
    ],
    prerequisites: [
      'Basic understanding of cloud concepts',
      'Familiarity with networking basics',
      'Linux command line knowledge helpful'
    ],
    contactEmail: 'aws@welearnweshare.com',
    contactPhone: '+91-9876543212'
  }
]

