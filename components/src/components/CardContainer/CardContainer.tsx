import React from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';

class CardContainer extends React.Component<{
  dataList: {
    id: string;
    model: string;
    color: string;
    ram: string;
    screen: string;
    cameras: string;
    price: string;
    image: string;
  }[];
}> {
  constructor(props: {
    dataList: {
      id: string;
      model: string;
      color: string;
      ram: string;
      screen: string;
      cameras: string;
      price: string;
      image: string;
    }[];
  }) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        {this.props.dataList.map((mobile) => (
          <Card data={mobile} key={mobile.id} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
