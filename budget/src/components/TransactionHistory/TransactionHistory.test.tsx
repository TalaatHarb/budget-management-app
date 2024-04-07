import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionHistory from './TransactionHistory';

it('should render the word history in title', () => {
  render(<TransactionHistory />);
  const title = screen.getByText(/history/i);
  expect(title).toBeInTheDocument();
});