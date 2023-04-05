import React from 'react';
import './HomePage.scss';
import ImageCardContainer from '../../ui/ImageCardContainer/ImageCardContainer';
import SearchBar from '../../ui/SearchBar/SearchBar';
import { useAppContext } from '../../../store/store';
import LoadingScreen from '../../ui/LoadingScreen/LoadingScreen';

function HomePage() {
  const { appState } = useAppContext();
  return (
    <div className="home-wrapper">
      <SearchBar></SearchBar>
      <ImageCardContainer />
      {appState.status === 'pending' && <LoadingScreen />}
    </div>
  );
}

export default HomePage;
