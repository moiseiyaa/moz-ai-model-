'use client';

import { useApplicationForm } from '../../../context/ApplicationFormContext';

/**
 * HouseholdInfoForm component for Step 3 of the application form
 * Collects information about the applicant's household and lifestyle
 */
const HouseholdInfoForm = () => {
  const { formData, updateFormData } = useApplicationForm();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox and radio inputs
    if (type === 'checkbox' || type === 'radio') {
      const checked = (e.target as HTMLInputElement).checked;
      updateFormData({ [name]: checked });
      return;
    }
    
    // Handle number inputs
    if (type === 'number') {
      updateFormData({ [name]: parseInt(value) || 0 });
      return;
    }
    
    // Handle other inputs
    updateFormData({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Other pets at your house? <span className="text-red-500">*</span>
        </h3>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="otherPets-yes"
              name="otherPets"
              checked={formData.otherPets === true}
              onChange={() => updateFormData({ otherPets: true })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="otherPets-yes" className="ml-2 block text-sm text-gray-700">
              Yes
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="otherPets-no"
              name="otherPets"
              checked={formData.otherPets === false}
              onChange={() => updateFormData({ otherPets: false })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="otherPets-no" className="ml-2 block text-sm text-gray-700">
              No
            </label>
          </div>
        </div>
        
        {formData.otherPets && (
          <div className="mt-4">
            <label htmlFor="petTypes" className="block text-sm font-medium text-gray-700 mb-1">
              If so, what kind of pets? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="petTypes"
              name="petTypes"
              value={formData.petTypes}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required={formData.otherPets}
            />
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="allergies" className="block text-lg font-medium text-gray-900 mb-1">
          Do you have family members with dog-related allergies? <span className="text-red-500">*</span>
        </label>
        <select
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Select One</option>
          <option value="no-allergies">No Allergies</option>
          <option value="mild-allergies">Mild Allergies</option>
          <option value="moderate-allergies">Moderate Allergies</option>
          <option value="severe-allergies">Severe Allergies</option>
        </select>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Children at your house? <span className="text-red-500">*</span>
        </h3>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="hasChildren-yes"
              name="hasChildren"
              checked={formData.hasChildren === true}
              onChange={() => updateFormData({ hasChildren: true })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="hasChildren-yes" className="ml-2 block text-sm text-gray-700">
              Yes
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="hasChildren-no"
              name="hasChildren"
              checked={formData.hasChildren === false}
              onChange={() => updateFormData({ hasChildren: false })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="hasChildren-no" className="ml-2 block text-sm text-gray-700">
              No
            </label>
          </div>
        </div>
        
        {formData.hasChildren && (
          <div className="mt-4">
            <label htmlFor="childrenAges" className="block text-sm font-medium text-gray-700 mb-1">
              If so, what are your children's ages? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="childrenAges"
              name="childrenAges"
              value={formData.childrenAges}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required={formData.hasChildren}
            />
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Fenced in yard? <span className="text-red-500">*</span>
        </h3>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="hasFence-yes"
              name="hasFence"
              checked={formData.hasFence === true}
              onChange={() => updateFormData({ hasFence: true })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="hasFence-yes" className="ml-2 block text-sm text-gray-700">
              Yes
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="hasFence-no"
              name="hasFence"
              checked={formData.hasFence === false}
              onChange={() => updateFormData({ hasFence: false })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="hasFence-no" className="ml-2 block text-sm text-gray-700">
              No
            </label>
          </div>
        </div>
        
        {formData.hasFence === false && (
          <div className="mt-4">
            <label htmlFor="alternativeExercise" className="block text-sm font-medium text-gray-700 mb-1">
              If you don't have a fence, what other exercise options are available? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="alternativeExercise"
              name="alternativeExercise"
              value={formData.alternativeExercise}
              onChange={handleInputChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required={!formData.hasFence}
            />
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="lifestyle" className="block text-lg font-medium text-gray-900 mb-1">
          Describe Your Lifestyle <span className="text-red-500">*</span>
        </label>
        <select
          id="lifestyle"
          name="lifestyle"
          value={formData.lifestyle}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value="">Select One</option>
          <option value="very-active">Very active</option>
          <option value="active">Active</option>
          <option value="moderate">Moderately active</option>
          <option value="relaxed">Relaxed</option>
          <option value="very-relaxed">Very relaxed</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="typicalDay" className="block text-lg font-medium text-gray-900 mb-1">
          What would a typical day look like for a puppy/dog at your house? <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-2">Thanks in advance for your thoroughness</p>
        <textarea
          id="typicalDay"
          name="typicalDay"
          value={formData.typicalDay}
          onChange={handleInputChange}
          rows={4}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>
      
      <div>
        <label htmlFor="whyGoodFit" className="block text-lg font-medium text-gray-900 mb-1">
          Why is your family a good fit for a family-raised puppy from PuppyHub USA? <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-2">Thanks in advance for your thoroughness</p>
        <textarea
          id="whyGoodFit"
          name="whyGoodFit"
          value={formData.whyGoodFit}
          onChange={handleInputChange}
          rows={4}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          This will be my first dog <span className="text-red-500">*</span>
        </h3>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="firstDog-yes"
              name="firstDog"
              checked={formData.firstDog === true}
              onChange={() => updateFormData({ firstDog: true })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="firstDog-yes" className="ml-2 block text-sm text-gray-700">
              Yes
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="firstDog-no"
              name="firstDog"
              checked={formData.firstDog === false}
              onChange={() => updateFormData({ firstDog: false })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="firstDog-no" className="ml-2 block text-sm text-gray-700">
              No
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="previousPuppies" className="block text-lg font-medium text-gray-900 mb-1">
          How many pups have you already adopted from PuppyHub USA? <span className="text-red-500">*</span>
        </label>
        <select
          id="previousPuppies"
          name="previousPuppies"
          value={formData.previousPuppies}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value={0}>None</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4 or more</option>
        </select>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Training is a worthwhile financial investment into your puppy's future. Are you interested in this option? <span className="text-red-500">*</span>
        </h3>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="radio"
              id="interestedInTraining-yes"
              name="interestedInTraining"
              checked={formData.interestedInTraining === true}
              onChange={() => updateFormData({ interestedInTraining: true })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="interestedInTraining-yes" className="ml-2 block text-sm text-gray-700">
              Yes
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="interestedInTraining-no"
              name="interestedInTraining"
              checked={formData.interestedInTraining === false}
              onChange={() => updateFormData({ interestedInTraining: false })}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="interestedInTraining-no" className="ml-2 block text-sm text-gray-700">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseholdInfoForm;
