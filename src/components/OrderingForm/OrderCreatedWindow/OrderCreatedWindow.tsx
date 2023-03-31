import React, { useState } from 'react';
import './OrderCreatedWindow.scss';

function OrderCreatedWindow() {
  const [isActive, setIsActive] = useState(true);

  return isActive ? (
    <div className={`order-created-window`} onAnimationEnd={() => setIsActive(false)}>
      Order created!
    </div>
  ) : (
    <></>
  );
}

export default OrderCreatedWindow;
