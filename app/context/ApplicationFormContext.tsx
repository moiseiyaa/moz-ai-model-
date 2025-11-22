'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { z } from 'zod';

// Define the form schema using Zod
export const applicationFormSchema = z.object({
  // Step 1: Basic Info
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(5, 'Valid zip code is required'),
  outsideUS: z.boolean().default(false),
  mobileNumber: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  confirmEmail: z.string().email('Valid email is required'),
  textAlerts: z.boolean().default(false),
  referralSource: z.string().optional(),
  
  // Step 2: Puppy Preferences
  breedChoices: z.array(z.object({
    priority: z.number(),
    breed: z.string()
  })).min(1, 'At least one breed choice is required'),
  preferredSizes: z.array(z.string()).min(1, 'At least one size preference is required'),
  preferredGender: z.string().min(1, 'Gender preference is required'),
  preferredColors: z.array(z.string()).min(1, 'At least one color preference is required'),
  preferredCoatTypes: z.array(z.string()).min(1, 'At least one coat type is required'),
  activityLevel: z.string().min(1, 'Activity level is required'),
  pickupLocation: z.string().min(1, 'Pickup location is required'),
  secondPickupLocation: z.string().optional(),
  deliveryMethod: z.enum(['pickup', 'delivery']),
  
  // Step 3: Household Info
  otherPets: z.boolean(),
  petTypes: z.string().optional(),
  allergies: z.string().optional(),
  hasChildren: z.boolean(),
  childrenAges: z.string().optional(),
  hasFence: z.boolean(),
  alternativeExercise: z.string().optional(),
  lifestyle: z.string().min(1, 'Lifestyle description is required'),
  typicalDay: z.string().min(1, 'Description of typical day is required'),
  whyGoodFit: z.string().min(1, 'Description of why you are a good fit is required'),
  firstDog: z.boolean(),
  previousPuppies: z.number().default(0),
  interestedInTraining: z.boolean(),
  
  // Step 4: Agreements
  spayNeuterAgreement: z.boolean().refine(val => val === true, {
    message: 'You must agree to the spay/neuter agreement'
  }),
  optInCommunications: z.boolean().default(false),
  welcomeCall: z.boolean().default(false),
  
  // Payment Info (for deposit)
  paymentMethod: z.enum(['creditCard', 'bankTransfer', 'crypto']).optional(),
  depositAmount: z.number().default(300)
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;

// Default form values
const defaultFormValues: ApplicationFormData = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  outsideUS: false,
  mobileNumber: '',
  email: '',
  confirmEmail: '',
  textAlerts: false,
  referralSource: '',
  
  breedChoices: [{ priority: 1, breed: '' }],
  preferredSizes: [],
  preferredGender: '',
  preferredColors: [],
  preferredCoatTypes: [],
  activityLevel: '',
  pickupLocation: '',
  secondPickupLocation: '',
  deliveryMethod: 'pickup',
  
  otherPets: false,
  petTypes: '',
  allergies: '',
  hasChildren: false,
  childrenAges: '',
  hasFence: false,
  alternativeExercise: '',
  lifestyle: '',
  typicalDay: '',
  whyGoodFit: '',
  firstDog: false,
  previousPuppies: 0,
  interestedInTraining: false,
  
  spayNeuterAgreement: false,
  optInCommunications: false,
  welcomeCall: false,
  
  paymentMethod: undefined,
  depositAmount: 300
};

interface ApplicationFormContextType {
  formData: ApplicationFormData;
  updateFormData: (data: Partial<ApplicationFormData>) => void;
  currentStep: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  isStepValid: (step: number) => boolean;
  resetForm: () => void;
  submitForm: () => Promise<boolean>;
  isSubmitting: boolean;
  submitError: string | null;
}

const ApplicationFormContext = createContext<ApplicationFormContextType | undefined>(undefined);

export const useApplicationForm = () => {
  const context = useContext(ApplicationFormContext);
  if (context === undefined) {
    throw new Error('useApplicationForm must be used within an ApplicationFormProvider');
  }
  return context;
};

interface ApplicationFormProviderProps {
  children: ReactNode;
}

export const ApplicationFormProvider = ({ children }: ApplicationFormProviderProps) => {
  const [formData, setFormData] = useState<ApplicationFormData>(defaultFormValues);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Load form data from localStorage on initial render
  useEffect(() => {
    try {
      const savedForm = localStorage.getItem('puppyhub-application-form');
      if (savedForm) {
        const parsedForm = JSON.parse(savedForm);
        setFormData(parsedForm);
      }
    } catch (error) {
      console.error('Failed to load form data from localStorage:', error);
    }
  }, []);
  
  // Save form data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('puppyhub-application-form', JSON.stringify(formData));
    } catch (error) {
      console.error('Failed to save form data to localStorage:', error);
    }
  }, [formData]);
  
  const updateFormData = (data: Partial<ApplicationFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };
  
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToStep = (step: number) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
      window.scrollTo(0, 0);
    }
  };
  
  const isStepValid = (step: number): boolean => {
    try {
      switch (step) {
        case 1:
          // Validate Basic Info
          applicationFormSchema.pick({
            firstName: true,
            lastName: true,
            address: true,
            city: true,
            state: true,
            zipCode: true,
            mobileNumber: true,
            email: true,
            confirmEmail: true
          }).parse(formData);
          
          // Additional validation for email confirmation
          if (formData.email !== formData.confirmEmail) {
            return false;
          }
          return true;
          
        case 2:
          // Validate Puppy Preferences
          applicationFormSchema.pick({
            breedChoices: true,
            preferredSizes: true,
            preferredGender: true,
            preferredColors: true,
            preferredCoatTypes: true,
            activityLevel: true,
            pickupLocation: true,
            deliveryMethod: true
          }).parse(formData);
          
          // Additional validation for breed choices
          if (formData.breedChoices.some(choice => !choice.breed)) {
            return false;
          }
          return true;
          
        case 3:
          // Validate Household Info
          applicationFormSchema.pick({
            lifestyle: true,
            typicalDay: true,
            whyGoodFit: true
          }).parse(formData);
          
          // Additional validation for conditional fields
          if (formData.otherPets && !formData.petTypes) {
            return false;
          }
          if (formData.hasChildren && !formData.childrenAges) {
            return false;
          }
          if (!formData.hasFence && !formData.alternativeExercise) {
            return false;
          }
          return true;
          
        case 4:
          // Validate Agreements
          applicationFormSchema.pick({
            spayNeuterAgreement: true
          }).parse(formData);
          return true;
          
        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  };
  
  const resetForm = () => {
    setFormData(defaultFormValues);
    setCurrentStep(1);
    localStorage.removeItem('puppyhub-application-form');
  };
  
  const submitForm = async (): Promise<boolean> => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Validate the entire form
      applicationFormSchema.parse(formData);
      
      // Simulate API call to submit form
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear form data after successful submission
      resetForm();
      setIsSubmitting(false);
      return true;
    } catch (error) {
      console.error('Form validation error:', error);
      setSubmitError('There was an error submitting your application. Please check all fields and try again.');
      setIsSubmitting(false);
      return false;
    }
  };
  
  return (
    <ApplicationFormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        isStepValid,
        resetForm,
        submitForm,
        isSubmitting,
        submitError
      }}
    >
      {children}
    </ApplicationFormContext.Provider>
  );
};
