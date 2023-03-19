import React from 'react';
import './AddButton.scss';

class AddButton extends React.Component<object, { isAdded: boolean; text: string }> {
  constructor(props: { isChanged: boolean; text: string }) {
    super(props);
    this.state = { isAdded: false, text: 'Add to cart' };
  }

  handlerClick = () => {
    const isAdded = this.state.isAdded;
    const text = this.state.text === 'Add to cart' ? 'Added' : 'Add to cart';

    this.setState({ isAdded: !isAdded, text: text });
    console.log(isAdded);
  };

  addActiveClass = (isAdded: boolean) => {
    return isAdded ? 'added' : '';
  };

  render() {
    return (
      <button
        className={`cart__add-button ${this.addActiveClass(this.state.isAdded)}`}
        onClick={this.handlerClick}
      >
        {this.state.text}
      </button>
    );
  }
}

export default AddButton;
