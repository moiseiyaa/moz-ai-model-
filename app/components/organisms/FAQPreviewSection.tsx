'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Container from './Container';
import { getFrequentlyAskedQuestions } from '../../data/faq';

/**
 * FAQ Preview section component for the homepage
 * Displays a selection of frequently asked questions with expandable answers
 */
const FAQPreviewSection = () => {
  const faqs = getFrequentlyAskedQuestions(4);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our puppies and adoption process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
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
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/faq" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            View All FAQs
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FAQPreviewSection;
