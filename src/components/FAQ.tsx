'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does the price drop work?',
      answer:
        'We set a course revenue target upfront. As more students enroll, we divide that target by the total number of students. The more learners who join, the lower the price per student becomes. You can track the current price in real-time on our pricing widget.',
    },
    {
      question: "What if I'm not satisfied with the trainer?",
      answer:
        'We have a live trainer vote feature. If learners are not satisfied, you can start a live vote to request a trainer change. This is 100% student-driven quality control to ensure you get the best learning experience.',
    },
    {
      question: 'Do I get a certificate?',
      answer:
        'Yes! Upon successful completion of the course, you receive an official completion certificate. You also get downloadable course materials, project templates, and lifetime resource access (where applicable).',
    },
    {
      question: 'How do I get listed on the Talent Portal?',
      answer:
        "Top performers on in-house tasks automatically get featured on our Talent Portal. Complete verified tasks within our ecosystem, maintain high performance, and you'll be eligible for listing. Employers can then browse your work and invite you directly for interviews.",
    },
    {
      question: 'What is your refund policy?',
      answer:
        "If the final price is lower than what you've already paid, you'll receive automatic refunds for the difference.",
    },
  ]

  return (
    <section className="py-6 md:py-10 px-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 py-4 bg-gray-50 text-gray-700"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

