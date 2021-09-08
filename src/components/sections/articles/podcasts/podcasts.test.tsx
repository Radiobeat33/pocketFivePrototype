import React from 'react';
import { render, screen } from '@testing-library/react';
import Podcasts from './podcasts';

describe('Podcasts', () => {
  const { container } = render(<Podcasts />);

  it('renders Podcasts page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders podcasts style', () => {
    render(<Podcasts />);
    expect(screen.getByTestId('podcasts')).toBeInTheDocument();
  });
});
