'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'

interface JoinCommunityModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hearAboutUs: [] as string[],
    interestedBatchType: [] as string[]
  })

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const hearAboutOptions = [
    'Instagram',
    'WhatsApp',
    'YouTube',
    'Friends',
    'Family'
  ]

  const batchTypeOptions = [
    'Prime',
    'Collective'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => {
      const currentOptions = prev.hearAboutUs
      if (currentOptions.includes(option)) {
        return {
          ...prev,
          hearAboutUs: currentOptions.filter(item => item !== option)
        }
      } else {
        return {
          ...prev,
          hearAboutUs: [...currentOptions, option]
        }
      }
    })
  }

  const handleBatchTypeChange = (option: string) => {
    setFormData(prev => {
      const currentOptions = prev.interestedBatchType
      if (currentOptions.includes(option)) {
        return {
          ...prev,
          interestedBatchType: currentOptions.filter(item => item !== option)
        }
      } else {
        return {
          ...prev,
          interestedBatchType: [...currentOptions, option]
        }
      }
    })
  }

  const handleSubmitWhatsApp = () => {
    const hearAboutText = formData.hearAboutUs.length > 0 
      ? formData.hearAboutUs.join(', ')
      : 'Not specified'
    
    const batchTypeText = formData.interestedBatchType.length > 0
      ? formData.interestedBatchType.join(', ')
      : 'Not specified'
    
    const message = `Join Community Application

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
How did you hear about us: ${hearAboutText}
Interested Batch Type: ${batchTypeText}`

    const whatsappUrl = `https://wa.me/917010584543?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      hearAboutUs: [],
      interestedBatchType: []
    })
  }

  if (!isOpen || !mounted || typeof document === 'undefined') return null

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h3 className="text-xl font-semibold text-gray-900">Join Community</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Form Fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email ID *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              How did you hear about us? *
            </label>
            <div className="space-y-2 border border-gray-300 rounded-lg p-3 max-h-48 overflow-y-auto">
              {hearAboutOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={formData.hearAboutUs.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            {formData.hearAboutUs.length === 0 && (
              <p className="text-xs text-red-500 mt-1">Please select at least one option</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Interested Batch Type
            </label>
            <div className="space-y-2 border border-gray-300 rounded-lg p-3">
              {batchTypeOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={formData.interestedBatchType.includes(option)}
                    onChange={() => handleBatchTypeChange(option)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-xl">
          <button
            onClick={handleSubmitWhatsApp}
            disabled={!formData.name || !formData.email || !formData.phone || formData.hearAboutUs.length === 0}
            className="w-full px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

