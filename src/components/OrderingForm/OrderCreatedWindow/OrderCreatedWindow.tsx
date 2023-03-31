import React from 'react';
import './OrderCreatedWindow.scss';

interface IOrderCreatedWindowProps {
  onAnimationEnd: React.AnimationEventHandler<HTMLDivElement>;
}

function OrderCreatedWindow(props: IOrderCreatedWindowProps) {
  return (
    <div className={`order-created-window`} onAnimationEnd={props.onAnimationEnd}>
      Order created!
    </div>
  );
}

export default OrderCreatedWindow;
