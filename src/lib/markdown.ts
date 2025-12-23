import 'server-only'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export interface CourseFrontmatter {
  id: string
  title: string
  category: string
  description: string
  duration: string
  level: string
  instructor: string
  price: string
  studentsEnrolled?: number
  maxStudents?: number
  contactEmail: string
  contactPhone: string
}

export interface TalentFrontmatter {
  id: string
  name: string
  category: string
  skillLevel: string
  photo: string
  contactEmail: string
  contactPhone: string
  linkedin?: string
  github?: string
  website?: string
  twitter?: string
}

export interface GroupFrontmatter {
  id: string
  name: string
  category: string
  icon: string
  description: string
  memberCount: number
  communityHead: string
  whatsappUrl: string
}

export interface BlogFrontmatter {
  id: string
  title: string
  author: string
  date: string
  category: string
  description: string
  image?: string
  tags?: string[]
}

export interface JobFrontmatter {
  id: string
  title: string
  company: string
  type: 'full-time' | 'freelance' | 'internship' | 'workshop' | 'webinar'
  location: string
  category: string
  description: string
  experience: string
  salary?: string
  postedDate: string
  applyLink: string
  companyWebsite?: string
  companySize?: string
  industry?: string
  workMode?: string
  skills?: string[]
}

export function getCourseSlugs(): string[] {
  const coursesDir = path.join(contentDirectory, 'courses')
  if (!fs.existsSync(coursesDir)) return []
  
  const files = fs.readdirSync(coursesDir)
  return files
    .filter(file => file.endsWith('.md') && !file.startsWith('_'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getCourseBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, 'courses', `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Parse markdown sections
  const sections = parseMarkdownSections(content)
  
  return {
    frontmatter: data as CourseFrontmatter,
    content: sections,
    rawContent: content
  }
}

export function getAllCourses() {
  const slugs = getCourseSlugs()
  return slugs
    .map(slug => {
      const course = getCourseBySlug(slug)
      return course ? { ...course.frontmatter, slug } : null
    })
    .filter(Boolean) as (CourseFrontmatter & { slug: string })[]
}

export function getTalentSlugs(): string[] {
  const talentsDir = path.join(contentDirectory, 'talents')
  if (!fs.existsSync(talentsDir)) return []
  
  const files = fs.readdirSync(talentsDir)
  return files
    .filter(file => file.endsWith('.md') && !file.startsWith('_'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getTalentBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, 'talents', `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const sections = parseMarkdownSections(content)
  
  return {
    frontmatter: data as TalentFrontmatter,
    content: sections,
    rawContent: content
  }
}

export function getAllTalents() {
  const slugs = getTalentSlugs()
  return slugs
    .map(slug => {
      const talent = getTalentBySlug(slug)
      return talent ? { ...talent.frontmatter, slug } : null
    })
    .filter(Boolean) as (TalentFrontmatter & { slug: string })[]
}

export function getTalentsByCategory(category: string) {
  return getAllTalents().filter(talent => 
    talent.category.toLowerCase() === category.toLowerCase()
  )
}

export function getGroupSlugs(): string[] {
  const groupsDir = path.join(contentDirectory, 'groups')
  if (!fs.existsSync(groupsDir)) return []
  
  const files = fs.readdirSync(groupsDir)
  return files
    .filter(file => file.endsWith('.md') && !file.startsWith('_'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getGroupBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, 'groups', `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const sections = parseMarkdownSections(content)
  
  return {
    frontmatter: data as GroupFrontmatter,
    content: sections,
    rawContent: content
  }
}

export function getAllGroups() {
  const slugs = getGroupSlugs()
  return slugs
    .map(slug => {
      const group = getGroupBySlug(slug)
      return group ? { ...group.frontmatter, slug, topics: extractTopics(group.rawContent) } : null
    })
    .filter(Boolean) as (GroupFrontmatter & { slug: string, topics: string[] })[]
}

function parseMarkdownSections(content: string) {
  const sections: Record<string, string[]> = {}
  const lines = content.split('\n')
  let currentSection = ''
  let currentItems: string[] = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections[currentSection] = currentItems
      }
      currentSection = line.replace('## ', '').trim()
      currentItems = []
    } else if (line.startsWith('- ') && currentSection) {
      currentItems.push(line.replace('- ', '').trim())
    } else if (line.match(/^\d+\.\s/) && currentSection) {
      currentItems.push(line.replace(/^\d+\.\s/, '').trim())
    }
  }

  if (currentSection) {
    sections[currentSection] = currentItems
  }

  return sections
}

function extractTopics(content: string): string[] {
  const topics: string[] = []
  const lines = content.split('\n')
  let inTopicsSection = false

  for (const line of lines) {
    if (line.includes('## Topics')) {
      inTopicsSection = true
      continue
    }
    if (inTopicsSection && line.startsWith('##')) {
      break
    }
    if (inTopicsSection && line.startsWith('- ')) {
      topics.push(line.replace('- ', '').trim())
    }
  }

  return topics
}

export function getBlogSlugs(): string[] {
  const blogsDir = path.join(contentDirectory, 'blogs')
  if (!fs.existsSync(blogsDir)) return []
  
  const files = fs.readdirSync(blogsDir)
  return files
    .filter(file => file.endsWith('.md') && !file.startsWith('_'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, 'blogs', `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    frontmatter: data as BlogFrontmatter,
    content: content,
    rawContent: content
  }
}

export function getAllBlogs() {
  const slugs = getBlogSlugs()
  return slugs
    .map(slug => {
      const blog = getBlogBySlug(slug)
      return blog ? { ...blog.frontmatter, slug } : null
    })
    .filter(Boolean) as (BlogFrontmatter & { slug: string })[]
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getJobSlugs(): string[] {
  const jobsDir = path.join(contentDirectory, 'jobs')
  if (!fs.existsSync(jobsDir)) return []
  
  const files = fs.readdirSync(jobsDir)
  return files
    .filter(file => file.endsWith('.md') && !file.startsWith('_'))
    .map(file => file.replace(/\.md$/, ''))
}

export function getJobBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, 'jobs', `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    frontmatter: data as JobFrontmatter,
    content: content,
    rawContent: content
  }
}

export function getAllJobs() {
  const slugs = getJobSlugs()
  return slugs
    .map(slug => {
      const job = getJobBySlug(slug)
      return job ? { ...job.frontmatter, slug } : null
    })
    .filter(Boolean) as (JobFrontmatter & { slug: string })[]
}

