import React, { useState } from 'react';
import './HomePage.scss';
import ImageCardContainer from '../ImageCardContainer/ImageCardContainer';
import SearchBar from '../SearchBar/SearchBar';

function HomePage() {
  const [query, setQuery] = useState('cat');

  return (
    <div className="home-wrapper">
      <SearchBar func={setQuery}></SearchBar>
      <ImageCardContainer currentQuery={query} />
    </div>
  );
}

export default HomePage;
