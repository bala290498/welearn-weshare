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
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4 min-h-[72px]">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const IconComponent = iconMap[group.icon] || Settings
                  return <IconComponent className="w-6 h-6 text-primary-600" />
                })()}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                  {group.name}
                </h2>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                  {group.category}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">
              {group.description}
            </p>

            <div className="space-y-2 mb-4 text-sm text-gray-600 min-h-[28px]">
              <div className="flex items-center gap-2">
                <span className="font-medium">Community Head:</span>
                <span className="text-primary-600">{group.communityHead}</span>
              </div>
            </div>

            {group.topics && group.topics.length > 0 && (
              <div className="mb-4 min-h-[60px]">
                <h3 className="text-xs font-semibold text-gray-700 mb-2">Topics</h3>
                <div className="flex flex-wrap gap-1">
                  {group.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
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
                className="block w-full bg-green-600 text-white text-center px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm"
              >
                Join Group
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

