import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component for consistent spacing and max-width
 * Follows the responsive container requirements:
 * - Mobile: full width with 16px padding
 * - Tablet: max-width 720px
 * - Desktop: max-width 1200-1440px
 */
const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto px-4 w-full sm:px-6 md:max-w-[720px] lg:max-w-[1200px] xl:max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
