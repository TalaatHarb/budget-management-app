import React from 'react';
import { render, screen } from '@testing-library/react';
import BalanceDisplay from './BalanceDisplay';

it('should render the word balance in title', () => {
  render(<BalanceDisplay/>);
  const title = screen.getByText(/balance/i);
  expect(title).toBeInTheDocument();
});