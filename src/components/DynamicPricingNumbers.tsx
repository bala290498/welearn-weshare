'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SlidingNumber } from '@/components/ui/sliding-number';

export default function DynamicPricingNumbers() {
  const [students, setStudents] = useState(10);
  const [perHeadPrice, setPerHeadPrice] = useState(6000);

  useEffect(() => {
    // Animate students from 10 to 25
    const studentInterval = setInterval(() => {
      setStudents((prev) => {
        if (prev >= 25) return 10;
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(studentInterval);
    };
  }, []);

  useEffect(() => {
    // Update per head price when students change (72000 / students)
    const basePrice = 72000;
    const calculatedPrice = Math.round(basePrice / students);
    setPerHeadPrice(calculatedPrice);
  }, [students]);

  return (
    <div className="space-y-6 md:space-y-8 w-full">
      {/* Students Count */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 flex items-center justify-center" style={{ color: '#004aad' }}>
          <SlidingNumber value={students} />
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

