import React from 'react';
import './ProductCardContainer.scss';
import ProductCard from '../ProductCard/ProductCard';
import { IMobileInfoList } from '../../types/types';

class ProductCardContainer extends React.Component<IMobileInfoList> {
  constructor(props: IMobileInfoList) {
    super(props);
  }

  render() {
    return (
      <div className="product-card-container">
        {this.props.dataList.map((mobile) => (
          <ProductCard data={mobile} key={mobile.id} />
        ))}
      </div>
    );
  }
}

export default ProductCardContainer;
