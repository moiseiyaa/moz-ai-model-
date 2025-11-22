'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaMedal, FaHome, FaCheck, FaQuestionCircle } from 'react-icons/fa';
import Container from '../components/organisms/Container';

/**
 * Training page component
 * Displays information about puppy training programs and services
 */
const TrainingPage = () => {
  const trainingPackages = [
    {
      icon: <FaGraduationCap className="h-10 w-10 text-primary" />,
      title: 'Basic Training',
      price: 499,
      description: 'Perfect for new puppy owners who want to establish a solid foundation of obedience and good behavior.',
      features: [
        'Potty training guidance',
        'Basic commands (sit, stay, come, down)',
        'Leash training fundamentals',
        'Crate training support',
        'Simple behavior corrections',
        '2 weeks duration',
        '4 one-hour sessions'
      ],
      recommended: false
    },
    {
      icon: <FaMedal className="h-10 w-10 text-primary" />,
      title: 'Advanced Training',
      price: 899,
      description: 'For families who want a well-mannered puppy with reliable obedience in various environments and situations.',
      features: [
        'All Basic Training features',
        'Advanced commands and tricks',
        'Off-leash reliability training',
        'Socialization with other dogs',
        'Public place training',
        'Distraction training',
        '4 weeks duration',
        '8 one-hour sessions'
      ],
      recommended: true
    },
    {
      icon: <FaHome className="h-10 w-10 text-primary" />,
      title: 'Board & Train',
      price: 1499,
      description: 'The ultimate training experience where your puppy lives with our professional trainer for intensive, personalized training.',
      features: [
        'All Advanced Training features',
        'In-home boarding with trainer',
        'Real-world scenario training',
        'Personalized training plan',
        'Daily progress updates',
        'Follow-up support',
        '6 weeks duration',
        'Continuous training'
      ],
      recommended: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer M.',
      location: 'Denver, CO',
      image: '/images/testimonials/jennifer.jpg',
      text: 'The Advanced Training program transformed our energetic Goldendoodle puppy into a well-behaved family member. The trainers were patient and knowledgeable, and the results exceeded our expectations!'
    },
    {
      name: 'Michael T.',
      location: 'Chicago, IL',
      image: '/images/testimonials/michael.jpg',
      text: 'We opted for the Board & Train program for our Labradoodle, and it was worth every penny. He came home with amazing manners and responds reliably to all commands. The follow-up support has been excellent too.'
    },
    {
      name: 'Sophia R.',
      location: 'Seattle, WA',
      image: '/images/testimonials/sophia.jpg',
      text: 'Even the Basic Training program made a huge difference for our Cavapoo puppy. The trainers gave us simple, effective techniques that helped us establish good habits from the start.'
    }
  ];

  const faqs = [
    {
      question: "When should I start training my puppy?",
      answer: "Training can begin as soon as you bring your puppy home, typically around 8-10 weeks of age. Early training focuses on socialization, basic commands, and establishing good habits. Our programs are designed to be age-appropriate and adjust to your puppy's developmental stage."
    },
    {
      question: "How long does it take to see results?",
      answer: "You'll likely notice improvements after the very first session, but consistent practice is key to lasting results. Most puppies show significant improvement within 2-4 weeks of consistent training. The more you reinforce the training at home, the faster and more durable the results will be."
    },
    {
      question: "Do you use positive reinforcement methods?",
      answer: "Yes, all our training programs use positive reinforcement techniques. We focus on rewarding good behavior rather than punishing mistakes. This approach builds confidence, strengthens the bond between you and your puppy, and creates a puppy who wants to behave well."
    },
    {
      question: "What if my puppy has specific behavioral issues?",
      answer: "Our trainers can address specific behavioral issues such as excessive barking, jumping, chewing, or anxiety. During the initial consultation, we'll discuss any concerns you have and customize the training plan accordingly. For severe behavioral issues, we may recommend our Board & Train program for more intensive intervention."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Puppy Training Programs</h1>
              <p className="text-xl text-gray-700 mb-8">
                Give your puppy the best start with our professional training programs designed to create a well-mannered, happy companion.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaCheck className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Positive Reinforcement:</strong> Our training methods focus on rewarding good behavior, not punishing mistakes.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheck className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Certified Trainers:</strong> All our trainers are certified professionals with years of experience.
                  </p>
                </div>
                <div className="flex items-start">
                  <FaCheck className="h-5 w-5 text-primary mt-1 mr-3 shrink-0" />
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Customized Approach:</strong> Training is tailored to your puppy's personality and your family's needs.
                  </p>
                </div>
              </div>
              <Link 
                href="#training-packages" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                View Training Packages
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/puppy-training.jpg"
                  alt="Puppy in training session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Training Packages Section */}
      <section id="training-packages" className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Packages</h2>
            <p className="text-lg text-gray-700">
              Choose the training program that best fits your puppy's needs and your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                  pkg.recommended ? 'border-2 border-primary relative' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      {pkg.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{pkg.title}</h3>
                  
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-center">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="h-5 w-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact?subject=Training%20Inquiry" 
                    className={`block w-full text-center font-medium py-2 rounded-md transition-colors ${
                      pkg.recommended 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Training Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Process</h2>
            <p className="text-lg text-gray-700">
              How we transform puppies into well-behaved family companions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/training-process.jpg"
                alt="Trainer working with puppy"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Initial Consultation</h3>
                <p className="text-gray-700">
                  We begin with a thorough assessment of your puppy's temperament, current behavior, and your training goals. This helps us customize the training approach to your specific needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Customized Training Plan</h3>
                <p className="text-gray-700">
                  Based on the consultation, we develop a personalized training plan that addresses your puppy's unique needs and challenges while working toward your goals.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Skill Building Sessions</h3>
                <p className="text-gray-700">
                  Through regular sessions, we teach your puppy essential commands and behaviors using positive reinforcement techniques. We also show you how to reinforce these skills at home.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Real-World Application</h3>
                <p className="text-gray-700">
                  We practice skills in increasingly challenging environments to ensure your puppy can behave well not just in training sessions, but in real-life situations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Owner Education & Follow-up</h3>
                <p className="text-gray-700">
                  We provide detailed guidance on how to maintain and build upon your puppy's training, with follow-up support to address any questions or challenges that arise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-700">
              Hear from families who have transformed their puppies through our training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
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
                Common questions about our puppy training programs
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
              Ready to Transform Your Puppy's Behavior?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Invest in your puppy's future with professional training that creates a well-mannered, happy companion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="#training-packages" 
                className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                View Training Packages
              </Link>
              <Link 
                href="/contact?subject=Training%20Inquiry" 
                className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-full transition-colors text-center"
              >
                Contact a Trainer
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TrainingPage;
