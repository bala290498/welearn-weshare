'use client'

import { useState } from 'react'
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Map, 
  Building2, 
  Send,
  Users,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Mail,
  FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'

type JobType = 'all' | 'full-time' | 'internship' | 'freelance'

interface JobOpening {
  id: string
  title: string
  company: string
  type: 'full-time' | 'internship' | 'freelance'
  location: string
  category: string
  description: string
  requirements: string[]
  postedDate: string
  applyLink: string
}

interface HiringPartner {
  id: string
  name: string
  logo?: string
  description: string
  openPositions: number
  website?: string
}

export default function OpeningsContent() {
  const [selectedType, setSelectedType] = useState<JobType>('all')

  // Sample job openings data
  const jobOpenings: JobOpening[] = [
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
      id: '2',
      title: 'Cloud Infrastructure Intern',
      company: 'CloudTech',
      type: 'internship',
      location: 'Hyderabad',
      category: 'AWS',
      description: 'Great opportunity for students to learn cloud infrastructure and work on real-world projects.',
      requirements: [
        'Currently pursuing Computer Science or related field',
        'Basic knowledge of cloud computing',
        'Willingness to learn',
        'Available for 6 months'
      ],
      postedDate: '2024-01-20',
      applyLink: 'mailto:internships@cloudtech.com?subject=Cloud Infrastructure Intern Application'
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

  const hiringPartners: HiringPartner[] = [
    {
      id: '1',
      name: 'TechCorp',
      description: 'Leading technology company with 500+ employees',
      openPositions: 12,
      website: 'https://techcorp.com'
    },
    {
      id: '2',
      name: 'CloudTech',
      description: 'Cloud infrastructure specialists',
      openPositions: 8,
      website: 'https://cloudtech.com'
    },
    {
      id: '3',
      name: 'StartupXYZ',
      description: 'Fast-growing startup in the fintech space',
      openPositions: 5,
      website: 'https://startupxyz.com'
    },
    {
      id: '4',
      name: 'InnovateLabs',
      description: 'Innovation lab focused on AI and ML solutions',
      openPositions: 15,
      website: 'https://innovatelabs.com'
    },
    {
      id: '5',
      name: 'DataFlow Inc',
      description: 'Data analytics and business intelligence experts',
      openPositions: 10,
      website: 'https://dataflow.com'
    },
    {
      id: '6',
      name: 'DesignStudio',
      description: 'Creative agency specializing in digital design',
      openPositions: 6,
      website: 'https://designstudio.com'
    },
  ]

  const careerRoadmaps = [
    {
      title: 'DevOps Engineer Path',
      duration: '12-18 months',
      level: 'Beginner to Advanced',
      steps: [
        'Learn Linux fundamentals',
        'Master containerization (Docker, Kubernetes)',
        'Understand CI/CD pipelines',
        'Gain cloud platform expertise (AWS/GCP)',
        'Build automation skills',
        'Get certified and apply for roles'
      ],
      icon: <Code className="w-8 h-8" />
    },
    {
      title: 'Cloud Architect Path',
      duration: '18-24 months',
      level: 'Intermediate to Expert',
      steps: [
        'Master cloud fundamentals',
        'Learn infrastructure as code (Terraform)',
        'Understand cloud security best practices',
        'Design scalable architectures',
        'Get cloud certifications',
        'Build portfolio projects'
      ],
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: 'Full-Stack Developer Path',
      duration: '12-15 months',
      level: 'Beginner to Advanced',
      steps: [
        'Learn frontend fundamentals (HTML, CSS, JS)',
        'Master a frontend framework (React/Vue)',
        'Learn backend development (Node.js/Python)',
        'Understand databases and APIs',
        'Build full-stack projects',
        'Prepare for technical interviews'
      ],
      icon: <GraduationCap className="w-8 h-8" />
    },
  ]

  const filteredJobs = selectedType === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.type === selectedType)

  return (
    <>
      {/* Hero Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Career Opportunities
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Find Your Next Opportunity
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore job openings, internships, freelance opportunities, and career roadmaps. Connect with our hiring partners and take the next step in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="job-openings" className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Job Openings
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Browse available positions from our hiring partners
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['all', 'full-time', 'internship', 'freelance'] as JobType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm md:text-base font-medium transition',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
                  selectedType === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {type === 'all' ? 'All Jobs' : type === 'full-time' ? 'Full-Time' : type === 'internship' ? 'Internships' : 'Freelance'}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4 md:space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No openings found for this category.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for new opportunities!</p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-gray-900">
                          {job.title}
                        </h3>
                        <span className={cn(
                          'px-3 py-1 text-xs font-semibold rounded-full',
                          job.type === 'full-time' && 'bg-blue-100 text-blue-700',
                          job.type === 'internship' && 'bg-green-100 text-green-700',
                          job.type === 'freelance' && 'bg-purple-100 text-purple-700'
                        )}>
                          {job.type === 'full-time' ? 'Full-Time' : job.type === 'internship' ? 'Internship' : 'Freelance'}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Map className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                          {job.category}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm md:text-base mb-4">
                        {job.description}
                      </p>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</p>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-xs text-gray-500">
                        Posted: {new Date(job.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 md:min-w-[150px]">
                      <a
                        href={job.applyLink}
                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                      >
                        <Send className="w-4 h-4" />
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Career Roadmaps Section */}
      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Career Roadmaps
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Structured learning paths to help you achieve your career goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {careerRoadmaps.map((roadmap, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="text-primary-600 mb-4">
                  {roadmap.icon}
                </div>
                <h3 className="text-[clamp(1rem,1.5vw,1.25rem)] font-bold text-gray-900 mb-2">
                  {roadmap.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{roadmap.duration}</span>
                  <span>•</span>
                  <span>{roadmap.level}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {roadmap.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-semibold mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition"
                >
                  Start This Path
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Connect with leading companies actively hiring from our talent pool
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {hiringPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-bold text-gray-900">
                    {partner.name}
                  </h3>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition"
                      aria-label={`Visit ${partner.name} website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {partner.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-primary-600" />
                  <span className="font-semibold text-gray-900">{partner.openPositions}</span>
                  <span className="text-gray-600">open positions</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply / Refer Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold mb-4">
              Apply or Refer Someone
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-primary-100 mb-8">
              Looking for opportunities? Have someone to refer? We're here to help connect talent with opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <FileText className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold mb-2">
                  Apply for Jobs
                </h3>
                <p className="text-primary-100 text-sm mb-4">
                  Browse our job openings and apply directly. We'll help match you with the right opportunities.
                </p>
                <a
                  href="#job-openings"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
                >
                  Browse Jobs
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold mb-2">
                  Refer a Candidate
                </h3>
                <p className="text-primary-100 text-sm mb-4">
                  Know someone perfect for a role? Refer them and help us build a stronger community.
                </p>
                <a
                  href="mailto:referrals@welearnweshare.com?subject=Candidate Referral"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
                >
                  Submit Referral
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
              <h3 className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold mb-4">
                Become a Hiring Partner
              </h3>
              <p className="text-primary-100 text-sm mb-6">
                Are you a company looking to hire talented professionals? Partner with us to access our curated talent pool.
              </p>
              <a
                href="mailto:partners@welearnweshare.com?subject=Hiring Partner Inquiry"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 md:px-5 md:py-3 rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                <Building2 className="w-4 h-4" />
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

