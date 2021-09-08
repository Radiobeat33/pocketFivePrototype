import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginSignup from './login-signup';

describe('LoginSignup', () => {
  const { container } = render(<LoginSignup />);

  it('renders LoginSignup page without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('renders login-signup style', () => {
    render(<LoginSignup />);
    expect(screen.getByTestId('login-signup')).toBeInTheDocument();
  });
});
