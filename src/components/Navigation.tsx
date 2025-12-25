'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              className="text-[clamp(0.875rem,1.25vw,1.125rem)] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md italic uppercase transition-colors"
              style={{ fontFamily: 'var(--font-open-sans)', lineHeight: '1.1' }}
              onClick={closeMobileMenu}
            >
              <span className="block whitespace-nowrap" style={{ color: '#004aad' }}>We Learn</span>
              <span className="block whitespace-nowrap" style={{ color: '#00bf63' }}>We Share</span>
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
              href="/community-voice"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
            >
              Community Voice
            </a>
              <a 
                href="/batches" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Batches
              </a>
              <a 
                href="/students" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Students
              </a>
              <a 
                href="/professionals" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Professionals
              </a>
              <a 
                href="/community-groups" 
                className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
              >
                Community Groups
              </a>
            <a
              href="/opportunities"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md px-3 py-2"
            >
              Opportunities
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
              href="/community-voice"
              className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Community Voice
            </a>
              <a
                href="/batches"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Batches
              </a>
              <a
                href="/students"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Students
              </a>
              <a
                href="/professionals"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Professionals
              </a>
              <a
                href="/community-groups"
                className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                onClick={closeMobileMenu}
              >
                Community Groups
              </a>
            <a
              href="/opportunities"
              className="block text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-3 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Opportunities
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
