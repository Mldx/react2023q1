import React from 'react';

interface IOrderCreatedWindowProps {
  onAnimationEnd: React.AnimationEventHandler<HTMLDivElement>;
}

function OrderCreatedWindow(props: IOrderCreatedWindowProps) {
  const { onAnimationEnd } = props;
  return (
    <div className={`order-created-window`} onAnimationEnd={onAnimationEnd}>
      Order created!
    </div>
  );
}

export default OrderCreatedWindow;
