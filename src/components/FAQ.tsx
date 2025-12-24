'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQ() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How does the dynamic pricing work?',
      answer:
        'We set a course revenue target upfront. As more students enroll, we divide that target by the total number of students. The more learners who join, the lower the price per student becomes. You can track the current price in real-time on our pricing widget.',
    },
    {
      id: 'item-2',
      question: "What if I'm not satisfied with the trainer?",
      answer:
        'We have a live trainer vote feature. If learners are not satisfied, you can start a live vote to request a trainer change. This is 100% student-driven quality control to ensure you get the best learning experience.',
    },
    {
      id: 'item-3',
      question: 'Do I get a certificate upon completion?',
      answer:
        'Yes! Upon successful completion of the course, you receive an official completion certificate. You also get downloadable course materials, project templates, and lifetime resource access (where applicable).',
    },
    {
      id: 'item-4',
      question: 'How do I get listed on the Talent Portal?',
      answer:
        "Top performers on in-house tasks automatically get featured on our Talent Portal. Complete verified tasks within our ecosystem, maintain high performance, and you'll be eligible for listing. Employers can then browse your work and invite you directly for interviews.",
    },
    {
      id: 'item-5',
      question: 'What is your refund policy?',
      answer:
        "If the final price is lower than what you've already paid, you'll receive automatic refunds for the difference. We also offer a 30-day money-back guarantee if you're not satisfied with the course quality.",
    },
    {
      id: 'item-6',
      question: 'What is the difference between Prime Batch and Collective Batch?',
      answer:
        'Prime Batch starts immediately with fixed dates and smaller, focused groups. Collective Batch starts when maximum capacity is reached and offers the lowest per-student pricing through dynamic group pricing. Both include the same course content and features.',
    },
    {
      id: 'item-7',
      question: 'How does the mentorship program work?',
      answer:
        'Our mentorship program includes resume reviews, mock interviews, portfolio feedback, and one-on-one mentorship sessions. Top performers also get career guidance to help them land their dream roles. Mentorship is available throughout the course and after completion.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-12">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-neutral-900">
              Common Questions, Answered
            </h2>
            <p className="text-gray-600 mt-4 text-center text-lg w-full max-w-3xl mx-auto">
              Discover quick and comprehensive answers to common questions about our platform, services, and features.
            </p>
          </div>

          <Accordion type="single" collapsible className="-mx-2 sm:mx-0">
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-gray-50 peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-gray-700">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7 border-gray-200" />
              </div>
            ))}
          </Accordion>

          <p className="text-gray-600 text-center">
            Can&apos;t find what you&apos;re looking for? Contact our{' '}
            <Link href="/contact" className="text-primary-600 font-medium hover:underline">
              support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

