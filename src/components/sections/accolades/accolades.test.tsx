import React from 'react';
import { render, screen } from '@testing-library/react';
import Accolades from './accolades';

describe('Accolades', () => {
  const { container } = render(<Accolades />);

  it('renders Accolades page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders accolades style', () => {
    render(<Accolades />);
    expect(screen.getByTestId('accolades')).toBeInTheDocument();
  });
});
