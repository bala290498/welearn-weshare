import { Check } from 'lucide-react'
import CoachProfileCard from '@/components/CoachProfileCard'
import CompanyLogo from '@/components/CompanyLogo'
import SecureSpotForm from '@/components/SecureSpotForm'
import WhatsAppIcon from '@/components/WhatsAppIcon'
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
  Linkedin,
  TrendingUp,
  Download,
  IndianRupee,
} from 'lucide-react'
import type { CourseFrontmatter } from '@/lib/markdown'

interface CourseContentProps {
  course: CourseFrontmatter
  courseId: string
  content: Record<string, string[]>
}

export default function CourseContent({ course, courseId, content }: CourseContentProps) {
  return (
    <>
      {/* Professional Partner */}
      <div>
        <div className="border-b-2 border-gray-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Professional Partner
          </h2>
        </div>
        <div className="flex justify-center">
          <CoachProfileCard courseId={courseId} />
        </div>
      </div>

      {/* Course Syllabus */}
      <div>
        <div className="border-b-2 border-gray-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Course Syllabus
          </h2>
        </div>
        <ul className="space-y-3">
          {(content['Course Syllabus'] || []).map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-700 text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Course Features */}
      <div>
        <div className="border-b-2 border-gray-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Course Features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Dynamic Group Pricing Card */}
          <div className="bg-purple-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dynamic Group Pricing</h3>
              <p className="text-sm text-gray-600">More learners, lower cost.</p>
            </div>
          </div>

          {/* Top Trainers Card */}
          <div className="bg-blue-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Top Trainers</h3>
              <p className="text-sm text-gray-600">Expert-led, community-priced.</p>
            </div>
          </div>

          {/* Live Training Card */}
          <div className="bg-red-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Video className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Live Training</h3>
              <p className="text-sm text-gray-600">Live Interactive Classes</p>
            </div>
          </div>

          {/* Certificates Included Card */}
          <div className="bg-orange-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Certificates Included</h3>
              <p className="text-sm text-gray-600">Proof of completion + resources.</p>
            </div>
          </div>

          {/* Study Resources Card */}
          <div className="bg-cyan-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Study Resources</h3>
              <p className="text-sm text-gray-600">Downloadable Learning Materials</p>
            </div>
          </div>

          {/* Hiring Pipeline Card */}
          <div className="bg-indigo-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Hiring Pipeline</h3>
              <p className="text-sm text-gray-600">Tasks lead to interviews.</p>
            </div>
          </div>

          {/* Clear Roadmap Card */}
          <div className="bg-teal-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <ClipboardCheck className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Clear Roadmap</h3>
              <p className="text-sm text-gray-600">Weekly goals, real projects.</p>
            </div>
          </div>

          {/* Career Mentorship Card */}
          <div className="bg-amber-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Career Mentorship</h3>
              <p className="text-sm text-gray-600">Guidance that gets you hired.</p>
            </div>
          </div>

          {/* Live Voting Card */}
          <div className="bg-green-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Live Voting</h3>
              <p className="text-sm text-gray-600">Students control quality.</p>
            </div>
          </div>

          {/* Strong Community Card */}
          <div className="bg-pink-50 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Users2 className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Strong Community</h3>
              <p className="text-sm text-gray-600">Mentors, peers, and support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Opportunities */}
      <div>
        <div className="border-b-2 border-gray-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Job Opportunities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Job Available on LinkedIn */}
          <div className="bg-blue-50 p-4 md:p-6 flex items-center gap-3">
            <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xl md:text-2xl font-bold text-blue-600 mb-1 leading-tight">
                25,000+
              </p>
              <p className="text-xs md:text-sm text-gray-700">DevOps roles</p>
            </div>
          </div>

          {/* CAGR */}
          <div className="bg-green-50 p-4 md:p-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xl md:text-2xl font-bold text-green-600 mb-1 leading-tight">
                25%
              </p>
              <p className="text-xs md:text-sm text-gray-700">CAGR</p>
            </div>
          </div>

          {/* Salary Range */}
          <div className="bg-purple-50 p-4 md:p-6 flex items-center gap-3">
            <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-purple-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xl md:text-2xl font-bold text-purple-600 mb-1 leading-tight">
                6–18
              </p>
              <p className="text-xs md:text-sm text-gray-700">LPA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Companies Hiring */}
      <div>
        <div className="border-b-2 border-gray-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Top Companies Hiring
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <CompanyLogo
            name="CMA CGM"
            logoPath="CMA CGM_idGDHHFMrC_1.png"
            fallbackColor="006699"
            fallbackText="CMA CGM"
          />
          <CompanyLogo
            name="BNP Paribas"
            logoPath="BNP Paribas_idB_LxSRBU_1.png"
            fallbackColor="006699"
            fallbackText="BNP Paribas"
          />
          <CompanyLogo
            name="Infosys"
            logoPath="Infosys_idxq8SaZnR_1.png"
            fallbackColor="006699"
            fallbackText="Infosys"
          />
          <CompanyLogo
            name="LTIMindtree"
            logoPath="LTIMindtree Canada_idNMzBu7uZ_1.png"
            fallbackColor="006699"
            fallbackText="LTIMindtree"
          />
          <CompanyLogo
            name="Mphasis"
            logoPath="Mphasis_idEVXnwruT_0.png"
            fallbackColor="006699"
            fallbackText="Mphasis"
          />
          <CompanyLogo name="TCS" logoPath="tcs.png" fallbackColor="006699" fallbackText="TCS" />
          <CompanyLogo
            name="Tech Mahindra"
            logoPath="Tech Mahindra_id9pyBT3BD_1.png"
            fallbackColor="006699"
            fallbackText="Tech Mahindra"
          />
          <CompanyLogo
            name="Virtusa"
            logoPath="Virtusa_id9Rmwc8n7_1.png"
            fallbackColor="006699"
            fallbackText="Virtusa"
          />
        </div>
      </div>

      {/* Career Services */}
      <div>
        <div className="border-b-2 border-gray-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Career Services
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">What we provide?</p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm md:text-base">Placement Assistance</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm md:text-base">Mock Interview Preparation</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm md:text-base">
              1 on 1 Career Mentoring Sessions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm md:text-base">Career Oriented Sessions</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm md:text-base">
              Resume & LinkedIn Profile Building
            </span>
          </li>
        </ul>
      </div>

      {/* Secure Spot Form */}
      <SecureSpotForm courseTitle={course.title} batchType={course.batchType} />

      {/* Contact Details */}
      <div id="contact-details" className="bg-primary-50 rounded-lg p-6 md:p-8">
        <div className="border-b-2 border-primary-200 pb-3 mb-6">
          <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
            Contact Details
          </h2>
        </div>
        <div>
          <a
            href="https://wa.me/917010584543"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm md:text-base"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-600" />
            +91 7010584543
          </a>
        </div>
      </div>
    </>
  )
}

