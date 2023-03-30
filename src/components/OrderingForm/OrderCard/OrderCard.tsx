import React from 'react';
import './OrderCard.scss';
import { IOrderingFormData } from '../../../types/types';

interface IOrderCardProps {
  data: IOrderingFormData;
}

function OrderCard(props: IOrderCardProps) {
  const { data } = props;

  return (
    <div className="order-cards-container">
      <div className="order-card">
        {data.avatar ? <img src={URL.createObjectURL(data.avatar)} alt="avatar" /> : <></>}
        <div className="order-card-info">
          <div className="info-block block-user-info">
            <span className="info-block__title">User info:</span>
            <div>
              <span className="info-block__field-name">Full name: </span>
              {`${data.name} ${data.surname}`}
            </div>
            <div>
              <span className="info-block__field-name">Gender: </span>
              {data.gender}
            </div>
          </div>
          <div className="info-block block-delivery-info">
            <span className="info-block__title">Delivery info:</span>
            <div>
              <span className="info-block__field-name">City: </span>
              {data.cityDelivery}
            </div>
            <div>
              <span className="info-block__field-name">Date: </span>
              {data.dateDelivery}
            </div>
          </div>
          <div className="info-block block-others">
            <span className="info-block__title">Others:</span>
            <div>
              <span className="info-block__field-name">Personal data: </span>
              {data.personalData ? 'agreed to use' : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
