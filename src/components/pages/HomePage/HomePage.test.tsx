import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

it('Render home page', () => {
  localStorage.removeItem('searchBarValue');
  render(<HomePage />);
  expect(screen.getByText(/Lets go find best images/i)).toBeInTheDocument();
});
