/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library
import chalk from 'chalk';

/* Local */

// Local environment
import { getHost, getPort } from 'kit/lib/env';

// Import console messages
import { logServerStarted } from 'kit/lib/console';

// Extend the server base
import server, { createReactHandler, staticMiddleware } from './server';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
// ----------------------

// Host and port -- from the environment
const HOST = getHost();
const PORT = getPort();

// Get manifest values
const css = '/assets/css/style.css';
const scripts = [
  'vendor.js',
  'browser.js'].map(key => `/${key}`);

// Spawn the server
server.then(({ router, app }) => {
  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', createReactHandler(css, scripts));
  // Connect the development routes to the server
  app
    .use(cors())
    .use(bodyParser())
    .use(staticMiddleware())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(compress({
      threshold: 2048,
      flush: require('zlib').Z_SYNC_FLUSH
    }))
  app.listen({ host: HOST, port: PORT }, () => {
    logServerStarted({
      type: 'server-side rendering',
      host: HOST,
      port: PORT,
      chalk: chalk.bgYellow.black,
    });
  });
});
