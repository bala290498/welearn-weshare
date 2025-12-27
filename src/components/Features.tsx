import { 
  TrendingDown, 
  Award, 
  BarChart3, 
  FileText, 
  Users2, 
  Briefcase, 
  ClipboardCheck, 
  BookOpen,
  Video,
  Download
} from 'lucide-react'

export default function Features() {
  return (
    <section className="py-6 md:py-10 px-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
          Batch Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Dynamic Group Pricing Card */}
          <div className="bg-purple-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Group Pricing</h3>
            <p className="text-sm text-gray-600">More learners, lower cost.</p>
          </div>

          {/* Top Trainers Card */}
          <div className="bg-blue-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Trainers</h3>
            <p className="text-sm text-gray-600">Expert-led, community-priced.</p>
          </div>

          {/* Live Training Card */}
          <div className="bg-red-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Training</h3>
            <p className="text-sm text-gray-600">Live Interactive Classes</p>
          </div>

          {/* Certificates Included Card */}
          <div className="bg-orange-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificates Included</h3>
            <p className="text-sm text-gray-600">Proof of completion + resources.</p>
          </div>

          {/* Study Resources Card */}
          <div className="bg-cyan-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Resources</h3>
            <p className="text-sm text-gray-600">Downloadable Learning Materials</p>
          </div>

          {/* Hiring Pipeline Card */}
          <div className="bg-indigo-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hiring Pipeline</h3>
            <p className="text-sm text-gray-600">Tasks lead to interviews.</p>
          </div>

          {/* Clear Roadmap Card */}
          <div className="bg-teal-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear Roadmap</h3>
            <p className="text-sm text-gray-600">Weekly goals, real projects.</p>
          </div>

          {/* Career Mentorship Card */}
          <div className="bg-amber-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Mentorship</h3>
            <p className="text-sm text-gray-600">Guidance that gets you hired.</p>
          </div>

          {/* Live Voting Card */}
          <div className="bg-green-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Voting</h3>
            <p className="text-sm text-gray-600">Students control quality.</p>
          </div>

          {/* Strong Community Card */}
          <div className="bg-pink-50 p-4 md:p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users2 className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Strong Community</h3>
            <p className="text-sm text-gray-600">Mentors, peers, and support.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

