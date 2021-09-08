import React from 'react';
import { render, screen } from '@testing-library/react';
import SecondaryNav from './secondary-nav';

describe('Secondary Navigation', () => {
  const { container } = render(<SecondaryNav />);

  it('renders SecondaryNav page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders secondary-nav style', () => {
    render(<SecondaryNav />);
    expect(screen.getByTestId('secondary-nav')).toBeInTheDocument();
  });
});
