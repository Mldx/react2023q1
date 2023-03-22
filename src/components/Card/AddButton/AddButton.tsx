import React from 'react';
import './AddButton.scss';
import { IAddButtonState } from '../../../types/types';

class AddButton extends React.Component<object, IAddButtonState> {
  constructor(props: object) {
    super(props);
    this.state = { isAdded: false, text: 'Add to cart' };
  }

  handlerClick = () => {
    const isAdded = this.state.isAdded;
    const text = this.state.text === 'Add to cart' ? 'Added' : 'Add to cart';

    this.setState({ isAdded: !isAdded, text: text });
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
