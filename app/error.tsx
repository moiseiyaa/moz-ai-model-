'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Container from './components/organisms/Container';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Custom Error page
 * Displayed when a server-side error occurs
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-[70vh] flex items-center">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-8">
            <FaExclamationTriangle className="h-10 w-10 text-red-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Something Went Wrong</h1>
          
          <p className="text-xl text-gray-700 mb-4 max-w-2xl">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          
          {error.digest && (
            <p className="text-sm text-gray-500 mb-8">
              Error ID: {error.digest}
            </p>
          )}
          
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              <FaRedo className="h-5 w-5" />
              Try Again
            </button>
            
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-full border border-gray-300 transition-colors"
            >
              <FaHome className="h-5 w-5" />
              Return Home
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need Assistance?</h2>
            <p className="text-gray-700 mb-6">
              If the problem persists, please contact our support team. We're here to help!
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
