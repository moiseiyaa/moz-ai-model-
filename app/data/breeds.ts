export interface Breed {
  id: string;
  name: string;
  description: string;
  traits: string[];
  origin: string;
  temperament: string;
  trainability: string;
  colors: string[];
  sizes: {
    height: string;
    weight: string;
  };
  lifeExpectancy: string;
  image: string;
  gallery: string[];
}

export const breeds: Breed[] = [
  {
    id: 'poodle',
    name: 'Poodle',
    description: 'The Poodle is an elegant and intelligent breed known for its distinctive curly coat and exceptional trainability. Available in three size varieties (Standard, Miniature, and Toy), Poodles are versatile dogs that excel in various activities from companionship to performance sports. They are highly intelligent, hypoallergenic, and make excellent family pets.',
    traits: ['Intelligent', 'Elegant', 'Hypoallergenic', 'Trainable', 'Active', 'Loyal'],
    origin: 'Germany, 15th-16th century',
    temperament: 'Poodles are known for their intelligence, elegance, and friendly nature. They are highly trainable and eager to please, making them excellent companions. Standard Poodles are more reserved and dignified, while Miniature and Toy Poodles are often more playful and energetic. All varieties are generally good with children and other pets when properly socialized.',
    trainability: 'Extremely trainable and intelligent. Poodles are among the most trainable breeds and excel in obedience, agility, and various dog sports. They respond exceptionally well to positive reinforcement training methods and enjoy mental stimulation.',
    colors: ['White', 'Black', 'Apricot', 'Silver', 'Cream', 'Brown', 'Red', 'Blue', 'Gray', 'Parti-color'],
    sizes: {
      height: 'Over 15 inches (Standard), 10-15 inches (Miniature), under 10 inches (Toy)',
      weight: '45-70 pounds (Standard), 15-17 pounds (Miniature), 4-6 pounds (Toy)'
    },
    lifeExpectancy: '12-15 years',
    image: '/images/breeds/poodle-hero.jpg',
    gallery: [
      '/images/breeds/poodle-1.jpg',
      '/images/breeds/poodle-2.jpg',
      '/images/breeds/poodle-3.jpg',
      '/images/breeds/poodle-4.jpg'
    ]
  },
  {
    id: 'maltipoo',
    name: 'Maltipoo',
    description: 'The Maltipoo is a popular designer dog breed that is a cross between a Maltese and a Toy or Miniature Poodle. Known for their adorable looks and friendly temperament, Maltipoos make excellent companion pets for individuals and families alike.',
    traits: ['Friendly', 'Intelligent', 'Affectionate', 'Low-shedding', 'Adaptable'],
    origin: 'United States, 1990s',
    temperament: 'Maltipoos are known for their friendly, gentle, and affectionate nature. They form strong bonds with their owners and are generally good with children and other pets. They are playful and enjoy interactive games but are equally content to curl up on your lap.',
    trainability: 'Highly trainable due to their intelligence and eagerness to please. They respond well to positive reinforcement training methods and can learn commands and tricks quickly.',
    colors: ['White', 'Cream', 'Apricot', 'Silver', 'Black', 'Brown'],
    sizes: {
      height: '8-14 inches',
      weight: '5-20 pounds'
    },
    lifeExpectancy: '10-15 years',
    image: '/images/breeds/maltipoo-hero.jpg',
    gallery: [
      '/images/breeds/maltipoo-1.jpg',
      '/images/breeds/maltipoo-2.jpg',
      '/images/breeds/maltipoo-3.jpg',
      '/images/breeds/maltipoo-4.jpg'
    ]
  },
  {
    id: 'goldendoodle',
    name: 'Goldendoodle',
    description: 'The Goldendoodle is a designer dog breed that is a cross between a Golden Retriever and a Poodle. They are known for their friendly disposition, intelligence, and low-shedding coat, making them popular family pets.',
    traits: ['Friendly', 'Intelligent', 'Family-oriented', 'Low-shedding', 'Energetic'],
    origin: 'United States, 1990s',
    temperament: 'Goldendoodles are known for their friendly, outgoing, and affectionate nature. They are excellent family dogs and typically get along well with children and other pets. They are social and enjoy being part of family activities.',
    trainability: 'Highly trainable due to the intelligence of both parent breeds. They are eager to please and respond well to positive reinforcement training methods.',
    colors: ['Golden', 'Cream', 'Apricot', 'Red', 'Black', 'Brown'],
    sizes: {
      height: '17-24 inches (Standard), 14-17 inches (Medium), under 14 inches (Mini)',
      weight: '50-90 pounds (Standard), 30-45 pounds (Medium), 15-30 pounds (Mini)'
    },
    lifeExpectancy: '10-15 years',
    image: '/images/breeds/goldendoodle-hero.jpg',
    gallery: [
      '/images/breeds/goldendoodle-1.jpg',
      '/images/breeds/goldendoodle-2.jpg',
      '/images/breeds/goldendoodle-3.jpg',
      '/images/breeds/goldendoodle-4.jpg'
    ]
  },
  {
    id: 'labradoodle',
    name: 'Labradoodle',
    description: 'The Labradoodle is a crossbreed dog created by crossing a Labrador Retriever and a Standard, Miniature, or Toy Poodle. Labradoodles were originally developed as guide dogs for visually impaired individuals with allergies.',
    traits: ['Friendly', 'Intelligent', 'Energetic', 'Low-shedding', 'Versatile'],
    origin: 'Australia, 1980s',
    temperament: 'Labradoodles are known for their friendly, outgoing, and affectionate nature. They are generally good with children and other pets, making them excellent family dogs. They are energetic and enjoy outdoor activities.',
    trainability: 'Highly trainable due to the intelligence of both parent breeds. They are eager to please and excel in obedience training and various dog sports.',
    colors: ['Cream', 'Gold', 'Red', 'Black', 'Chocolate', 'Parti', 'Phantom'],
    sizes: {
      height: '21-24 inches (Standard), 17-20 inches (Medium), 14-16 inches (Mini)',
      weight: '50-65 pounds (Standard), 30-45 pounds (Medium), 15-25 pounds (Mini)'
    },
    lifeExpectancy: '12-15 years',
    image: '/images/breeds/labradoodle-hero.jpg',
    gallery: [
      '/images/breeds/labradoodle-1.jpg',
      '/images/breeds/labradoodle-2.jpg',
      '/images/breeds/labradoodle-3.jpg',
      '/images/breeds/labradoodle-4.jpg'
    ]
  },
  {
    id: 'bernedoodle',
    name: 'Bernedoodle',
    description: 'The Bernedoodle is a designer dog breed that is a cross between a Bernese Mountain Dog and a Poodle. They are known for their friendly temperament, intelligence, and beautiful coat patterns.',
    traits: ['Loyal', 'Intelligent', 'Gentle', 'Low-shedding', 'Family-oriented'],
    origin: 'Canada, 2000s',
    temperament: 'Bernedoodles are known for their loyal, gentle, and affectionate nature. They are excellent family dogs and typically get along well with children and other pets. They can be playful but also enjoy relaxing with their family.',
    trainability: 'Moderately to highly trainable depending on which parent breed they take after more. They generally respond well to positive reinforcement training methods.',
    colors: ['Tri-color (black, white, and brown)', 'Black and white', 'Black', 'Sable', 'Merle'],
    sizes: {
      height: '23-29 inches (Standard), 18-22 inches (Mini), 12-17 inches (Tiny)',
      weight: '70-90 pounds (Standard), 25-49 pounds (Mini), 10-24 pounds (Tiny)'
    },
    lifeExpectancy: '12-18 years',
    image: '/images/breeds/bernedoodle-hero.jpg',
    gallery: [
      '/images/breeds/bernedoodle-1.jpg',
      '/images/breeds/bernedoodle-2.jpg',
      '/images/breeds/bernedoodle-3.jpg',
      '/images/breeds/bernedoodle-4.jpg'
    ]
  }
];

export const getBreedById = (id: string): Breed | undefined => {
  return breeds.find(breed => breed.id === id);
};

export const getAllBreeds = (): Breed[] => {
  return breeds;
};
