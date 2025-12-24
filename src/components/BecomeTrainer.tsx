'use client'

import { useState } from 'react'
import { 
  CheckCircle, 
  Award, 
  Users, 
  IndianRupee, 
  BookOpen, 
  TrendingUp,
  FileText,
  ArrowRight,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import WhatsAppIcon from '@/components/WhatsAppIcon'

export default function BecomeTrainer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    expertise: '',
    courseIdea: '',
    bio: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitWhatsApp = () => {
    const message = `Trainer Application

Name: ${formData.name}
Email: ${formData.email}
Contact No: ${formData.contactNo}
Expertise/Domain: ${formData.expertise}
Course Idea/Topic: ${formData.courseIdea}
Bio/Notes: ${formData.bio}`

    const whatsappUrl = `https://wa.me/917010584543?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsModalOpen(false)
    setFormData({
      name: '',
      email: '',
      contactNo: '',
      expertise: '',
      courseIdea: '',
      bio: ''
    })
  }

  const applicationSteps = [
    {
      step: 1,
      title: 'Apply',
      description: 'Tell us about your experience and course.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Review',
      description: 'We review your application.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 3,
      title: 'Launch',
      description: 'Set up your profile, and start teaching.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ]

  const benefits = [
    {
      title: 'Get Paid',
      description: 'Earn consistently.',
      icon: <IndianRupee className="w-8 h-8" />,
      gradientClass: 'bg-gradient-to-br from-green-500 to-emerald-600',
      iconColor: 'text-green-600',
    },
    {
      title: 'Work Your Way',
      description: 'Flexible teaching hours.',
      icon: <TrendingUp className="w-8 h-8" />,
      gradientClass: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      iconColor: 'text-blue-600',
    },
    {
      title: 'No Audience Building Needed',
      description: 'Learners are already here.',
      icon: <Users className="w-8 h-8" />,
      gradientClass: 'bg-gradient-to-br from-purple-500 to-violet-600',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Zero Admin Hassle',
      description: 'We run the platform for you.',
      icon: <CheckCircle className="w-8 h-8" />,
      gradientClass: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Level Up Professionally',
      description: 'Grow your influence and reach.',
      icon: <Award className="w-8 h-8" />,
      gradientClass: 'bg-gradient-to-br from-amber-500 to-orange-600',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Teach with Purpose',
      description: 'Change lives and get recognized.',
      icon: <BookOpen className="w-8 h-8" />,
      gradientClass: 'bg-gradient-to-br from-indigo-500 to-purple-600',
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
              <a
                href="#apply"
                className="bg-primary-600 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 min-w-[200px] text-center"
                aria-label="Apply to become a trainer"
              >
                Apply Now
              </a>
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
            Why Teach With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  'p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition text-white',
                  benefit.gradientClass
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
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={`https://wa.me/917010584543?text=${encodeURIComponent('Hi! I have a question about becoming a trainer.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-white/10 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Contact Us
              </a>
          </div>
        </div>
      </div>
    </section>
    {isModalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
            <h3 className="text-xl font-semibold text-gray-900">Become a Trainer Application</h3>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="expertise" className="block text-sm font-semibold text-gray-700 mb-2">
                  Expertise / Domain *
                </label>
                <input
                  type="text"
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="e.g., Design, Product, Marketing, Data, Leadership"
                />
              </div>
              <div>
                <label htmlFor="courseIdea" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course / Topic *
                </label>
                <input
                  type="text"
                  id="courseIdea"
                  name="courseIdea"
                  value={formData.courseIdea}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="e.g., Community Building 101"
                />
              </div>
            </div>

            <div>
                <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                  placeholder="Short description or additional context..."
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
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.contactNo ||
                !formData.expertise ||
                  !formData.courseIdea
              }
              className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

