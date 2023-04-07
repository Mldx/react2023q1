import React from 'react';
import './HomePage.scss';
import ImageCardContainer from '../../ui/ImageCardContainer/ImageCardContainer';
import SearchBar from '../../ui/SearchBar/SearchBar';

function HomePage() {
  return (
    <div className="home-wrapper">
      <SearchBar></SearchBar>
      <ImageCardContainer />
    </div>
  );
}

export default HomePage;
