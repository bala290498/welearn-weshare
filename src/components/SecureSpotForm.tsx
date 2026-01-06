'use client'

import { useState } from 'react'
import WhatsAppIcon from '@/components/WhatsAppIcon'

interface SecureSpotFormProps {
  courseTitle: string
  batchType?: 'prime' | 'collective'
}

export default function SecureSpotForm({ courseTitle, batchType }: SecureSpotFormProps) {
  // Determine background color based on batch type
  const bgColor = batchType === 'collective' 
    ? 'bg-purple-50' 
    : batchType === 'prime' 
    ? 'bg-orange-50' 
    : 'bg-white'
  
  const borderColor = batchType === 'collective'
    ? 'border-purple-200'
    : batchType === 'prime'
    ? 'border-orange-200'
    : 'border-gray-200'
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitWhatsApp = () => {
    if (!formData.email || !formData.phone) {
      return
    }

    const message = `Interested in Program - Secure Spot

Course: ${courseTitle}
Email: ${formData.email}
Mobile: ${formData.phone}`

    const whatsappUrl = `https://wa.me/917010584543?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      email: '',
      phone: ''
    })
  }

  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-6 md:p-8`}>
      <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900 mb-6 w-fit">
        Interested in this Program? Secure your spot now!
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
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
            Mobile No *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            placeholder="Enter your mobile number"
          />
        </div>

        <button
          onClick={handleSubmitWhatsApp}
          disabled={!formData.email || !formData.phone}
          className="px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Submit via WhatsApp
        </button>
      </div>
    </div>
  )
}

