import React from 'react';
import './ProductCard.scss';
import AddButton from './AddButton/AddButton';
import { IMobileInfo } from '../../types/types';

interface IProductCardProps {
  data: IMobileInfo;
}

function ProductCard(props: IProductCardProps) {
  const { image, model, color, ram, screen, cameras, price } = props.data;
  return (
    <div className="product-card">
      <div className="product-card__image-box">
        <img src={image} alt="mobile image" />
      </div>
      <div className="product-card__properties">
        <div>
          <span className="properties-name">Model:</span>
          <span className="properties-value">{model}</span>
        </div>
        <div>
          <span className="properties-name">Color:</span>
          <span className="properties-value">{color}</span>
        </div>
        <div>
          <span className="properties-name">Ram:</span>
          <span className="properties-value">{ram} gb</span>
        </div>
        <div>
          <span className="properties-name">Screen:</span>
          <span className="properties-value">{screen} inch</span>
        </div>
        <div>
          <span className="properties-name">Cameras:</span>
          <span className="properties-value">{cameras}</span>
        </div>
        <div>
          <span className="properties-name">Price:</span>
          <span className="properties-value">{price} $</span>
        </div>
        <AddButton />
      </div>
    </div>
  );
}
export default ProductCard;
