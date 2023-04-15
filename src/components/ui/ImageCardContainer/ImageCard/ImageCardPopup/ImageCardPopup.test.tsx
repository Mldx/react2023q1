import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ImageCard from '../ImageCard';
import { catQueryMock } from '../../../../../mocks/catQueryMock';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../../store/storeRedux';
import { HomePage } from '../../../../pages';

it('Test image card popup', async () => {
  render(
    <Provider store={store}>
      <ImageCard {...catQueryMock.results[0]} />
    </Provider>
  );
  const card = screen.getByTestId('image-card');
  fireEvent.click(card);
  await waitFor(() => expect(screen.getByTestId('image-card_popup-container')).toBeInTheDocument());
});
