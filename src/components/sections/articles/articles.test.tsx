import React from 'react';
import { render, screen } from '@testing-library/react';
import Articles from './articles';

describe('Articles', () => {
  const { container } = render(<Articles />);

  it('renders Articles page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders articles style', () => {
    render(<Articles />);
    expect(screen.getByTestId('articles')).toBeInTheDocument();
  });
});
