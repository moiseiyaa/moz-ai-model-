'use client';

import { useApplicationForm } from '../../../context/ApplicationFormContext';
import { getAllBreeds } from '../../../data/breeds';

/**
 * PuppyPreferencesForm component for Step 2 of the application form
 * Collects preferences for puppy breed, size, gender, color, etc.
 */
const PuppyPreferencesForm = () => {
  const { formData, updateFormData } = useApplicationForm();
  const breeds = getAllBreeds();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const checkboxName = name.split('-')[0];
      const checkboxValue = name.split('-')[1];
      
      if (checkboxName === 'preferredSizes') {
        const updatedSizes = checked 
          ? [...formData.preferredSizes, checkboxValue]
          : formData.preferredSizes.filter(size => size !== checkboxValue);
        updateFormData({ preferredSizes: updatedSizes });
      } else if (checkboxName === 'preferredColors') {
        const updatedColors = checked 
          ? [...formData.preferredColors, checkboxValue]
          : formData.preferredColors.filter(color => color !== checkboxValue);
        updateFormData({ preferredColors: updatedColors });
      } else if (checkboxName === 'preferredCoatTypes') {
        const updatedCoatTypes = checked 
          ? [...formData.preferredCoatTypes, checkboxValue]
          : formData.preferredCoatTypes.filter(coatType => coatType !== checkboxValue);
        updateFormData({ preferredCoatTypes: updatedCoatTypes });
      }
      return;
    }
    
    // Handle radio inputs
    if (type === 'radio') {
      updateFormData({ [name]: value });
      return;
    }
    
    // Handle breed choice selects
    if (name.startsWith('breedChoice')) {
      const index = parseInt(name.split('-')[1]);
      const updatedBreedChoices = [...formData.breedChoices];
      
      // Ensure the array has enough elements
      while (updatedBreedChoices.length <= index) {
        updatedBreedChoices.push({ priority: updatedBreedChoices.length + 1, breed: '' });
      }
      
      updatedBreedChoices[index].breed = value;
      updateFormData({ breedChoices: updatedBreedChoices });
      return;
    }
    
    // Handle other inputs
    updateFormData({ [name]: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Please prioritize the breed(s) for which you are applying <span className="text-red-500">*</span>
        </h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="breedChoice-0" className="block text-sm font-medium text-gray-700 mb-1">
              #1 Choice <span className="text-red-500">*</span>
            </label>
            <select
              id="breedChoice-0"
              name="breedChoice-0"
              value={formData.breedChoices[0]?.breed || ''}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">Select Breed</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="breedChoice-1" className="block text-sm font-medium text-gray-700 mb-1">
              #2 Choice
            </label>
            <select
              id="breedChoice-1"
              name="breedChoice-1"
              value={formData.breedChoices[1]?.breed || ''}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">No 2nd Choice</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="breedChoice-2" className="block text-sm font-medium text-gray-700 mb-1">
              #3 Choice
            </label>
            <select
              id="breedChoice-2"
              name="breedChoice-2"
              value={formData.breedChoices[2]?.breed || ''}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">No 3rd Choice</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Preferred Size <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-gray-600 mb-2">Check all that apply</p>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredSizes-toy"
              name="preferredSizes-toy"
              checked={formData.preferredSizes.includes('toy')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredSizes-toy" className="ml-2 block text-sm text-gray-700">
              Toy / Petite / Micro Mini (5-24 lbs)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredSizes-mini"
              name="preferredSizes-mini"
              checked={formData.preferredSizes.includes('mini')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredSizes-mini" className="ml-2 block text-sm text-gray-700">
              Traditional Mini (25-40 lbs)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredSizes-medium"
              name="preferredSizes-medium"
              checked={formData.preferredSizes.includes('medium')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredSizes-medium" className="ml-2 block text-sm text-gray-700">
              Medium (41-55 lbs)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredSizes-standard"
              name="preferredSizes-standard"
              checked={formData.preferredSizes.includes('standard')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredSizes-standard" className="ml-2 block text-sm text-gray-700">
              Standard (over 55 lbs)
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Preferred Gender <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-gray-600 mb-2">Choose one</p>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="gender-male"
              name="preferredGender"
              value="male"
              checked={formData.preferredGender === 'male'}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="gender-male" className="ml-2 block text-sm text-gray-700">
              Male
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="gender-female"
              name="preferredGender"
              value="female"
              checked={formData.preferredGender === 'female'}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="gender-female" className="ml-2 block text-sm text-gray-700">
              Female
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="gender-either"
              name="preferredGender"
              value="either"
              checked={formData.preferredGender === 'either'}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="gender-either" className="ml-2 block text-sm text-gray-700">
              Either Gender
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Preferred Color <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-gray-600 mb-2">Check all that apply</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {['apricot', 'black', 'blenheim', 'caramel', 'chocolate', 'merle', 'parti-color', 'phantom-bi', 'phantom-tri', 'red', 'silver', 'tan', 'white'].map((color) => (
            <div key={color} className="flex items-center">
              <input
                type="checkbox"
                id={`preferredColors-${color}`}
                name={`preferredColors-${color}`}
                checked={formData.preferredColors.includes(color)}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor={`preferredColors-${color}`} className="ml-2 block text-sm text-gray-700">
                {color === 'parti-color' ? 'Parti-color (multi)' : 
                 color === 'phantom-bi' ? 'Phantom (bi-color)' : 
                 color === 'phantom-tri' ? 'Phantom (tri-color)' : 
                 color === 'silver' ? 'Silver/blue' : 
                 color === 'white' ? 'White/cream' : 
                 color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Preferred Coat Type <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-gray-600 mb-2">Check all that apply</p>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredCoatTypes-straight"
              name="preferredCoatTypes-straight"
              checked={formData.preferredCoatTypes.includes('straight')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredCoatTypes-straight" className="ml-2 block text-sm text-gray-700">
              Straight (flat)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredCoatTypes-wavy"
              name="preferredCoatTypes-wavy"
              checked={formData.preferredCoatTypes.includes('wavy')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredCoatTypes-wavy" className="ml-2 block text-sm text-gray-700">
              Wavy (shaggy)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="preferredCoatTypes-curly"
              name="preferredCoatTypes-curly"
              checked={formData.preferredCoatTypes.includes('curly')}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="preferredCoatTypes-curly" className="ml-2 block text-sm text-gray-700">
              Curly (wooly)
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="activityLevel" className="block text-lg font-medium text-gray-900 mb-1">
          What activity level would you like in a puppy/dog? <span className="text-red-500">*</span>
        </label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Select One</option>
          <option value="very-low">Very Low - Couch Potato</option>
          <option value="low">Low - Short Walks Only</option>
          <option value="moderate">Moderate - Regular Exercise</option>
          <option value="high">High - Very Active</option>
          <option value="very-high">Very High - Athletic/Working Dog</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="pickupLocation" className="block text-lg font-medium text-gray-900 mb-1">
          Preferred Pick-up Location <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-2">
          Our headquarters is in Denver, CO. Occasionally our partner families in other locations have litters available.
        </p>
        <select
          id="pickupLocation"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Select One</option>
          <option value="denver">Denver, CO (Headquarters)</option>
          <option value="chicago">Chicago, IL</option>
          <option value="dallas">Dallas, TX</option>
          <option value="seattle">Seattle, WA</option>
          <option value="miami">Miami, FL</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="secondPickupLocation" className="block text-lg font-medium text-gray-900 mb-1">
          Second Choice Pick-up Location
        </label>
        <p className="text-sm text-gray-600 mb-2">
          If your favorite location is not available, what would your second choice be?
        </p>
        <select
          id="secondPickupLocation"
          name="secondPickupLocation"
          value={formData.secondPickupLocation}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="">Select One</option>
          <option value="denver">Denver, CO (Headquarters)</option>
          <option value="chicago">Chicago, IL</option>
          <option value="dallas">Dallas, TX</option>
          <option value="seattle">Seattle, WA</option>
          <option value="miami">Miami, FL</option>
        </select>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          How do you plan to receive this puppy? <span className="text-red-500">*</span>
        </h3>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="delivery-pickup"
              name="deliveryMethod"
              value="pickup"
              checked={formData.deliveryMethod === 'pickup'}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="delivery-pickup" className="ml-2 block text-sm text-gray-700">
              Pick-up
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="delivery-delivery"
              name="deliveryMethod"
              value="delivery"
              checked={formData.deliveryMethod === 'delivery'}
              onChange={handleInputChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="delivery-delivery" className="ml-2 block text-sm text-gray-700">
              Delivery to anywhere in the Contiguous U.S.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyPreferencesForm;
