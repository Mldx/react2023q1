import React, { useEffect } from 'react';
import './ImageCardContainer.scss';
import ImageCard from './ImageCard/ImageCard';
import { useAppContext } from '../../../store/store';
import { getPhotos } from '../../../api/api';

function ImageCardContainer() {
  const { appState, setAppState } = useAppContext();
  useEffect(() => {
    setAppState((prevState) => ({
      ...prevState,
      status: 'pending',
    }));
    getPhotos(appState.search)
      .then((result) => {
        if (result.errors) {
          throw new Error(result.errors[0]);
        }
        setAppState((prevState) => ({
          ...prevState,
          cards: result.response?.results,
          status: 'fulfilled',
        }));
      })
      .catch((err) => {
        setAppState((prevState) => ({
          ...prevState,
          errorMessage: err.message,
          status: 'reject',
        }));
      });
  }, [appState.search, setAppState]);

  if (appState.status === 'reject') {
    return (
      <div className="image_card-error_message">
        <div>{appState.errorMessage}</div>
      </div>
    );
  }

  if (appState.status === 'fulfilled' && !appState.cards.length) {
    return <h1>Not found 😞</h1>;
  }

  return (
    <div className="image-cards-container">
      {appState.cards.map((photo) => (
        <ImageCard {...photo} key={photo.id}></ImageCard>
      ))}
    </div>
  );
}

export default ImageCardContainer;
