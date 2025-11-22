import { MetadataRoute } from 'next';

/**
 * Generate sitemap for the website
 * This helps search engines discover and index the site's pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puppyhubusa.com';
  
  // Define all static routes
  const routes = [
    '',
    '/puppies',
    '/breeds',
    '/about',
    '/process',
    '/training',
    '/delivery',
    '/faq',
    '/contact',
    '/application',
    '/health-guarantee',
  ];
  
  // Create sitemap entries for static routes
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // In a real application, you would dynamically generate entries for breeds and puppies
  // For example:
  // const breeds = await getBreeds();
  // const breedRoutes = breeds.map((breed) => ({
  //   url: `${baseUrl}/breeds/${breed.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));
  
  // For this demo, we'll add some example breed and puppy routes
  const exampleBreedRoutes = [
    'goldendoodle',
    'labradoodle',
    'bernedoodle',
    'cavapoo',
    'maltipoo',
  ].map((breedId) => ({
    url: `${baseUrl}/breeds/${breedId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  // Combine all routes for the sitemap
  return [...staticRoutes, ...exampleBreedRoutes];
}
