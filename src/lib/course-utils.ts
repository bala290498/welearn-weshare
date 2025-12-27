/**
 * Course utility functions for price calculations and formatting
 * These functions are pure and reusable across components
 */

export interface PriceCalculation {
  basePrice: number
  currentPrice: number
  potentialPrice: number
  studentsEnrolled: number
  maxStudents: number
  validEnrolled: number
}

/**
 * Calculate current price per head based on enrollment
 * Formula: Price per head = total fixed price ÷ current number of enrolled students
 */
export function calculateCurrentPrice(
  basePrice: number,
  studentsEnrolled: number,
  maxStudents: number
): number {
  if (studentsEnrolled <= 0) {
    return basePrice
  }
  if (studentsEnrolled > maxStudents) {
    return basePrice / maxStudents
  }
  return basePrice / studentsEnrolled
}

/**
 * Calculate potential price at full capacity
 */
export function calculatePotentialPrice(basePrice: number, maxStudents: number): number {
  if (maxStudents <= 0) {
    return basePrice
  }
  return basePrice / maxStudents
}

/**
 * Format price without decimals for display
 */
export function formatPrice(price: number): string {
  return `₹${Math.round(price).toLocaleString('en-IN')}`
}

/**
 * Parse price string to number
 */
export function parsePrice(priceString: string): number {
  return parseInt(priceString.replace(/[₹,]/g, ''), 10)
}

/**
 * Calculate all pricing information for a course
 */
export function calculateCoursePricing(
  priceString: string,
  studentsEnrolled: number | undefined,
  maxStudents: number | undefined
): PriceCalculation {
  const basePrice = parsePrice(priceString)
  const enrolled = studentsEnrolled ?? 0
  const max = maxStudents ?? 100
  const validEnrolled = Math.min(enrolled, max)
  const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, max)
  const potentialPrice = calculatePotentialPrice(basePrice, max)

  return {
    basePrice,
    currentPrice,
    potentialPrice,
    studentsEnrolled: enrolled,
    maxStudents: max,
    validEnrolled,
  }
}

