import React from 'react';
import { render, screen } from '@testing-library/react';
import OnlinePoker from './online-poker';

describe('OnlinePoker', () => {
  const { container } = render(<OnlinePoker />);

  it('renders OnlinePoker page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders online-poker style', () => {
    render(<OnlinePoker />);
    expect(screen.getByTestId('online-poker')).toBeInTheDocument();
  });
});
