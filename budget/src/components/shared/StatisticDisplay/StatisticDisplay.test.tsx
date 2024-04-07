import React from 'react';
import { render, screen } from '@testing-library/react';
import StatisticDisplay from './StatisticDisplay';

it('should render title word for static display', () => {
  const title = 'income';
  render(<StatisticDisplay title={title}/>);
  const text = screen.getByText(title + ':');
  expect(text).toBeInTheDocument();
});