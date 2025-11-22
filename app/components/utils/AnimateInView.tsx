'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateInViewProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'scale-in' | 'bounce';
  duration?: number;
  delay?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

/**
 * AnimateInView component
 * Animates children when they enter the viewport
 */
const AnimateInView = ({
  children,
  animation = 'fade-in',
  duration = 0.6,
  delay = 0,
  once = true,
  threshold = 0.1,
  className = '',
}: AnimateInViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Define animation styles
  const animationStyles = {
    'fade-in': {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}s ease-in-out ${delay}s`,
    },
    'slide-up': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    },
    'slide-in-right': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    },
    'scale-in': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.9)',
      transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    },
    'bounce': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity ${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, transform ${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s`,
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={animationStyles[animation]}
      aria-hidden={!isVisible}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
