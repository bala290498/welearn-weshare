import { BookOpen, Users, TrendingDown, Code, Award, Briefcase, ArrowRight, ArrowDown } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose a Course',
      description:
        'Pick a skill track aligned with your career goals.',
      icon: <BookOpen className="w-12 h-12" />,
    },
    {
      number: 2,
      title: 'Join the Community',
      description:
        'Learn alongside peers in shared forums.',
      icon: <Users className="w-12 h-12" />,
    },
    {
      number: 3,
      title: 'Unlock Group Pricing',
      description:
        'Prices drop automatically as more students join.',
      icon: <TrendingDown className="w-12 h-12" />,
    },
    {
      number: 4,
      title: 'Build Real Skills',
      description:
        'Expert-led lessons with hands-on projects.',
      icon: <Code className="w-12 h-12" />,
    },
    {
      number: 5,
      title: 'Earn Certification',
      description:
        'Receive certification and join our Talent Portal.',
      icon: <Award className="w-12 h-12" />,
    },
    {
      number: 6,
      title: 'Get Hired',
      description:
        'Access interviews with hiring partners.',
      icon: <Briefcase className="w-12 h-12" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-6 md:py-10 px-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center relative">
              <div className="text-primary-600 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
              {/* Arrow between items in the same row (desktop) */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary-600" />
                </div>
              )}
              {/* Arrow between items vertically (mobile) */}
              {index < steps.length - 1 && (
                <div className="flex md:hidden justify-center mt-6 mb-2">
                  <ArrowDown className="w-6 h-6 text-primary-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

