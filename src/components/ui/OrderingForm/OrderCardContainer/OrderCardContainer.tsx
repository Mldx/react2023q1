import React from 'react';
import './OrderCardContainer.scss';
import { IOrderingFormData } from '../../../../types/types';
import OrderCard from '../OrderCard/OrderCard';

interface IOrderCardContainerProps {
  dataList: IOrderingFormData[];
}

function OrderCardContainer(props: IOrderCardContainerProps) {
  const { dataList } = props;

  return dataList.length ? (
    <div className="order-cards-container">
      {dataList.map((data, index) => (
        <OrderCard data={data} key={index} />
      ))}
    </div>
  ) : (
    <></>
  );
}

export default OrderCardContainer;
