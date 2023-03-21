import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import Card from './components/Card/Card';
import { describe } from 'vitest';
import mobileData from './store/mobileData';
import CardContainer from './components/CardContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';
import userEvent from '@testing-library/user-event';

describe('Card component testing', () => {
  const [mobileInfo1, mobileInfo2, mobileInfo3] = mobileData;

  it(`testing card component with ${mobileInfo1.model}`, () => {
    render(<Card data={mobileInfo1} />);
    expect(screen.getByText(mobileInfo1.model)).toBeVisible();
  });

  it(`testing card component with ${mobileInfo2.model}`, () => {
    render(<Card data={mobileInfo2} />);
    expect(screen.getByText(mobileInfo2.model)).toBeVisible();
  });

  it(`testing card component with ${mobileInfo3.model}`, () => {
    render(<Card data={mobileInfo3} />);
    expect(screen.getByText(mobileInfo3.model)).toBeVisible();
  });
});
describe('CardContainer component testing', () => {
  it(`quantity Card in CardContainer equal quantity mobileData objects`, () => {
    render(<CardContainer dataList={mobileData} />);
    expect(screen.getAllByText('Add to cart').length).toEqual(mobileData.length);
  });
});

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
  it('Landing on HomePage', () => {
    const homePage = '/';

    render(
      <MemoryRouter initialEntries={[homePage]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Iphone 14 pro max/i)).toBeVisible();
  });
});
