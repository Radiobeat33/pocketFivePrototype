import React from 'react';
import { render, screen } from '@testing-library/react';
import EarningsList from './earnings-list';

describe('EarningsList', () => {
  const { container } = render(<EarningsList />);

  it('renders EarningsList page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders earnings-list style', () => {
    render(<EarningsList />);
    expect(screen.getByTestId('earnings-list')).toBeInTheDocument();
  });
});
