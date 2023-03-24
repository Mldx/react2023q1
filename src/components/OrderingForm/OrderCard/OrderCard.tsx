import React from 'react';
import './OrderCard.scss';
import { IOrderingFormData } from '../../../types/types';

class OrderCard extends React.Component<{ data: IOrderingFormData }> {
  constructor(props: { data: IOrderingFormData }) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="order-cards-container">
        <div className="order-card">
          {data.avatar ? <img src={URL.createObjectURL(data.avatar)} alt="avatar" /> : <></>}
          <p>{data.name + ' - ' + data.surname}</p>
        </div>
      </div>
    );
  }
}

export default OrderCard;
