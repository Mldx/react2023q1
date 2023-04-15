import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ImageCardContainer from './ImageCardContainer';
import { Provider } from 'react-redux';
import { store } from '../../../store/storeRedux';
import { HomePage } from '../../pages';

describe('API test', () => {
  it('renders "Lets go find best images" message if no search query is present', () => {
    render(
      <Provider store={store}>
        <ImageCardContainer />
      </Provider>
    );
    expect(screen.getByText(/Lets go find best images/i)).toBeInTheDocument();
  });

  it('should fetch some data', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchBar = screen.getByTestId('search_bar-input');
    fireEvent.change(searchBar, { target: { value: 'cat' } });
    fireEvent.keyDown(searchBar, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(screen.getAllByTestId('image-card')).toHaveLength(6);
  });
});
