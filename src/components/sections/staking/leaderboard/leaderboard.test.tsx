import React from 'react';
import { render, screen } from '@testing-library/react';
import LeaderBoard from './leaderboard';

describe('LeaderBoard', () => {
  const { container } = render(<LeaderBoard />);

  it('renders LeaderBoard page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders leaderboard style', () => {
    render(<LeaderBoard />);
    expect(screen.getByTestId('leaderboard')).toBeInTheDocument();
  });
});
