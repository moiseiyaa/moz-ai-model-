'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaPaperPlane, FaHandshake, FaHome, FaArrowRight } from 'react-icons/fa';
import Container from '../components/organisms/Container';

/**
 * Process page component
 * Explains the puppy adoption process at PuppyHub USA
 */
const ProcessPage = () => {
  const processSteps = [
    {
      icon: <FaSearch className="h-10 w-10 text-primary" />,
      title: "Browse & Research",
      description: "Explore our available puppies and learn about different breeds to find the perfect match for your family and lifestyle.",
      details: [
        "Browse our current and upcoming puppies",
        "Learn about different breeds and their characteristics",
        "Consider size, temperament, and care requirements",
        "Read our resources on puppy care and training"
      ]
    },
    {
      icon: <FaPaperPlane className="h-10 w-10 text-primary" />,
      title: "Submit Application",
      description: "Complete our comprehensive application form to help us understand your home environment and preferences.",
      details: [
        "Fill out our detailed application form",
        "Provide information about your home and lifestyle",
        "Specify your breed, size, and gender preferences",
        "Tell us why your family is a good fit for a puppy"
      ]
    },
    {
      icon: <FaHandshake className="h-10 w-10 text-primary" />,
      title: "Application Review & Approval",
      description: "Our team carefully reviews your application to ensure a good match between puppy and family.",
      details: [
        "Application review takes 4-5 business days",
        "We may contact you for additional information",
        "Upon approval, you'll be invited to place a deposit",
        "Your $300 deposit secures your place on our waiting list"
      ]
    },
    {
      icon: <FaHome className="h-10 w-10 text-primary" />,
      title: "Puppy Selection & Homecoming",
      description: "Choose your puppy from available litters and prepare for their arrival in your home.",
      details: [
        "Receive notifications about available puppies matching your preferences",
        "Select your puppy based on photos, videos, and information provided",
        "Schedule pickup or delivery",
        "Welcome your new family member home!"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "We typically review and respond to applications within 4-5 business days. During busy periods, it may take slightly longer, but we strive to keep all applicants updated on their status."
    },
    {
      question: "Is my deposit refundable?",
      answer: "Yes, your $300 deposit is refundable (minus a 9% processing fee) for up to 2 years from your deposit date if you haven't selected a puppy yet. Once you've selected a specific puppy, the deposit becomes non-refundable and is applied to your puppy's total price."
    },
    {
      question: "How long might I wait for a puppy after being approved?",
      answer: "Wait times vary depending on your specific preferences for breed, color, gender, and size. Some families find their perfect match within weeks, while others with very specific preferences may wait several months. We'll keep you updated with regular litter announcements matching your preferences."
    },
    {
      question: "Can I visit the puppies before making a selection?",
      answer: "In many cases, yes! We encourage visits when geographically feasible. Please contact us to discuss visitation options and availability in your area."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Adoption Process</h1>
              <p className="text-xl text-gray-700 mb-8">
                We've designed a simple, transparent process to help you find and bring home your perfect puppy companion.
              </p>
              <Link 
                href="/application" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                Start Your Application
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/adoption-process.jpg"
                  alt="Family adopting a puppy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Process Steps Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-700">
              Our simple four-step process makes finding your perfect puppy easy and stress-free
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute top-24 left-1/2 h-[calc(100%-8rem)] w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mr-4">
                          {step.icon}
                          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary/10 animate-ping-slow" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Step {index + 1}: {step.title}</h3>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <FaArrowRight className="h-4 w-4 text-primary mt-1 mr-3 shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <Image
                        src={`/images/process-step-${index + 1}.jpg`}
                        alt={`Step ${index + 1}: ${step.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Step number for desktop */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold z-10">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* After Adoption Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/after-adoption.jpg"
                alt="Family with their new puppy"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">After You Adopt</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our relationship doesn't end when you take your puppy home. We're committed to supporting you throughout your puppy's life.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-700">
                    Our team is available to answer questions and provide guidance as your puppy grows and develops.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Health Guarantee</h3>
                  <p className="text-gray-700">
                    Our 12-year health guarantee gives you peace of mind about your puppy's genetic health.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Training Resources</h3>
                  <p className="text-gray-700">
                    Access to training guides, videos, and professional training services to help your puppy thrive.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">PuppyHub Community</h3>
                  <p className="text-gray-700">
                    Join our community of puppy parents to share experiences, advice, and adorable photos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Common questions about our adoption process
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-6">
                Have more questions about our adoption process?
              </p>
              <Link 
                href="/faq" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Adoption Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward bringing home your perfect puppy companion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/puppies" 
                className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                Browse Available Puppies
              </Link>
              <Link 
                href="/application" 
                className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                Start Application
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProcessPage;
