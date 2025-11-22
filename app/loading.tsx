'use client';

import Container from './components/organisms/Container';

/**
 * Loading component
 * Displayed during page transitions and data fetching
 */
export default function Loading() {
  return (
    <>
      {/* Progress loader at the top - fixed position */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <div className="loader" style={{ width: '100%' }}></div>
      </div>
      
      <div className="py-16 md:py-24 min-h-[70vh] flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              {/* Progress loader in center */}
              <div className="loader mb-8"></div>
              <h2 className="mt-8 text-2xl font-bold text-center text-gray-800">Loading...</h2>
              <p className="mt-2 text-center text-gray-600">Finding perfect puppies for you</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
