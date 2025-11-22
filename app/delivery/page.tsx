'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPlane, FaCar, FaHandsHelping, FaMapMarkerAlt, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';
import Container from '../components/organisms/Container';

/**
 * Delivery page component
 * Displays information about puppy delivery options and process
 */
const DeliveryPage = () => {
  const deliveryOptions = [
    {
      icon: <FaHandsHelping className="h-10 w-10 text-primary" />,
      title: 'In-Person Pickup',
      description: 'Visit our location to meet and pick up your puppy in person.',
      details: [
        'Meet our team and your puppy in person',
        'Receive hands-on guidance for the first few days',
        'Take your puppy home the same day',
        'Available at our headquarters and partner locations',
        'No additional cost'
      ],
      price: 'Free',
      recommended: true
    },
    {
      icon: <FaCar className="h-10 w-10 text-primary" />,
      title: 'Ground Transportation',
      description: 'Have your puppy delivered by car to your doorstep by one of our trusted couriers.',
      details: [
        'Door-to-door service',
        'Regular updates during the journey',
        'Experienced pet transporters',
        'Available within 300 miles of our locations',
        'Comfortable, climate-controlled vehicles'
      ],
      price: '$350 - $650',
      recommended: false
    },
    {
      icon: <FaPlane className="h-10 w-10 text-primary" />,
      title: 'Air Transportation',
      description: 'Your puppy travels with a dedicated flight nanny to ensure safe arrival at your nearest major airport.',
      details: [
        'Accompanied by a flight nanny the entire journey',
        'Available nationwide',
        'Meet at your nearest major airport',
        'Includes travel crate and comfort items',
        'Comprehensive safety protocols'
      ],
      price: '$450 - $850',
      recommended: false
    }
  ];

  const locations = [
    {
      city: 'Denver, CO',
      address: '1234 Puppy Lane, Denver, CO 80202',
      description: 'Our headquarters with the largest selection of puppies and breeds.',
      image: '/images/locations/denver.jpg'
    },
    {
      city: 'Chicago, IL',
      address: '567 Bark Avenue, Chicago, IL 60601',
      description: 'Partner location serving the Midwest region with regular litters available.',
      image: '/images/locations/chicago.jpg'
    },
    {
      city: 'Dallas, TX',
      address: '890 Woof Street, Dallas, TX 75201',
      description: 'Southern region hub with multiple breed specialists on site.',
      image: '/images/locations/dallas.jpg'
    },
    {
      city: 'Seattle, WA',
      address: '432 Paw Place, Seattle, WA 98101',
      description: 'Pacific Northwest location specializing in several popular breeds.',
      image: '/images/locations/seattle.jpg'
    },
    {
      city: 'Miami, FL',
      address: '765 Puppy Path, Miami, FL 33101',
      description: 'Southeast location with year-round availability of most breeds.',
      image: '/images/locations/miami.jpg'
    }
  ];

  const faqs = [
    {
      question: 'How old are puppies when they're ready for delivery?',
      answer: 'Our puppies are available for delivery or pickup when they are 8-10 weeks old. This ensures they've had adequate time with their mother and littermates for proper socialization and development.'
    },
    {
      question: 'Is air travel safe for puppies?',
      answer: 'Yes, when done properly. Our flight nannies are experienced in traveling with puppies and follow strict protocols to ensure their comfort and safety. Puppies travel in the cabin (never cargo) with their flight nanny, who monitors them throughout the journey.'
    },
    {
      question: 'What happens if there are travel delays?',
      answer: 'Our delivery team is prepared for unexpected delays. Flight nannies carry puppy supplies (food, water, pee pads, etc.) and will ensure your puppy remains comfortable. You'll be kept updated throughout the process and informed of any changes to the arrival time.'
    },
    {
      question: 'Can I track my puppy during delivery?',
      answer: 'Yes! For both ground and air transportation, you'll receive regular updates including photos and location information. Our delivery team will stay in touch with you throughout the journey.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Puppy Delivery Options</h1>
              <p className="text-xl text-gray-700 mb-8">
                We offer several safe, comfortable ways to bring your new puppy home, whether you're across town or across the country.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaShieldAlt className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Safety First:</strong> All delivery options prioritize your puppy's comfort and wellbeing.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaShieldAlt className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Nationwide Service:</strong> We can deliver to all 48 contiguous United States.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaShieldAlt className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Experienced Team:</strong> Our delivery specialists have years of experience safely transporting puppies.
                  </p>
                </div>
              </div>
              <Link 
                href="#delivery-options" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                View Delivery Options
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/puppy-delivery.jpg"
                  alt="Puppy being delivered to new family"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Delivery Options Section */}
      <section id="delivery-options" className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery Options</h2>
            <p className="text-lg text-gray-700">
              Choose the delivery method that works best for you and your new puppy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                  option.recommended ? 'border-2 border-primary relative' : ''
                }`}
              >
                {option.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      {option.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{option.title}</h3>
                  
                  <div className="text-center mb-4">
                    <span className="text-xl font-bold text-primary">{option.price}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-center">
                    {option.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {option.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="h-5 w-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Delivery Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Delivery Process</h2>
            <p className="text-lg text-gray-700">
              What to expect when your puppy is on the way to you
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute top-24 left-1/2 h-[calc(100%-8rem)] w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-16">
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mr-4">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Preparation</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Once you've selected your puppy and your delivery method, our team begins preparing for the journey. This includes:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Final health check by our veterinarian</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Preparing travel documents and health certificates</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Scheduling the optimal travel time for your puppy's comfort</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/delivery-prep.jpg"
                      alt="Puppy being prepared for travel"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="flex items-center mb-4">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mr-4">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Journey</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      During your puppy's journey to you, we ensure their comfort and safety at all times:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Regular breaks for food, water, and exercise</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Constant monitoring by experienced handlers</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Regular updates sent to you with photos and location information</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md md:order-1">
                    <Image
                      src="/images/delivery-journey.jpg"
                      alt="Puppy traveling safely"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mr-4">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Arrival</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The exciting moment when your puppy arrives at your home or meeting location:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Handover of your puppy and all documentation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Review of care instructions and immediate needs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Opportunity to ask any questions about your new puppy</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/delivery-arrival.jpg"
                      alt="Family receiving their new puppy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="flex items-center mb-4">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mr-4">
                        <span className="text-2xl font-bold text-primary">4</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Follow-up Support</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our commitment to you and your puppy continues after delivery:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>24-hour post-delivery check-in</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Access to our puppy care specialists for any questions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Ongoing support throughout your puppy's life</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md md:order-1">
                    <Image
                      src="/images/delivery-followup.jpg"
                      alt="Family with their new puppy at home"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Pickup Locations Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pickup Locations</h2>
            <p className="text-lg text-gray-700">
              If you choose to pick up your puppy in person, we have several convenient locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <FaMapMarkerAlt className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Common questions about our puppy delivery process
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <FaQuestionCircle className="h-6 w-6 text-primary mt-1 mr-3 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
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
              Ready to Welcome Your New Puppy Home?
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

export default DeliveryPage;
