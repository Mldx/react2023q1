import React from 'react';
import './ProductCard.scss';
import AddButton from './AddButton/AddButton';
import { IMobileInfo } from '../../types/types';
import PropertyProduct, { IPropertyProductProps } from './PropertyProduct/PropertyProduct';

interface IProductCardProps {
  data: IMobileInfo;
}

function ProductCard(props: IProductCardProps) {
  const { image, model, color, ram, screen, cameras, price } = props.data;
  const propertyFields: IPropertyProductProps[] = [
    { fieldName: 'Model', value: model },
    { fieldName: 'Color', value: color },
    { fieldName: 'Ram', value: ram, specSymbol: 'gb' },
    { fieldName: 'Screen', value: screen, specSymbol: 'inch' },
    { fieldName: 'Cameras', value: cameras },
    { fieldName: 'Price', value: price, specSymbol: '$' },
  ];
  return (
    <div className="product-card">
      <div className="product-card__image-box">
        <img src={image} alt="mobile image" />
      </div>
      <div className="product-card__properties">
        {propertyFields.map((field) => (
          <PropertyProduct {...field} key={field.fieldName} />
        ))}
        <AddButton />
      </div>
    </div>
  );
}

export default ProductCard;
