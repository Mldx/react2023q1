import React from 'react';
import './ProductCardContainer.scss';
import ProductCard from '../ProductCard/ProductCard';
import { IMobileInfo } from '../../types/types';

export interface IMobileInfoList {
  dataList: IMobileInfo[];
}

function ProductCardContainer(props: IMobileInfoList) {
  const { dataList } = props;
  return (
    <div className="product-card-container">
      {dataList.map((mobile) => (
        <ProductCard data={mobile} key={mobile.id} />
      ))}
    </div>
  );
}

export default ProductCardContainer;
