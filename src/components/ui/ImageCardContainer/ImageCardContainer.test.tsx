import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCardContainer from './ImageCardContainer';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('API test', () => {
  it('renders "Lets go find best images" message if no search query is present', () => {
    render(
      <Provider store={store}>
        <ImageCardContainer />
      </Provider>
    );
    expect(screen.getByText(/Lets go find best images/i)).toBeInTheDocument();
  });
});
