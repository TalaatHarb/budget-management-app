import React from 'react';
import { render, screen } from '@testing-library/react';
import InOutSummary from './InOutSummary';

it('should render the word `in`', () => {
  render(<InOutSummary/>);
  const text = screen.getByText(/in/i);
  expect(text).toBeInTheDocument();
});