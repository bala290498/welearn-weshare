import { BookOpen, Users, Briefcase } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Pick a Course',
      description:
        'Choose a skill track and reserve your seat with a small booking fee.',
      icon: <BookOpen className="w-12 h-12" />,
    },
    {
      number: 2,
      title: 'Grow the Community',
      description:
        'Invite peers — as enrollment rises the per-student fee drops automatically.',
      icon: <Users className="w-12 h-12" />,
    },
    {
      number: 3,
      title: 'Learn & Get Hired',
      description:
        'Complete projects, earn certification, get listed on our Talent Portal for direct hiring.',
      icon: <Briefcase className="w-12 h-12" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-6 md:py-10 px-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
              </div>
              <div className="text-primary-600 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

