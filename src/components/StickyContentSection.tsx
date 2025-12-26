'use client'

import React, { useRef, useLayoutEffect, useState } from 'react'

interface StickyContentSectionProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export default function StickyContentSection({ children, sidebar }: StickyContentSectionProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [sidebarHeight, setSidebarHeight] = useState(0)

  // Measure sidebar height once (and on resize)
  useLayoutEffect(() => {
    const measure = () => {
      if (sidebarRef.current) {
        setSidebarHeight(sidebarRef.current.offsetHeight)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section 
      className="py-6 md:py-10 px-4 bg-white"
      style={{ paddingBottom: sidebarHeight > 0 ? `${sidebarHeight + 24}px` : undefined }}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12 lg:mx-8">
            {children}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div ref={sidebarRef} className="lg:sticky lg:top-24">
              {sidebar}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}




