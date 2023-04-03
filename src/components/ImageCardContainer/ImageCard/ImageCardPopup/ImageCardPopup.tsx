import React from 'react';
import './ImageCardPopup.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import LikeIcon from '../../../LikeIcon/LikeIcon';

interface IImageCardPopupProps {
  func: (e: React.MouseEvent<HTMLElement>) => void;
  photo: Basic;
}

function ImageCardPopup(props: IImageCardPopupProps) {
  const {
    photo: { urls, user, likes, width, height },
  } = props;
  return (
    <div className="image-card_popup-container" data-testid="image-card_popup-container">
      <div className="image-card_popup-box">
        <div className="popup-container_image-box">
          <img src={urls.regular} alt="photo" draggable="false" />
        </div>

        <div className="popup-container_info-box">
          <div className="info-box_photographer">
            <a href={user.links.html} target="_blank" rel="noreferrer">
              <img
                src={user.profile_image.large}
                alt="photographer-avatar"
                className="info-box_photographer-avatar"
                draggable="false"
              />
            </a>
            <div className="info-box_photographer-text">
              <span className="info-box_photographer-title">{user.name}</span>

              {user.instagram_username && user.instagram_username.length < 20 && (
                <span className="info-box_photographer-instagram">
                  Instagram:
                  <a
                    href={`https://www.instagram.com/${user.instagram_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#32;@{user.instagram_username}
                  </a>
                </span>
              )}

              {user.twitter_username && user.twitter_username.length < 20 && (
                <span className="info-box_photographer-twitter">
                  Twitter:
                  <a
                    href={`https://www.twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#32;@{user.twitter_username}
                  </a>
                </span>
              )}

              {user.location && user.location.length < 20 && <span>{user.location}</span>}
            </div>
          </div>
          <div className="info-box_image">
            <span className="info-box_like-box">
              {likes} <LikeIcon />
            </span>
            <span>
              Original image size: {width} x {height}&#32;px
            </span>
          </div>
        </div>
        <button className="popup-box_close-button" onClick={(e) => props.func(e)}></button>
      </div>
      <div className="image-card_popup-modal" onClick={(e) => props.func(e)}></div>
    </div>
  );
}

export default ImageCardPopup;
