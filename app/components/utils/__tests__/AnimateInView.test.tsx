import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimateInView from '../AnimateInView';

describe('AnimateInView Component', () => {
  test('renders children correctly', () => {
    render(
      <AnimateInView>
        <div data-testid="test-child">Test Content</div>
      </AnimateInView>
    );
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  
  test('applies default animation style', () => {
    render(
      <AnimateInView>
        <div>Test Content</div>
      </AnimateInView>
    );
    
    // The default animation is 'fade-in'
    const animatedDiv = screen.getByText('Test Content').parentElement;
    expect(animatedDiv).toHaveStyle('opacity: 1'); // Initially visible due to mocked IntersectionObserver
    expect(animatedDiv).toHaveStyle('transition: opacity 0.6s ease-in-out 0s');
  });
  
  test('applies custom animation style', () => {
    render(
      <AnimateInView animation="slide-up" duration={1} delay={0.2}>
        <div>Test Content</div>
      </AnimateInView>
    );
    
    const animatedDiv = screen.getByText('Test Content').parentElement;
    expect(animatedDiv).toHaveStyle('opacity: 1');
    expect(animatedDiv).toHaveStyle('transform: translateY(0)');
    expect(animatedDiv).toHaveStyle('transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s');
  });
  
  test('applies custom className', () => {
    render(
      <AnimateInView className="test-class">
        <div>Test Content</div>
      </AnimateInView>
    );
    
    const animatedDiv = screen.getByText('Test Content').parentElement;
    expect(animatedDiv).toHaveClass('test-class');
  });
});
