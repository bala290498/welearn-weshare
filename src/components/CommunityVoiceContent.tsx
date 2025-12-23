'use client'

import { useState } from 'react'
import { 
  Vote, 
  BarChart3, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
  PieChart,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Script from 'next/script'

interface Poll {
  id: string
  title: string
  description: string
  options: {
    id: string
    label: string
    votes: number
    percentage: number
  }[]
  totalVotes: number
  status: 'active' | 'closed'
  endDate: string
  category: string
}

export default function CommunityVoiceContent() {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null)
  const [votedPolls, setVotedPolls] = useState<Set<string>>(new Set())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseTitle: '',
    description: '',
    whyImportant: ''
  })
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: '2',
      title: 'New Poll',
      description: 'Vote on this poll.',
      options: [],
      totalVotes: 0,
      status: 'active',
      endDate: '2024-12-31',
      category: 'General'
    },
  ])

  const handleVote = (pollId: string, optionId: string) => {
    if (votedPolls.has(pollId)) {
      return // Already voted
    }

    setPolls(prevPolls => 
      prevPolls.map(poll => {
        if (poll.id === pollId) {
          const updatedOptions = poll.options.map(opt => {
            if (opt.id === optionId) {
              return { ...opt, votes: opt.votes + 1 }
            }
            return opt
          })
          const newTotalVotes = poll.totalVotes + 1
          const updatedOptionsWithPercentage = updatedOptions.map(opt => ({
            ...opt,
            percentage: Math.round((opt.votes / newTotalVotes) * 100)
          }))
          return {
            ...poll,
            options: updatedOptionsWithPercentage,
            totalVotes: newTotalVotes
          }
        }
        return poll
      })
    )
    setVotedPolls(prev => new Set(prev).add(pollId))
  }

  const howItWorks = [
    {
      step: 1,
      title: 'Community Suggests',
      description: 'Ideas come straight from learners.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Community Decides',
      description: 'Votes choose what gets built.',
      icon: <Vote className="w-8 h-8" />,
    },
    {
      step: 3,
      title: 'Courses Launch',
      description: 'Demand-backed courses go live.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ]

  const benefits = [
    {
      title: 'Ownership & Influence',
      description: 'You help decide what courses are made.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Transparency',
      description: 'You can see the results and how decisions are made.',
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: 'Community Trust',
      description: 'Everyone has a voice, and decisions are made openly.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Relevant Content',
      description: 'Courses are created based on what you actually need to learn.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ]

  const activePolls = polls.filter(poll => poll.status === 'active')
  const closedPolls = polls.filter(poll => poll.status === 'closed')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitWhatsApp = () => {
    const message = `Course Suggestion

Name: ${formData.name}
Email: ${formData.email}

Course Title: ${formData.courseTitle}

Description: ${formData.description}

Why is this important: ${formData.whyImportant}`

    const whatsappUrl = `https://wa.me/917010584543?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsModalOpen(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      courseTitle: '',
      description: '',
      whyImportant: ''
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-6 md:py-8 px-4 bg-gradient-to-br from-primary-100 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Community Voice
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Your voice shapes our courses
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vote in real time and influence what we launch next.
            </p>
            <div className="mt-6">
              <a
                href="#active-polls"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <Vote className="w-5 h-5" />
                Vote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-6 md:py-8 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            A simple, transparent process that puts you in control
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="text-center flex-shrink-0">
                  <div className="text-primary-600 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <>
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-primary-600 flex-shrink-0 hidden md:block rotate-0" />
                    <ArrowRight className="w-6 h-6 text-primary-600 flex-shrink-0 md:hidden rotate-90" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Polls */}
      <section id="active-polls" className="py-6 md:py-8 px-4 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-3">
            Active Polls
          </h2>
          <p className="text-center text-gray-600 mb-6 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Your vote decides what we launch next.
          </p>

          <div className="flex flex-col items-center">
            {activePolls.map((poll) => {
              // Render StrawPoll embed for poll id '2'
              if (poll.id === '2') {
                return (
                  <div
                    key={poll.id}
                    className="w-full flex justify-center"
                  >
                    <div
                      className="strawpoll-embed flex w-full max-w-[640px] flex-col"
                      id="strawpoll_NPgxeGQPPZ2"
                    >
                      <iframe
                        title="StrawPoll Embed"
                        id="strawpoll_iframe_NPgxeGQPPZ2"
                        src="https://strawpoll.com/embed/NPgxeGQPPZ2"
                        className="block w-full border-none min-h-[520px]"
                        frameBorder="0"
                        allowFullScreen
                        allowTransparency
                      />
                    </div>
                  </div>
                )
              }

              const hasVoted = votedPolls.has(poll.id)
              const isExpanded = selectedPoll === poll.id

              return (
                <div
                  key={poll.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                            {poll.category}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Ends {new Date(poll.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-gray-900 mb-2">
                          {poll.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-4">
                          {poll.description}
                        </p>
                      </div>
                    </div>

                    {/* Poll Options */}
                    <div className="space-y-3">
                      {poll.options.map((option) => (
                        <div key={option.id} className="relative">
                          <button
                            onClick={() => !hasVoted && handleVote(poll.id, option.id)}
                            disabled={hasVoted}
                            className={cn(
                              'w-full text-left p-4 rounded-lg border-2 transition',
                              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
                              hasVoted
                                ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                                : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50 cursor-pointer',
                              hasVoted && option.percentage === Math.max(...poll.options.map(o => o.percentage)) && 'border-primary-400 bg-primary-50'
                            )}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] font-semibold text-gray-900">
                                  {option.label}
                                </span>
                                {hasVoted && option.percentage === Math.max(...poll.options.map(o => o.percentage)) && (
                                  <CheckCircle2 className="w-5 h-5 text-primary-600" />
                                )}
                              </div>
                              {hasVoted && (
                                <span className="text-sm font-semibold text-gray-700">
                                  {option.percentage}%
                                </span>
                              )}
                            </div>
                            {hasVoted && (
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-primary-600 h-2.5 rounded-full transition-all duration-500"
                                  style={{ width: `${option.percentage}%` }}
                                />
                              </div>
                            )}
                            {hasVoted && (
                              <p className="text-xs text-gray-500 mt-2">
                                {option.votes} {option.votes === 1 ? 'vote' : 'votes'}
                              </p>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>

                    {hasVoted && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            <strong className="text-gray-900">{poll.totalVotes}</strong> total votes
                          </span>
                          <span className="flex items-center gap-1 text-primary-600 font-semibold">
                            <CheckCircle2 className="w-4 h-4" />
                            You voted!
                          </span>
                        </div>
                      </div>
                    )}

                    {!hasVoted && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 text-center">
                          Click on an option above to cast your vote
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 md:py-8 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-10">
            Why Community Voice Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-8 px-4 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center text-white">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-3">
              Have a Course Idea?
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-primary-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Suggest a course you&apos;d like to see, and we&apos;ll create a poll for the community to vote on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                <Vote className="w-5 h-5" />
                Suggest a Course
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/openings"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl hover:bg-white hover:text-primary-600 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                View Openings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* StrawPoll Script */}
      <Script
        src="https://cdn.strawpoll.com/dist/widgets.js"
        strategy="lazyOnload"
        charSet="utf-8"
      />

      {/* Course Suggestion Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
              <h3 className="text-xl font-bold text-gray-900">Suggest a Course</h3>
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
                <label htmlFor="courseTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Title *
                </label>
                <input
                  type="text"
                  id="courseTitle"
                  name="courseTitle"
                  value={formData.courseTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="e.g., Advanced Kubernetes Administration"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                  placeholder="Describe what this course should cover..."
                />
              </div>

              <div>
                <label htmlFor="whyImportant" className="block text-sm font-semibold text-gray-700 mb-2">
                  Why is this course important? *
                </label>
                <textarea
                  id="whyImportant"
                  name="whyImportant"
                  value={formData.whyImportant}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                  placeholder="Explain why this course would be valuable to the community..."
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
                disabled={!formData.name || !formData.email || !formData.courseTitle || !formData.description || !formData.whyImportant}
                className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

