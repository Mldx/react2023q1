import { rest } from 'msw';
import { catQueryMock } from './catQueryMock';

const apiUrl = 'https://api.unsplash.com';

export const handlers = [
  rest.get(`${apiUrl}/search/photos`, (req, res, ctx) => {
    return res(ctx.json(catQueryMock));
  }),
];
