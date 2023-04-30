import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';

const store = setupStore();

it('Render home page', () => {
  localStorage.removeItem('searchBarValue');
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  expect(screen.getByText(/Lets go find best images/i)).toBeInTheDocument();
});
