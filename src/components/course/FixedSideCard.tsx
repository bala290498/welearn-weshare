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

      const footer = document.querySelector('footer')
      if (!footer) return

      const cardRect = cardRef.current.getBoundingClientRect()
      const footerRect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const cardHeight = cardRect.height

      // Calculate the vertical center position
      const centerTop = (viewportHeight - cardHeight) / 2

      // Check if card would overlap footer
      const cardBottom = centerTop + cardHeight
      const footerTop = footerRect.top

      if (cardBottom > footerTop - 24) {
        // Card would overlap footer, push it up
        const newTop = footerTop - cardHeight - 24
        setCardStyle({
          position: 'fixed',
          top: `${Math.max(96, newTop)}px`,
          right: '24px',
          transform: 'none',
        })
      } else {
        // Normal centered position
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

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
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

