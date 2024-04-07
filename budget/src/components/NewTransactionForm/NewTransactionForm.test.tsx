import React from 'react';
import { render, screen } from '@testing-library/react';
import NewTransactionForm from './NewTransactionForm';

it('should render title of add transaction form', () => {
  render(<NewTransactionForm/>);
  const title = screen.getByText(/add new transaction/i);
  expect(title).toBeInTheDocument();
});
