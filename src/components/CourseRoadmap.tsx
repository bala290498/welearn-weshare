export default function CourseRoadmap() {
  const phases = [
    {
      weeks: 'Weeks 1–3',
      title: 'Foundations & Core Concepts',
      description: 'Short lessons + quizzes',
      progress: 25,
    },
    {
      weeks: 'Weeks 4–7',
      title: 'Projects & Applied Labs',
      description: 'Guided builds, weekly checkpoints',
      progress: 50,
    },
    {
      weeks: 'Weeks 8–10',
      title: 'Capstone Project',
      description: 'Real-world task evaluated by mentors',
      progress: 75,
    },
    {
      weeks: 'Weeks 11–12',
      title: 'Portfolio polish & Career Prep',
      description: 'Resume, mock interviews, Talent Portal listing',
      progress: 100,
    },
  ]

  return (
    <section id="courses" className="py-6 md:py-10 px-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-semibold text-center text-gray-900 mb-4">
          From Fundamentals to Job-Ready
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)]">
          12-week structured learning path with clear milestones
        </p>
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-primary-600">
                        {phase.weeks}
                      </span>
                      <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-gray-900 mt-1">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{phase.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${phase.progress}%` }}
                      role="progressbar"
                      aria-valuenow={phase.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-12">
            <a
              href="#syllabus"
              className="inline-block bg-primary-600 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              View Full Syllabus
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

