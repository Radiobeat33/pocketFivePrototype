import React from 'react';
import { render, screen } from '@testing-library/react';
import ApplyToSell from './apply-to-sell';

describe('ApplyToSell', () => {
  const { container } = render(<ApplyToSell />);

  it('renders ApplyToSell page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders apply-to-sell style', () => {
    render(<ApplyToSell />);
    expect(screen.getByTestId('apply-to-sell')).toBeInTheDocument();
  });
});
