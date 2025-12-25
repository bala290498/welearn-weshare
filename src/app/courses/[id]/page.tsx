import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ShareButton from '@/components/ShareButton'
import { getCourseBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, Info, Clock } from 'lucide-react'

// Calculate current price per head based on enrollment
// Formula: Price per head = total fixed price ÷ current number of enrolled students
// This ensures the total revenue stays constant while price per head decreases
function calculateCurrentPrice(basePrice: number, studentsEnrolled: number, maxStudents: number): number {
  // Validation: avoid division by zero
  if (studentsEnrolled <= 0) {
    return basePrice // If no students, show total price (one student would pay full amount)
  }
  // Validation: prevent enrollments over max capacity
  if (studentsEnrolled > maxStudents) {
    return basePrice / maxStudents // At or over max capacity, use max capacity for calculation
  }
  // Price per head = total fixed price ÷ current number of enrolled students
  return basePrice / studentsEnrolled
}

// Calculate potential price at full capacity
function calculatePotentialPrice(basePrice: number, maxStudents: number): number {
  if (maxStudents <= 0) {
    return basePrice
  }
  return basePrice / maxStudents
}

// Format price without decimals for display
function formatPrice(price: number): string {
  return `₹${Math.round(price).toLocaleString('en-IN')}`
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const courseData = getCourseBySlug(id)
  
  if (!courseData) {
    return {
      title: 'Course Not Found - WeLearnWeShare',
    }
  }

  const course = courseData.frontmatter
  const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
  const studentsEnrolled = course.studentsEnrolled ?? 0
  const maxStudents = course.maxStudents ?? 100
  // Validation: ensure studentsEnrolled doesn't exceed maxStudents
  const validEnrolled = Math.min(studentsEnrolled, maxStudents)
  const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, maxStudents)
  
  // Build description with enrollment and pricing prominently displayed
  let description = `${course.title} - ${course.description}`
  
  if (course.studentsEnrolled !== undefined && course.maxStudents !== undefined) {
    description += ` | Students Enrolled: ${validEnrolled}/${maxStudents} | Current Price: ${formatPrice(currentPrice)} per head`
  } else {
    description += ` | Price: ${course.price}`
  }
  
  description += ` | Duration: ${course.duration} | Price drops as more students join. Join now: welearnweshare.com/courses/${id}`

  // Create a more detailed Open Graph description with enrollment and pricing at the start
  const ogDescription = course.studentsEnrolled !== undefined && course.maxStudents !== undefined
    ? `📊 Students Enrolled: ${validEnrolled}/${maxStudents} | 💰 Current Price: ${formatPrice(currentPrice)} per head | ${course.description} | Duration: ${course.duration} | Price drops as more students join!`
    : `${course.description} | Duration: ${course.duration} | ${course.price}`

  return {
    title: `${course.title} - WeLearnWeShare`,
    description,
    openGraph: {
      title: `${course.title} - WeLearnWeShare`,
      description: ogDescription,
      type: 'website',
      url: `https://welearnweshare.com/courses/${id}`,
      siteName: 'WeLearnWeShare',
      // Explicitly no images
      images: [],
    },
    twitter: {
      card: 'summary',
      title: `${course.title} - WeLearnWeShare`,
      description: ogDescription,
      // Explicitly no images
      images: [],
    },
    ...(course.studentsEnrolled !== undefined && {
      other: {
        'og:price:amount': currentPrice.toString(),
        'og:price:currency': 'INR',
      },
    }),
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const courseData = getCourseBySlug(id)

  if (!courseData) {
    notFound()
  }

  const course = courseData.frontmatter
  const content = courseData.content
  
  // Calculate values for display
  const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
  const studentsEnrolled = course.studentsEnrolled ?? 0
  const maxStudents = course.maxStudents ?? 100
  // Validation: ensure studentsEnrolled doesn't exceed maxStudents
  const validEnrolled = Math.min(studentsEnrolled, maxStudents)
  const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, maxStudents)
  const potentialPrice = calculatePotentialPrice(basePrice, maxStudents)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="mb-4">
            <a 
              href="/courses" 
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              ← Back to Courses
            </a>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                {course.category}
              </span>
              {course.batchType === 'prime' && (
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4 flex items-center gap-1">
                  <Clock size={14} />
                  Prime Batch
                </span>
              )}
              {course.batchType === 'collective' && (
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                  Collective Batch
                </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold text-gray-900 flex-1">
              {course.title}
            </h1>
              <div className="flex-shrink-0">
                <ShareButton 
                  url={`https://welearnweshare.com/courses/${id}`}
                  title={course.title}
                />
              </div>
            </div>
            <p className="text-[clamp(0.875rem,2vw,1.25rem)] text-gray-600 leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Group Pricing Section */}
      {course.studentsEnrolled !== undefined && course.maxStudents !== undefined && (
        <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Dynamic Group Pricing</h2>
            
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1: Students Enrolled */}
              <div className="px-4 md:px-6 text-center">
                <p className="text-xs text-gray-600 mb-2">Students enrolled:</p>
                <p className={`text-3xl md:text-4xl font-semibold mb-4 ${
                  course.batchType === 'collective' ? 'text-purple-600' : 
                  course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                }`}>{validEnrolled} / {maxStudents}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      course.batchType === 'collective' ? 'bg-purple-600' : 
                      course.batchType === 'prime' ? 'bg-orange-600' : 'bg-primary-600'
                    }`}
                    style={{ width: `${(validEnrolled / maxStudents) * 100}%` }}
                      />
                    </div>
                  </div>
              
              {/* Column 2: Capacity Price */}
              <div className="px-4 md:px-6 text-center">
                <p className="text-xs text-gray-600 mb-1">Capacity price</p>
                <p className={`text-3xl md:text-4xl font-semibold mb-2 ${
                  course.batchType === 'collective' ? 'text-purple-600' : 
                  course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                }`}>{formatPrice(potentialPrice)}</p>
                <p className="text-xs text-gray-500">
                  Capacity ({maxStudents}): {basePrice.toLocaleString('en-IN')} ÷ {maxStudents} = {formatPrice(potentialPrice)}
                </p>
              </div>
              
              {/* Column 3: Current Price */}
              <div className="px-4 md:px-6 text-center">
                <p className="text-xs text-gray-600 mb-1">Current price</p>
                <p className={`text-3xl md:text-4xl font-semibold mb-2 ${
                  course.batchType === 'collective' ? 'text-purple-600' : 
                  course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                }`}>{formatPrice(currentPrice)}</p>
                <p className="text-xs text-gray-500">
                  Current ({validEnrolled}): {basePrice.toLocaleString('en-IN')} ÷ {validEnrolled || 0} = {formatPrice(currentPrice)}
                    </p>
                  </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">Price drops as more students join</p>
          </div>
        </section>
      )}

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="space-y-8 md:space-y-12">
            {/* Instructor */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Instructor
                </h2>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {course.instructor}
              </p>
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
              <ul className="space-y-3">
                {(content['Course Features'] || []).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Prerequisites
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Prerequisites'] || []).map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="bg-primary-50 rounded-lg p-6 md:p-8">
              <div className="border-b-2 border-primary-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Contact Details
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                  <a 
                    href={`mailto:${course.contactEmail}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {course.contactEmail}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Phone</h3>
                  <a 
                    href={`tel:${course.contactPhone}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {course.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

