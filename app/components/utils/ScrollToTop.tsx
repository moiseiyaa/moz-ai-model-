'use client';

import { FaArrowUp } from 'react-icons/fa';
import { useScrollToTop } from '../../hooks/useScroll';
import { cn } from '../../lib/utils';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
  ariaLabel?: string;
}

/**
 * ScrollToTop component
 * Button that appears when user scrolls down and allows them to scroll back to top
 */
const ScrollToTop = ({
  threshold = 300,
  className = '',
  ariaLabel = 'Scroll to top',
}: ScrollToTopProps) => {
  const { showButton, scrollToTop } = useScrollToTop(threshold);

  return (
    <button
      onClick={scrollToTop}
      aria-label={ariaLabel}
      className={cn(
        'fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
        className
      )}
    >
      <FaArrowUp className="h-5 w-5" />
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
};

export default ScrollToTop;
