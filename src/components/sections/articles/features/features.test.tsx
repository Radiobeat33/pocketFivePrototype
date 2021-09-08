import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './features';

describe('Features', () => {
  const { container } = render(<Features />);

  it('renders Features page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders features style', () => {
    render(<Features />);
    expect(screen.getByTestId('features')).toBeInTheDocument();
  });
});
