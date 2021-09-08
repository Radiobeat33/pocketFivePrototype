import React from 'react';
import { render, screen } from '@testing-library/react';
import Staking from './staking';

describe('Staking', () => {
  const { container } = render(<Staking />);

  it('renders Staking page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders staking style', () => {
    render(<Staking />);
    expect(screen.getByTestId('staking')).toBeInTheDocument();
  });
});
