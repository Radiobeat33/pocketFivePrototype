import React from 'react';
import { render, screen } from '@testing-library/react';
import OnlinePokerRankings from './online-poker-rankings';

describe('OnlinePokerRankings', () => {
  const { container } = render(<OnlinePokerRankings />);

  it('renders OnlinePokerRankings page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders online-poker-rankings style', () => {
    render(<OnlinePokerRankings />);
    expect(screen.getByTestId('online-poker-rankings')).toBeInTheDocument();
  });
});
