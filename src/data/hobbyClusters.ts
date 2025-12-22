export interface HobbyCluster {
  id: string
  name: string
  category: string
  icon: string
  description: string
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
    communityHead: 'Balasubramani Arumugam',
    whatsappUrl: 'https://chat.whatsapp.com/devops-community',
    topics: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Cloud Infrastructure']
  },
  {
    id: 'it-linux',
    name: 'Linux Users Group',
    category: 'IT',
    icon: '🐧',
    description: 'Connect with Linux enthusiasts, share tips, and learn from experienced administrators.',
    communityHead: 'Balasubramani Arumugam',
    whatsappUrl: 'https://chat.whatsapp.com/linux-community',
    topics: ['System Administration', 'Shell Scripting', 'Server Management', 'Open Source']
  },
  {
    id: 'it-aws',
    name: 'AWS Cloud Community',
    category: 'IT',
    icon: '☁️',
    description: 'Learn and share AWS cloud solutions, architectures, and best practices.',
    communityHead: 'Balasubramani Arumugam',
    whatsappUrl: 'https://chat.whatsapp.com/aws-community',
    topics: ['EC2', 'S3', 'Lambda', 'Cloud Architecture', 'Cost Optimization']
  }
]

