import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  const { container } = render(<Header currentSection="Home" currentSubSection="" />);

  it('renders Header page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders header style', () => {
    render(<Header currentSection="Home" currentSubSection="" />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
