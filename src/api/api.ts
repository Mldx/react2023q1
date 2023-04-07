import { createApi } from 'unsplash-js';

const ACCESS_KEY = 'xmx-M-AJ0UbvjxTASHIBeoh8WtViYJw0YiMzsTBbJwE';

export const api = createApi({
  accessKey: ACCESS_KEY,
});

export const getPhoto = async (id: string) => {
  return await api.photos.get({ photoId: id });
};
