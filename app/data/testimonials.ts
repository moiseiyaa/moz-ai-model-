export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  puppyName: string;
  puppyBreed: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-001',
    name: 'Sarah Johnson',
    location: 'Denver, CO',
    rating: 5,
    text: 'We couldn\'t be happier with our Maltipoo, Luna! She has been the perfect addition to our family. The adoption process with PuppyHub USA was smooth and professional from start to finish. They were so helpful in answering all our questions and made sure Luna was the right fit for our family.',
    image: '/images/testimonials/sarah-j.jpg',
    puppyName: 'Luna',
    puppyBreed: 'Maltipoo',
    date: '2025-08-15'
  },
  {
    id: 't-002',
    name: 'Michael Thompson',
    location: 'Austin, TX',
    rating: 5,
    text: 'Our Goldendoodle, Max, has brought so much joy to our lives! PuppyHub USA made the adoption process easy and stress-free. They were transparent about everything and provided excellent support before and after we brought Max home. Highly recommend!',
    image: '/images/testimonials/michael-t.jpg',
    puppyName: 'Max',
    puppyBreed: 'Goldendoodle',
    date: '2025-07-22'
  },
  {
    id: 't-003',
    name: 'Emily Rodriguez',
    location: 'Seattle, WA',
    rating: 5,
    text: 'We adopted our Labradoodle, Bella, from PuppyHub USA six months ago, and it was the best decision we ever made! The staff was knowledgeable and caring, and they matched us with the perfect puppy for our active lifestyle. Bella is healthy, well-adjusted, and brings us endless happiness.',
    image: '/images/testimonials/emily-r.jpg',
    puppyName: 'Bella',
    puppyBreed: 'Labradoodle',
    date: '2025-06-30'
  },
  {
    id: 't-004',
    name: 'David Wilson',
    location: 'Chicago, IL',
    rating: 4,
    text: 'Our experience with PuppyHub USA was great overall. Our Bernedoodle, Charlie, is a wonderful addition to our family. The only reason for 4 stars instead of 5 is that the delivery took a bit longer than expected, but the staff kept us updated throughout the process.',
    image: '/images/testimonials/david-w.jpg',
    puppyName: 'Charlie',
    puppyBreed: 'Bernedoodle',
    date: '2025-08-05'
  },
  {
    id: 't-005',
    name: 'Jennifer Lee',
    location: 'Portland, OR',
    rating: 5,
    text: 'I can\'t say enough good things about PuppyHub USA! Our Maltipoo, Daisy, is healthy, happy, and exactly as described. The health guarantee gave us peace of mind, and the follow-up care has been exceptional. If you\'re looking for a reputable place to adopt a puppy, look no further!',
    image: '/images/testimonials/jennifer-l.jpg',
    puppyName: 'Daisy',
    puppyBreed: 'Maltipoo',
    date: '2025-07-18'
  }
];

export const getAllTestimonials = (): Testimonial[] => {
  return testimonials;
};

export const getTestimonialsByBreed = (breed: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.puppyBreed === breed);
};
