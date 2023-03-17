import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

it('should have text', () => {
  render(<App />);
  const message = screen.queryByText(/count is/i);
  expect(message).toBeVisible();
});
