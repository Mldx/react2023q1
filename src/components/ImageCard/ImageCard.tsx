import React from 'react';
import './ImageCard.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import LikeIcon from '../LikeIcon/LikeIcon';

function ImageCard(photo: Basic) {
  const {
    urls,
    user: { name, instagram_username, twitter_username },
  } = photo;

  return (
    <div className="image-card_container">
      <div className="image-card_box">
        <img src={urls.regular} alt="photo" />
      </div>
      <div className="image-card_info">
        <span className="image-card_info-photographer">Photographer: {name}</span>

        {instagram_username && (
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
        {twitter_username && (
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
  );
}

export default ImageCard;
