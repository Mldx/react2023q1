import React from 'react';
import './HomePage.scss';
import SearchBar from '../SearchBar/SearchBar';
import ProductCardContainer from '../ProductCardContainer/ProductCardContainer';
import mobileData from '../../store/mobileData';

function HomePage() {
  return (
    <div className="home-wrapper">
      <SearchBar></SearchBar>
      <ProductCardContainer dataList={mobileData}></ProductCardContainer>
    </div>
  );
}

export default HomePage;
