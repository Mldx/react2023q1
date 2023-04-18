import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SearchBar from './SearchBar';

const mockStore = configureMockStore([]);

describe('SearchBar component', () => {
  let store: ReturnType<typeof mockStore>;
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    store = mockStore({
      searchBar: {
        searchQuery: '',
      },
    });

    component = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  it('should render the component', () => {
    const { getByTestId } = component;
    const searchBarInput = getByTestId('search_bar-input');
    expect(searchBarInput).toBeInTheDocument();
  });

  it('should update the input value when the user types', () => {
    const { getByTestId } = component;
    const searchBarInput = getByTestId('search_bar-input') as HTMLInputElement;
    fireEvent.change(searchBarInput, { target: { value: 'New search query' } });
    expect(searchBarInput.value).toBe('New search query');
  });

  it('should dispatch a search query when the user hits the enter key', () => {
    const { getByTestId } = component;
    const searchBarInput = getByTestId('search_bar-input');
    fireEvent.change(searchBarInput, { target: { value: 'New search query' } });
    fireEvent.keyUp(searchBarInput, { key: 'Enter', code: 'Enter' });
    const actions = store.getActions();
    expect(actions[0].type).toBe('searchBar/setValue');
    expect(actions[0].payload.queryText).toBe('New search query');
  });
});
