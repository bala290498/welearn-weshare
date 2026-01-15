'use client'

interface ViewportStickyCardProps {
  children: React.ReactNode
}

export default function ViewportStickyCard({ children }: ViewportStickyCardProps) {
  return (
    <div className="hidden lg:block">
      <div
        className="w-[280px] xl:w-[320px] z-30 fixed top-24 right-6"
        style={{
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  )
}

