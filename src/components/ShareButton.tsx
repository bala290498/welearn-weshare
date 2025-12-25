'use client'

import { Share2 } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ShareButtonProps {
  url: string
  title: string
  className?: string
  iconOnly?: boolean
}

export default function ShareButton({ url, title, className = '', iconOnly = false }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState(url)

  useEffect(() => {
    // Use current page URL if available
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Check out this course: ${title}`,
      url: currentUrl,
    }

    // Try Web Share API first (mobile and modern browsers)
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch (err) {
        // User cancelled or error occurred, fall back to clipboard
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback: Use old method
      const textArea = document.createElement('textarea')
      textArea.value = currentUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`flex items-center justify-center ${iconOnly ? 'p-1.5' : 'gap-2 px-4 py-2'} bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium text-sm md:text-base ${className}`}
      aria-label="Share course"
      title={copied ? 'Copied!' : 'Share'}
    >
      <Share2 className="w-4 h-4 md:w-5 md:h-5" />
      {!iconOnly && <span>{copied ? 'Copied!' : 'Share'}</span>}
    </button>
  )
}

