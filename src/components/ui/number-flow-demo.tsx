'use client'

import { useState } from 'react'
import NumberFlow, { type Value } from '@number-flow/react'

const values: Value[] = [19, 20]

function TrueDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length)
  }

  return (
    <div
      onClick={handleClick}
      className="min-h-screen w-full min-w-[100vw] flex flex-col items-center justify-center cursor-pointer text-[40px]"
    >
      <div className="pointer-events-none">
        <NumberFlow value={values[currentIndex]} trend={true} />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-500 pointer-events-none">
        Click anywhere to change values
      </p>
    </div>
  )
}

function FalseDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length)
  }

  return (
    <div
      onClick={handleClick}
      className="min-h-screen w-full min-w-[100vw] flex flex-col items-center justify-center cursor-pointer text-[40px]"
    >
      <div className="pointer-events-none">
        <NumberFlow value={values[currentIndex]} trend={false} />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-500 pointer-events-none">
        Click anywhere to change values
      </p>
    </div>
  )
}

function IncreasingDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length)
  }

  return (
    <div
      onClick={handleClick}
      className="min-h-screen w-full min-w-[100vw] flex flex-col items-center justify-center cursor-pointer text-[40px]"
    >
      <div className="pointer-events-none">
        <NumberFlow value={values[currentIndex]} trend="increasing" />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-500 pointer-events-none">
        Click anywhere to change values
      </p>
    </div>
  )
}

function DecreasingDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length)
  }

  return (
    <div
      onClick={handleClick}
      className="min-h-screen w-full min-w-[100vw] flex flex-col items-center justify-center cursor-pointer text-[40px]"
    >
      <div className="pointer-events-none">
        <NumberFlow value={values[currentIndex]} trend="decreasing" />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-500 pointer-events-none">
        Click anywhere to change values
      </p>
    </div>
  )
}

export { TrueDemo, FalseDemo, IncreasingDemo, DecreasingDemo }

