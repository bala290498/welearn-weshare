'use client'

import { useState, useEffect, useRef } from 'react'

interface FixedSideCardProps {
  children: React.ReactNode
}

export default function FixedSideCard({ children }: FixedSideCardProps) {
  const [cardStyle, setCardStyle] = useState<React.CSSProperties>({})
  const cardRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return

      const main = document.querySelector('main')
      const footer = document.querySelector('footer')
      if (!main || !footer) return

      const cardRect = cardRef.current.getBoundingClientRect()
      const mainRect = main.getBoundingClientRect()
      const footerRect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const cardHeight = cardRect.height

      // Calculate the vertical center position
      const centerTop = (viewportHeight - cardHeight) / 2
      const centerBottom = centerTop + cardHeight

      // Get the bottom of the main section (where footer starts)
      const mainBottom = mainRect.bottom
      const footerTop = footerRect.top

      // Check if card would overlap footer or go beyond main section
      if (centerBottom > footerTop - 24 || centerBottom > mainBottom - 24) {
        // Card would overlap footer or go beyond main section, push it up
        const maxBottom = Math.min(footerTop - 24, mainBottom - 24)
        const newTop = maxBottom - cardHeight
        setCardStyle({
          position: 'fixed',
          top: `${Math.max(96, newTop)}px`,
          right: '24px',
          transform: 'none',
        })
      } else {
        // Normal centered position (within main section bounds)
        setCardStyle({
          position: 'fixed',
          top: '50%',
          right: '24px',
          transform: 'translateY(-50%)',
        })
      }
    }

    // Initial calculation
    handleScroll()

    // Add scroll listener with requestAnimationFrame for smooth updates
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Placeholder to maintain layout */}
      <div ref={placeholderRef} className="hidden lg:block" />
      
      {/* Fixed card */}
      <div
        ref={cardRef}
        className="hidden lg:block w-[280px] xl:w-[320px] z-30"
        style={cardStyle}
      >
        {children}
      </div>
    </>
  )
}

