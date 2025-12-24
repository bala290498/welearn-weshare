'use client'

import React from 'react'
import { motion } from 'framer-motion'

// --- Types ---
interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: 'The community-powered pricing made premium DevOps training affordable. I landed a job at a top tech company within 2 months of completing the course.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Priya Sharma',
    role: 'DevOps Engineer',
  },
  {
    text: 'The live trainer voting feature was a game-changer. We got the best instructor and the dynamic pricing saved me thousands. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Rahul Kumar',
    role: 'Cloud Architect',
  },
  {
    text: 'The mentorship program and Talent Portal helped me get direct interview invites. I received 3 job offers after completing the AWS course.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Anjali Patel',
    role: 'AWS Solutions Architect',
  },
  {
    text: 'As more students joined, the price dropped significantly. The quality remained top-notch and I got certified with real-world projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Vikram Singh',
    role: 'Linux System Admin',
  },
  {
    text: 'The in-house tasks led directly to hiring opportunities. I completed verified projects and got featured on the Talent Portal.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Meera Joshi',
    role: 'DevOps Specialist',
  },
  {
    text: 'The weekly roadmap kept me on track. The community support was incredible - mentors and peers helped me solve complex problems quickly.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Sneha Reddy',
    role: 'Cloud Engineer',
  },
  {
    text: 'Best investment in my career! The certificate and portfolio projects helped me transition from support to a DevOps role.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Arjun Nair',
    role: 'Senior DevOps Engineer',
  },
  {
    text: 'The Collective Batch pricing was unbeatable. Learning with a group made it more engaging and the per-student cost was the lowest I found.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Kavya Menon',
    role: 'AWS Cloud Engineer',
  },
  {
    text: 'Resume reviews and mock interviews prepared me perfectly. I aced my interviews and got hired at my dream company within 3 months.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Aditya Verma',
    role: 'Infrastructure Engineer',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

// --- Helper Functions ---
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? 'true' : 'false'}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary-600/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center ring-2 ring-neutral-100 group-hover:ring-primary-600/30 transition-all duration-300 ease-in-out">
                        <span className="text-sm font-semibold text-gray-700">
                          {getInitials(name)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-neutral-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-6 md:py-10 px-4 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 },
          }}
          className="flex flex-col items-center justify-center w-full mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-neutral-900 transition-colors">
            What Our Learners Say
          </h2>
          <p className="text-center mt-5 text-neutral-500 text-lg leading-relaxed w-full max-w-3xl transition-colors">
            Discover how thousands of learners transformed their careers with our community-powered courses.
          </p>
        </motion.div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}

