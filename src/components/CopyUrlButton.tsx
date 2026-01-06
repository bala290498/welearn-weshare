'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyUrlButtonProps {
  url: string
}

export default function CopyUrlButton({ url }: CopyUrlButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-sm flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          URL Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy URL
        </>
      )}
    </button>
  )
}













