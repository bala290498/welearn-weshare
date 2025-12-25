'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';

export default function DynamicPricingNumbers() {
  const [onesDigit, setOnesDigit] = useState(0);
  
  // Calculate students from onesDigit (always 10 + onesDigit, so 10-19)
  const students = 10 + onesDigit;
  
  // Calculate per head price when students change (72000 / students)
  const basePrice = 72000;
  const perHeadPrice = Math.round(basePrice / students);

  useEffect(() => {
    // Continuously increment the ones digit from 0 to 9, then loop back to 0 seamlessly
    const studentInterval = setInterval(() => {
      setOnesDigit((prev) => {
        return (prev + 1) % 10;
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
        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 flex items-center justify-center" style={{ color: '#004aad' }}>
          <span className="tabular-nums">1</span>
          <SlidingNumber value={onesDigit} />
        </div>
        <p className="text-xs md:text-sm lg:text-base uppercase tracking-wide" style={{ color: '#004aad' }}>
          Students Joined
        </p>
      </div>

      {/* Per Head Price */}
      <div className="text-center">
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

