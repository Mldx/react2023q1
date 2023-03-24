import React from 'react';
import './OrderCardContainer.scss';
import { IOrderingFormData } from '../../../types/types';
import OrderCard from '../OrderCard/OrderCard';

class OrderCardContainer extends React.Component<{ dataList: IOrderingFormData[] }> {
  constructor(props: { dataList: IOrderingFormData[] }) {
    super(props);
  }

  render() {
    return (
      <div className="order-cards-container">
        {this.props.dataList.map((data, index) => (
          <OrderCard data={data} key={index} />
        ))}
      </div>
    );
  }
}

export default OrderCardContainer;
