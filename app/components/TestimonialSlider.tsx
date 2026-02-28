"use client";
import React, { useState, useEffect } from 'react';

import { TESTIMONIALS } from '../../data/content' 
export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive logic to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // 1 item on mobile
      } else {
        setItemsToShow(3); // 3 items on desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsToShow]);

  const nextSlide = () => {
    // Prevent sliding past the last available set
    setCurrentIndex((prev) => (prev + 1) % (TESTIMONIALS.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - itemsToShow : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What our Customers Says</h2>

        <div className="relative group">
          {/* VIEWPORT */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 py-2 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div 
                  key={t.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsToShow}%` }} // Dynamic width based on screen
                >
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full items-center text-center">
                    <div className="flex gap-1 mb-4 text-orange-400">
                      {[...Array(5)].map((_, i) => <span className="text-[#ffb400] relative overflow-hidden text-3xl w-[24px]">★</span>)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                    <p className="font-bold text-gray-800 mt-auto">{t.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(TESTIMONIALS.length - itemsToShow + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-orange-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}