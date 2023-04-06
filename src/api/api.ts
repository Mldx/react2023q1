import { createApi } from 'unsplash-js';

export const ACCESS_KEY = 'xmx-M-AJ0UbvjxTASHIBeoh8WtViYJw0YiMzsTBbJwE';

const api = createApi({
  accessKey: ACCESS_KEY,
});

export const getPhotos = async (query: string) => {
  return await api.search.getPhotos({
    query: query,
    orientation: 'portrait',
    perPage: 9,
    page: 1,
  });
};

export const getPhoto = async (id: string) => {
  return await api.photos.get({ photoId: id });
};
