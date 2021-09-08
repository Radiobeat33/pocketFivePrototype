import React from 'react';
import { render, screen } from '@testing-library/react';
import BottomNav from './bottom-nav';

describe.only('Bottom Navigation', () => {
  const { container } = render(
    <BottomNav currentSection={'TestSection'} currentSubSection={'SubTestSection'} />
  );

  it('renders BottomNav page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders bottom-nav style', () => {
    render(<BottomNav currentSection={'TestSection'} currentSubSection={'SubTestSection'} />);
    expect(screen.getByTestId('bottom-nav')).toBeInTheDocument();
  });
});
