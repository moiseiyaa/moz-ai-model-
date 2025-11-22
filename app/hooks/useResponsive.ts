'use client';

import { useState, useEffect } from 'react';

// Define breakpoints that match Tailwind CSS defaults
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type Breakpoint = keyof typeof breakpoints;

/**
 * Custom hook for handling responsive design
 * @returns Responsive design helper functions and state
 */
export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away to update initial state
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  /**
   * Check if current window width is below a specified breakpoint
   * @param breakpoint Breakpoint to check against
   * @returns True if window width is below the breakpoint
   */
  const isBelowBreakpoint = (breakpoint: Breakpoint): boolean => {
    if (!isMounted) return false;
    return windowSize.width < breakpoints[breakpoint];
  };
  
  /**
   * Check if current window width is above a specified breakpoint
   * @param breakpoint Breakpoint to check against
   * @returns True if window width is above the breakpoint
   */
  const isAboveBreakpoint = (breakpoint: Breakpoint): boolean => {
    if (!isMounted) return false;
    return windowSize.width >= breakpoints[breakpoint];
  };
  
  /**
   * Check if current window width is between two specified breakpoints
   * @param minBreakpoint Minimum breakpoint
   * @param maxBreakpoint Maximum breakpoint
   * @returns True if window width is between the breakpoints
   */
  const isBetweenBreakpoints = (
    minBreakpoint: Breakpoint,
    maxBreakpoint: Breakpoint
  ): boolean => {
    if (!isMounted) return false;
    return (
      windowSize.width >= breakpoints[minBreakpoint] &&
      windowSize.width < breakpoints[maxBreakpoint]
    );
  };
  
  /**
   * Get current device type based on window width
   * @returns Device type (mobile, tablet, desktop, or large)
   */
  const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' | 'large' => {
    if (!isMounted) return 'desktop'; // Default for SSR
    
    if (windowSize.width < breakpoints.sm) return 'mobile';
    if (windowSize.width < breakpoints.lg) return 'tablet';
    if (windowSize.width < breakpoints.xl) return 'desktop';
    return 'large';
  };
  
  /**
   * Check if device is mobile
   * @returns True if device is mobile
   */
  const isMobile = (): boolean => getDeviceType() === 'mobile';
  
  /**
   * Check if device is tablet
   * @returns True if device is tablet
   */
  const isTablet = (): boolean => getDeviceType() === 'tablet';
  
  /**
   * Check if device is desktop
   * @returns True if device is desktop
   */
  const isDesktop = (): boolean => 
    getDeviceType() === 'desktop' || getDeviceType() === 'large';
  
  /**
   * Get orientation of the device
   * @returns Orientation (portrait or landscape)
   */
  const getOrientation = (): 'portrait' | 'landscape' => {
    if (!isMounted) return 'landscape'; // Default for SSR
    return windowSize.width > windowSize.height ? 'landscape' : 'portrait';
  };
  
  /**
   * Check if orientation is portrait
   * @returns True if orientation is portrait
   */
  const isPortrait = (): boolean => getOrientation() === 'portrait';
  
  /**
   * Check if orientation is landscape
   * @returns True if orientation is landscape
   */
  const isLandscape = (): boolean => getOrientation() === 'landscape';
  
  return {
    windowSize,
    isMounted,
    isBelowBreakpoint,
    isAboveBreakpoint,
    isBetweenBreakpoints,
    getDeviceType,
    isMobile,
    isTablet,
    isDesktop,
    getOrientation,
    isPortrait,
    isLandscape,
  };
}
