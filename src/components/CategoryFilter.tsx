'use client'

import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  label?: string
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange, label = 'All Categories' }: CategoryFilterProps) {
  const allCategories = ['All', ...categories]

  return (
    <div className="mb-8 flex flex-wrap gap-2 justify-center">
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category || (category === 'All' && selectedCategory === 'All')
        const displayLabel = category === 'All' ? label : category
        
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category === 'All' ? 'All' : category)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm md:text-base font-medium transition',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
              isSelected
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
            aria-label={`Filter by ${displayLabel}`}
            aria-pressed={isSelected}
              >
            {displayLabel}
          </button>
        )
      })}
    </div>
  )
}

