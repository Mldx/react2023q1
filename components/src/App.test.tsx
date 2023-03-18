import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import AboutPage from './components/AboutPage/AboutPage';
import App from './App';

it('should have about', () => {
  // eslint-disable-next-line react/jsx-no-undef
  render(<AboutPage />);
  const message = screen.queryByText(/about us!/i);
  expect(message).toBeVisible();
});
it('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
it('landing on HomePage', () => {
  const homePage = '/';

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[homePage]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/HeyBro/i)).toBeInTheDocument();
});
