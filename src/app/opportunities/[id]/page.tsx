import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getJobBySlug, getAllJobs } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { markdownToHtml } from '@/lib/markdown'
import { 
  Calendar, 
  MapPin, 
  Building2, 
  Briefcase, 
  IndianRupee, 
  Users, 
  Globe, 
  ArrowLeft,
  CheckCircle,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import CopyUrlButton from '@/components/CopyUrlButton'
import WhatsAppIcon from '@/components/WhatsAppIcon'

export async function generateStaticParams() {
  const jobs = getAllJobs()
  return jobs.map((job) => ({
    id: job.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const jobData = getJobBySlug(id)
  
  if (!jobData) {
    return {
      title: 'Job Not Found - WeLearnWeShare',
    }
  }

  const job = jobData.frontmatter

  return {
    title: `${job.title} at ${job.company} - WeLearnWeShare`,
    description: job.description,
    openGraph: {
      title: `${job.title} at ${job.company} - WeLearnWeShare`,
      description: job.description,
      type: 'article',
      url: `https://welearnweshare.com/opportunities/${id}`,
      siteName: 'WeLearnWeShare',
    },
    twitter: {
      card: 'summary',
      title: `${job.title} at ${job.company} - WeLearnWeShare`,
      description: job.description,
    },
  }
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const jobData = getJobBySlug(id)

  if (!jobData) {
    notFound()
  }

  const job = jobData.frontmatter
  const htmlContent = await markdownToHtml(jobData.content)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-6 md:py-10 px-4">
        <div className="container mx-auto px-4 max-w-screen-xl">
          {/* Back to Opportunities */}
          <div className="mb-6">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Opportunities
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h1>
                    <div className="flex items-center gap-2 text-lg text-gray-600">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">{job.company}</span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 text-sm font-semibold rounded-full ${
                    job.type === 'full-time' 
                      ? 'bg-blue-100 text-blue-700' 
                      : job.type === 'freelance'
                      ? 'bg-purple-100 text-purple-700'
                      : job.type === 'internship'
                      ? 'bg-green-100 text-green-700'
                      : job.type === 'workshop'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {job.type === 'full-time' ? 'Full-Time' : job.type === 'freelance' ? 'Freelance' : job.type === 'internship' ? 'Internship' : job.type === 'workshop' ? 'Workshop' : 'Webinar'}
                  </span>
                </div>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-sm font-semibold text-gray-900">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Experience</p>
                      <p className="text-sm font-semibold text-gray-900">{job.experience}</p>
                    </div>
                  </div>
                  {job.salary && (
                    <div className="flex items-start gap-2">
                      <IndianRupee className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Salary</p>
                        <p className="text-sm font-semibold text-gray-900">{job.salary}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Posted</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(job.postedDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:font-bold prose-h1:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:font-bold prose-h2:tracking-tight prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold prose-h3:text-gray-800
                    prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold prose-h4:text-gray-800
                    prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-base prose-p:text-[16px]
                    prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-[16px]
                    prose-ul:my-6 prose-ul:space-y-3 prose-ul:pl-6 prose-ul:list-disc prose-ul:marker:text-gray-500
                    prose-ol:my-6 prose-ol:space-y-3 prose-ol:pl-6 prose-ol:list-decimal prose-ol:marker:text-gray-500 prose-ol:marker:font-semibold
                    prose-li:text-gray-700 prose-li:leading-relaxed prose-li:mb-2 prose-li:pl-2
                    prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
                    prose-blockquote:border-l-4 prose-blockquote:border-primary-300 prose-blockquote:pl-4 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-6 prose-blockquote:bg-gray-50
                    prose-hr:border-gray-300 prose-hr:my-10 prose-hr:border-t-2
                    [&_h1]:!bg-transparent [&_h1]:!border-none [&_h1]:!p-0
                    [&_h2]:!bg-transparent [&_h2]:!p-0 [&_h2]:!text-2xl [&_h2]:!font-bold [&_h2]:!mt-10 [&_h2]:!mb-5 [&_h2]:!border-b [&_h2]:!border-gray-200 [&_h2]:!pb-2
                    [&_h3]:!bg-transparent [&_h3]:!p-0 [&_h3]:!block [&_h3]:!text-xl [&_h3]:!font-semibold [&_h3]:!mt-8 [&_h3]:!mb-4 [&_h3]:!text-gray-800
                    [&_p]:!mb-6 [&_p]:!text-gray-700 [&_p]:!leading-relaxed [&_p]:!text-base
                    [&_strong]:!font-bold [&_strong]:!text-gray-900
                    [&_ul]:!my-6 [&_ul]:!space-y-3 [&_ul]:!pl-6 [&_ul]:!list-disc [&_ul]:!marker:text-gray-500
                    [&_ol]:!my-6 [&_ol]:!space-y-3 [&_ol]:!pl-6 [&_ol]:!list-decimal [&_ol]:!marker:text-gray-500
                    [&_li]:!text-gray-700 [&_li]:!leading-relaxed [&_li]:!mb-2
                    [&_code]:!text-gray-800 [&_code]:!bg-gray-100 [&_code]:!px-1.5 [&_code]:!py-0.5 [&_code]:!rounded [&_code]:!text-sm [&_code]:!font-mono
                    [&_blockquote]:!border-l-4 [&_blockquote]:!border-primary-300 [&_blockquote]:!pl-4 [&_blockquote]:!pr-4 [&_blockquote]:!py-2 [&_blockquote]:!italic [&_blockquote]:!text-gray-600 [&_blockquote]:!my-6 [&_blockquote]:!bg-gray-50
                    [&_hr]:!border-gray-300 [&_hr]:!my-10 [&_hr]:!border-t-2"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>

              {/* Skills Required */}
              {job.skills && job.skills.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Skills Required</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                <a
                  href={`https://wa.me/917010584543?text=${encodeURIComponent(`Hi! I'm interested in applying for the ${job.title} position at ${job.company}. Please provide more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-sm hover:bg-green-700 transition font-semibold mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Apply via WhatsApp
                </a>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {new Date(job.postedDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type === 'full-time' ? 'Full-Time' : job.type === 'freelance' ? 'Freelance' : job.type === 'internship' ? 'Internship' : job.type === 'workshop' ? 'Workshop' : 'Webinar'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  {job.workMode && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>{job.workMode}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Company Info Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Company</p>
                    <p className="font-semibold text-gray-900">{job.company}</p>
                  </div>
                  {job.companyWebsite && (
                    <div>
                      <p className="text-gray-500 mb-1">Website</p>
                      <a
                        href={job.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                      >
                        Visit Website
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                  {job.companySize && (
                    <div>
                      <p className="text-gray-500 mb-1">Company Size</p>
                      <p className="font-semibold text-gray-900">{job.companySize} employees</p>
                    </div>
                  )}
                  {job.industry && (
                    <div>
                      <p className="text-gray-500 mb-1">Industry</p>
                      <p className="font-semibold text-gray-900">{job.industry}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Share Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share this Job</h3>
                <CopyUrlButton url={`https://welearnweshare.com/opportunities/${id}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

