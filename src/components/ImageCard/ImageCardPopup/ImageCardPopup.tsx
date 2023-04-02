import React from 'react';
import './ImageCardPopup.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

interface IImageCardPopupProps {
  func: (e: React.MouseEvent<HTMLElement>) => void;
  photo: Basic;
}

function ImageCardPopup(props: IImageCardPopupProps) {
  return (
    <div className="image-card_popup-container">
      <div className="image-card_popup-box">
        <div className="popup-container_image-box">
          <img src={props.photo.urls.regular} alt="photo" draggable="false" />
        </div>
        <div className="popup-container_info-box"></div>
        <button className="popup-box_close-button" onClick={(e) => props.func(e)}></button>
      </div>
      <div className="image-card_popup-modal" onClick={(e) => props.func(e)}></div>
    </div>
  );
}

export default ImageCardPopup;
