'use client'

interface CompanyLogoProps {
  name: string
  imageUrl?: string
  logoPath?: string
  fallbackColor: string
  fallbackText: string
}

export default function CompanyLogo({ name, imageUrl, logoPath, fallbackColor, fallbackText }: CompanyLogoProps) {
  // Use local logo path if provided, otherwise use imageUrl
  const src = logoPath ? `/logos/${logoPath}` : (imageUrl || '')
  
  return (
    <div className="bg-white p-4 md:p-6 flex items-center justify-center border border-gray-200 min-h-[80px] md:min-h-[100px]">
      <img 
        src={src} 
        alt={name} 
        className="max-h-10 md:max-h-14 w-auto object-contain max-w-full"
        style={{ imageRendering: 'auto' }}
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/120x40/${fallbackColor}/FFFFFF?text=${fallbackText}`
        }}
      />
    </div>
  )
}

