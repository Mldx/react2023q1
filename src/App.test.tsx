import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { describe } from 'vitest';

describe('Router testing', () => {
  it('Landing on a about page', () => {
    const aboutRoute = '/about';
    render(
      <MemoryRouter initialEntries={[aboutRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/About us!/i)).toBeVisible();
  });
  it('Landing on a 404 page', () => {
    const badRoute = '/random_page';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404/i)).toBeVisible();
  });
});
