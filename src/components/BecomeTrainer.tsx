import { 
  CheckCircle, 
  Award, 
  Users, 
  DollarSign, 
  BookOpen, 
  TrendingUp,
  FileText,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BecomeTrainer() {
  const eligibilityCriteria = [
    {
      title: 'Industry Experience',
      description: 'Minimum 5+ years of hands-on experience in your domain (DevOps, Linux, AWS, etc.)',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Teaching Ability',
      description: 'Proven track record of mentoring, training, or knowledge sharing',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Technical Expertise',
      description: 'Deep knowledge and up-to-date skills in your specialization area',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Communication Skills',
      description: 'Ability to explain complex concepts clearly and engage with learners',
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our trainer application form with your credentials, experience, and course proposal',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Review & Interview',
      description: 'Our team reviews your application and conducts a brief interview to assess fit',
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 3,
      title: 'Course Proposal',
      description: 'Submit a detailed course outline, syllabus, and pricing structure for approval',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      step: 4,
      title: 'Onboarding',
      description: 'Complete onboarding, set up your trainer profile, and prepare for your first cohort',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Earn based on course revenue targets. Higher enrollment means better pay for you.',
      icon: <DollarSign className="w-8 h-8" />,
      highlight: true,
    },
    {
      title: 'Flexible Schedule',
      description: 'Set your own course schedule and teaching hours that work for you.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Built-in Audience',
      description: 'Access to our community of eager learners actively seeking quality training.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Platform Support',
      description: 'We handle marketing, enrollment, payments, and student management for you.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: 'Professional Growth',
      description: 'Build your reputation as an expert trainer and expand your professional network.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Impact & Recognition',
      description: 'Make a real difference in learners\' careers and get featured on our platform.',
      icon: <BookOpen className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-gray-900 mb-4">
            Become a Trainer
          </h2>
          <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their career goals.
          </p>
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold text-gray-900 mb-6 text-center">
            Eligibility Criteria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {eligibilityCriteria.map((criterion, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary-600 flex-shrink-0 mt-1">
                    {criterion.icon}
                  </div>
                  <div>
                    <h4 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">
                      {criterion.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold text-gray-900 mb-6 text-center">
            Application Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {applicationSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="text-primary-600 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h4 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold text-gray-900 mb-6 text-center">
            Benefits of Teaching on Our Platform
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
                <div className="text-primary-600 mb-4">
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

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12 border-2 border-primary-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900 mb-4">
              Ready to Start Teaching?
            </h3>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 mb-6 md:mb-8">
              Join our community of expert trainers and help shape the next generation of tech professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="mailto:trainers@welearnweshare.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" />
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Email:</strong> trainers@welearnweshare.com | <strong>Phone:</strong> +91-9876543210
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

