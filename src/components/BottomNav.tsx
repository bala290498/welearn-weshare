'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Home, GraduationCap, Users, Briefcase, BookOpen, Grid2x2, X, MessageSquare, Users2, FileText } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
  },
  {
    href: '/batches',
    label: 'Batches',
    icon: GraduationCap,
  },
  {
    href: '/students',
    label: 'Students',
    icon: Users,
  },
  {
    href: '/blogs',
    label: 'Blogs',
    icon: BookOpen,
  },
]

const morePages = [
  {
    href: '/professionals',
    label: 'Professionals',
    icon: Briefcase,
  },
  {
    href: '/community-voice',
    label: 'Community Voice',
    icon: MessageSquare,
  },
  {
    href: '/community-groups',
    label: 'Community Groups',
    icon: Users2,
  },
  {
    href: '/opportunities',
    label: 'Opportunities',
    icon: FileText,
  },
  {
    href: '/become-trainer',
    label: 'Become Trainer',
    icon: GraduationCap,
  },
]

export default function BottomNav() {
  const pathname = usePathname()
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false)

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isMoreModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMoreModalOpen])

  const closeModal = () => {
    setIsMoreModalOpen(false)
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = item.href === '/' 
              ? pathname === '/'
              : pathname?.startsWith(item.href)
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 min-w-[60px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
                aria-label={item.label}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
          
          {/* More Button */}
          <button
            onClick={() => setIsMoreModalOpen(true)}
            className={`flex flex-col items-center justify-center gap-1 px-3 py-2 min-w-[60px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md ${
              isMoreModalOpen
                ? 'text-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
            aria-label="More"
          >
            <Grid2x2 className={`w-5 h-5 ${isMoreModalOpen ? 'stroke-[2.5]' : ''}`} />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>

      {/* More Pages Modal */}
      {isMoreModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-end justify-center md:hidden"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="fixed inset-x-0 top-0 bottom-16 bg-black bg-opacity-50" />
          
          {/* Modal Content */}
          <div
            className="relative bg-white shadow-2xl w-full max-h-[calc(80vh-4rem)] overflow-y-auto transform transition-transform duration-300 bottom-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-xl font-semibold text-gray-900">More Pages</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Pages Grid */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {morePages.map((page) => {
                  const Icon = page.icon
                  
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={closeModal}
                      className="flex flex-col items-center justify-center gap-1 px-3 py-2 min-w-[60px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-md text-gray-600 hover:text-primary-600"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-medium text-center">{page.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
