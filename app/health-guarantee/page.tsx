'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaCheckCircle, FaFileMedical, FaStethoscope, FaHeart, FaQuestionCircle } from 'react-icons/fa';
import Container from '../components/organisms/Container';

/**
 * Health Guarantee page component
 * Comprehensive information about the 12-year health guarantee
 */
const HealthGuaranteePage = () => {
  const guaranteePoints = [
    {
      icon: <FaFileMedical className="h-8 w-8 text-primary" />,
      title: 'Comprehensive Genetic Testing',
      description: 'All parent dogs undergo extensive genetic testing to screen for hereditary conditions before breeding.'
    },
    {
      icon: <FaStethoscope className="h-8 w-8 text-primary" />,
      title: 'Regular Veterinary Care',
      description: 'Every puppy receives regular veterinary check-ups, vaccinations, and health screenings before adoption.'
    },
    {
      icon: <FaHeart className="h-8 w-8 text-primary" />,
      title: 'Lifetime Support',
      description: 'We provide ongoing support and guidance for your puppy\'s health throughout their entire life.'
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-primary" />,
      title: '12-Year Coverage',
      description: 'Our guarantee covers genetic conditions that impact quality of life for up to 12 years from adoption.'
    }
  ];

  const coveredConditions = [
    'Hip dysplasia',
    'Elbow dysplasia',
    'Eye disorders (cataracts, progressive retinal atrophy)',
    'Heart conditions (congenital defects)',
    'Liver shunts',
    'Kidney disease (congenital)',
    'Epilepsy (genetic)',
    'Autoimmune disorders (genetic)',
    'Blood clotting disorders',
    'Metabolic disorders'
  ];

  const notCoveredConditions = [
    'Conditions caused by injury or accident',
    'Illnesses resulting from neglect or abuse',
    'Diseases contracted after adoption (parasites, infections)',
    'Conditions not diagnosed by a licensed veterinarian',
    'Cosmetic issues (coat color, ear shape, etc.)',
    'Behavioral issues',
    'Age-related conditions (arthritis, vision/hearing loss)'
  ];

  const faqs = [
    {
      question: 'What does the 12-year health guarantee cover?',
      answer: 'Our guarantee covers genetic conditions that impact your puppy\'s quality of life, including hip/elbow dysplasia, eye disorders, heart conditions, and other hereditary diseases. The guarantee is valid for 12 years from the date of adoption.'
    },
    {
      question: 'How do I make a claim under the health guarantee?',
      answer: 'If you suspect your puppy has a covered condition, contact us immediately. We\'ll guide you through the process, which includes a veterinary examination and documentation. We work with you and your veterinarian to ensure proper diagnosis and treatment.'
    },
    {
      question: 'What documentation do I need to provide?',
      answer: 'You\'ll need to provide veterinary records, diagnostic test results, and a written diagnosis from a licensed veterinarian. We may also request a second opinion from a veterinary specialist in some cases.'
    },
    {
      question: 'Does the guarantee cover treatment costs?',
      answer: 'Yes, our guarantee provides financial support for veterinary expenses related to covered genetic conditions. The specific coverage amount depends on the condition and circumstances, and we work with you to ensure your puppy receives the best possible care.'
    },
    {
      question: 'What if my puppy develops a condition after 12 years?',
      answer: 'While our formal guarantee covers 12 years, we remain committed to supporting our puppies throughout their entire lives. We encourage you to contact us if any health concerns arise, and we\'ll do our best to provide guidance and support.'
    },
    {
      question: 'Are there any exclusions to the guarantee?',
      answer: 'The guarantee does not cover conditions caused by injury, neglect, abuse, or diseases contracted after adoption. It also excludes cosmetic issues, behavioral problems, and age-related conditions. The guarantee specifically covers genetic conditions that impact quality of life.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full mr-4">
                  <FaShieldAlt className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">12-Year Health Guarantee</h1>
              </div>
              <p className="text-xl text-gray-700 mb-8">
                We stand behind the health of every puppy we place. Our comprehensive 12-year health guarantee 
                ensures your puppy is free from genetic conditions that impact their quality of life.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary">12</p>
                  <p className="text-sm text-gray-600">Years Coverage</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-gray-600">Genetic Testing</p>
                </div>
              </div>
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
            </div>
          </div>
        </Container>
      </section>

      {/* What's Covered Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-lg text-gray-700">
              Our comprehensive health guarantee includes multiple layers of protection for your puppy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {guaranteePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-50 rounded-full">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{point.title}</h3>
                <p className="text-gray-700 text-center">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Covered Conditions */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCheckCircle className="h-6 w-6 text-green-600 mr-3" />
                Covered Conditions
              </h2>
              <p className="text-gray-700 mb-6">
                Our guarantee covers genetic conditions that impact your puppy's quality of life, including:
              </p>
              <ul className="space-y-3">
                {coveredConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaQuestionCircle className="h-6 w-6 text-gray-400 mr-3" />
                Not Covered
              </h2>
              <p className="text-gray-700 mb-6">
                The guarantee does not cover conditions that are not genetic in nature, including:
              </p>
              <ul className="space-y-3">
                {notCoveredConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 rounded-full border-2 border-gray-300 mt-1 mr-3 shrink-0 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                    </span>
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How the Guarantee Works</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Adoption Health Screening</h3>
                  <p className="text-gray-700">
                    Before adoption, every puppy undergoes comprehensive health screening including genetic testing 
                    of parent dogs, veterinary examinations, and vaccination protocols. You'll receive complete 
                    health records with your puppy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Adoption Support</h3>
                  <p className="text-gray-700">
                    After adoption, we provide ongoing support and guidance. If you have any health concerns, 
                    contact us immediately. We'll work with you and your veterinarian to address any issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Making a Claim</h3>
                  <p className="text-gray-700">
                    If a covered condition is diagnosed, contact us with veterinary documentation. We'll review 
                    the case and work with you to provide appropriate treatment and support, including financial 
                    assistance for covered conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime Commitment</h3>
                  <p className="text-gray-700">
                    While our formal guarantee covers 12 years, we remain committed to supporting our puppies 
                    throughout their entire lives. We're here to help with guidance, resources, and support 
                    whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find Your Perfect Puppy?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every puppy comes with our comprehensive 12-year health guarantee. 
              Start your adoption journey today.
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

export default HealthGuaranteePage;

