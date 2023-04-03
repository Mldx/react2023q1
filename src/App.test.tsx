import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { describe } from 'vitest';
import SearchBar from './components/SearchBar/SearchBar';
import userEvent from '@testing-library/user-event';

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

  it(`testing unmount function in SearchBar'`, async () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.getByRole('textbox');
    const userInputValue = 'Iphone 14 pro max';
    await userEvent.type(input, userInputValue);
    unmount();
    expect(localStorage.getItem(mockId)).toEqual(userInputValue);
  });

  it(`testing null value in LS'`, async () => {
    render(<SearchBar />);
    screen.getByRole('textbox');
    expect(screen.getByRole('textbox')).toHaveDisplayValue('');
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
