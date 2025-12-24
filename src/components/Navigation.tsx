'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBatchesOpen, setIsBatchesOpen] = useState(false)
  const batchesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (batchesRef.current && !batchesRef.current.contains(event.target as Node)) {
        setIsBatchesOpen(false)
      }
    }

    if (isBatchesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBatchesOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a 
              href="/" 
              className="text-[clamp(0.875rem,1.25vw,1.125rem)] font-bold text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md italic uppercase transition-colors hover:text-primary-700"
              style={{ fontFamily: 'var(--font-open-sans)', lineHeight: '1.1' }}
              onClick={closeMobileMenu}
            >
              <span className="block whitespace-nowrap">We Learn</span>
              <span className="block whitespace-nowrap">We Share</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
              <a 
                href="/" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Home
              </a>
              <a 
                href="/skill-building" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Skill Building
              </a>
              {/* Batches Dropdown */}
              <div className="relative" ref={batchesRef}>
                <button
                  onClick={() => setIsBatchesOpen(!isBatchesOpen)}
                  className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2 flex items-center gap-1"
                >
                  Batches
                  <ChevronDown className={`w-4 h-4 transition-transform ${isBatchesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBatchesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <a
                      href="/prime"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsBatchesOpen(false)}
                    >
                      Prime Batch
                    </a>
                    <a
                      href="/collective"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      onClick={() => setIsBatchesOpen(false)}
                    >
                      Collective Batch
                    </a>
                  </div>
                )}
              </div>
            <a
              href="/community-voice"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
            >
              Community Voice
            </a>
              <a 
                href="/talent" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Talent
              </a>
            <a
              href="/opportunities"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
            >
              Opportunities
            </a>
              <a 
                href="/groups" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Groups
              </a>
              <a
                href="/become-trainer"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Become a Trainer
              </a>
              <a
              href="/blogs"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
              Blogs
              </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-6">
            <a
              href="#join"
              className="bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-700 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md p-2"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200">
              <a
                href="/"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="/skill-building"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Skill Building
              </a>
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsBatchesOpen(!isBatchesOpen)}
                  className="w-full flex items-center justify-between text-base font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  Batches
                  <ChevronDown className={`w-4 h-4 transition-transform ${isBatchesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBatchesOpen && (
                  <div className="mt-1 ml-4 space-y-1">
                    <a
                      href="/prime"
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Prime Batch
                    </a>
                    <a
                      href="/collective"
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-md"
                      onClick={closeMobileMenu}
                    >
                      Collective Batch
                    </a>
                  </div>
                )}
              </div>
            <a
              href="/community-voice"
              className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Community Voice
            </a>
              <a
                href="/talent"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Talent
              </a>
            <a
              href="/opportunities"
              className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Opportunities
            </a>
              <a
                href="/groups"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Groups
              </a>
              <a
                href="/become-trainer"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Become a Trainer
              </a>
              <a
              href="/blogs"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
              Blogs
              </a>

            {/* Mobile CTA */}
            <div className="pt-3 border-t border-gray-200">
              <a
                href="#join"
                className="block bg-primary-600 text-white text-center text-base font-semibold px-4 py-3 rounded-lg shadow-sm hover:bg-primary-700 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
