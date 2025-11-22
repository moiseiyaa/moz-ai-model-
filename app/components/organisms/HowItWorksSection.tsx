'use client';

import Container from './Container';
import { FaSearch, FaPaperPlane, FaHandshake, FaHome } from 'react-icons/fa';

/**
 * How It Works section component for the homepage
 * Displays a step-by-step timeline of the adoption process
 */
const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FaSearch className="h-8 w-8 text-white" />,
      title: 'Browse Puppies',
      description: 'Explore our available puppies and find the perfect match for your family and lifestyle.'
    },
    {
      icon: <FaPaperPlane className="h-8 w-8 text-white" />,
      title: 'Submit Application',
      description: 'Complete our simple application form to express interest in your chosen puppy.'
    },
    {
      icon: <FaHandshake className="h-8 w-8 text-white" />,
      title: 'Approval Process',
      description: 'Our team reviews your application and contacts you to discuss next steps.'
    },
    {
      icon: <FaHome className="h-8 w-8 text-white" />,
      title: 'Welcome Home',
      description: 'Arrange pickup or delivery of your new puppy and begin your journey together.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our simple, transparent process makes finding your perfect puppy companion easy and stress-free.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute top-24 left-1/2 h-[calc(100%-8rem)] w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 1 ? 'md:mt-32' : ''}`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4 md:mb-0 md:mr-6">
                    {step.icon}
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary/20 animate-ping-slow" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                
                {/* Step number for mobile */}
                <div className="absolute top-0 left-0 -mt-2 -ml-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold md:hidden">
                  {index + 1}
                </div>
                
                {/* Step number for desktop */}
                <div className="absolute top-4 left-8 transform -translate-x-full hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/process" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Learn more about our adoption process
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
