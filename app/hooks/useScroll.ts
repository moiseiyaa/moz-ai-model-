'use client';

import { useState, useEffect, useCallback, RefObject } from 'react';

interface ScrollOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for detecting when an element is in the viewport
 * @param options Configuration options
 * @returns Object with ref and inView state
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
}: ScrollOptions = {}) {
  const [ref, setRef] = useState<T | null>(null);
  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref) return;
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        
        if (isIntersecting && triggerOnce) {
          setHasTriggered(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref: setRef, inView };
}

/**
 * Custom hook for handling scroll position
 * @returns Current scroll position and direction
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
    
    if (currentPosition > prevScrollPosition) {
      setScrollDirection('down');
    } else if (currentPosition < prevScrollPosition) {
      setScrollDirection('up');
    }
    
    setPrevScrollPosition(currentPosition);
  }, [prevScrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { scrollPosition, scrollDirection };
}

/**
 * Custom hook for implementing a scroll-to-top button
 * @param threshold Scroll position threshold to show the button
 * @returns Object with showButton state and scrollToTop function
 */
export function useScrollToTop(threshold = 300) {
  const { scrollPosition } = useScrollPosition();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(scrollPosition > threshold);
  }, [scrollPosition, threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { showButton, scrollToTop };
}

/**
 * Custom hook for implementing a sticky header
 * @param threshold Scroll position threshold to make the header sticky
 * @returns Object with isSticky state
 */
export function useStickyHeader(threshold = 100) {
  const { scrollPosition } = useScrollPosition();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsSticky(scrollPosition > threshold);
  }, [scrollPosition, threshold]);

  return { isSticky };
}

/**
 * Custom hook for implementing smooth scrolling to an element
 * @returns Function to scroll to an element
 */
export function useSmoothScroll() {
  const scrollToElement = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return { scrollToElement };
}

/**
 * Custom hook for implementing a parallax effect
 * @param speed Parallax speed (1 is normal, < 1 is slower, > 1 is faster)
 * @returns Object with ref and style for the parallax element
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.5) {
  const [ref, setRef] = useState<T | null>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref) return;
    
    const rect = ref.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Only update when element is in view (with some buffer)
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the top of the viewport
      const distanceFromTop = elementTop - scrollTop;
      
      // Calculate the parallax offset
      const parallaxOffset = (distanceFromTop - windowHeight / 2) * speed;
      
      setOffset(parallaxOffset);
    }
  }, [ref, speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const style = {
    transform: `translateY(${offset}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return { ref: setRef, style };
}
