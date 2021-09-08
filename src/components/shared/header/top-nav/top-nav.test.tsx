import React from 'react';
import { render, screen } from '@testing-library/react';
import TopNav from './top-nav';

describe('Top Navigation', () => {
  const { container } = render(<TopNav currentSection="TestSection" />);

  it('renders TopNav page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders top-nav style', () => {
    render(<TopNav currentSection="TestSection" />);
    expect(screen.getByTestId('top-nav')).toBeInTheDocument();
  });
});
