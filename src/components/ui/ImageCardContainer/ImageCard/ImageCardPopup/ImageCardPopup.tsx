import React, { useEffect } from 'react';
import './ImageCardPopup.scss';
import LikeIcon from '../../../LikeIcon/LikeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/storeRedux';
import { getPhotoById } from '../../../../../store/imageCardSlice';
import { Status } from '../../../../../types/types';
import LoadingScreen from '../../../LoadingScreen/LoadingScreen';
import ErrorMessageBox from '../../../ErrorMessageBox/ErrorMessageBox';

interface IImageCardPopupProps {
  func: (e: React.MouseEvent<HTMLElement>) => void;
  photoId: string;
}

function ImageCardPopup(props: IImageCardPopupProps) {
  const { card, status, error } = useSelector((state: RootState) => state.imageCard);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPhotoById(props.photoId));
  }, [dispatch, props.photoId]);

  if (status === Status.PENDING) {
    return <LoadingScreen />;
  }

  if (status === Status.REJECT) {
    return (
      <div className="image-card_popup-container" data-testid="image-card_popup-container">
        <ErrorMessageBox>{error?.message}</ErrorMessageBox>
        <div className="image-card_popup-modal" onClick={(e) => props.func(e)}></div>
      </div>
    );
  }

  return (
    <div className="image-card_popup-container" data-testid="image-card_popup-container">
      <div className="image-card_popup-box">
        <div className="popup-container_image-box">
          <img src={card?.urls.regular} alt="photo" draggable="false" />
        </div>
        <div className="popup-container_info-box">
          <div className="info-box_photographer">
            <a href={card?.user.links.html} target="_blank" rel="noreferrer">
              <img
                src={card?.user.profile_image.large}
                alt="photographer-avatar"
                className="info-box_photographer-avatar"
                draggable="false"
              />
            </a>
            <div className="info-box_photographer-text">
              <span className="info-box_photographer-title">{card?.user.name}</span>

              {card?.user.instagram_username && card.user.instagram_username.length < 20 && (
                <span className="info-box_photographer-instagram">
                  Instagram:
                  <a
                    href={`https://www.instagram.com/${card.user.instagram_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#32;@{card.user.instagram_username}
                  </a>
                </span>
              )}

              {card?.user.twitter_username && card.user.twitter_username.length < 20 && (
                <span className="info-box_photographer-twitter">
                  Twitter:
                  <a
                    href={`https://www.twitter.com/${card.user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#32;@{card.user.twitter_username}
                  </a>
                </span>
              )}

              {card?.user.location && card.user.location.length < 20 && (
                <span>{card.user.location}</span>
              )}
            </div>
          </div>
          <div className="info-box_image">
            <span className="info-box_like-box">
              {card?.likes} <LikeIcon />
            </span>
            <span>
              Original image size: {card?.width} x {card?.height}&#32;px
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
