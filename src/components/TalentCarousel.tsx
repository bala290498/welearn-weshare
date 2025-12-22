'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Linkedin, Github } from 'lucide-react'

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
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
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
              className={`bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden ${
                itemsPerView === 1 ? 'flex-shrink-0 w-[calc(85vw_-_16px)] snap-center' : 'min-w-0'
              }`}
            >
              <Link
                href={`/talent/${talent.slug}`}
                className="block focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none rounded flex-grow flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {talent.name.charAt(0)}
                  </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-[clamp(1rem,2vw,1.125rem)] font-bold text-gray-900 mb-1 truncate">
                        {talent.name}
                      </h2>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                          {talent.category}
                        </span>
                      </div>
                    </div>
                </div>
                
                <div className="mb-4 flex-grow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Portfolio Preview</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    View full portfolio on profile page
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-auto flex-shrink-0">
                {talent.linkedin && (
                  <a
                    href={talent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {talent.github && (
                  <a
                    href={talent.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                <Link
                  href={`/talent/${talent.slug}`}
                  className="text-primary-600 font-semibold text-sm ml-auto hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

