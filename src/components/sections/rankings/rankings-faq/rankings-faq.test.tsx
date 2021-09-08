import React from 'react';
import { render, screen } from '@testing-library/react';
import RankingsFaq from './rankings-faq';

describe('RankingsFaq', () => {
  const { container } = render(<RankingsFaq />);

  it('renders RankingsFaq page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders rankings-faq style', () => {
    render(<RankingsFaq />);
    expect(screen.getByTestId('rankings-faq')).toBeInTheDocument();
  });
});
