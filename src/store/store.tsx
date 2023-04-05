import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

interface AppState {
  cards: Basic[];
  errorMessage: string;
  status: 'initial' | 'reject' | 'fulfilled' | 'pending';
  search: string;
}

const initialAppState: AppState = {
  cards: [],
  errorMessage: '',
  status: 'initial',
  search: localStorage.getItem('searchBarValue') || '',
};

interface AppContextProps {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}

const AppContext = createContext<AppContextProps>({
  appState: initialAppState,
  setAppState: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppProvider = (props: { children: ReactNode }) => {
  const [appState, setAppState] = useState<AppState>(initialAppState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
