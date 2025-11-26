'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary-600">
              WeLearnWeShare
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-primary-600 transition">
              Courses
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">
              How It Works
            </a>
            <a href="#talent-portal" className="text-gray-700 hover:text-primary-600 transition">
              Talent Portal
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Contact
            </a>
            <a
              href="#join"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
            >
              Join Now
            </a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

