import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import Fastify from 'fastify';
import etag from '@fastify/etag';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

export function app() {
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  const fastify = Fastify({ logger: true });
  fastify.register(etag);
  fastify.register(fastifyStatic, {
    root: browserDistFolder,
    maxAge: '1y',
    wildcard: false,
  });

  fastify.get('/*', (req, reply) => {
    const { protocol, originalUrl, url, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: url }],
      })
      .then((html) => reply.type('text/html').send(html))
      .catch((err) => reply.status(500).send(err));
  });

  return fastify;
}

async function run() {
  const server = app();

  try {
    const port = Number(process.env['PORT'] || 4000);

    await server.listen({
      port,
      listenTextResolver(address) {
        return `Fastify server is listening on ${address}`;
      },
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

run();
