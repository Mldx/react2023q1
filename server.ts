import fs from 'node:fs/promises';
import express from 'express';
import { ViteDevServer } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

const app = express();

// Add Vite or respective production middlewares
let vite: ViteDevServer;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

app.use('*', async (req, res) => {
  const url = req.originalUrl;

  let template;
  template = await fs.readFile('./index.html', 'utf-8');
  template = await vite.transformIndexHtml(url, template);
  const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

  const [startHTML, endHTML] = template.split('<!--app-->');

  res.write(startHTML);
  const stream = render(url, {
    onShellReady() {
      stream.pipe(res);
    },
    onAllReady() {
      res.write(endHTML);
      res.end();
    },
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
