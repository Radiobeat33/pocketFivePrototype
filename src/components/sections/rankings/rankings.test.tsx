import React from 'react';
import { render, screen } from '@testing-library/react';
import Rankings from './rankings';

describe('Rankings', () => {
  const { container } = render(<Rankings />);

  it('renders rankings page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders rankings style', () => {
    render(<Rankings />);
    expect(screen.getByTestId('rankings')).toBeInTheDocument();
  });
});
