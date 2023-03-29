import React, { useState } from 'react';
import './AddButton.scss';

function AddButton() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <button
      className={`cart__add-button ${isAdded ? 'added' : ''}`}
      onClick={() => setIsAdded(!isAdded)}
    >
      {isAdded ? 'Added' : 'Add to cart'}
    </button>
  );
}

export default AddButton;
