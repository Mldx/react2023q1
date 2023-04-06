import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContext } from '../../../store/store';
import { getPhotos } from '../../../api/api';
import ImageCardContainer from './ImageCardContainer';
import { Status } from '../../../types/types';

describe('API test', () => {
  it('renders "Lets go find best images" message if no search query is present', () => {
    localStorage.removeItem('searchBarValue');
    render(<ImageCardContainer />);
    expect(screen.getByText(/Lets go find best images/i)).toBeInTheDocument();
  });

  it('should fetch some data', async () => {
    localStorage.setItem('searchBarValue', 'cat');
    const mockQuery = await getPhotos('cat');

    const initialAppState = {
      cards: mockQuery.response!.results,
      errorMessage: '',
      status: Status.FULFILLED,
      search: 'cat',
    };

    render(
      <AppContext.Provider
        value={{
          appState: initialAppState,
          setAppState: () => {},
        }}
      >
        <ImageCardContainer />
      </AppContext.Provider>
    );

    expect(screen.getAllByTestId('image-card')).toHaveLength(6);
  });

  it('not found', async () => {
    localStorage.setItem('searchBarValue', '');

    const initialAppState = {
      cards: [],
      errorMessage: '',
      status: Status.FULFILLED,
      search: 'cat121',
    };

    render(
      <AppContext.Provider
        value={{
          appState: initialAppState,
          setAppState: () => {},
        }}
      >
        <ImageCardContainer />
      </AppContext.Provider>
    );

    expect(screen.getByText(/Not found/i)).toBeVisible();
  });
});
