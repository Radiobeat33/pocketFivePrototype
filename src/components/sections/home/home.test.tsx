import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Home', () => {
  const { container } = render(<Home />);

  it('renders Home page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders home style', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
