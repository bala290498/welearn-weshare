'use client';

import { useEffect, useState } from 'react';
import { SlidingNumber } from '@/components/ui/sliding-number';
import { Users, TrendingDown } from 'lucide-react';

export default function HeroPricingCard() {
  const [students, setStudents] = useState(10);
  
  // Calculate per head price when students change (72000 / students)
  const basePrice = 72000;
  const perHeadPrice = Math.round(basePrice / students);

  useEffect(() => {
    // Continuously increment students from 10 to 19, then wrap to 10
    // SlidingNumber will handle the smooth transitions for both digits
    const studentInterval = setInterval(() => {
      setStudents((prev) => {
        if (prev >= 19) return 10;
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(studentInterval);
    };
  }, []);

  return (
    <div className="flex justify-center">
      {/* Single Card Container */}
      <div className="rounded-2xl bg-white border border-gray-200 shadow-xl p-4 md:p-4 w-full md:w-auto md:max-w-xs lg:max-w-sm">
        {/* Text at top of card */}
        <p className="text-sm text-gray-600 mb-2 md:mb-3 text-center">
          Current price based on
        </p>

        {/* Mobile: Grid layout */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {/* Students Joined */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <Users className="w-6 h-6" style={{ color: '#004aad' }} />
            </div>
            <div className="text-2xl font-semibold mb-1 flex items-center justify-center" style={{ color: '#004aad' }}>
              <SlidingNumber value={students} />
            </div>
            <p className="text-xs uppercase tracking-wide text-center" style={{ color: '#004aad' }}>
              Students Joined
            </p>
          </div>

          {/* Per Head Price */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <TrendingDown className="w-6 h-6" style={{ color: '#00bf63' }} />
            </div>
            <div className="text-xl font-semibold mb-1 flex items-center justify-center gap-1" style={{ color: '#00bf63' }}>
              <span className="text-lg">₹</span>
              <SlidingNumber value={perHeadPrice} />
            </div>
            <p className="text-xs uppercase tracking-wide text-center" style={{ color: '#00bf63' }}>
              Per Head Price
            </p>
          </div>
        </div>

        {/* Desktop: Vertical layout */}
        <div className="hidden md:flex md:flex-col gap-4">
          {/* Students Count */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: '#004aad' }} />
            </div>
            <div className="text-3xl lg:text-4xl font-semibold mb-1 flex items-center justify-center" style={{ color: '#004aad' }}>
              <SlidingNumber value={students} />
            </div>
            <p className="text-xs lg:text-sm uppercase tracking-wide" style={{ color: '#004aad' }}>
              Students Joined
            </p>
          </div>

          {/* Per Head Price */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <TrendingDown className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: '#00bf63' }} />
            </div>
            <div className="text-2xl lg:text-3xl font-semibold mb-1 flex items-center justify-center gap-1" style={{ color: '#00bf63' }}>
              <span className="text-xl lg:text-2xl">₹</span>
              <SlidingNumber value={perHeadPrice} />
            </div>
            <p className="text-xs lg:text-sm uppercase tracking-wide" style={{ color: '#00bf63' }}>
              Per Head Price
            </p>
          </div>
        </div>

        {/* Text at bottom of card with blinking green dot */}
        <div className="flex items-center justify-center gap-2 mt-3 md:mt-4">
          <div 
            className="w-2 h-2 rounded-full animate-pulse" 
            style={{ backgroundColor: '#00bf63' }}
          ></div>
          <p className="text-xs md:text-sm italic text-gray-600">
            Price drops as more students join
          </p>
        </div>
      </div>
    </div>
  );
}

