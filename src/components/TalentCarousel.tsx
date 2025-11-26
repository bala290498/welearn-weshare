'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-700"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          <Link
            href={`/talent/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            View All ({talents.length})
          </Link>
        </div>
      </div>

      <div 
        className={`relative ${isMobile ? 'overflow-hidden' : 'md:overflow-visible'}`}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`${isMobile ? 'flex' : 'md:grid md:grid-cols-2 lg:grid-cols-3'} gap-6 md:gap-8 transition-transform duration-300 ease-in-out`}
          style={isMobile ? { transform: `translateX(-${currentIndex * 100}%)` } : {}}
        >
          {(isMobile ? talents : visibleTalents).map((talent) => (
            <div
              key={talent.id}
              className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow ${
                itemsPerView === 1 ? 'flex-shrink-0 w-full' : 'min-w-0'
              }`}
            >
              <Link
                href={`/talent/${talent.slug}`}
                className="block focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none rounded"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {talent.name.charAt(0)}
                  </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-gray-900 mb-1 truncate">
                        {talent.name}
                      </h2>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                          {talent.category}
                        </span>
                      </div>
                    </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Portfolio Preview</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    View full portfolio on profile page
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {talent.linkedin && (
                  <a
                    href={talent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
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

