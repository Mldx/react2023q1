import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchPage from '../SearchPage/SearchPage';

describe('API test', () => {
  it('renders image cards when API returns results', async () => {
    render(<SearchPage />);
    await waitFor(() => expect(screen.getAllByTestId('image-card')).toHaveLength(6));
  });
});
