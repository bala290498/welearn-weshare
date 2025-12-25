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
    <div className="w-full">
      {/* Mobile: Grid layout with aligned rows, centered columns */}
      <div className="md:hidden grid grid-cols-2 gap-x-4 gap-y-3">
        {/* Row 1: Icons */}
        <div className="flex justify-center items-center">
          <Users className="w-6 h-6" style={{ color: '#004aad' }} />
        </div>
        <div className="flex justify-center items-center">
          <TrendingDown className="w-6 h-6" style={{ color: '#00bf63' }} />
        </div>
        
        {/* Row 2: Numbers */}
        <div className="flex justify-center items-center">
          <div className="text-2xl font-semibold flex items-center justify-center" style={{ color: '#004aad' }}>
            <SlidingNumber value={students} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-xl font-semibold flex items-center justify-center gap-1" style={{ color: '#00bf63' }}>
            <span className="text-lg">₹</span>
            <SlidingNumber value={perHeadPrice} />
          </div>
        </div>
        
        {/* Row 3: Text Labels */}
        <div className="flex justify-center items-center">
          <p className="text-xs uppercase tracking-wide text-center" style={{ color: '#004aad' }}>
            Students Joined
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xs uppercase tracking-wide text-center" style={{ color: '#00bf63' }}>
            Per Head Price
          </p>
        </div>
      </div>

      {/* Desktop: Vertical layout for each section */}
      <div className="hidden md:flex md:flex-col gap-8">
        {/* Students Count */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Users className="w-10 h-10 lg:w-12 lg:h-12" style={{ color: '#004aad' }} />
          </div>
          <div className="text-5xl lg:text-6xl font-semibold mb-2 flex items-center justify-center" style={{ color: '#004aad' }}>
            <SlidingNumber value={students} />
          </div>
          <p className="text-sm lg:text-base uppercase tracking-wide" style={{ color: '#004aad' }}>
            Students Joined
          </p>
        </div>

        {/* Per Head Price */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <TrendingDown className="w-10 h-10 lg:w-12 lg:h-12" style={{ color: '#00bf63' }} />
          </div>
          <div className="text-4xl lg:text-5xl font-semibold mb-2 flex items-center justify-center gap-1" style={{ color: '#00bf63' }}>
            <span className="text-3xl lg:text-4xl">₹</span>
            <SlidingNumber value={perHeadPrice} />
          </div>
          <p className="text-sm lg:text-base uppercase tracking-wide" style={{ color: '#00bf63' }}>
            Per Head Price
          </p>
        </div>
      </div>
    </div>
  );
}

