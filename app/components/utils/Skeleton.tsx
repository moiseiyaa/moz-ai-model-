'use client';

import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'rounded' | 'circular' | 'text';
  width?: string;
  height?: string;
}

/**
 * Skeleton component for loading states
 * Provides visual feedback while content is loading
 */
const Skeleton = ({
  className,
  variant = 'default',
  width,
  height,
}: SkeletonProps) => {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    default: 'rounded',
    rounded: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4',
  };
  
  const styles = {
    width: width || '100%',
    height: height || '100%',
  };
  
  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={styles}
      aria-hidden="true"
    />
  );
};

/**
 * PuppyCardSkeleton component
 * Skeleton loader for puppy cards
 */
export const PuppyCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <Skeleton height="240px" className="w-full" />
      </div>
      <div className="p-5 space-y-3">
        <Skeleton variant="text" width="70%" height="24px" />
        <Skeleton variant="text" width="40%" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="rounded" width="80px" height="32px" />
        </div>
      </div>
    </div>
  );
};

/**
 * TestimonialSkeleton component
 * Skeleton loader for testimonials
 */
export const TestimonialSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <Skeleton variant="circular" width="48px" height="48px" className="mr-4" />
        <div className="space-y-2">
          <Skeleton variant="text" width="120px" />
          <Skeleton variant="text" width="80px" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  );
};

/**
 * FAQSkeleton component
 * Skeleton loader for FAQ items
 */
export const FAQSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm p-5">
      <div className="flex justify-between items-center">
        <Skeleton variant="text" width="80%" height="24px" />
        <Skeleton variant="circular" width="24px" height="24px" />
      </div>
    </div>
  );
};

/**
 * GridSkeleton component
 * Creates a grid of skeleton items
 */
export const GridSkeleton = ({
  count = 6,
  columns = 3,
  SkeletonComponent = PuppyCardSkeleton,
}: {
  count?: number;
  columns?: number;
  SkeletonComponent?: React.ComponentType;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonComponent key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
