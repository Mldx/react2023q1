import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
const store = setupStore();

export function render(url: string, options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
}
