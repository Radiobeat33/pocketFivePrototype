import React from 'react';
import { render, screen } from '@testing-library/react';
import Discord from './discord';

describe('Discord', () => {
  const { container } = render(<Discord />);

  it('renders Discord page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders discord style', () => {
    render(<Discord />);
    expect(screen.getByTestId('discord')).toBeInTheDocument();
  });
});
