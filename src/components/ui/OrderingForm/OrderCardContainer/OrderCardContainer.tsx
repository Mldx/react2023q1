import React from 'react';
import './OrderCardContainer.scss';
import OrderCard from '../OrderCard/OrderCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

function OrderCardContainer() {
  const dataList = useSelector((state: RootState) => state.orderCards.dataList);

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
