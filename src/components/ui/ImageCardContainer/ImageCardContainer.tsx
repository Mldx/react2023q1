import React, { useEffect } from 'react';
import './ImageCardContainer.scss';
import ImageCard from './ImageCard/ImageCard';
import { useAppContext } from '../../../store/store';
import { getPhotos } from '../../../api/api';
import limitErrorMessage from '../../../utils/limitErrorMessage';

function ImageCardContainer() {
  const { appState, setAppState } = useAppContext();
  useEffect(() => {
    if (appState.search) {
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
          const correctMessage = limitErrorMessage(err.message);
          setAppState((prevState) => ({
            ...prevState,
            errorMessage: correctMessage,
            status: 'reject',
          }));
        });
    }
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

  if (!localStorage.getItem('searchBarValue')) {
    return (
      <>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}> Lets go find best images 👀</h1>
        <div style={{ margin: '0' }} className="image_card-error_message">
          You and others reviewers have ONLY 50 query / hour
        </div>
      </>
    );
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
