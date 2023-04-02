import React, { useEffect, useState } from 'react';
import './ImageCardContainer.scss';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';
import ImageCard from '../ImageCard/ImageCard';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const api = createApi({
  accessKey: 'xmx-M-AJ0UbvjxTASHIBeoh8WtViYJw0YiMzsTBbJwE',
});

function ImageCardContainer(props: { currentQuery: string }) {
  const [data, setData] = useState<ApiResponse<Photos> | null>(null);
  const [customErr, setCustomErr] = useState('');

  useEffect(() => {
    setData(null);
    api.search
      .getPhotos({
        query: props.currentQuery,
        orientation: 'portrait',
        perPage: 6,
        page: 1,
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setCustomErr(err.message);
      });
  }, [props.currentQuery]);

  if (data === null) {
    if (customErr) {
      return (
        <div className="image_card-error_message">
          <div>
            The limit of 50 requests/hour has been reached. Please come back when the next hour
            begins.
          </div>
        </div>
      );
    }
    return <LoadingScreen />;
  }

  if (data.errors) {
    return (
      <div className="image_card-error_message">
        <div>{data.errors?.[0]}</div>
      </div>
    );
  }

  if (!data.response?.results.length) {
    return <h1>Not found 😞</h1>;
  }

  return (
    <div className="image-cards-container">
      {data.response.results.map((photo) => (
        <ImageCard {...photo} key={photo.id}></ImageCard>
      ))}
    </div>
  );
}

export default ImageCardContainer;
