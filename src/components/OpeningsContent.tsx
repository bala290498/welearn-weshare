'use client'

import { useState } from 'react'
import { 
  Briefcase, 
  Map, 
  Building2, 
  Send,
  CheckCircle,
  ArrowRight,
  Copy,
  Check,
  FilePlus
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export interface JobFrontmatter {
  id: string
  title: string
  company: string
  type: 'full-time' | 'freelance' | 'internship'
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

type JobType = 'all' | 'full-time' | 'freelance' | 'internship'

interface OpeningsContentProps {
  jobs: (JobFrontmatter & { slug: string })[]
}

export default function OpeningsContent({ jobs }: OpeningsContentProps) {
  const [selectedType, setSelectedType] = useState<JobType>('all')
  const [copiedJobId, setCopiedJobId] = useState<string | null>(null)

  const handleCopyUrl = async (jobSlug: string) => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/openings/${jobSlug}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedJobId(jobSlug)
      setTimeout(() => setCopiedJobId(null), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  const filteredJobs = selectedType === 'all' 
    ? jobs 
    : jobs.filter(job => job.type === selectedType)

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

      {/* Openings Section */}
      <section id="job-openings" className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Openings
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Browse available positions from our hiring partners
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['all', 'full-time', 'freelance', 'internship'] as JobType[]).map((type) => (
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
                {type === 'all' ? 'All' : type === 'full-time' ? 'Full-Time' : type === 'freelance' ? 'Freelance' : 'Internships'}
              </button>
            ))}
          </div>

          {/* Job Listings */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No openings found for this category.</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for new opportunities!</p>
              </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md hover:border-primary-300 transition group h-full"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3 h-[48px] flex-shrink-0">
                      <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                          {job.title}
                        </h3>
                        <span className={cn(
                        'px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0',
                          job.type === 'full-time' && 'bg-blue-100 text-blue-700',
                        job.type === 'freelance' && 'bg-purple-100 text-purple-700',
                        job.type === 'internship' && 'bg-green-100 text-green-700'
                        )}>
                        {job.type === 'full-time' ? 'Full-Time' : job.type === 'freelance' ? 'Freelance' : 'Internship'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 min-h-[24px] flex-shrink-0">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold truncate">{job.company}</span>
                    </div>
                    <div className="space-y-2 mb-4 text-sm text-gray-600 min-h-[80px] flex-shrink-0">
                      <div className="flex items-center gap-2 min-h-[24px]">
                        <Map className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      {job.experience ? (
                        <div className="flex items-center gap-2 min-h-[24px]">
                          <Briefcase className="w-4 h-4 flex-shrink-0" />
                          <span>{job.experience}</span>
                        </div>
                      ) : (
                        <div className="min-h-[24px]"></div>
                      )}
                      <div className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded inline-block min-h-[24px]">
                          {job.category}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 min-h-[60px] flex-grow">
                        {job.description}
                      </p>
                    <div className="mb-4 min-h-[32px] flex-shrink-0">
                      {job.skills && job.skills.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 3 && (
                            <span className="px-2 py-1 text-gray-500 text-xs">
                              +{job.skills.length - 3}
                            </span>
                          )}
                      </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-4 min-h-[20px] flex-shrink-0">
                      Posted: {new Date(job.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <div className="mt-auto flex-shrink-0 space-y-2">
                      <Link
                        href={`/openings/${job.slug}`}
                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 text-sm rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold w-full min-h-[40px]"
                      >
                        <ArrowRight className="w-4 h-4" />
                        View Details
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          handleCopyUrl(job.slug)
                        }}
                        className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 px-4 py-2 text-sm rounded-xl hover:border-primary-700 hover:bg-primary-50 transition font-semibold w-full min-h-[40px]"
                      >
                        {copiedJobId === job.slug ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Share
                          </>
                        )}
                      </button>
                    </div>
                  </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Apply / Refer Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold mb-4">
              For Companies
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-primary-100 mb-8">
              Looking to hire? Post your job openings and connect with talented professionals.
            </p>

            <a
              href="mailto:openings@welearnweshare.com?subject=Post Job Opening"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
            >
              <FilePlus className="w-5 h-5" />
              Post Opening
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

