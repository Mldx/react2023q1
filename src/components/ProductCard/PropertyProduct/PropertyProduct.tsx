import React from 'react';
import './PropertyProduct.scss';

export interface IPropertyProductProps {
  fieldName: string;
  value: string;
  specSymbol?: string;
}

function PropertyProduct(props: IPropertyProductProps) {
  const { fieldName, value, specSymbol } = props;
  return (
    <div className="property-field">
      <span className="property-name">{fieldName}:</span>
      <span className="property-value">{`${value}${specSymbol ? ` ${specSymbol}` : ''}`}</span>
    </div>
  );
}

export default PropertyProduct;
