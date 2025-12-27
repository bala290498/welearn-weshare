'use client'

import { useState } from 'react'
import { 
  CheckCircle, 
  Award, 
  IndianRupee, 
  BookOpen, 
  TrendingUp,
  FileText,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import JoinProfessionalModal from '@/components/JoinProfessionalModal'

export default function BecomeTrainer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const applicationSteps = [
    {
      step: 1,
      title: 'Join',
      description: 'Tell us about your experience',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Launch',
      description: 'Set up your profile, and start teaching',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ]

  const benefits = [
    {
      title: 'Get Paid',
      description: 'Turn your knowledge into steady income.',
      icon: <IndianRupee className="w-8 h-8" />,
      bgColor: 'bg-green-500',
      iconColor: 'text-green-600',
    },
    {
      title: 'Work Your Way',
      description: 'Set your hours. Teach at your pace.',
      icon: <TrendingUp className="w-8 h-8" />,
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Zero Admin Hassle',
      description: 'We run the platform for you.',
      icon: <CheckCircle className="w-8 h-8" />,
      bgColor: 'bg-teal-500',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Level Up Professionally',
      description: 'Grow your influence and reach.',
      icon: <Award className="w-8 h-8" />,
      bgColor: 'bg-amber-500',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Teach with Purpose',
      description: 'Change lives and get recognized.',
      icon: <BookOpen className="w-8 h-8" />,
      bgColor: 'bg-indigo-500',
      iconColor: 'text-indigo-600',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Share Your Expertise. Grow Your Impact.
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their career goals.
          </p>
            {/* CTA Button */}
            <div className="flex justify-center pt-4 md:pt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-600 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 min-w-[200px] text-center"
                aria-label="Join community"
              >
                Join Community
              </button>
              </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {applicationSteps.map((step, index) => (
              <>
              <div
                key={step.step}
                  className="flex flex-col items-center text-center flex-1 max-w-[280px]"
              >
                  <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                  </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
                {index < applicationSteps.length - 1 && (
                  <>
                    <div className="hidden md:block text-primary-600 flex-shrink-0">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                    <div className="md:hidden text-primary-600 rotate-90 my-2">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-primary-50">
        <div className="container mx-auto px-4 max-w-screen-lg">

        {/* Benefits */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-gray-900 mb-8 md:mb-12 text-center">
            Why Join With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  'p-4 md:p-6 text-white',
                  benefit.bgColor
                )}
              >
                <h4 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-white mb-2 text-center">
                  {benefit.title}
                </h4>
                <p className="text-white/90 text-sm md:text-base text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

        {/* CTA Section */}
      <section id="apply" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold mb-4">
              Ready to Start Teaching?
            </h3>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-primary-100 mb-8 md:mb-10">
              Join our community of expert trainers and help shape the next generation of learners and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                Join Community
                <ArrowRight className="w-5 h-5" />
              </button>
          </div>
        </div>
      </div>
    </section>
    <JoinProfessionalModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </>
  )
}

