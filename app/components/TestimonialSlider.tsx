"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  { id: 1, text: "Oranges were fresh, juicy and properly packed. No damaged fruit at all.", author: "Ali Raza – Lahore" },
  { id: 2, text: "Very clean carton and consistent size. Taste was sweet, not market kinnow.", author: "Sana Malik – Islamabad" },
  { id: 3, text: "Delivered on time and fruit was export-quality. Family loved it.", author: "Usman Khan – Karachi" },
  { id: 4, text: "The quality is unmatched compared to local vendors. Highly recommended.", author: "Hamza Khan – Karachi" },
  { id: 5, text: "Fast delivery to my doorstep in perfect condition. Great experience.", author: "Umer Khan – Karachi" },
  { id: 6, text: "Best value for money if you are looking for premium grade fruit.", author: "Moeen Khan – Karachi" },
];

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
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - itemsToShow : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What our Customers Says</h2>

        <div className="relative group">
          {/* VIEWPORT */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
              }}
            >
              {testimonials.map((t) => (
                <div 
                  key={t.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsToShow}%` }} // Dynamic width based on screen
                >
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full items-center text-center">
                    <div className="flex gap-1 mb-4 text-orange-400">
                      {[...Array(5)].map((_, i) => <span className="text-[#ffb400] relative overflow-hidden w-[12px]">★</span>)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                    <p className="font-bold text-gray-800 mt-auto">{t.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-400 hover:text-orange-500 z-10 hidden md:block"
          >
            l
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-400 hover:text-orange-500 z-10 hidden md:block"
          >r
          </button> */}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - itemsToShow + 1)].map((_, idx) => (
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