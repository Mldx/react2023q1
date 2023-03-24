import React from 'react';
import './ProductCard.scss';
import AddButton from './AddButton/AddButton';
import { IMobileInfo } from '../../types/types';

class ProductCard extends React.Component<{ data: IMobileInfo }> {
  constructor(props: { data: IMobileInfo }) {
    super(props);
  }

  render() {
    return (
      <div className="product-card">
        <div className="product-card__image-box">
          <img src={this.props.data.image} alt="mobile image" />
        </div>
        <div className="product-card__properties">
          <div>
            <span className="properties-name">Model:</span>
            <span className="properties-value">{this.props.data.model}</span>
          </div>
          <div>
            <span className="properties-name">Color:</span>
            <span className="properties-value">{this.props.data.color}</span>
          </div>
          <div>
            <span className="properties-name">Ram:</span>
            <span className="properties-value">{this.props.data.ram} gb</span>
          </div>
          <div>
            <span className="properties-name">Screen:</span>
            <span className="properties-value">{this.props.data.screen} inch</span>
          </div>
          <div>
            <span className="properties-name">Cameras:</span>
            <span className="properties-value">{this.props.data.cameras}</span>
          </div>
          <div>
            <span className="properties-name">Price:</span>
            <span className="properties-value">{this.props.data.price} $</span>
          </div>
          <AddButton />
        </div>
      </div>
    );
  }
}

export default ProductCard;
