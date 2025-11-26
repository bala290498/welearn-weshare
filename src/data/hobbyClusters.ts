export interface HobbyCluster {
  id: string
  name: string
  category: string
  icon: string
  description: string
  memberCount: number
  communityHead: string
  whatsappUrl: string
  topics: string[]
}

export const hobbyClusters: HobbyCluster[] = [
  {
    id: 'it-devops',
    name: 'DevOps Enthusiasts',
    category: 'IT',
    icon: '⚙️',
    description: 'A community for DevOps practitioners to share knowledge, tools, and best practices.',
    memberCount: 245,
    communityHead: 'Rajesh Kumar',
    whatsappUrl: 'https://chat.whatsapp.com/devops-community',
    topics: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Cloud Infrastructure']
  },
  {
    id: 'it-linux',
    name: 'Linux Users Group',
    category: 'IT',
    icon: '🐧',
    description: 'Connect with Linux enthusiasts, share tips, and learn from experienced administrators.',
    memberCount: 189,
    communityHead: 'Priya Sharma',
    whatsappUrl: 'https://chat.whatsapp.com/linux-community',
    topics: ['System Administration', 'Shell Scripting', 'Server Management', 'Open Source']
  },
  {
    id: 'it-aws',
    name: 'AWS Cloud Community',
    category: 'IT',
    icon: '☁️',
    description: 'Learn and share AWS cloud solutions, architectures, and best practices.',
    memberCount: 312,
    communityHead: 'Amit Patel',
    whatsappUrl: 'https://chat.whatsapp.com/aws-community',
    topics: ['EC2', 'S3', 'Lambda', 'Cloud Architecture', 'Cost Optimization']
  },
  {
    id: 'it-python',
    name: 'Python Developers',
    category: 'IT',
    icon: '🐍',
    description: 'A vibrant community for Python developers to collaborate and grow together.',
    memberCount: 456,
    communityHead: 'Sneha Reddy',
    whatsappUrl: 'https://chat.whatsapp.com/python-community',
    topics: ['Web Development', 'Data Science', 'Automation', 'Machine Learning', 'Django']
  },
  {
    id: 'hr-team',
    name: 'HR Professionals',
    category: 'HR',
    icon: '👥',
    description: 'Network with HR professionals, share insights, and discuss industry trends.',
    memberCount: 178,
    communityHead: 'Anjali Mehta',
    whatsappUrl: 'https://chat.whatsapp.com/hr-community',
    topics: ['Recruitment', 'Talent Management', 'Employee Engagement', 'HR Tech']
  }
]

