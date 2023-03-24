import React from 'react';
import './CardContainer.scss';
import ProductCard from '../ProductCard/ProductCard';
import { IMobileInfoList } from '../../types/types';

class CardContainer extends React.Component<IMobileInfoList> {
  constructor(props: IMobileInfoList) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        {this.props.dataList.map((mobile) => (
          <ProductCard data={mobile} key={mobile.id} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
