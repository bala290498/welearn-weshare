'use client'

import { useState } from 'react'
import TalentCarousel from './TalentCarousel'
import TalentFilter from './TalentFilter'

interface Talent {
  id: string
  slug: string
  name: string
  category: string
  skillLevel: string
  linkedin?: string
  github?: string
}

interface TalentFilterClientProps {
  categories: string[]
  talentsByCategory: Record<string, Talent[]>
}

export default function TalentFilterClient({ categories, talentsByCategory }: TalentFilterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredCategories = selectedCategory === 'All' 
    ? categories 
    : [selectedCategory]

  return (
    <>
      <TalentFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {filteredCategories.map((category) => (
        <TalentCarousel
          key={category}
          category={category}
          talents={talentsByCategory[category]}
        />
      ))}
    </>
  )
}

