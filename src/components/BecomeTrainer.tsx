import { 
  CheckCircle, 
  Award, 
  Users, 
  IndianRupee, 
  BookOpen, 
  TrendingUp,
  FileText,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BecomeTrainer() {
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
      title: 'Get Paid for Performance',
      description: 'Enrollment-driven income.',
      icon: <IndianRupee className="w-8 h-8" />,
      highlight: true,
    },
    {
      title: 'Work Your Way',
      description: 'Flexible teaching hours.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'No Audience Building Needed',
      description: 'Learners are already here.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Zero Admin Hassle',
      description: 'We run the platform for you.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: 'Level Up Professionally',
      description: 'Grow your influence and reach.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Teach with Purpose',
      description: 'Change lives and get recognized.',
      icon: <BookOpen className="w-8 h-8" />,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-gray-900">
              Become a Trainer
            </h1>
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
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
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

      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">

        {/* Benefits */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold text-gray-900 mb-6 text-center">
            Why Teach With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  'bg-white p-4 md:p-6 rounded-lg border shadow-sm hover:shadow-md transition',
                  benefit.highlight
                    ? 'border-primary-300 border-2 bg-primary-50/50'
                    : 'border-gray-200'
                )}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
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
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">
              Ready to Start Teaching?
            </h3>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-primary-100 mb-8 md:mb-10">
              Join our community of expert trainers and help shape the next generation of tech professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="mailto:trainers@welearnweshare.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                <Mail className="w-5 h-5" />
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-white/10 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

