'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import Container from '../components/organisms/Container';
import { faqs } from '../data/faq';

/**
 * FAQ page component
 * Displays frequently asked questions organized by category
 */
const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Get unique categories from FAQs
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  
  // Map category IDs to display names
  const categoryNames: Record<string, string> = {
    'adoption-process': 'Adoption Process',
    'health': 'Health & Care',
    'delivery': 'Delivery & Transportation',
    'fees': 'Pricing & Fees',
    'breeders': 'Our Breeders',
    'training': 'Training & Behavior'
  };
  
  // Filter FAQs based on search query and active category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our puppies, adoption process, and services
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === null
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Questions
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {categoryNames[category] || category}
            </button>
          ))}
        </div>
        
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    {openIndex === index ? (
                      <FaChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <FaChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  <div 
                    id={`faq-answer-${index}`}
                    className={`px-5 pb-5 ${openIndex === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                        {categoryNames[faq.category] || faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-700 mb-4">
                We couldn't find any FAQs matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory(null);
                }}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Clear filters and try again
              </button>
            </div>
          )}
        </div>
        
        {/* Still Have Questions Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please contact our customer support team.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Related Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/process" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adoption Process</h3>
              <p className="text-gray-700">
                Learn about our step-by-step adoption process from application to bringing your puppy home.
              </p>
            </Link>
            
            <Link 
              href="/health-guarantee" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health Guarantee</h3>
              <p className="text-gray-700">
                Read about our comprehensive 12-year health guarantee and what it covers.
              </p>
            </Link>
            
            <Link 
              href="/training" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training Programs</h3>
              <p className="text-gray-700">
                Explore our professional training programs designed for puppies of all ages and breeds.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQPage;
