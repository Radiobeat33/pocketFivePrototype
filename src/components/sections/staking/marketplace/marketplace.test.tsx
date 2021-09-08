import React from 'react';
import { render } from '@testing-library/react';
import Marketplace from './marketplace';

describe('Marketplace', () => {
  const { container } = render(<Marketplace />);

  it('renders Marketplace page without crashing', () => {
    expect(container).toBeTruthy();
  });
});
