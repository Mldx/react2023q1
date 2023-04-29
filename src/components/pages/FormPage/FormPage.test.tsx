import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import FormPage from './FormPage';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';

const store = setupStore();

describe('FormPage component testing', () => {
  it(`check fields`, () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByLabelText('Name:')).toBeVisible();
    expect(screen.getByLabelText('Surname:')).toBeVisible();
    expect(screen.getByLabelText('Delivery date:')).toBeVisible();
    expect(screen.getByLabelText('Delivery city:')).toBeVisible();
    expect(screen.getByLabelText('I allow to use my personal data:')).toBeVisible();
    expect(screen.getByText('Gender:')).toBeVisible();
    expect(screen.getByLabelText('Your avatar:')).toBeVisible();
  });
});
