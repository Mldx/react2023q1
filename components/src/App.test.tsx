import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
// import matchers from '@testing-library/jest-dom';
// expect.extend(matchers);

it('should have text', () => {
  render(<App />);
  const message = screen.queryByText(/vite/i);
  expect(message).toBeVisible();
});
