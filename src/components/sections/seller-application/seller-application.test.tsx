import React from 'react';
import { render } from '@testing-library/react';
import SellerApplication from './seller-application';

describe('Seller Application', () => {
  const { container } = render(<SellerApplication />);

  it('renders Seller Application page without crashing', () => {
    expect(container).toBeTruthy();
  });
});
