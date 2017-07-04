/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chalk = __webpack_require__(0);

var _chalk2 = _interopRequireDefault(_chalk);

var _env = __webpack_require__(10);

var _console = __webpack_require__(9);

var _server = __webpack_require__(7);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Host and port -- from the environment


// Import console messages
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* NPM */

// Chalk terminal library
const HOST = (0, _env.getHost)();

// Extend the server base


/* Local */

// Local environment

const PORT = (0, _env.getPort)();

// Get manifest values
const css = '/assets/css/style.css';
const scripts = ['vendor.js', 'browser.js'].map(key => `/${key}`);

// Spawn the server
_server2.default.then(({ router, app }) => {
  // Create proxy to tunnel requests to the browser `webpack-dev-server`
  router.get('/*', (0, _server.createReactHandler)(css, scripts));

  // Connect the development routes to the server
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  app.listen({ host: HOST, port: PORT }, () => {
    (0, _console.logServerStarted)({
      type: 'server-side rendering',
      host: HOST,
      port: PORT,
      chalk: _chalk2.default.bgYellow.black
    });
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(23);

// ----------------------

// Parent folder = project root
const root = path.join(__dirname, '..');

module.exports = {
  // Root project folder.  This is the current dir.
  root,

  // Kit.  ReactQL starter kit code.  You can edit these files, but be
  // aware that upgrading your starter kit could overwrite them
  kit: path.join(root, 'kit'),

  // Entry points.  This is where webpack will look for our browser.js,
  // server.js and vendor.js files to start building
  entry: path.join(root, 'kit', 'entry'),

  // Webpack configuration files
  webpack: path.join(root, 'kit', 'webpack'),

  // Views for internal use
  views: path.join(root, 'kit', 'views'),

  // Source path; where we'll put our application files
  src: path.join(root, 'src'),

  // Static files.  HTML, images, etc that can be processed by Webpack
  // before being moved into the final `dist` folder
  static: path.join(root, 'static'),

  // Dist path; where bundled assets will wind up
  dist: path.join(root, 'dist'),

  // Dist path for development; where dev assets will wind up
  distDev: path.resolve(root, 'dist', 'dev'),

  // Public.  This is where our web server will start looking to serve
  // static files from
  public: path.join(root, 'dist', 'public')
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */

const APOLLO = exports.APOLLO = {
  uri: 'https://api.graph.cool/simple/v1/cinomw2r1018601o42x5z69uc'
};

const BUNDLE_ANALYZER = exports.BUNDLE_ANALYZER = {
  openAnalyzer: false
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

__webpack_require__(17);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(25);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(18);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(2);

var _koaSend = __webpack_require__(21);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(19);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(20);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(22);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(27);

var _reactHelmet = __webpack_require__(26);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apollo = __webpack_require__(8);

var _redux = __webpack_require__(11);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(12);

var _ssr2 = _interopRequireDefault(_ssr);

var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

var _paths = __webpack_require__(5);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Static file middleware


// App entry point


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// HTTP header hardening


// Apollo tools to connect to a GraphQL server.  We'll grab the
// `ApolloProvider` HOC component, which will inject any 'listening' React
// components with GraphQL data props.  We'll also use `getDataFromTree`
// to await data being ready before rendering back HTML to the client


// React utility to transform JSX to HTML (to send back to the client)
/* eslint-disable no-param-reassign, no-console */

// Server entry point, for Webpack.  This will spawn a Koa web server
// and listen for HTTP requests.  Clients will get a return render of React
// or the file they have requested
//
// Note:  No HTTP optimisation is performed here (gzip, http/2, etc).  Node.js
// will nearly always be slower than Nginx or an equivalent, dedicated proxy,
// so it's usually better to leave that stuff to a faster upstream provider

// ----------------------
// IMPORTS

/* NPM */

// Patch global.`fetch` so that Apollo calls to GraphQL work
function staticMiddleware() {
  return async function staticMiddlewareHandler(ctx, next) {
    try {
      if (ctx.path !== '/') {
        return await (0, _koaSend2.default)(ctx, ctx.path,  false ? {
          root: _paths2.default.public,
          immutable: true
        } : {
          root: _paths2.default.distDev
        });
      }
    } catch (e) {/* Errors will fall through */}
    return next();
  };
}

// Function to create a React handler, per the environment's correct
// manifest files


// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files


// Initial view to send back HTML render


/* Local */

// Grab the shared Apollo Client


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


// Static file handler


// Koa 2 web server.  Handles incoming HTTP requests, and will serve back
// the React render, or any of the static assets being compiled


// React UI
function createReactHandler(css = [], scripts = [], chunkManifest = {}) {
  return async function reactHandler(ctx) {
    const routeContext = {};

    // Create a new server Apollo client for this request
    const client = (0, _apollo.serverClient)();

    // Create a new Redux store for this request
    const store = (0, _redux2.default)(client);

    // Generate the HTML from our React tree.  We're wrapping the result
    // in `react-router`'s <StaticRouter> which will pull out URL info and
    // store it in our empty `route` object
    const components = _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: ctx.request.url, context: routeContext },
      _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: store, client: client },
        _react2.default.createElement(_app2.default, null)
      )
    );

    // Wait for GraphQL data to be available in our initial render,
    // before dumping HTML back to the client
    await (0, _reactApollo.getDataFromTree)(components);

    // Full React HTML render
    const html = _server2.default.renderToString(components);

    // Handle redirects
    if ([301, 302].includes(routeContext.status)) {
      // 301 = permanent redirect, 302 = temporary
      ctx.status = routeContext.status;

      // Issue the new `Location:` header
      ctx.redirect(routeContext.url);

      // Return early -- no need to set a response body
      return;
    }

    // Handle 404 Not Found
    if (routeContext.status === 404) {
      // By default, just set the status code to 404.  You can add your
      // own custom logic here, if you want to redirect to a permanent
      // 404 route or set a different response on `ctx.body`
      ctx.status = routeContext.status;
    }

    // Render the view with our injected React data.  We'll pass in the
    // Helmet component to generate the <head> tag, as well as our Redux
    // store state so that the browser can continue from the server
    ctx.body = `<!DOCTYPE html>\n${_server2.default.renderToStaticMarkup(_react2.default.createElement(_ssr2.default, {
      html: html,
      head: _reactHelmet2.default.rewind(),
      window: {
        webpackManifest: chunkManifest,
        __STATE__: store.getState()
      },
      css: css,
      scripts: scripts }))}`;
  };
}

// Run the server

exports.default = async function server() {
  return {
    router: new _koaRouter2.default().
    // Set-up a general purpose /ping route to check the server is alive
    get('/ping', async ctx => {
      ctx.body = 'pong';
    }

    // Favicon.ico.  By default, we'll serve this as a 204 No Content.
    // If /favicon.ico is available as a static file, it'll try that first
    ).get('/favicon.ico', async ctx => {
      ctx.res.statusCode = 204;
    }),
    app: new _koa2.default()

    // Preliminary security for HTTP headers
    .use((0, _koaHelmet2.default)()

    // Error wrapper.  If an error manages to slip through the middleware
    // chain, it will be caught and logged back here
    ).use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        // TODO we've used rudimentary console logging here.  In your own
        // app, I'd recommend you implement third-party logging so you can
        // capture errors properly
        console.log('Error', e.message);
        ctx.body = 'There was an error. Please try again later.';
      }
    }

    // It's useful to see how long a request takes to respond.  Add the
    // timing to a HTTP Response header
    ).use(async (ctx, next) => {
      const start = _microseconds2.default.now();
      await next();
      const end = _microseconds2.default.parse(_microseconds2.default.since(start));
      const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
      ctx.set('Response-Time', `${total / 1e3}ms`);
    })
  };
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserClient = browserClient;
exports.serverClient = serverClient;

var _reactApollo = __webpack_require__(2);

var _project = __webpack_require__(6);

// ----------------------

// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.
// ----------------------
// IMPORTS

// Apollo client library
const networkInterface = (0, _reactApollo.createNetworkInterface)({
  uri: _project.APOLLO.uri
});

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults


// Custom configuration/settings
function createClient(opt = {}) {
  return new _reactApollo.ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
    networkInterface
  }, opt));
}

// Creates a new browser client
function browserClient() {
  return createClient();
}

// Creates a new server-side client
function serverClient() {
  return createClient({
    ssrMode: true
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(15);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(0);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(16);

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Chalk library, to add colour to our console logs
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("development")} mode\n\n`);

  const localURL = `http://${opt.host}:${opt.port}`;
  message += `- ${_chalk2.default.bold('Local:           ')} ${localURL}`;

  try {
    const url = `http://${_ip2.default.address()}:${opt.port}`;
    message += `\n- ${_chalk2.default.bold('On Your Network: ')} ${url}`;
  } catch (err) {/* ignore errors */}

  console.log((0, _boxen2.default)(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
}

// IP library, for determining the local network interface
/* eslint-disable import/prefer-default-export, no-console */

// ----------------------
// IMPORTS

/* NPM */

// Display a border around a message

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHost = getHost;
exports.getServerHost = getServerHost;
exports.getBrowserHost = getBrowserHost;
exports.getPort = getPort;
exports.getBrowserPort = getBrowserPort;
exports.getServerPort = getServerPort;
exports.getURL = getURL;
// Environment-aware functions

// Default host that any server should bind to.  This is generally just
// 'localhost', for all server types
const defaultHost = 'localhost';

// Default ports.  Various modes (development, production) and various server
// types (browser, server, static) are catered for
const defaultPorts = {
  production: {
    server: 4000
  },
  development: {
    browser: 8080,
    server: 8081
  }
};

// Determines whether we're currently running in production
const isProduction = "development" === 'production';
const isServer = "boolean" !== 'undefined' && true;

// Returns the prefix of the variable on `process.env` that determines
// whether we're running in server or browser mode, and in production or dev
function getStub() {
  return `${isServer ? 'SERVER' : 'BROWSER'}_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get browser stub
function getBrowserStub() {
  return `BROWSER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get server stub
function getServerStub() {
  return `SERVER_${isProduction ? 'PROD' : 'DEV'}`;
}

// Get the hostname for the server, based on the current environment
function getHost() {
  return process.env[`${getStub()}_HOST`] || defaultHost;
}

// Get the server host -- based on the current environment
function getServerHost() {
  return process.env[`${getServerStub()}_HOST`] || defaultHost;
}

// Get the browser host -- based on the current environment
function getBrowserHost() {
  return process.env[`${getBrowserStub()}_HOST`] || defaultHost;
}

// Get the port, based on the current environment
function getPort() {
  const port = process.env[`${getStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  const port = process.env[`${getBrowserStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  const port = process.env[`${getServerStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["development"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL() {
  return `http://${getHost()}:${getPort()}`;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-underscore-dangle */

/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS

/* NPM */


/* Local */

// Reducers -- CHANGE THIS TO REFLECT YOUR OWN REDUCERS!


exports.default = createNewStore;

var _redux = __webpack_require__(28);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(3);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _counter = __webpack_require__(13);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
const hasState = !!(!true && window.__STATE__);

// All reducers, in one array -- CHANGE THIS TO REFLECT YOUR OWN REDUCERS!
const reducers = [_counter2.default];

// Helper function that 'unwinds' the { reducerKey {state, reducer} } format
// from each imported reducer, and either returns the `reducer` function (if
// true) or the `state`, as an Immutable collection or the default state
function unwind(reducer = true) {
  // Get the combined reducers `reducer` or `state` object
  const r = Object.assign({}, ...[].concat(...reducers.map(arr => Object.keys(arr).map(key => ({
    [key]: arr[key][reducer ? 'reducer' : 'state']
  })))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // We're looking for the state -- so let's map it
  return Object.assign({}, ...Object.keys(r).map(key => ({
    [key]: hasState && (0, _seamlessImmutable2.default)(window.__STATE__[key]) || r[key]
  })));
}

function createNewStore(apolloClient) {
  const store = (0, _redux.createStore)(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  (0, _redux.combineReducers)(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), (0, _redux.compose)((0, _redux.applyMiddleware)(apolloClient.middleware(), _reduxThunk2.default),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
   false ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

  return store;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(24);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

/* eslint-disable react/no-danger, no-return-assign, no-param-reassign */

// Component to render the full HTML response in React

// ----------------------
// IMPORTS
const Html = ({ head, html, scripts, window, css }) => _react2.default.createElement(
  'html',
  { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
  _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement('meta', { charSet: 'utf-8' }),
    _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    head.meta.toComponent(),
    _react2.default.createElement('link', { rel: 'stylesheet', href: css }),
    head.title.toComponent()
  ),
  _react2.default.createElement(
    'body',
    null,
    _react2.default.createElement('div', {
      id: 'main',
      dangerouslySetInnerHTML: { __html: html } }),
    _react2.default.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: Object.keys(window).reduce((out, key) => out += `window.${key}=${JSON.stringify(window[key])};`, '')
      } }),
    scripts.map(src => _react2.default.createElement('script', { key: src, src: src }))
  )
);

Html.propTypes = {
  head: _propTypes2.default.object.isRequired,
  html: _propTypes2.default.string.isRequired,
  window: _propTypes2.default.object.isRequired,
  scripts: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  css: _propTypes2.default.string.isRequired
};

exports.default = Html;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seamlessImmutable = __webpack_require__(3);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Set the initial `counter.count` to 0.
//
// Technically, we don't need to use `Immutable()` at all in this very simple
// example -- it could just be a plain integer, if we want.  But wrapping it in
// a call to `Immutable()` makes it impossible for us to accidentally change
// this outside of Redux, which is a good pattern to enforce
const initialState = (0, _seamlessImmutable2.default)({
  count: 0
}); // Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// ----------------------
// IMPORTS

/* NPM */
exports.default = {

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { stateKey: { state, reducer() } } -- the `stateKey` is where in the `state`
  // object starts looking, `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  counter: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'INCREMENT_COUNTER') {
        return state.merge({
          count: state.count + 1
        });
      }
      return state;
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Terminal/Documents/cevapicevapu/cevapicevapu/src/app.js: Unexpected token (171:1)\n\n\u001b[0m \u001b[90m 169 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mSwitch\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 170 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m exact path\u001b[33m=\u001b[39m\u001b[32m\"/\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mHome\u001b[39m} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 171 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mUpdated\u001b[39m upstream\n \u001b[90m     | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 172 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m\u001b[32m\"/page/jelovnik\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mJelovnik\u001b[39m} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 173 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m\u001b[32m\"/page/about\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mAbout\u001b[39m} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 174 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m\u001b[32m\"/page/contact\"\u001b[39m component\u001b[33m=\u001b[39m{\u001b[33mContact\u001b[39m} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=server_dev.js.map