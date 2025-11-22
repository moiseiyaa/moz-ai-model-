'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import Container from './Container';

/**
 * Health Guarantee section component for the homepage
 * Highlights the 12-year health guarantee and key health points
 */
const HealthGuaranteeSection = () => {
  const healthPoints = [
    'Comprehensive genetic testing for all parent dogs',
    'Regular veterinary check-ups and vaccinations',
    'Detailed health records provided with every puppy',
    'Nutritional guidance and support',
    'Free veterinary consultation after adoption'
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <FaShieldAlt className="h-10 w-10 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">12-Year Health Guarantee</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              We stand behind the health of our puppies with one of the industry's most comprehensive health guarantees. 
              Your puppy's health and well-being is our top priority, which is why we offer a 12-year guarantee against 
              genetic conditions.
            </p>
            
            <ul className="space-y-4 mb-8">
              {healthPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/health-guarantee" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full transition-colors"
            >
              Read Our Full Health Guarantee
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/healthy-puppy.jpg"
                alt="Healthy puppy with veterinarian"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-green-600">12</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Year Health</p>
                  <p className="text-lg font-bold text-gray-900">Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HealthGuaranteeSection;
