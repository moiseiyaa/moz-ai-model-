'use client';

import { useState, useEffect, useCallback } from 'react';

interface AnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  once?: boolean;
  threshold?: number;
}

/**
 * Custom hook for handling animations
 * @param options Animation configuration options
 * @returns Animation state and control functions
 */
export function useAnimation({
  duration = 0.6,
  delay = 0,
  easing = 'ease-out',
  once = true,
  threshold = 0.1,
}: AnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  // Create IntersectionObserver to detect when element is in viewport
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    
    if (entry.isIntersecting) {
      setIsVisible(true);
      if (once) {
        setHasAnimated(true);
      }
    } else if (!once && !hasAnimated) {
      setIsVisible(false);
    }
  }, [once, hasAnimated]);

  // Set up and clean up IntersectionObserver
  useEffect(() => {
    if (!ref) return;
    
    // Don't re-observe if animation has already played and is set to once
    if (once && hasAnimated) return;
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin: '0px',
    });
    
    observer.observe(ref);
    
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, observerCallback, once, hasAnimated, threshold]);

  // Generate animation styles based on visibility state
  const getAnimationStyles = (type: 'fade' | 'slide-up' | 'slide-right' | 'scale' | 'bounce') => {
    const baseStyles = {
      opacity: 0,
      transition: `all ${duration}s ${easing} ${delay}s`,
    };
    
    const visibleStyles = {
      opacity: 1,
    };
    
    const typeSpecificStyles = {
      'fade': {},
      'slide-up': {
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      },
      'slide-right': {
        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
      },
      'scale': {
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
      },
      'bounce': {
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity ${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, 
                    transform ${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s`,
      },
    };
    
    return {
      ...baseStyles,
      ...(isVisible ? visibleStyles : {}),
      ...typeSpecificStyles[type],
    };
  };

  // Reset animation state
  const resetAnimation = () => {
    setIsVisible(false);
    setHasAnimated(false);
  };

  // Force animation to play
  const playAnimation = () => {
    setIsVisible(true);
    if (once) {
      setHasAnimated(true);
    }
  };

  return {
    isVisible,
    hasAnimated,
    setRef,
    resetAnimation,
    playAnimation,
    getAnimationStyles,
  };
}

/**
 * Custom hook for handling page transitions
 * @returns Page transition state and control functions
 */
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'in' | 'out'>('in');
  
  // Start page exit transition
  const startExitTransition = useCallback(() => {
    setTransitionDirection('out');
    setIsTransitioning(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300); // Match this with your CSS transition duration
    });
  }, []);
  
  // Start page entry transition
  const startEntryTransition = useCallback(() => {
    setTransitionDirection('in');
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with your CSS transition duration
  }, []);
  
  // Generate transition styles
  const getTransitionStyles = () => {
    const baseStyles = {
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    };
    
    if (!isTransitioning) {
      return {
        ...baseStyles,
        opacity: 1,
        transform: 'translateY(0)',
      };
    }
    
    if (transitionDirection === 'out') {
      return {
        ...baseStyles,
        opacity: 0,
        transform: 'translateY(20px)',
      };
    }
    
    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0)',
    };
  };
  
  return {
    isTransitioning,
    transitionDirection,
    startExitTransition,
    startEntryTransition,
    getTransitionStyles,
  };
}
