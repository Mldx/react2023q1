import React from 'react';
import './Card.scss';

class Card extends React.Component<{
  data: {
    id: string;
    model: string;
    color: string;
    ram: string;
    screen: string;
    cameras: string;
    price: string;
    image: string;
  };
}> {
  constructor(props: {
    data: {
      id: string;
      model: string;
      color: string;
      ram: string;
      screen: string;
      cameras: string;
      price: string;
      image: string;
    };
  }) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card__image-box">
          <img src={this.props.data.image} alt="mobile image" />
        </div>
        <div className="card__properties">
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
        </div>
      </div>
    );
  }
}

export default Card;
