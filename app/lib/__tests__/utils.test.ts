import { 
  cn, 
  formatPrice, 
  truncateText, 
  generateSlug, 
  debounce,
  getRandomItem,
  shuffleArray
} from '../utils';

describe('Utility Functions', () => {
  describe('cn (class name utility)', () => {
    test('combines class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
      expect(cn('class1', null, undefined, 'class2')).toBe('class1 class2');
      expect(cn('class1', { 'class2': true, 'class3': false })).toBe('class1 class2');
    });
    
    test('handles conditional classes', () => {
      const isActive = true;
      const isDisabled = false;
      
      expect(cn('base', { 'active': isActive, 'disabled': isDisabled }))
        .toBe('base active');
    });
    
    test('merges tailwind classes correctly', () => {
      expect(cn('p-4 text-red-500', 'p-6')).toBe('text-red-500 p-6');
      expect(cn('flex items-center', 'flex-col')).toBe('flex items-center flex-col');
    });
  });
  
  describe('formatPrice', () => {
    test('formats price as USD by default', () => {
      expect(formatPrice(1000)).toBe('$1,000.00');
      expect(formatPrice(1000.5)).toBe('$1,000.50');
      expect(formatPrice(1000.55)).toBe('$1,000.55');
    });
    
    test('formats price with specified currency', () => {
      expect(formatPrice(1000, 'EUR')).toBe('€1,000.00');
      expect(formatPrice(1000, 'GBP')).toBe('£1,000.00');
      expect(formatPrice(1000, 'JPY')).toBe('¥1,000');
    });
  });
  
  describe('truncateText', () => {
    test('truncates text when it exceeds max length', () => {
      const longText = 'This is a very long text that needs to be truncated';
      expect(truncateText(longText, 10)).toBe('This is a...');
      expect(truncateText(longText, 20)).toBe('This is a very long...');
    });
    
    test('does not truncate text when it is shorter than max length', () => {
      const shortText = 'Short text';
      expect(truncateText(shortText, 20)).toBe(shortText);
    });
    
    test('handles edge cases', () => {
      expect(truncateText('', 10)).toBe('');
      expect(truncateText('Exactly 10', 10)).toBe('Exactly 10');
    });
  });
  
  describe('generateSlug', () => {
    test('converts string to slug format', () => {
      expect(generateSlug('Hello World')).toBe('hello-world');
      expect(generateSlug('This is a Test')).toBe('this-is-a-test');
    });
    
    test('removes special characters', () => {
      expect(generateSlug('Hello, World!')).toBe('hello-world');
      expect(generateSlug('Product (2023)')).toBe('product-2023');
    });
    
    test('handles multiple spaces and dashes', () => {
      expect(generateSlug('Hello  World')).toBe('hello-world');
      expect(generateSlug('hello--world')).toBe('hello-world');
    });
    
    test('trims leading and trailing dashes', () => {
      expect(generateSlug(' Hello World ')).toBe('hello-world');
      expect(generateSlug('-Hello World-')).toBe('hello-world');
    });
  });
  
  describe('debounce', () => {
    jest.useFakeTimers();
    
    test('delays function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);
      
      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();
      
      jest.advanceTimersByTime(500);
      expect(mockFn).not.toHaveBeenCalled();
      
      jest.advanceTimersByTime(500);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    test('only executes once for multiple calls within delay period', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);
      
      debouncedFn();
      debouncedFn();
      debouncedFn();
      
      jest.advanceTimersByTime(1000);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    
    test('passes arguments to the debounced function', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);
      
      debouncedFn('test', 123);
      jest.advanceTimersByTime(1000);
      
      expect(mockFn).toHaveBeenCalledWith('test', 123);
    });
  });
  
  describe('getRandomItem', () => {
    test('returns an item from the array', () => {
      const array = [1, 2, 3, 4, 5];
      const result = getRandomItem(array);
      expect(array).toContain(result);
    });
    
    test('handles array with single item', () => {
      const array = ['only item'];
      expect(getRandomItem(array)).toBe('only item');
    });
    
    test('returns undefined for empty array', () => {
      expect(getRandomItem([])).toBeUndefined();
    });
  });
  
  describe('shuffleArray', () => {
    test('returns array with same length', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(array);
      expect(shuffled.length).toBe(array.length);
    });
    
    test('returns array with same items', () => {
      const array = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(array);
      expect(shuffled).toEqual(expect.arrayContaining(array));
      expect(array).toEqual(expect.arrayContaining(shuffled));
    });
    
    test('does not modify original array', () => {
      const array = [1, 2, 3, 4, 5];
      const original = [...array];
      shuffleArray(array);
      expect(array).toEqual(original);
    });
  });
});
