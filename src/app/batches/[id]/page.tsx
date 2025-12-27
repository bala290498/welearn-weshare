import Navigation from '@/components/Navigation'
import ShareButton from '@/components/ShareButton'
import JoinBatchButton from '@/components/JoinBatchButton'
import JoinCommunityButton from '@/components/JoinCommunityButton'
import { getCourseBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Check, Info, Clock, ChevronRight, Download } from 'lucide-react'
import Link from 'next/link'

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
  
  description += ` | Duration: ${course.duration} | Price drops as more students join. Join now: welearnweshare.com/batches/${id}`

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
      url: `https://welearnweshare.com/batches/${id}`,
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
      <div className="hidden lg:block">
        <Navigation />
      </div>
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="mb-4 lg:ml-8 lg:mr-[calc(33.333%+2rem)]">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link 
                href="/batches" 
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Batches
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-700">
                {course.batchType === 'prime' ? 'Prime' : course.batchType === 'collective' ? 'Collective' : 'Batch'}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-semibold">
                {course.title}
              </span>
            </nav>
          </div>
          <div className="space-y-2 md:space-y-3 lg:ml-8 lg:mr-[calc(33.333%+2rem)]">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                {course.category}
              </span>
              {course.batchType === 'prime' && (
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full flex items-center gap-1">
                  <Clock size={14} />
                  Prime Batch
                </span>
              )}
              {course.batchType === 'collective' && (
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                  Collective Batch
                </span>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold text-gray-900 flex-1">
              {course.title}
            </h1>
            </div>
            <p className="text-[clamp(0.875rem,2vw,1.25rem)] text-gray-600 leading-relaxed">
              {course.description}
            </p>
            
            {/* Key Points */}
            <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">We connect students with working professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">Dynamic group pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">Live Interactive classes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">Industry level Experience, Certifications and more</span>
              </li>
            </ul>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
              <JoinCommunityButton className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2">
                Join Community
              </JoinCommunityButton>
              <a
                href={`https://wa.me/917010584543?text=${encodeURIComponent(`Hi! I would like to get the brochure for ${course.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <Download className="w-5 h-5" />
                Get Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Banner Section */}
      <section className="py-4 md:py-6 px-4 bg-primary-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="lg:ml-8 lg:mr-[calc(33.333%+2rem)]">
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                Dynamic Group Pricing
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full border border-green-200">
                Live Training
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-orange-700 text-sm font-semibold rounded-full border border-orange-200">
                Certification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout: Content + Fixed Pricing */}
      {course.studentsEnrolled !== undefined && course.maxStudents !== undefined ? (
        <section className="py-6 md:py-10 px-4 bg-white relative pb-32 lg:pb-6">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Main Content */}
              <div className="lg:col-span-2 space-y-8 md:space-y-12 lg:mx-8">
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
            <div id="contact-details" className="bg-primary-50 rounded-lg p-6 md:p-8">
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

              {/* Right Column: Fixed Dynamic Group Pricing */}
              <div className="lg:col-span-1">
                {/* Spacer div to maintain grid layout */}
                <div className="lg:block hidden">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6 opacity-0 pointer-events-none">
                    {/* Invisible placeholder to maintain layout */}
                    <div className="h-96"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fixed Dynamic Group Pricing Card */}
          <div className="fixed bottom-0 left-0 right-0 lg:bottom-4 lg:left-auto lg:right-4 xl:right-[calc((100vw-1280px)/2+1rem)] lg:w-[420px] xl:w-[480px] z-50 lg:rounded-lg lg:shadow-lg">
            <div className="bg-white border-t lg:border border-gray-200 lg:rounded-lg shadow-2xl lg:shadow-lg p-2 lg:p-6 space-y-2 lg:space-y-6 max-h-[85vh] overflow-y-auto">
              {/* Title - Hidden on mobile */}
              <h2 className="hidden lg:block text-xl font-semibold text-gray-900 border-b-2 border-gray-200 pb-3">
                {course.title}
              </h2>
              
              {/* Mobile Layout: Students Enrolled with Join and Share buttons */}
              <div className="lg:hidden flex items-center gap-2 pb-2 border-b border-gray-200">
                {/* Students Enrolled - Compact */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <p className="text-xs text-gray-600 mb-0.5">Students</p>
                  <p className="text-lg font-semibold text-primary-600">{validEnrolled} / {maxStudents}</p>
                </div>
                
                {/* Join button */}
                <JoinBatchButton
                  courseTitle={course.title}
                  batchType={course.batchType}
                  className="flex-1 px-3 py-1.5 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition text-center"
                >
                  Join
                </JoinBatchButton>
                
                {/* Share button */}
                <div className="flex-1">
                  <ShareButton 
                    url={`https://welearnweshare.com/batches/${id}`}
                    title={course.title}
                    iconOnly={true}
                    className="w-full border-primary-600 text-primary-600 hover:bg-primary-50"
                  />
                </div>
              </div>
              
              {/* Current Price and Capacity Price - 2 Column Grid Layout, Horizontally Aligned */}
              <div className="grid grid-cols-2 gap-2 lg:gap-4 items-center">
                {/* Current Price */}
                <div className="space-y-1 lg:space-y-2 text-center">
                  <p className="text-[10px] lg:text-xs text-gray-600">Current price</p>
                  <p className={`text-sm lg:text-xl font-semibold ${
                    course.batchType === 'collective' ? 'text-purple-600' : 
                    course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                  }`}>{formatPrice(currentPrice)}</p>
                  <p className="text-[9px] lg:text-xs text-gray-500 whitespace-nowrap">
                    {basePrice.toLocaleString('en-IN')} ÷ {validEnrolled || 0} = {formatPrice(currentPrice)}
                  </p>
                </div>
                
                {/* Capacity Price */}
                <div className={`space-y-1 lg:space-y-2 text-center border-2 rounded-lg p-2 lg:p-3 bg-transparent ${
                  course.batchType === 'collective' ? 'border-purple-600' : 
                  course.batchType === 'prime' ? 'border-orange-600' : 'border-primary-600'
                }`}>
                  <p className={`text-[10px] lg:text-xs font-medium ${
                    course.batchType === 'collective' ? 'text-purple-600' : 
                    course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                  }`}>Capacity price</p>
                  <p className={`text-sm lg:text-xl font-semibold ${
                    course.batchType === 'collective' ? 'text-purple-600' : 
                    course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                  }`}>{formatPrice(potentialPrice)}</p>
                  <p className={`text-[9px] lg:text-xs whitespace-nowrap ${
                    course.batchType === 'collective' ? 'text-purple-600' : 
                    course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
                  }`}>
                    {basePrice.toLocaleString('en-IN')} ÷ {maxStudents} = {formatPrice(potentialPrice)}
                  </p>
                </div>
              </div>
              
              {/* Desktop: Students Enrolled - Vertical Stack */}
              <div className="hidden lg:block space-y-2">
                <p className="text-xs text-gray-600">Students enrolled:</p>
                <p className="text-2xl font-semibold text-primary-600">{validEnrolled} / {maxStudents}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full transition-all duration-300 bg-primary-600"
                    style={{ width: `${(validEnrolled / maxStudents) * 100}%` }}
                  />
                </div>
              </div>
              
              <p className="hidden lg:block text-xs text-gray-500 pt-2 border-t border-gray-200">Price drops as more students join</p>
              
              {/* Desktop: Join Batch Button */}
              <JoinBatchButton
                courseTitle={course.title}
                batchType={course.batchType}
                className="hidden lg:block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-center"
              >
                Join Batch
              </JoinBatchButton>
              
              {/* Desktop: Share Button */}
              <div className="hidden lg:block">
                <ShareButton 
                  url={`https://welearnweshare.com/batches/${id}`}
                  title={course.title}
                  className="w-full border-primary-600 text-primary-600 hover:bg-primary-50"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
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
              <div id="contact-details" className="bg-primary-50 rounded-lg p-6 md:p-8">
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
      )}
    </main>
  )
}

