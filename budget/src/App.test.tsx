import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render app title', () => {
  render(<App />);
  const title = screen.getByText(/budget/i);
  expect(title).toBeInTheDocument();
});
