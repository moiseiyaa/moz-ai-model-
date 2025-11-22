'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaUsers, FaPaw, FaHeart } from 'react-icons/fa';
import Container from '../components/organisms/Container';

/**
 * About page component
 * Displays information about PuppyHub USA, its mission, values, and team
 */
const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/images/team/sarah.jpg',
      bio: 'Sarah founded PuppyHub USA in 2015 with a mission to connect loving families with ethically bred puppies. With over 15 years of experience in animal care, she oversees all operations and breeder partnerships.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Breeding Program',
      image: '/images/team/michael.jpg',
      bio: 'Michael has a background in veterinary medicine and ensures all our breeding partners maintain the highest standards of care. He personally visits and vets each breeder in our network.'
    },
    {
      name: 'Jessica Rodriguez',
      role: 'Customer Experience Manager',
      image: '/images/team/jessica.jpg',
      bio: 'Jessica leads our customer support team and ensures each family has a smooth adoption experience. She\'s passionate about matching the right puppy with the right family.'
    },
    {
      name: 'David Wilson',
      role: 'Veterinary Coordinator',
      image: '/images/team/david.jpg',
      bio: 'David works with our network of veterinarians to ensure all puppies receive proper healthcare, vaccinations, and genetic testing before going to their forever homes.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About PuppyHub USA</h1>
              <p className="text-xl text-gray-700 mb-8">
                We're on a mission to connect loving families with healthy, happy puppies through ethical breeding practices and exceptional care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Ethical Breeding Network:</strong> We partner only with responsible breeders who prioritize health, temperament, and proper socialization.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Comprehensive Health Guarantee:</strong> Every puppy comes with our industry-leading 12-year health guarantee.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="h-6 w-6 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Lifetime Support:</strong> We're here for you and your puppy throughout your journey together.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-hero.jpg"
                  alt="PuppyHub USA team with puppies"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700">
              How we became America's most trusted source for family puppies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/founder-story.jpg"
                alt="PuppyHub USA founder with puppies"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                PuppyHub USA began in 2015 when our founder, Sarah Johnson, recognized a need for a more ethical, transparent approach to connecting families with puppies. After years working in animal welfare, Sarah was troubled by the prevalence of puppy mills and unethical breeding practices.
              </p>
              <p className="text-gray-700">
                She envisioned a different model: a network of carefully vetted, family-based breeders who prioritize health, temperament, and proper socialization. Starting with just five breeding partners in Colorado, PuppyHub USA has grown to include over 50 ethical breeders across the country.
              </p>
              <p className="text-gray-700">
                Today, we've helped more than 5,000 families find their perfect puppy companion. Our commitment to ethical breeding practices, comprehensive health guarantees, and exceptional customer service has made us America's most trusted source for family puppies.
              </p>
              <p className="text-gray-700">
                We believe that the journey to pet parenthood should be joyful and stress-free. That's why we handle everything from breeder selection to health screening, transportation logistics, and post-adoption support.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-50 rounded-full">
                  <FaPaw className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Ethical Breeding</h3>
              <p className="text-gray-700">
                We have zero tolerance for puppy mills or unethical breeding practices. All our breeding partners must meet our strict standards for dog care, living conditions, and breeding practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-50 rounded-full">
                  <FaHeart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Health & Wellbeing</h3>
              <p className="text-gray-700">
                The health and wellbeing of our puppies is our top priority. We provide comprehensive health screenings, genetic testing, and early socialization to ensure each puppy thrives in their new home.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-50 rounded-full">
                  <FaUsers className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Family-Centered</h3>
              <p className="text-gray-700">
                We believe in matching the right puppy with the right family. Our thorough application process ensures each puppy finds a loving home that's prepared for the commitment of pet ownership.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700">
              The passionate people behind PuppyHub USA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
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
              Start your application today and take the first step toward bringing home 
              your new furry family member.
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

export default AboutPage;
