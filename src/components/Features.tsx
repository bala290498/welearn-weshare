import { 
  CircleDollarSign, 
  Award, 
  BarChart3, 
  FileText, 
  Users, 
  Briefcase, 
  ClipboardCheck, 
  BookOpen 
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Community-Powered Discounting',
      description:
        'As more students enroll, everyone pays less. High-quality training becomes affordable through shared cost.',
      icon: <CircleDollarSign className="w-8 h-8" />,
    },
    {
      title: 'Top Trainers, Affordable Rates',
      description:
        'We contract industry experts and make them accessible by pooling community fees — expert instruction without the usual price tag.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Live Trainer Vote',
      description:
        "If learners aren't satisfied, start a live vote to request a trainer change — 100% student-driven quality control.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: 'Certification & Materials',
      description:
        'Official completion certificate, downloadable course materials, project templates, and lifetime resource access (where applicable).',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: 'Vibrant Community Support',
      description:
        'Forums, study groups, mentors, and peer code reviews — learn collaboratively and solve problems faster.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'In-House Tasks → Direct Hiring',
      description:
        'Do verified tasks inside our ecosystem. Top performers are featured on our Talent Portal and receive direct interview invites.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: 'Clear Roadmap & Milestones',
      description:
        'Each course comes with a week-by-week syllabus, hands-on projects, and checkpoints so progress is obvious and measurable.',
      icon: <ClipboardCheck className="w-8 h-8" />,
    },
    {
      title: 'Career Guidance & Mentorship',
      description:
        'Resume reviews, mock interviews, portfolio feedback, and one-on-one mentorship to help you land the role you want.',
      icon: <BookOpen className="w-8 h-8" />,
    },
  ]

  return (
    <section id="features" className="py-6 md:py-10 px-4 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
          Why We&apos;re Different
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-[clamp(0.875rem,2vw,1rem)]">
          Everything you need to learn, grow, and get hired — all in one place.
        </p>
        {/* Mobile: Horizontal snap-scroll */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4">
          <div className="flex gap-4 w-max">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-100 w-[calc(85vw_-_16px)] flex-shrink-0 snap-center overflow-hidden h-auto"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: 5-up layout */}
        <div className="hidden lg:flex gap-4 overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-100 w-[calc(20%_-_16px)] flex-shrink-0 overflow-hidden h-auto"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

