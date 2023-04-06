import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ImageCard from '../ImageCard';
import { catQueryMock } from '../../../../../mocks/catQueryMock';
import React from 'react';

it('Test image card popup', async () => {
  render(<ImageCard {...catQueryMock.results[0]} />);
  const card = screen.getByTestId('image-card');
  fireEvent.click(card);
  await waitFor(() => expect(screen.getByTestId('image-card_popup-container')).toBeInTheDocument());
});
