'use client'

import { useState } from 'react'
import { 
  Briefcase, 
  Map, 
  Building2, 
  CheckCircle,
  ArrowRight,
  FilePlus,
  BookOpen,
  Video,
  X,
  FileText,
  GraduationCap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import WhatsAppIcon from '@/components/WhatsAppIcon'

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

type JobType = 'all' | 'full-time' | 'freelance' | 'internship' | 'workshop' | 'webinar'

interface OpportunitiesContentProps {
  jobs: (JobFrontmatter & { slug: string })[]
}

export default function OpportunitiesContent({ jobs }: OpportunitiesContentProps) {
  const [selectedType, setSelectedType] = useState<JobType>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: '',
    contactNo: '',
    description: ''
  })

  const filteredJobs = selectedType === 'all' 
    ? jobs 
    : jobs.filter(job => job.type === selectedType)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitWhatsApp = () => {
    const message = `Post Opportunity Request

Name: ${formData.name}
Email: ${formData.email}
Contact No: ${formData.contactNo}

Opportunity Type: ${formData.opportunityType}

Description: ${formData.description}`

    const whatsappUrl = `https://wa.me/917010584543?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsModalOpen(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      opportunityType: '',
      contactNo: '',
      description: ''
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Find Your Next Opportunity
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-6">
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 min-w-[200px]"
                aria-label="View all opportunities"
              >
                View Opportunities
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#post-opportunity"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 min-w-[200px]"
                aria-label="Post an opportunity"
              >
                Post Opportunity
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Types Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Full-Time Card */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-Time</h3>
              <p className="text-sm text-gray-600">Permanent positions with companies</p>
            </div>

            {/* Freelance Card */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Freelance</h3>
              <p className="text-sm text-gray-600">Project-based work opportunities</p>
            </div>

            {/* Internship Card */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Internships</h3>
              <p className="text-sm text-gray-600">Learning opportunities for students</p>
            </div>

            {/* Workshop Card */}
            <div className="bg-white border-2 border-orange-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshops</h3>
              <p className="text-sm text-gray-600">Hands-on learning sessions</p>
            </div>

            {/* Webinar Card */}
            <div className="bg-white border-2 border-pink-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Webinars</h3>
              <p className="text-sm text-gray-600">Online learning events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['all', 'full-time', 'freelance', 'internship', 'workshop', 'webinar'] as JobType[]).map((type) => (
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
                {type === 'all' ? 'All' : type === 'full-time' ? 'Full-Time' : type === 'freelance' ? 'Freelance' : type === 'internship' ? 'Internships' : type === 'workshop' ? 'Workshops' : 'Webinars'}
              </button>
            ))}
          </div>

          {/* Job Listings */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No opportunities found for this category.</p>
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
                      <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                          {job.title}
                        </h3>
                        <span className={cn(
                        'px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0',
                          job.type === 'full-time' && 'bg-blue-100 text-blue-700',
                        job.type === 'freelance' && 'bg-purple-100 text-purple-700',
                        job.type === 'internship' && 'bg-green-100 text-green-700',
                        job.type === 'workshop' && 'bg-orange-100 text-orange-700',
                        job.type === 'webinar' && 'bg-pink-100 text-pink-700'
                        )}>
                        {job.type === 'full-time' ? 'Full-Time' : job.type === 'freelance' ? 'Freelance' : job.type === 'internship' ? 'Internship' : job.type === 'workshop' ? 'Workshop' : 'Webinar'}
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
                    <div className="mt-auto flex-shrink-0">
                      <Link
                        href={`/opportunities/${job.slug}`}
                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 text-sm rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold w-full min-h-[40px]"
                      >
                        <ArrowRight className="w-4 h-4" />
                        View Details
                      </Link>
                    </div>
                  </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Apply / Refer Section */}
      <section id="post-opportunity" className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold mb-3">
              Post Your Opportunity
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-primary-100 mb-8">
              Post your opportunities—jobs, internships, freelance projects, workshops, or webinars—and connect with our community.
                </p>

                <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
            >
              Post Opportunity
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Post Opportunity Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
              <h3 className="text-xl font-semibold text-gray-900">Post Opportunity</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="contactNo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact No *
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="opportunityType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Opportunity Type *
                </label>
                <select
                  id="opportunityType"
                  name="opportunityType"
                  value={formData.opportunityType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">Select opportunity type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Webinar">Webinar</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                  placeholder="Shortly describe about the opportunity"
                />
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 rounded-b-xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitWhatsApp}
                disabled={!formData.name || !formData.email || !formData.opportunityType || !formData.contactNo || !formData.description}
                className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

