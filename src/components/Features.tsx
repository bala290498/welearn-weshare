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
      title: 'Community-Powered Pricing',
      description:
        'As more students join, costs drop—making premium training affordable for everyone.',
      icon: <CircleDollarSign className="w-8 h-8" />,
    },
    {
      title: 'Top Trainers, Affordable Rates',
      description:
        'Learn from top trainers made accessible through shared community pricing.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Live Voting',
      description:
        'Unsatisfied? Start a live vote to request a trainer change.',
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: 'Certification & Materials',
      description:
        'Get certificates, downloadable materials, templates, and lifetime access where applicable.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: 'Community Support',
      description:
        'Mentors, study groups, and peer reviews to learn faster.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'In-House Tasks → Direct Hiring',
      description:
        'Complete verified tasks and get featured for direct interview opportunities.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: 'Clear Roadmap & Projects',
      description:
        'Follow a clear weekly roadmap with projects and measurable milestones.',
      icon: <ClipboardCheck className="w-8 h-8" />,
    },
    {
      title: 'Career Guidance & Mentorship',
      description:
        'Resume reviews, mock interviews, and mentorship to help you land roles.',
      icon: <BookOpen className="w-8 h-8" />,
    },
  ]

  return (
    <section id="features" className="py-6 md:py-10 px-4 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-semibold text-center text-gray-900 mb-4">
          Batch Features
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-[clamp(0.875rem,2vw,1rem)]">
          As more students join, costs drop—making premium training affordable for everyone.
        </p>
        {/* Grid layout for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            // Color arrangement to avoid similar adjacent colors
            // Row 1: Purple, Green, Orange, Teal
            // Row 2: Blue, Pink, Amber, Indigo
            const colorMap = [
              { gradient: 'bg-gradient-to-br from-purple-100 via-purple-50 to-white border-purple-300', icon: 'text-purple-700' },      // 0 - Purple
              { gradient: 'bg-gradient-to-br from-green-100 via-green-50 to-white border-green-300', icon: 'text-green-700' },        // 1 - Green
              { gradient: 'bg-gradient-to-br from-orange-100 via-orange-50 to-white border-orange-300', icon: 'text-orange-700' },    // 2 - Orange
              { gradient: 'bg-gradient-to-br from-teal-100 via-teal-50 to-white border-teal-300', icon: 'text-teal-700' },          // 3 - Teal
              { gradient: 'bg-gradient-to-br from-blue-100 via-blue-50 to-white border-blue-300', icon: 'text-blue-700' },           // 4 - Blue
              { gradient: 'bg-gradient-to-br from-pink-100 via-pink-50 to-white border-pink-300', icon: 'text-pink-700' },          // 5 - Pink
              { gradient: 'bg-gradient-to-br from-amber-100 via-amber-50 to-white border-amber-300', icon: 'text-amber-700' },       // 6 - Amber
              { gradient: 'bg-gradient-to-br from-indigo-100 via-indigo-50 to-white border-indigo-300', icon: 'text-indigo-700' },  // 7 - Indigo
            ]
            
            const colors = colorMap[index]
            
            return (
              <div
                key={index}
                className={`${colors.gradient} p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 text-center`}
              >
                <div className={`${colors.icon} mb-4 flex justify-center`}>{feature.icon}</div>
                <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

