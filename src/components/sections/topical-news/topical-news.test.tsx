import React from 'react';
import { render, screen } from '@testing-library/react';
import TopicalNews from './topical-news';

describe('TopicalNews', () => {
  const { container } = render(<TopicalNews />);

  it('renders TopicalNews page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders topical-news style', () => {
    render(<TopicalNews />);
    expect(screen.getByTestId('topical-news')).toBeInTheDocument();
  });
});
