import React, { useState } from 'react';
import './ImageCard.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import LikeIcon from '../../LikeIcon/LikeIcon';
import ImageCardPopup from './ImageCardPopup/ImageCardPopup';

function ImageCard(photo: Basic) {
  const [popupIsActive, setPopupIsActive] = useState(false);
  const {
    urls,
    user: { name, instagram_username, twitter_username },
  } = photo;

  const togglePopup = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLAnchorElement)) {
      setPopupIsActive(!popupIsActive);
    }
  };

  return (
    <>
      <div className="image-card_container" onClick={togglePopup} data-testid="image-card">
        <div className="image-card_box">
          <img src={urls.small} alt="photo" draggable="false" />
        </div>
        <div className="image-card_info">
          <span className="image-card_info-photographer">Photographer: {name}</span>

          {instagram_username && instagram_username.length < 20 && (
            <span>
              Instagram:
              <a
                href={`https://www.instagram.com/${instagram_username}`}
                target="_blank"
                rel="noreferrer"
              >
                &#32;@{instagram_username}
              </a>
            </span>
          )}
          {twitter_username && twitter_username.length < 20 && (
            <span>
              Twitter:
              <a
                href={`https://www.twitter.com/${twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                &#32;@{twitter_username}
              </a>
            </span>
          )}
          <span className="image-card_like">
            {photo.likes} <LikeIcon />
          </span>
        </div>
      </div>
      {popupIsActive && <ImageCardPopup func={togglePopup} photoId={photo.id} />}
    </>
  );
}

export default ImageCard;
