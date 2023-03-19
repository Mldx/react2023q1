import React from 'react';
import './HomePage.scss';
import SearchBar from '../SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import mobileData from '../../store/mobileData';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <SearchBar></SearchBar>
        <CardContainer dataList={mobileData}></CardContainer>
      </div>
    );
  }
}

export default HomePage;
