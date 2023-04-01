import React, { useState } from 'react';
import './SearchPage.scss';
import ImageCardContainer from '../ImageCardContainer/ImageCardContainer';
import SearchBar from '../SearchBar/SearchBar';

function SearchPage() {
  const [query, setQuery] = useState('cat');

  return (
    <div className="search-wrapper">
      <SearchBar func={setQuery}></SearchBar>
      <ImageCardContainer currentQuery={query} />
    </div>
  );
}

export default SearchPage;
