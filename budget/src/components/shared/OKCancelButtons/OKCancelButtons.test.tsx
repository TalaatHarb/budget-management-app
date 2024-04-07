import React from 'react';
import { render, screen } from '@testing-library/react';
import OKCancelButtons from './OKCancelButtons';

it('should render the word `cancel`', () => {
  render(<OKCancelButtons/>);
  const text = screen.getByText(/cancel/i);
  expect(text).toBeInTheDocument();
});