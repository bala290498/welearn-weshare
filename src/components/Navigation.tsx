'use client'

import { useState, useEffect } from 'react'

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
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
      }`}
    >
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-[clamp(1rem,2.5vw,1.5rem)] font-bold text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
              onClick={closeMobileMenu}
            >
              WeLearnWeShare
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a 
              href="/skill-building" 
              className="text-gray-700 hover:text-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              Skill Building
            </a>
            <a 
              href="/talent" 
              className="text-gray-700 hover:text-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              Talent
            </a>
            <a 
              href="/hobby-cluster" 
              className="text-gray-700 hover:text-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              Hobby Cluster
            </a>
            <a
              href="/blogs"
              className="text-gray-700 hover:text-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
            >
              Blogs
            </a>
            <a
              href="#join"
              className="bg-primary-600 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              Join Now
            </a>
          </div>
          <button 
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded p-2"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-200">
            <a
              href="/skill-building"
              className="block text-gray-700 hover:text-primary-600 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Skill Building
            </a>
            <a
              href="/talent"
              className="block text-gray-700 hover:text-primary-600 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Talent
            </a>
            <a
              href="/hobby-cluster"
              className="block text-gray-700 hover:text-primary-600 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Hobby Cluster
            </a>
            <a
              href="/blogs"
              className="block text-gray-700 hover:text-primary-600 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              onClick={closeMobileMenu}
            >
              Blogs
            </a>
            <a
              href="#join"
              className="block bg-primary-600 text-white text-center px-4 py-3 rounded-xl shadow-sm hover:bg-primary-700 transition font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 mt-4"
              onClick={closeMobileMenu}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

