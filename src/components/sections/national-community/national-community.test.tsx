import React from 'react';
import { render, screen } from '@testing-library/react';
import NationalCommunity from './national-community';

describe('NationalCommunity', () => {
  const { container } = render(<NationalCommunity />);

  it('renders NationalCommunity page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders national-community style', () => {
    render(<NationalCommunity />);
    expect(screen.getByTestId('national-community')).toBeInTheDocument();
  });
});
