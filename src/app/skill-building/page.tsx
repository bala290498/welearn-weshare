import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkillBuildingClient from '@/components/SkillBuildingClient'
import { getAllCourses } from '@/lib/markdown'
import type { Metadata } from 'next'
import { Code, Briefcase, GraduationCap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skill Building Courses - WeLearnWeShare',
  description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career. Dynamic group pricing - price drops as more students join.',
  openGraph: {
    title: 'Skill Building Courses - WeLearnWeShare',
    description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career. Dynamic group pricing - price drops as more students join.',
    type: 'website',
    url: 'https://welearnweshare.com/skill-building',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Skill Building Courses - WeLearnWeShare',
    description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career.',
  },
}

export default function SkillBuildingPage() {
  const courses = getAllCourses()
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-gray-900">
              Skill Building
            </h1>
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Build Your Skills. Build Your Future.
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive courses designed to help you master in-demand skills and advance your career.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <SkillBuildingClient courses={courses} />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
            Roadmap
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)] max-w-2xl mx-auto">
            Structured learning paths to help you achieve your career goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'DevOps Engineer Path',
                duration: '12-18 months',
                level: 'Beginner to Advanced',
                steps: [
                  'Learn Linux fundamentals',
                  'Master containerization (Docker, Kubernetes)',
                  'Understand CI/CD pipelines',
                  'Gain cloud platform expertise (AWS/GCP)',
                  'Build automation skills',
                  'Get certified and apply for roles'
                ],
                icon: <Code className="w-8 h-8" />
              },
              {
                title: 'Cloud Architect Path',
                duration: '18-24 months',
                level: 'Intermediate to Expert',
                steps: [
                  'Master cloud fundamentals',
                  'Learn infrastructure as code (Terraform)',
                  'Understand cloud security best practices',
                  'Design scalable architectures',
                  'Get cloud certifications',
                  'Build portfolio projects'
                ],
                icon: <Briefcase className="w-8 h-8" />
              },
              {
                title: 'Full-Stack Developer Path',
                duration: '12-15 months',
                level: 'Beginner to Advanced',
                steps: [
                  'Learn frontend fundamentals (HTML, CSS, JS)',
                  'Master a frontend framework (React/Vue)',
                  'Learn backend development (Node.js/Python)',
                  'Understand databases and APIs',
                  'Build full-stack projects',
                  'Prepare for technical interviews'
                ],
                icon: <GraduationCap className="w-8 h-8" />
              },
            ].map((roadmap, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="text-primary-600 mb-4">
                  {roadmap.icon}
                </div>
                <h3 className="text-[clamp(1rem,1.5vw,1.25rem)] font-bold text-gray-900 mb-2">
                  {roadmap.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{roadmap.duration}</span>
                  <span>•</span>
                  <span>{roadmap.level}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {roadmap.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-semibold mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition"
                >
                  Start This Path
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

