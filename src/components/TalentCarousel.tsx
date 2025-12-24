'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Linkedin, Github, ArrowRight } from 'lucide-react'

interface Talent {
  id: string
  slug: string
  name: string
  category: string
  skillLevel: string
  linkedin?: string
  github?: string
}

interface TalentCarouselProps {
  category: string
  talents: Talent[]
}

// Helper function to get initials from name
const getInitials = (name: string) => {
  const parts = name.trim().split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

// Helper to get role from category
const getRole = (category: string) => {
  // Map categories to role names
  const roleMap: Record<string, string> = {
    'DevOps': 'DevOps Engineer',
    'AWS': 'Cloud Engineer',
    'Cloud Computing': 'Cloud Engineer',
    'Linux': 'Linux Engineer',
  }
  return roleMap[category] || category
}

export default function TalentCarousel({ category, talents }: TalentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, talents.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  const visibleTalents = talents.slice(currentIndex, currentIndex + itemsPerView)
  const isMobile = itemsPerView === 1

  if (talents.length === 0) return null

  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Best Performers in {category}
        </h3>
        <div className="flex items-center gap-3">
          {talents.length > itemsPerView && (
            <div className="hidden md:flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
          <Link
            href={`/talent/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            View All ({talents.length})
          </Link>
        </div>
      </div>

      <div 
        className={`relative ${isMobile ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide' : 'md:overflow-visible'}`}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`${isMobile ? 'flex gap-4' : 'md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'} transition-transform duration-300 ease-in-out`}
          style={isMobile ? {} : {}}
        >
          {(isMobile ? talents : visibleTalents).map((talent) => (
            <div
              key={talent.id}
              className={`bg-white rounded-3xl shadow-md p-6 text-center flex flex-col h-full overflow-hidden ${
                itemsPerView === 1 ? 'flex-shrink-0 w-[calc(85vw_-_16px)] snap-center' : 'min-w-0'
              }`}
            >
              {/* Avatar (initials only) */}
              <div className="flex justify-center">
                <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-gray-700">
                    {getInitials(talent.name)}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                {talent.name}
              </h2>

              {/* Role */}
              <p className="mt-1 flex items-center justify-center gap-2 text-gray-500">
                <span
                  className="inline-block w-2 h-2 rounded-full bg-blue-500"
                  aria-hidden="true"
                />
                <span>{getRole(talent.category)}</span>
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-200" />

              {/* Icons */}
              <div className="flex justify-center gap-6 mb-6">
                {talent.linkedin && (
                  <a
                    href={talent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" aria-hidden="true" />
                  </a>
                )}
                {talent.github && (
                  <a
                    href={talent.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    <Github className="w-5 h-5 text-gray-600" aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Button (text-style with arrow) */}
              <Link
                href={`/talent/${talent.slug}`}
                className="group w-full flex items-center justify-center gap-2 py-2 text-blue-600 font-medium hover:text-blue-700 transition bg-transparent"
              >
                <span className="group-hover:underline">View Details</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

