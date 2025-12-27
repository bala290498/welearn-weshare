'use client'

import { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import { Settings, Cloud, Code, Palette, Megaphone, LucideIcon } from 'lucide-react'

interface Group {
  id: string
  name: string
  category: string
  icon: string
  description: string
  communityHead: string
  whatsappUrl: string
  topics: string[]
}

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Cloud,
  Code,
  Palette,
  Megaphone,
}

// Distinct light gradient colors for cards and icons
const gradientColors = [
  {
    card: 'from-blue-50 to-cyan-50',
    icon: 'from-blue-100 to-cyan-100',
    iconText: 'text-blue-600',
    border: 'border-blue-200',
    text: 'text-gray-900',
    button: 'from-blue-500 to-cyan-500'
  },
  {
    card: 'from-green-50 to-emerald-50',
    icon: 'from-green-100 to-emerald-100',
    iconText: 'text-green-600',
    border: 'border-green-200',
    text: 'text-gray-900',
    button: 'from-green-500 to-emerald-500'
  },
  {
    card: 'from-purple-50 to-indigo-50',
    icon: 'from-purple-100 to-indigo-100',
    iconText: 'text-purple-600',
    border: 'border-purple-200',
    text: 'text-gray-900',
    button: 'from-purple-500 to-indigo-500'
  },
  {
    card: 'from-pink-50 to-rose-50',
    icon: 'from-pink-100 to-rose-100',
    iconText: 'text-pink-600',
    border: 'border-pink-200',
    text: 'text-gray-900',
    button: 'from-pink-500 to-rose-500'
  },
  {
    card: 'from-orange-50 to-amber-50',
    icon: 'from-orange-100 to-amber-100',
    iconText: 'text-orange-600',
    border: 'border-orange-200',
    text: 'text-gray-900',
    button: 'from-orange-500 to-amber-500'
  },
  {
    card: 'from-teal-50 to-cyan-50',
    icon: 'from-teal-100 to-cyan-100',
    iconText: 'text-teal-600',
    border: 'border-teal-200',
    text: 'text-gray-900',
    button: 'from-teal-500 to-cyan-500'
  },
  {
    card: 'from-violet-50 to-purple-50',
    icon: 'from-violet-100 to-purple-100',
    iconText: 'text-violet-600',
    border: 'border-violet-200',
    text: 'text-gray-900',
    button: 'from-violet-500 to-purple-500'
  }
]

// Get gradient based on group index
const getGradient = (index: number) => {
  return gradientColors[index % gradientColors.length]
}

interface GroupsClientProps {
  groups: Group[]
}

export default function GroupsClient({ groups }: GroupsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const categories = Array.from(new Set(groups.map(group => group.category)))
  const filteredGroups = selectedCategory === 'All' 
    ? groups 
    : groups.filter(group => group.category === selectedCategory)

  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        label="All Categories"
      />

      {/* Grid layout for all screen sizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 items-stretch">
        {filteredGroups.map((group, index) => {
          const gradient = getGradient(groups.findIndex(g => g.id === group.id))
          return (
          <div
            key={group.id}
            className={`bg-gradient-to-br ${gradient.card} rounded-lg border ${gradient.border} p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden`}
          >
            <div className="flex items-center gap-4 mb-4 min-h-[72px]">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient.icon} flex items-center justify-center flex-shrink-0 shadow-md`}>
                {(() => {
                  const IconComponent = iconMap[group.icon] || Settings
                  return <IconComponent className={`w-6 h-6 ${gradient.iconText}`} />
                })()}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className={`text-lg font-semibold ${gradient.text} mb-1 truncate`}>
                  {group.name}
                </h2>
                <span className={`inline-block px-2 py-1 ${gradient.icon} ${gradient.iconText} text-xs font-semibold rounded`}>
                  {group.category}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-4 line-clamp-3 min-h-[60px]">
              {group.description}
            </p>

            <div className="space-y-2 mb-4 text-sm text-gray-700 min-h-[28px]">
              <div className="flex items-center gap-2">
                <span className="font-medium">Community Head:</span>
                <span className={`font-semibold ${gradient.iconText}`}>{group.communityHead}</span>
              </div>
            </div>

            {group.topics && group.topics.length > 0 && (
              <div className="mb-4 min-h-[60px]">
                <h3 className="text-xs font-semibold text-gray-700 mb-2">Topics</h3>
                <div className="flex flex-wrap gap-1">
                  {group.topics.slice(0, 3).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className={`px-2 py-1 ${gradient.icon} ${gradient.iconText} text-xs rounded`}
                    >
                      {topic}
                    </span>
                  ))}
                  {group.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{group.topics.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200 mt-auto min-h-[52px]">
              <a
                href={`https://wa.me/917010584543?text=${encodeURIComponent(`Hi! I would like to join the ${group.name} group. Please add me.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full bg-gradient-to-r ${gradient.button} text-white text-center px-4 py-2.5 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all font-semibold text-sm shadow-md`}
              >
                Join Group
              </a>
            </div>
          </div>
        )})}
      </div>
    </>
  )
}

