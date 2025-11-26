'use client'

import { useState } from 'react'
import CategoryFilter from './CategoryFilter'

interface HobbyCluster {
  id: string
  name: string
  category: string
  icon: string
  description: string
  memberCount: number
  communityHead: string
  whatsappUrl: string
  topics: string[]
}

interface HobbyClusterClientProps {
  clusters: HobbyCluster[]
}

export default function HobbyClusterClient({ clusters }: HobbyClusterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const categories = Array.from(new Set(clusters.map(cluster => cluster.category)))
  const filteredClusters = selectedCategory === 'All' 
    ? clusters 
    : clusters.filter(cluster => cluster.category === selectedCategory)

  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        label="All Categories"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredClusters.map((cluster) => (
          <div
            key={cluster.id}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-2xl flex-shrink-0">
                {cluster.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-900 mb-1 truncate">
                  {cluster.name}
                </h2>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                  {cluster.category}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
              {cluster.description}
            </p>

            <div className="space-y-2 mb-4 text-sm text-gray-600 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-medium">Members:</span>
                <span>{cluster.memberCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Community Head:</span>
                <span className="text-primary-600">{cluster.communityHead}</span>
              </div>
            </div>

            {cluster.topics && cluster.topics.length > 0 && (
              <div className="mb-4 flex-shrink-0">
                <h3 className="text-xs font-semibold text-gray-700 mb-2">Topics</h3>
                <div className="flex flex-wrap gap-1">
                  {cluster.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
                    >
                      {topic}
                    </span>
                  ))}
                  {cluster.topics.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{cluster.topics.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200 mt-auto flex-shrink-0">
              <a
                href={cluster.whatsappUrl}
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

