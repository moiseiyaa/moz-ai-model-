import { getAvailablePuppies } from './puppies';

/**
 * Get all unique colors from available puppies
 * This ensures we only show colors that actually exist in our current inventory
 */
export const getAvailableColors = (): string[] => {
  const availablePuppies = getAvailablePuppies();
  const uniqueColors = [...new Set(availablePuppies.map(puppy => puppy.color.toLowerCase()))];
  return uniqueColors.sort();
};

/**
 * Get formatted color names for display
 * Converts lowercase color names to proper case
 */
export const getFormattedColors = (): string[] => {
  const colors = getAvailableColors();
  return colors.map(color => 
    color.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
  );
};

/**
 * Check if a specific color is available in any puppy
 */
export const isColorAvailable = (color: string): boolean => {
  const availableColors = getAvailableColors();
  return availableColors.includes(color.toLowerCase());
};

/**
 * Get all puppies by color
 */
export const getPuppiesByColor = (color: string) => {
  const availablePuppies = getAvailablePuppies();
  return availablePuppies.filter(puppy => 
    puppy.color.toLowerCase() === color.toLowerCase()
  );
};
