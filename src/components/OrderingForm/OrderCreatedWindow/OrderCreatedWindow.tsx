import React from 'react';

class OrderCreatedWindow extends React.Component<{
  onAnimationEnd: React.AnimationEventHandler<HTMLDivElement> | undefined;
}> {
  render() {
    return (
      <div className={`order-created-window`} onAnimationEnd={this.props.onAnimationEnd}>
        Order created!
      </div>
    );
  }
}
export default OrderCreatedWindow;
