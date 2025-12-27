export interface Group {
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

export const groups: Group[] = [
  {
    id: 'it-devops',
    name: 'DevOps Enthusiasts',
    category: 'IT',
    icon: 'Settings',
    description: 'A community for DevOps practitioners to share knowledge, tools, and best practices.',
    memberCount: 245,
    communityHead: 'Balasubramani Arumugam',
    whatsappUrl: 'https://chat.whatsapp.com/devops-community',
    topics: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'Cloud Infrastructure']
  },
  {
    id: 'it-aws',
    name: 'AWS Cloud Practitioners',
    category: 'IT',
    icon: 'Cloud',
    description: 'Learn and share AWS cloud services, architecture patterns, and best practices for building scalable solutions.',
    memberCount: 189,
    communityHead: 'Balasubramani Arumugam',
    whatsappUrl: 'https://chat.whatsapp.com/aws-community',
    topics: ['EC2', 'S3', 'Lambda', 'CloudFormation', 'AWS Architecture']
  },
  {
    id: 'web-development',
    name: 'Web Development',
    category: 'IT',
    icon: 'Code',
    description: 'A community for web developers to share frontend and backend development knowledge, frameworks, and best practices.',
    memberCount: 278,
    communityHead: 'Ramesh Kumar',
    whatsappUrl: 'https://chat.whatsapp.com/webdev-community',
    topics: ['React', 'Node.js', 'JavaScript', 'Full Stack', 'APIs']
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    category: 'Design',
    icon: 'Palette',
    description: 'Connect with designers to discuss user interface design, user experience principles, and design tools.',
    memberCount: 156,
    communityHead: 'Priya Suresh',
    whatsappUrl: 'https://chat.whatsapp.com/uiux-community',
    topics: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Wireframing']
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Marketing',
    icon: 'Megaphone',
    description: 'Learn and share digital marketing strategies, SEO, social media marketing, and content creation techniques.',
    memberCount: 203,
    communityHead: 'Karthick Senthil',
    whatsappUrl: 'https://chat.whatsapp.com/digitalmarketing-community',
    topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics', 'PPC']
  }
]

