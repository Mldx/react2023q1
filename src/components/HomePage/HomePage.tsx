import React from 'react';
import './HomePage.scss';
import SearchBar from '../SearchBar/SearchBar';
import ProductCardContainer from '../ProductCardContainer/ProductCardContainer';
import mobileData from '../../store/mobileData';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <SearchBar></SearchBar>
        <ProductCardContainer dataList={mobileData}></ProductCardContainer>
      </div>
    );
  }
}

export default HomePage;
