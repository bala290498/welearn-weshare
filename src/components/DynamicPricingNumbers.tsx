'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';
import { Users, TrendingDown } from 'lucide-react';

export default function DynamicPricingNumbers() {
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
    <div className="space-y-6 md:space-y-8 w-full">
      {/* Students Count */}
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ color: '#004aad' }} />
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 flex items-center justify-center" style={{ color: '#004aad' }}>
          <SlidingNumber value={students} />
        </div>
        <p className="text-xs md:text-sm lg:text-base uppercase tracking-wide" style={{ color: '#004aad' }}>
          Students Joined
        </p>
      </div>

      {/* Per Head Price */}
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <TrendingDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ color: '#00bf63' }} />
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 flex items-center justify-center gap-1" style={{ color: '#00bf63' }}>
          <span className="text-2xl md:text-3xl lg:text-4xl">₹</span>
          <SlidingNumber value={perHeadPrice} />
        </div>
        <p className="text-xs md:text-sm lg:text-base uppercase tracking-wide" style={{ color: '#00bf63' }}>
          Per Head Price
        </p>
      </div>
    </div>
  );
}

