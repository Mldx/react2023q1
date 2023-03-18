import React from 'react';
import './Card.scss';
import pathImage from '../../assets/12.webp';

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="image-container">
          <img src={pathImage} alt="mobile image" />
        </div>
        <div className="card-container__properties">
          <div>
            <span className="properties-name">Model:</span>
            <span className="properties-value">Iphone 14 pro max</span>
          </div>
          <div>
            <span className="properties-name">Color:</span>
            <span className="properties-value">white</span>
          </div>
          <div>
            <span className="properties-name">Ram:</span>
            <span className="properties-value">4 gb</span>
          </div>
          <div>
            <span className="properties-name">Screen:</span>
            <span className="properties-value">5.1 inch</span>
          </div>
          <div>
            <span className="properties-name">Cameras:</span>
            <span className="properties-value">3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
