import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  const { container } = render(<Footer />);

  it('renders Footer page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders footer style', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
