import React from 'react';
import { render } from '@testing-library/react';
import CreateOffering from './create-offering';

describe('Create Offering', () => {
  const { container } = render(<CreateOffering />);

  it('renders Create Offering page without crashing', () => {
    expect(container).toBeTruthy();
  });
});
