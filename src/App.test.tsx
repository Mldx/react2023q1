import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { describe } from 'vitest';
import SearchBar from './components/ui/SearchBar/SearchBar';

describe('LocalStorage testing', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  const mockId = 'searchBarValue';

  it(`testing with preset value in LS 'iphone 11'`, async () => {
    const mockValue = 'iphone 11';
    localStorage.setItem(mockId, mockValue);
    render(<SearchBar />);
    expect(await screen.getByRole('textbox')).toHaveDisplayValue('iphone 11');
  });
});

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
