import React from 'react';
import { render, screen } from '@testing-library/react';
import PocketfivesLeaderboards from './pocketfives-leaderboards';

describe('PocketfivesLeaderboards', () => {
  const { container } = render(<PocketfivesLeaderboards />);

  it('renders PocketfivesLeaderboards page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders pocketfive-leaderboards style', () => {
    render(<PocketfivesLeaderboards />);
    expect(screen.getByTestId('pocketfives-leaderboards')).toBeInTheDocument();
  });
});
