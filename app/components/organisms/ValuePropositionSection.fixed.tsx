'use client';

import Container from './Container';
import { FaPaw, FaHeartbeat, FaHome, FaShieldAlt, FaTruck } from 'react-icons/fa';

/**
 * Value Proposition section component for the homepage
 * Displays 3-5 cards showing why adopt with PuppyHub
 */
const ValuePropositionSection = () => {
  const valueProps = [
    {
      icon: <FaPaw className="h-8 w-8 text-white" />,
      title: 'Trusted Breeders',
      description: 'We partner only with ethical, responsible breeders who prioritize puppy health and well-being.'
    },
    {
      icon: <FaHeartbeat className="h-8 w-8 text-white" />,
      title: 'Health Guaranteed',
      description: 'Every puppy comes with a comprehensive 12-year health guarantee for your peace of mind.'
    },
    {
      icon: <FaHome className="h-8 w-8 text-white" />,
      title: 'Perfect Match',
      description: 'Our detailed profiles and matching process ensures the right puppy for your family and lifestyle.'
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-white" />,
      title: 'Lifetime Support',
      description: 'We provide ongoing guidance and resources throughout your puppy\'s life journey.'
    },
    {
      icon: <FaTruck className="h-8 w-8 text-white" />,
      title: 'Safe Delivery',
      description: 'Nationwide delivery options with carefully planned transportation for your puppy\'s comfort.'
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-100 mix-blend-multiply opacity-40 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-secondary-100 mix-blend-multiply opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-40 left-1/3 w-20 h-20 rounded-full bg-accent-purple/10 mix-blend-multiply opacity-60 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold mb-6 gradient-text inline-block">Why Choose PuppyHub USA</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're committed to connecting loving families with healthy, happy puppies through a transparent, 
            supportive adoption process that puts the well-being of our puppies first.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.slice(0, 3).map((prop, index) => {
            // Define gradient colors for each card
            const gradients = [
              'from-primary-500 to-primary-600',
              'from-secondary-500 to-secondary-600',
              'from-accent-purple to-primary-600'
            ];
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 0 L50 50 L0 50 Z" fill="currentColor" />
                    <path d="M50 50 L100 50 L100 100 L50 100 Z" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`mb-6 p-4 bg-linear-to-br ${gradients[index]} rounded-xl shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{prop.title}</h3>
                  <p className="text-gray-700">{prop.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {valueProps.slice(3).map((prop, index) => {
            // Define gradient colors for bottom cards
            const gradients = [
              'from-accent-teal to-primary-600',
              'from-accent-yellow to-secondary-600'
            ];
            
            return (
              <div 
                key={index + 3}
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 0 L50 50 L0 50 Z" fill="currentColor" />
                    <path d="M50 50 L100 50 L100 100 L50 100 Z" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`mb-6 p-4 bg-linear-to-br ${gradients[index]} rounded-xl shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{prop.title}</h3>
                  <p className="text-gray-700">{prop.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ValuePropositionSection;
