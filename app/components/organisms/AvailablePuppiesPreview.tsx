'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Container from './Container';
import PuppyCard from '../molecules/PuppyCard';
import { getAvailablePuppies } from '../../data/puppies';

/**
 * Available Puppies Preview section component for the homepage
 * Displays a carousel of available puppies with navigation controls
 */
const AvailablePuppiesPreview = () => {
  const availablePuppies = getAvailablePuppies();
  const [currentIndex, setCurrentIndex] = useState(0);
  const puppiesPerView = { mobile: 1, tablet: 2, desktop: 3 };
  
  // Calculate the number of puppies to display based on screen size
  const getVisiblePuppies = () => {
    // This will be handled by CSS and responsive design
    // We'll return all available puppies and let CSS handle the display
    return availablePuppies;
  };
  
  const visiblePuppies = getVisiblePuppies();
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, availablePuppies.length - puppiesPerView.desktop) : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= availablePuppies.length - puppiesPerView.desktop ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Puppies</h2>
            <p className="text-gray-700 max-w-2xl">
              Meet our adorable puppies looking for their forever homes. Each puppy is health-checked and ready for adoption.
            </p>
          </div>
          <Link 
            href="/puppies" 
            className="flex items-center mt-4 md:mt-0 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Puppies <FaArrowRight className="ml-2" />
          </Link>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous puppies"
            >
              <FaChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <button 
              onClick={handleNext}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next puppies"
            >
              <FaChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          {/* Puppies Carousel */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / puppiesPerView.desktop)}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {visiblePuppies.map((puppy) => (
              <div key={puppy.id} className="w-full">
                <PuppyCard puppy={puppy} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-6 md:hidden">
          {Array.from({ length: Math.ceil(availablePuppies.length / puppiesPerView.mobile) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * puppiesPerView.mobile)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === Math.floor(currentIndex / puppiesPerView.mobile)
                  ? 'bg-primary'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AvailablePuppiesPreview;
