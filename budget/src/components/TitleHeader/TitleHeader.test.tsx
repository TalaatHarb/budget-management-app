import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleHeader from './TitleHeader';

it('should render title word for main title', () => {
  const titleText = 'Budget';
  render(<TitleHeader title={titleText}/>);
  const title = screen.getByText(titleText);
  expect(title).toBeInTheDocument();
});
