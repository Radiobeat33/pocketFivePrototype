import React from 'react';
import { render, screen } from '@testing-library/react';
import Coaches from './coaches';

describe('Coaches', () => {
  const { container } = render(<Coaches />);

  it('renders Coaches page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders coaches style', () => {
    render(<Coaches />);
    expect(screen.getByTestId('coaches')).toBeInTheDocument();
  });
});
