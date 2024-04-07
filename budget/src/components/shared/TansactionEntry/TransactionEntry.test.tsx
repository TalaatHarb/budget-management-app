import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionEntry from './TransactionEntry';

it('should render the word history in title', () => {
  const text = 'purchase';
  render(<TransactionEntry description={text}/>);
  const description = screen.getByText(text);
  expect(description).toBeInTheDocument();
});