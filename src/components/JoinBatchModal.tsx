'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'

interface JoinBatchModalProps {
  isOpen: boolean
  onClose: () => void
  courseTitle: string
  batchType: 'prime' | 'collective' | undefined
}

export default function JoinBatchModal({ isOpen, onClose, courseTitle, batchType }: JoinBatchModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitWhatsApp = () => {
    const message = `Join Batch Application

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${courseTitle}`

    const whatsappUrl = `https://wa.me/917010584543?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: ''
    })
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h3 className="text-xl font-semibold text-gray-900">Join Batch</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Auto-filled Course Info */}
          <div className="bg-primary-50 rounded-lg p-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Course</label>
              <p className="text-sm font-semibold text-gray-900">{courseTitle}</p>
            </div>
          </div>

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
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-xl">
          <button
            onClick={handleSubmitWhatsApp}
            disabled={!formData.name || !formData.email || !formData.phone}
            className="w-full px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

