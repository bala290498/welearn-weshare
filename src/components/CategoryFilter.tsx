'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Filter, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  label?: string
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange, label = 'All Categories' }: CategoryFilterProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-8 flex">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger
          className={cn(
            'w-auto inline-flex items-center gap-2 px-3 py-2',
            'bg-white border border-gray-300 rounded-lg',
            'hover:bg-gray-50 transition',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            open && 'bg-gray-50'
          )}
          aria-label="Filter by category"
        >
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {selectedCategory === 'All' ? label : selectedCategory}
          </span>
          <ChevronDown className={cn('w-4 h-4 text-gray-600 transition-transform', open && 'rotate-180')} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={cn(
              'min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg',
              'z-50 max-h-64 overflow-y-auto',
              'will-change-[transform,opacity]',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out data-[state=open]:fade-in',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
              'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'duration-200'
            )}
            sideOffset={8}
            align="start"
          >
            <DropdownMenu.Item
              className={cn(
                'w-full text-left px-4 py-2 text-sm cursor-pointer',
                'focus:outline-none focus:bg-primary-50 focus:text-primary-700',
                'transition',
                selectedCategory === 'All' && 'bg-primary-50 text-primary-700 font-semibold'
              )}
              onSelect={() => onCategoryChange('All')}
            >
              {label}
            </DropdownMenu.Item>
            {categories.map((category) => (
              <DropdownMenu.Item
                key={category}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm cursor-pointer',
                  'focus:outline-none focus:bg-primary-50 focus:text-primary-700',
                  'transition',
                  selectedCategory === category && 'bg-primary-50 text-primary-700 font-semibold'
                )}
                onSelect={() => onCategoryChange(category)}
              >
                {category}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

