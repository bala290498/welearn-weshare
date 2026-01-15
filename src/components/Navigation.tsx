'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import JoinCommunityButton from '@/components/JoinCommunityButton'

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

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      // Prevent touch scrolling on mobile
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault()
      }
      document.addEventListener('touchmove', preventTouchMove, { passive: false })
      
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
        document.removeEventListener('touchmove', preventTouchMove)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${
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
            <JoinCommunityButton className="bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-700 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 whitespace-nowrap">
              Join Now
            </JoinCommunityButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md p-2 relative z-30"
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
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        
        {/* Slide-in Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4 flex-shrink-0">
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto min-h-0">
                <nav className="w-full space-y-2 px-6 py-4">
                  <a
                    href="/"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                  <a
                    href="/community-voice"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Community Voice
                  </a>
                  <a
                    href="/batches"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Batches
                  </a>
                  <a
                    href="/students"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Students
                  </a>
                  <a
                    href="/professionals"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Professionals
                  </a>
                  <a
                    href="/community-groups"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Community Groups
                  </a>
                  <a
                    href="/opportunities"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Opportunities
                  </a>
                  <a
                    href="/blogs"
                    className="block text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 px-6 py-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={closeMobileMenu}
                  >
                    Blogs
                  </a>
                </nav>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
