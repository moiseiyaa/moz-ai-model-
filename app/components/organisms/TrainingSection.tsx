'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMedal, FaGraduationCap, FaHome } from 'react-icons/fa';
import Container from './Container';

/**
 * Training & Add-Ons section component for the homepage
 * Displays available training packages and services
 */
const TrainingSection = () => {
  const trainingPackages = [
    {
      icon: <FaGraduationCap className="h-8 w-8 text-primary" />,
      title: 'Basic Training',
      price: 499,
      features: [
        'Potty training',
        'Basic commands (sit, stay, come)',
        'Leash training',
        'Crate training',
        '2 weeks duration'
      ]
    },
    {
      icon: <FaMedal className="h-8 w-8 text-primary" />,
      title: 'Advanced Training',
      price: 899,
      features: [
        'All Basic Training features',
        'Advanced commands',
        'Socialization with other dogs',
        'Public place training',
        '4 weeks duration'
      ]
    },
    {
      icon: <FaHome className="h-8 w-8 text-primary" />,
      title: 'Board & Train',
      price: 1499,
      features: [
        'All Advanced Training features',
        'In-home boarding with trainer',
        'Real-world scenarios',
        'Personalized training plan',
        '6 weeks duration'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Training & Add-On Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Give your puppy the best start with our professional training programs and additional services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingPackages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    {pkg.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{pkg.title}</h3>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/training" 
                  className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-medium py-2 rounded-md transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/training" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all training options and services
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TrainingSection;
