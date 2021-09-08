import React from 'react';
import { render, screen } from '@testing-library/react';
import StakingFaq from './staking-faq';

describe('StakingFaq', () => {
  const { container } = render(<StakingFaq />);

  it('renders StakingFaq page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders staking-faq style', () => {
    render(<StakingFaq />);
    expect(screen.getByTestId('staking-faq')).toBeInTheDocument();
  });
});
