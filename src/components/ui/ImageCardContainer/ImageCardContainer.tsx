import React, { useEffect } from 'react';
import './ImageCardContainer.scss';
import ImageCard from './ImageCard/ImageCard';
import { Status } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/storeRedux';
import { getPhotos } from '../../../store/imageCardsSlice';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function ImageCardContainer() {
  const searchQuery = useSelector((state: RootState) => state.searchBar.searchQuery);
  const { status, cards, error } = useSelector((state: RootState) => state.imageCards);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (searchQuery) {
      dispatch(getPhotos(searchQuery));
    }
  }, [dispatch, searchQuery]);

  if (status === Status.INITIAL) {
    return (
      <>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}> Lets go find best images 👀</h1>
        <div style={{ margin: '0', background: '#818130' }} className="image_card-error_message">
          You and others reviewers have ONLY 50 query / hour
        </div>
      </>
    );
  }

  if (status === Status.PENDING) {
    return <LoadingScreen />;
  }

  if (status === Status.REJECT) {
    return (
      <div className="image_card-error_message">
        <div>{error?.message}</div>
      </div>
    );
  }

  if (status === Status.FULFILLED && !cards?.length) {
    return <h1>Not found 😞</h1>;
  }

  return (
    cards && (
      <div className="image-cards-container">
        {cards.map((photo) => (
          <ImageCard {...photo} key={photo.id}></ImageCard>
        ))}
      </div>
    )
  );
}

export default ImageCardContainer;
