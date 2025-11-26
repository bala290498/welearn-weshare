'use client'

import CategoryFilter from './CategoryFilter'

interface TalentFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function TalentFilter({ categories, selectedCategory, onCategoryChange }: TalentFilterProps) {
  return (
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={onCategoryChange}
      label="All Categories"
    />
  )
}

