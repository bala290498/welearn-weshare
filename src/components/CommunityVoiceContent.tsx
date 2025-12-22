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
  PieChart
} from 'lucide-react'
import { cn } from '@/lib/utils'

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
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: '1',
      title: 'Which Advanced DevOps Course Should We Launch Next?',
      description: 'Help us decide the next advanced course to add to our curriculum. Your vote determines what we prioritize.',
      options: [
        { id: 'opt1', label: 'Kubernetes Advanced Administration', votes: 245, percentage: 35 },
        { id: 'opt2', label: 'Terraform Infrastructure as Code', votes: 189, percentage: 27 },
        { id: 'opt3', label: 'GitOps with ArgoCD', votes: 156, percentage: 22 },
        { id: 'opt4', label: 'Docker Swarm Orchestration', votes: 108, percentage: 16 },
      ],
      totalVotes: 698,
      status: 'active',
      endDate: '2024-02-15',
      category: 'DevOps'
    },
    {
      id: '2',
      title: 'What Cloud Platform Should We Focus On?',
      description: 'Tell us which cloud platform you want to master. We\'ll create comprehensive courses based on your choice.',
      options: [
        { id: 'opt1', label: 'AWS (Amazon Web Services)', votes: 312, percentage: 42 },
        { id: 'opt2', label: 'Google Cloud Platform (GCP)', votes: 198, percentage: 27 },
        { id: 'opt3', label: 'Microsoft Azure', votes: 156, percentage: 21 },
        { id: 'opt4', label: 'Multi-Cloud Strategy', votes: 72, percentage: 10 },
      ],
      totalVotes: 738,
      status: 'active',
      endDate: '2024-02-20',
      category: 'Cloud'
    },
    {
      id: '3',
      title: 'Which Programming Language Course Do You Need?',
      description: 'Help us prioritize which programming language course to develop next.',
      options: [
        { id: 'opt1', label: 'Python for DevOps', votes: 289, percentage: 38 },
        { id: 'opt2', label: 'Go (Golang) Fundamentals', votes: 201, percentage: 26 },
        { id: 'opt3', label: 'JavaScript/Node.js', votes: 178, percentage: 23 },
        { id: 'opt4', label: 'Rust for Systems Programming', votes: 95, percentage: 13 },
      ],
      totalVotes: 763,
      status: 'active',
      endDate: '2024-02-18',
      category: 'Programming'
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
      title: 'Submit Course Ideas',
      description: 'Students and community members suggest courses they want to see',
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Vote in Polls',
      description: 'Participate in polls to prioritize which courses should be developed',
      icon: <Vote className="w-8 h-8" />,
    },
    {
      step: 3,
      title: 'Results Determine Priority',
      description: 'Poll results directly influence which courses get launched first',
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      step: 4,
      title: 'Courses Launch',
      description: 'Top-voted courses are developed and launched based on community demand',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ]

  const benefits = [
    {
      title: 'Ownership & Influence',
      description: 'Feel ownership in course creation. Your vote directly shapes what gets taught.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Transparency',
      description: 'See real-time poll results and understand how decisions are made.',
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: 'Community Trust',
      description: 'Build trust through democratic decision-making and open communication.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Relevant Content',
      description: 'Get courses that match your actual learning needs and career goals.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ]

  const activePolls = polls.filter(poll => poll.status === 'active')
  const closedPolls = polls.filter(poll => poll.status === 'closed')

  return (
    <>
      {/* Hero Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Vote className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Community Voice
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Your Voice Shapes Our Curriculum
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a say in what gets taught! Vote in polls to decide upcoming courses, see real-time results, and help shape the learning community. Your vote directly influences which courses we prioritize and launch.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            A simple, transparent process that puts you in control
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Active Polls */}
      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Active Polls
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Cast your vote and help decide what courses we launch next
          </p>

          <div className="space-y-6 md:space-y-8">
            {activePolls.map((poll) => {
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
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Why Community Voice Matters
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Building a learning community where your voice shapes the curriculum
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center mb-8 md:mb-12">
            Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {polls.reduce((sum, poll) => sum + poll.totalVotes, 0).toLocaleString()}
              </div>
              <div className="text-primary-100 text-sm md:text-base">Total Votes Cast</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {activePolls.length}
              </div>
              <div className="text-primary-100 text-sm md:text-base">Active Polls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                12+
              </div>
              <div className="text-primary-100 text-sm md:text-base">Courses Launched from Polls</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12 border-2 border-primary-200 text-center">
            <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900 mb-4">
              Have a Course Idea?
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Suggest a course you&apos;d like to see, and we&apos;ll create a poll for the community to vote on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="mailto:community@welearnweshare.com?subject=Course Idea Suggestion"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <Vote className="w-4 h-4" />
                Suggest a Course
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/openings"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                View Openings
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

