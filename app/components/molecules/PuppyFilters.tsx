'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { getAllBreeds } from '../../data/breeds';

interface PuppyFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  breed: string;
  gender: string;
  status: string;
  sort: string;
}

/**
 * PuppyFilters component for filtering and sorting puppies
 * Used in puppies listing page
 */
const PuppyFilters = ({ onFilterChange }: PuppyFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const breeds = getAllBreeds();
  
  const [filters, setFilters] = useState<FilterOptions>({
    breed: searchParams.get('breed') || '',
    gender: searchParams.get('gender') || '',
    status: searchParams.get('status') || '',
    sort: searchParams.get('sort') || 'newest'
  });

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.breed) params.set('breed', filters.breed);
    if (filters.gender) params.set('gender', filters.gender);
    if (filters.status) params.set('status', filters.status);
    if (filters.sort) params.set('sort', filters.sort);
    
    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    
    router.push(url);
    onFilterChange(filters);
  }, [filters, pathname, router]);

  const handleFilterChange = (name: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      breed: '',
      gender: '',
      status: '',
      sort: 'newest'
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">Filter Puppies</h2>
        <button 
          onClick={clearFilters}
          className="text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Clear All Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Breed Filter */}
        <div>
          <label htmlFor="breed-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Breed
          </label>
          <select
            id="breed-filter"
            value={filters.breed}
            onChange={(e) => handleFilterChange('breed', e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Breeds</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Gender Filter */}
        <div>
          <label htmlFor="gender-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            id="gender-filter"
            value={filters.gender}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        {/* Status Filter */}
        <div>
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status-filter"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Statuses</option>
            <option value="available">Available</option>
            <option value="reserved">Reserved</option>
            <option value="adopted">Adopted</option>
          </select>
        </div>
        
        {/* Sort Filter */}
        <div>
          <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            id="sort-filter"
            value={filters.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PuppyFilters;
