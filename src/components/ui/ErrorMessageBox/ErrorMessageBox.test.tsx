import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorMessageBox from './ErrorMessageBox';

it('check render', async () => {
  const someErrorMessage = 'Some Error';
  render(<ErrorMessageBox>{someErrorMessage}</ErrorMessageBox>);
  expect(screen.getByText(someErrorMessage)).toBeVisible();
});
it('check render', async () => {
  const someErrorMessage = 'Some Error';
  render(<ErrorMessageBox>{someErrorMessage}</ErrorMessageBox>);
  expect(screen.getByText(someErrorMessage)).toBeVisible();
});
