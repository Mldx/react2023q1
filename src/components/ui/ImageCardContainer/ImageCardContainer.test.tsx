import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../../pages/HomePage/HomePage';

describe('API test', () => {
  it('renders image cards when API returns results', async () => {
    render(<HomePage />);
    await waitFor(() => expect(screen.getAllByTestId('image-card')).toHaveLength(6));
  });
});
