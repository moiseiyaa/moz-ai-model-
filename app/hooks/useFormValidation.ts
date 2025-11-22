'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';

/**
 * Custom hook for form validation using Zod
 * @param schema Zod schema for validation
 * @param initialValues Initial form values
 * @returns Form validation state and helper functions
 */
export function useFormValidation<T extends z.ZodType<any, any>>(
  schema: T,
  initialValues: z.infer<T>
) {
  type FormData = z.infer<T>;
  
  const [values, setValues] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  
  // Validate form whenever values change
  useEffect(() => {
    validateForm();
    
    // Check if form is dirty
    const isFormDirty = Object.keys(values).some(key => {
      // @ts-ignore - Dynamic key access
      const initialValue = initialValues[key];
      // @ts-ignore - Dynamic key access
      const currentValue = values[key];
      
      if (Array.isArray(initialValue) && Array.isArray(currentValue)) {
        return JSON.stringify(initialValue) !== JSON.stringify(currentValue);
      }
      
      return initialValue !== currentValue;
    });
    
    setIsDirty(isFormDirty);
  }, [values]);
  
  /**
   * Validate the entire form using the Zod schema
   */
  const validateForm = () => {
    try {
      schema.parse(values);
      setErrors({});
      setIsValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        
        error.issues.forEach((err: z.ZodIssue) => {
          const path = err.path.join('.');
          fieldErrors[path] = err.message;
        });
        
        setErrors(fieldErrors);
        setIsValid(false);
      }
    }
  };
  
  /**
   * Handle input change event
   * @param e Change event from input element
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setValues(prev => ({ ...prev, [name]: checked }));
      return;
    }
    
    // Handle number inputs
    if (type === 'number') {
      setValues(prev => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
      return;
    }
    
    // Handle other input types
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  /**
   * Handle input blur event to mark field as touched
   * @param e Blur event from input element
   */
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };
  
  /**
   * Set a specific field value
   * @param name Field name
   * @param value Field value
   */
  const setFieldValue = (name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  /**
   * Set multiple field values at once
   * @param newValues Object containing field names and values
   */
  const setFieldValues = (newValues: Partial<FormData>) => {
    setValues(prev => ({ ...prev, ...newValues }));
  };
  
  /**
   * Mark a field as touched
   * @param name Field name
   */
  const setFieldTouched = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  };
  
  /**
   * Reset the form to initial values
   */
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsValid(false);
    setIsDirty(false);
  };
  
  /**
   * Submit the form if it's valid
   * @param onSubmit Function to call with form data when valid
   * @returns Promise that resolves with form data or rejects with errors
   */
  const submitForm = async (onSubmit: (data: FormData) => Promise<void> | void) => {
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);
    
    // Validate form
    try {
      const validData = schema.parse(values);
      await onSubmit(validData);
      return validData;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        
        error.issues.forEach((err: z.ZodIssue) => {
          const path = err.path.join('.');
          fieldErrors[path] = err.message;
        });
        
        setErrors(fieldErrors);
        setIsValid(false);
        throw fieldErrors;
      }
      throw error;
    }
  };
  
  /**
   * Get props for a form field
   * @param name Field name
   * @returns Props for the field
   */
  const getFieldProps = (name: string) => {
    return {
      name,
      // @ts-ignore - Dynamic key access
      value: values[name] || '',
      onChange: handleChange,
      onBlur: handleBlur,
      // @ts-ignore - Dynamic key access
      error: touched[name] ? errors[name] : undefined,
    };
  };
  
  return {
    values,
    errors,
    touched,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldValues,
    setFieldTouched,
    resetForm,
    submitForm,
    getFieldProps,
  };
}
