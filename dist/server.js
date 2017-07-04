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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"main": "main-vv2718wGHLD6lThS8mcwI",
	"mobileIcon": "mobileIcon-2icoMzpdrZbPYIfQjxivTq",
	"parallax": "parallax-3oYy3E6XoJCClgZR0R7xDr",
	"caption": "caption-21tp0xAudjV1bavcaINc0T",
	"border": "border-aQNY2OtxwHs6C26ekD14K",
	"heroHomepage": "heroHomepage-3cr8Nd5W9Je_pIy-MhMdqV",
	"featured": "featured-tBVkb2dk8NKSVh-MiZvpy",
	"featuredLeftImage": "featuredLeftImage-1Gox6liBJlELhedy2ZEoQ4",
	"featuredLeftText": "featuredLeftText-2ulA7B5hZq3aI0K1nomPKa",
	"buttonP": "buttonP-2o61Dqeeal8MbCZT8JYmre",
	"hello": "hello-1P9zCbIx8YQ5eID6A-67d6",
	"logo": "logo-1tNzgJsJwXMqFQ0a4xMkPk",
	"data": "data-1oklYPlS4mQJRj2Dp24Czw",
	"styleExamples": "styleExamples-2cmVxjYoxVhR_tpCfyIq_T",
	"example": "example-3quOHBYrr7YOUvefuRPyGa",
	"footer": "footer-3k9kabI8HJWNNVio6VNJUN",
	"itemWrap": "itemWrap-17n62GBEbcZ0YKeiE5pH_p",
	"footerItem": "footerItem-3WuDvZVUsFhM8FTQboIhu",
	"botFooter": "botFooter-GqWr1UPbpIsarc8kMzKLs",
	"showing": "showing-3xt5gLGL3jWtxcqt2fKVHR",
	"sectionHeadlineMain": "sectionHeadlineMain-3BS5Nojw6gcyNS7jnqmoOV",
	"sectionHeadlineTitle": "sectionHeadlineTitle-3EJeE510K8dqtj9UpGRobp",
	"sectionHeadlineInnerText": "sectionHeadlineInnerText-2rGs1qrSJSuR3vUGVNiPn4",
	"threeGallery": "threeGallery-1S3vfrzqPjPi0_s-_tCQbv",
	"flexo": "flexo-3dzWYlf-9R2_5EYj5quZCB",
	"topHero": "topHero-14OIZyWV1neWIczIqc2ndD",
	"topHeroInner": "topHeroInner-1R18bJ737GlmHsja_ddmAW",
	"topHeader": "topHeader-2ri4gaarPV6WmDH6vNh10V",
	"topSubHeader": "topSubHeader-nYw22H9bj_R5j6XFCrO5v",
	"aboutNaslov": "aboutNaslov-d4SC59v7D83X9vn1noPVn",
	"rowOne": "rowOne-1ZsZTwNatJNARSw-jUxDls",
	"pleskaOne": "pleskaOne-2JKZfl6X9YnWW2SPZRZaTo",
	"pleskaBgOne": "pleskaBgOne-1wnnaVKyyasxnkvVHaP3Hs",
	"pleskaTekstOne": "pleskaTekstOne-33M7mQhjuVcjKCeWb5G3Rv",
	"hrDebilni": "hrDebilni-3zeZ5gSEsPkrgWlN-__jJk",
	"rowTwo": "rowTwo-337mFG2UpEw6hK2VQwwrfR",
	"tekstTwo": "tekstTwo-3kXEBwp22JH95sjgbOWm5E",
	"pleskaTwo": "pleskaTwo-2zs2ikr9x8Sa5YpP0kmzKH",
	"pleskaBgTwo": "pleskaBgTwo-L6PMiWuJodAv0Y2AtAd_",
	"pleskaTekstTwo": "pleskaTekstTwo-DHz89PWqxLvJcevMrzVsL"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(9);

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
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let TopHero = class TopHero extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: false,
      title: false,
      subtitle: false
    };
  }
  componentWillMount() {
    if (this.props.bgImage && this.props.title && this.props.subtitle) {
      const subtitle = this.props.subtitle;
      const title = this.props.title;
      const bgImage = this.props.bgImage;
      this.setState({
        bgImage: bgImage,
        title: title,
        subtitle: subtitle
      });
    } else {
      this.setState({
        bgImage: {},
        title: "Ne postoji strana",
        subtitle: "404"
      });
    }
  }
  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.topHero, style: this.state.bgImage },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.topHeroInner },
        _react2.default.createElement(
          'h2',
          { className: _styles2.default.topHeader },
          this.state.title
        ),
        _react2.default.createElement(
          'h4',
          { className: _styles2.default.topSubHeader },
          this.state.subtitle
        )
      )
    );
  }
};
exports.default = TopHero;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"example": "example-3q0nqQ9ZKcBd8-DB7rcoyt",
	"boxStylez": "boxStylez-3xEtHa77Snt19pB6Tn-Ipu",
	"bsPrice": "bsPrice-3ljTYa9XaCKTLnoE1QLFa2",
	"bsText": "bsText-3glj6OL5XYMIoQa9X2rcTh",
	"bsInnerInner": "bsInnerInner-Sn87SKTD9jjTjQRG70MrY",
	"boxStylezInner": "boxStylezInner-dPOMWFk0hOl84lqJTVTCX",
	"mbrArrowFloating": "mbrArrowFloating-2H7ACIT3-RYgphXNuk-zWV",
	"mbrArrowIcon": "mbrArrowIcon-3X-jT_gBvLLznHbfVKdTQ0",
	"a": "a-3CLQjXJ95FwwMe6Mc8CB2V"
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/serbianburger.412051e330e10d39d9aa0d5e3db3c09b.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(44);

var _paths = __webpack_require__(5);

var _paths2 = _interopRequireDefault(_paths);

var _env = __webpack_require__(18);

var _console = __webpack_require__(17);

var _server = __webpack_require__(15);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Host and port -- from the environment


// Import console messages


/* Local */

// Import paths.  We'll use this to figure out where our public folder is
// so we can serve static files
/* eslint-disable no-console */

// Production server entry point.  Spawns the server on default HOST:PORT

// ----------------------
// IMPORTS

/* Node */

const HOST = (0, _env.getHost)();

// Extend the server base


// Local environment


// Needed to read manifest files

const PORT = process.env.PORT || 5000;

// Read in manifest files
const [manifest, chunkManifest] = ['manifest', 'chunk-manifest'].map(name => JSON.parse((0, _fs.readFileSync)(_path2.default.resolve(_paths2.default.dist, `${name}.json`), 'utf8')));

// Get manifest values
const css = manifest['browser.css'];
const scripts = ['manifest.js', 'vendor.js', 'browser.js'].map(key => manifest[key]);

// Spawn the server
_server2.default.then(({ router, app }) => {
  // Connect the production routes to the server
  router.get('/*', (0, _server.createReactHandler)(css, scripts, chunkManifest));
  app.use((0, _server.staticMiddleware)()).use(router.routes()).use(router.allowedMethods());

  app.listen(PORT);
});

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

__webpack_require__(46);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(52);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(47);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(3);

var _koaSend = __webpack_require__(50);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaHelmet = __webpack_require__(48);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(49);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(51);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(57);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _apollo = __webpack_require__(16);

var _redux = __webpack_require__(19);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(21);

var _ssr2 = _interopRequireDefault(_ssr);

var _app = __webpack_require__(36);

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
        return await (0, _koaSend2.default)(ctx, ctx.path,  true ? {
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
    })

    // Favicon.ico.  By default, we'll serve this as a 204 No Content.
    // If /favicon.ico is available as a static file, it'll try that first
    .get('/favicon.ico', async ctx => {
      ctx.res.statusCode = 204;
    }),
    app: new _koa2.default()

    // Preliminary security for HTTP headers
    .use((0, _koaHelmet2.default)())

    // Error wrapper.  If an error manages to slip through the middleware
    // chain, it will be caught and logged back here
    .use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        // TODO we've used rudimentary console logging here.  In your own
        // app, I'd recommend you implement third-party logging so you can
        // capture errors properly
        console.log('Error', e.message);
        ctx.body = 'There was an error. Please try again later.';
      }
    })

    // It's useful to see how long a request takes to respond.  Add the
    // timing to a HTTP Response header
    .use(async (ctx, next) => {
      const start = _microseconds2.default.now();
      await next();
      const end = _microseconds2.default.parse(_microseconds2.default.since(start));
      const total = end.microseconds + end.milliseconds * 1e3 + end.seconds * 1e6;
      ctx.set('Response-Time', `${total / 1e3}ms`);
    })
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserClient = browserClient;
exports.serverClient = serverClient;

var _reactApollo = __webpack_require__(3);

var _project = __webpack_require__(14);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(42);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(43);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(45);

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// Chalk library, to add colour to our console logs
function logServerStarted(opt = {}) {
  let message = _chalk2.default.green(`Running ${(opt.chalk || _chalk2.default.bold)(opt.type)} in ${_chalk2.default.bold("production")} mode\n\n`);

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
/* 18 */
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
const isProduction = "production" === 'production';
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
  return defaultPorts["production"][isServer ? 'server' : 'browser'];
}

// Get the browser port, based on the current environment
function getBrowserPort() {
  const port = process.env[`${getBrowserStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["production"].browser;
}

// Get the server port, based on the current environment
function getServerPort() {
  const port = process.env[`${getServerStub()}_PORT`];
  if (port) return port;

  // No clue from the environment -- work it out ourselves
  return defaultPorts["production"].server;
}

// Get the protocol://host:port of where the current server would bind
function getURL() {
  return `http://${getHost()}:${getPort()}`;
}

/***/ }),
/* 19 */
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

var _redux = __webpack_require__(59);

var _reduxThunk = __webpack_require__(60);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(12);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _counter = __webpack_require__(22);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.
let Status = class Status extends _react2.default.PureComponent {

  render() {
    const { code, children } = this.props;
    return _react2.default.createElement(_reactRouterDom.Route, { render: ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      } });
  }
};

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.
/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS

Status.propTypes = {
  code: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
};
Status.defaultProps = {
  children: null
};
let NotFound = exports.NotFound = class NotFound extends _react2.default.PureComponent {

  render() {
    const { children } = this.props;

    return _react2.default.createElement(
      Status,
      { code: 404 },
      children
    );
  }
};

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.

NotFound.propTypes = {
  children: _propTypes2.default.node
};
NotFound.defaultProps = {
  children: null
};
let Redirect = exports.Redirect = class Redirect extends _react2.default.PureComponent {

  render() {
    const { to, from, push, permanent } = this.props;
    const code = permanent ? 301 : 302;
    return _react2.default.createElement(
      Status,
      { code: code },
      _react2.default.createElement(_reactRouterDom.Redirect, { to: to, from: from, push: push })
    );
  }
};
Redirect.propTypes = {
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  from: _propTypes2.default.string,
  push: _propTypes2.default.bool,
  permanent: _propTypes2.default.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seamlessImmutable = __webpack_require__(12);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _TopHero = __webpack_require__(6);

var _TopHero2 = _interopRequireDefault(_TopHero);

var _serbianburger = __webpack_require__(8);

var _serbianburger2 = _interopRequireDefault(_serbianburger);

var _ContentBoxes = __webpack_require__(26);

var _ContentBoxes2 = _interopRequireDefault(_ContentBoxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AboutUs = class AboutUs extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'O NAMA', subtitle: '\u0106evapi sa srcem za sva\u010Diju du\u0161u', bgImage: { backgroundImage: 'url("/sarajevski-cevap-drama.jpg")' } }),
      _react2.default.createElement(_ContentBoxes2.default, null)
    );
  }
};
exports.default = AboutUs;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _TopHero = __webpack_require__(6);

var _TopHero2 = _interopRequireDefault(_TopHero);

var _serbianburger = __webpack_require__(8);

var _serbianburger2 = _interopRequireDefault(_serbianburger);

var _AlaCartGridMenu = __webpack_require__(25);

var _AlaCartGridMenu2 = _interopRequireDefault(_AlaCartGridMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AlaCart = class AlaCart extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'JELOVNIK', subtitle: 'Ovaj obrok necete zaboraviti', bgImage: { backgroundImage: 'url("/o-nama-slika.jpg")' } }),
      _react2.default.createElement(_AlaCartGridMenu2.default, null)
    );
  }
};
exports.default = AlaCart;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(11);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ContentBoxes = class ContentBoxes extends _react2.default.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Grid,
      null,
      _react2.default.createElement(
        'h1',
        { style: { textAlign: 'center', textTransform: 'uppercase', margin: '60px 0' } },
        'Pogledajte nasu jedinstvenu ponudu i uzivajte'
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        { style: { padding: '0' } },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 4, lg: 4 },
          _react2.default.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')", boxShadow: '1px 3px 15px rgba(0,0,0,.26)', backgroundPosition: 'center center', backgroundSize: 'cover' } }),
          _react2.default.createElement(
            'h2',
            { style: { marginTop: '10px', marginBottom: '0' } },
            'Pljeskavica Drama'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', marginBottom: '0' } },
            'Sastojci: 100% junece meso'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' } },
            'Cena: 330rsd'
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 4, lg: 4 },
          _react2.default.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')", boxShadow: '1px 3px 15px rgba(0,0,0,.26)', backgroundPosition: 'center center', backgroundSize: 'cover' } }),
          _react2.default.createElement(
            'h2',
            { style: { marginTop: '10px', marginBottom: '0' } },
            'Pljeskavica Drama'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', marginBottom: '0' } },
            'Sastojci: 100% junece meso'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' } },
            'Cena: 330rsd'
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 4, lg: 4 },
          _react2.default.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')", boxShadow: '1px 3px 15px rgba(0,0,0,.26)', backgroundPosition: 'center center', backgroundSize: 'cover' } }),
          _react2.default.createElement(
            'h2',
            { style: { marginTop: '10px', marginBottom: '0' } },
            'Pljeskavica Drama'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', marginBottom: '0' } },
            'Sastojci: 100% junece meso'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' } },
            'Cena: 330rsd'
          )
        )
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        { style: { padding: '60px 0 60px 0' } },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 4, lg: 4 },
          _react2.default.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/pljeskaPngZaMenu.png')", backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginBottom: '0' } },
            'Cena: 330rsd'
          ),
          _react2.default.createElement(
            'h2',
            { style: { marginTop: '10px', marginBottom: '0', fontWeight: '900', textAlign: 'center' } },
            'Pljeskavica Drama'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', marginBottom: '0', textAlign: 'center' } },
            '100% junece meso, 300gr.'
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 4, lg: 4 },
          _react2.default.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/pljeskaPngZaMenu.png')", backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginBottom: '0' } },
            'Cena: 330rsd'
          ),
          _react2.default.createElement(
            'h2',
            { style: { marginTop: '10px', marginBottom: '0', fontWeight: '900', textAlign: 'center' } },
            'Pljeskavica Drama'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', marginBottom: '0', textAlign: 'center' } },
            '100% junece meso, 300gr.'
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 4, lg: 4 },
          _react2.default.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/pljeskaPngZaMenu.png')", backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold', textAlign: 'center', fontSize: '30px', marginBottom: '0' } },
            'Cena: 330rsd'
          ),
          _react2.default.createElement(
            'h2',
            { style: { marginTop: '10px', marginBottom: '0', fontWeight: '900', textAlign: 'center' } },
            'Pljeskavica Drama'
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '5px', marginBottom: '0', textAlign: 'center' } },
            '100% junece meso, 300gr.'
          )
        )
      )
    );
  }
};
exports.default = ContentBoxes;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(11);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ContentBoxes = class ContentBoxes extends _react2.default.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Grid,
      null,
      _react2.default.createElement(
        'h1',
        { className: _styles2.default.aboutNaslov },
        'KOD NAS CEVAPI IMAJU TO NESTO'
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        { className: _styles2.default.rowOne },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 6, md: 5, lg: 4 },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.pleskaOne },
            _react2.default.createElement('div', { className: _styles2.default.pleskaBgOne })
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 6, md: 7, lg: 8 },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.pleskaTekstOne },
            _react2.default.createElement(
              'h2',
              null,
              '10 GODINA VRHUNSKOG ROSTILJA'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'Ko bi to radio da nije nas'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.'
            )
          )
        )
      ),
      _react2.default.createElement('div', { className: _styles2.default.hrDebilni }),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        { className: _styles2.default.rowTwo, style: { padding: '0 0 60px 0' } },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 6, md: 7, lg: 8 },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.tekstTwo },
            _react2.default.createElement(
              'h2',
              null,
              '10 GODINA VREDNOG RADA'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'Ko bi to radio da nije nas'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.'
            )
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, sm: 6, md: 5, lg: 4 },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.pleskaTwo },
            _react2.default.createElement('div', { className: _styles2.default.pleskaBgTwo })
          )
        )
      )
    );
  }
};
exports.default = ContentBoxes;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FeaturedLeft = class FeaturedLeft extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      'div',
      { style: { display: "flex", backgroundColor: "#f2ebe0" } },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.featured },
        _react2.default.createElement('div', { className: _styles2.default.featuredLeftImage, style: { backgroundImage: "url('pleska.jpg')" } }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.featuredLeftText },
          _react2.default.createElement(
            'h2',
            null,
            'Osetite duh Sarajeva u centru Beograda'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
          ),
          _react2.default.createElement(
            'p',
            { className: _styles2.default.buttonP },
            _react2.default.createElement(
              'a',
              null,
              'Pogledajte na\u0161u ponudu'
            )
          )
        )
      )
    );
  }
};
exports.default = FeaturedLeft;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _facebookSquare = __webpack_require__(53);

var _facebookSquare2 = _interopRequireDefault(_facebookSquare);

var _instagram = __webpack_require__(54);

var _instagram2 = _interopRequireDefault(_instagram);

var _youtubeSquare = __webpack_require__(55);

var _youtubeSquare2 = _interopRequireDefault(_youtubeSquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Footer = class Footer extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: _styles2.default.footer },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.itemWrap },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.footerItem },
            _react2.default.createElement(
              'h2',
              null,
              'O NAMA'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.footerItem },
            _react2.default.createElement(
              'h2',
              null,
              'DOSTAVA'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Donosimo hranu za podrucje Beograda na kucnu adresu. Radno vreme dostave je od 08:00 - 22:00. Za porudzbine preko 2000rsd. dostava je besplatna. Pozovite nas i porucite vasu omiljenu hranu sa rostilja a mi cemo se pobrinuti da uzivate u kvalitetnoj hrani u toplini vaseg doma'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.footerItem },
            _react2.default.createElement(
              'h2',
              null,
              'REACH US'
            ),
            _react2.default.createElement(_facebookSquare2.default, { fill: '#fff', width: '3em', height: '3em' }),
            _react2.default.createElement(_instagram2.default, { fill: '#fff', width: '3em', height: '3em' }),
            _react2.default.createElement(_youtubeSquare2.default, { fill: '#fff', width: '3em', height: '3em' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.botFooter },
        _react2.default.createElement(
          'p',
          null,
          'DRAMA \u0106evapi Ori\u0111inale'
        )
      )
    );
  }
};
exports.default = Footer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeaderHero = __webpack_require__(30);

var _HeaderHero2 = _interopRequireDefault(_HeaderHero);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Header = class Header extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_HeaderHero2.default, null)
    );
  }
};
exports.default = Header;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _styles3 = __webpack_require__(7);

var _styles4 = _interopRequireDefault(_styles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let HeaderHero = class HeaderHero extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: _styles2.default.heroHomepage, style: { backgroundImage: 'url("/na-kover-drama-rostilj.jpg")' } },
        _react2.default.createElement(
          'div',
          { className: _styles4.default.mbrArrowFloating },
          _react2.default.createElement('a', { href: '#section1', className: _styles4.default.mbrArrowIcon })
        )
      )
    );
  }
};
exports.default = HeaderHero;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let InstaImage = class InstaImage extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      srcStyle: {},
      tekst: '',
      cena: ''
    };
  }
  componentWillMount() {
    if (this.props.src && this.props.tekst) {
      this.setState({
        src: this.props.src,
        tekst: this.props.tekst
      });
      console.log("YOYO");
    }
  }
  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.boxStylez },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.bsInnerInner },
        _react2.default.createElement('div', { style: this.state.src, className: _styles2.default.boxStylezInner })
      ),
      _react2.default.createElement(
        'h3',
        { className: _styles2.default.bsText },
        this.state.tekst
      ),
      _react2.default.createElement(
        'h4',
        { className: _styles2.default.bsPrice },
        '330din'
      )
    );
  }
};
exports.default = InstaImage;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _logodrama = __webpack_require__(39);

var _logodrama2 = _interopRequireDefault(_logodrama);

var _hamburger = __webpack_require__(38);

var _hamburger2 = _interopRequireDefault(_hamburger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MainMenu = class MainMenu extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.opener = () => {
      if (!this.state.open) {
        console.log("{sdadsadsad1231}");
        this.setState({
          open: true,
          stylee: { overflow: 'visible' }
        });
      } else {
        console.log("{sdadsadsad}");
        this.setState({
          open: false,
          stylee: { overflow: 'hidden' }
        });
      }
    };

    this.state = {
      open: false,
      stylee: {}
    };
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.hello },
      _react2.default.createElement('img', { src: _logodrama2.default, alt: 'Drama logo', className: _styles2.default.logo }),
      _react2.default.createElement(
        'div',
        {
          className: _styles2.default.mobileIcon,
          onClick: this.opener },
        _react2.default.createElement('img', { src: _hamburger2.default, alt: 'menu', height: '35px', width: '45px' })
      ),
      _react2.default.createElement(
        'ul',
        { style: this.state.stylee },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', onClick: this.opener },
            'Po\u010Detna'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/page/jelovnik', onClick: this.opener },
            'Jelovnik'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/page/about', onClick: this.opener },
            'O nama'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/contact', onClick: this.opener },
            'Kontakt'
          )
        )
      )
    );
  }
};
exports.default = MainMenu;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ParalaxContainer = class ParalaxContainer extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylee: {}
    };
  }
  componentWillMount() {
    if (this.props.stylee) {
      const stylee = this.props.stylee;
      this.setState({
        stylee
      });
    } else {
      this.setState({
        stylee: {
          backgroundImage: 'url("http://www.cevabdzinica.de/wp-content/uploads/2016/02/Cevapcici-beste-in-Muenchen-mit-Ajvar-Schmand-und-Brot-in-Butter-vom-Grill-IMG_3815-e1455037381718.jpg")',
          height: '400px'
        }
      });
    }
  }
  render() {
    return _react2.default.createElement('div', { className: _styles2.default.parallax, style: this.state.stylee });
  }
};
exports.default = ParalaxContainer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SectionHeadline = class SectionHeadline extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      innerText: ""
    };
  }
  componentWillMount() {
    const title = this.props.title;
    const innerText = this.props.innerText;
    if (!innerText) {
      this.setState({
        title
      });
    } else {
      this.setState({
        title,
        innerText
      });
    }
  }
  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.sectionHeadlineMain },
      _react2.default.createElement(
        'h1',
        { className: _styles2.default.sectionHeadlineTitle },
        this.state.title
      ),
      _react2.default.createElement(
        'p',
        { className: _styles2.default.sectionHeadlineInnerText },
        this.state.innerText
      )
    );
  }
};
exports.default = SectionHeadline;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _InstaImage = __webpack_require__(31);

var _InstaImage2 = _interopRequireDefault(_InstaImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const srcFirst = {
  backgroundImage: 'url("/pljeska1.jpg")'
};
const srcSecond = {
  backgroundImage: 'url("/pljeska2.jpg")'
};
const srcThird = {
  backgroundImage: 'url("https://adriaticmedianethr.files.wordpress.com/2017/01/c487evapi.jpg?quality=100&strip=all&w=669&strip=all")'
};
let ThreeGallery = class ThreeGallery extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.threeGallery },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.flexo },
        _react2.default.createElement(_InstaImage2.default, { src: srcFirst, tekst: 'Gurmanska pljeskavica 300gr' }),
        _react2.default.createElement(_InstaImage2.default, { src: srcSecond, tekst: 'Leskovacka muckalica 300gr' }),
        _react2.default.createElement(_InstaImage2.default, { src: srcThird, tekst: '10 \u0107evapa 300gr' })
      )
    );
  }
};
exports.default = ThreeGallery;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class, _dec2, _class2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _reactRedux = __webpack_require__(56);

var _reactRouterDom = __webpack_require__(4);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routing = __webpack_require__(20);

var _all_messages = __webpack_require__(40);

var _all_messages2 = _interopRequireDefault(_all_messages);

__webpack_require__(37);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _Header = __webpack_require__(29);

var _Header2 = _interopRequireDefault(_Header);

var _SectionHeadline = __webpack_require__(34);

var _SectionHeadline2 = _interopRequireDefault(_SectionHeadline);

var _ParalaxContainer = __webpack_require__(33);

var _ParalaxContainer2 = _interopRequireDefault(_ParalaxContainer);

var _ThreeGallery = __webpack_require__(35);

var _ThreeGallery2 = _interopRequireDefault(_ThreeGallery);

var _FeaturedLeft = __webpack_require__(27);

var _FeaturedLeft2 = _interopRequireDefault(_FeaturedLeft);

var _Footer = __webpack_require__(28);

var _Footer2 = _interopRequireDefault(_Footer);

var _MainMenu = __webpack_require__(32);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _AboutUs = __webpack_require__(23);

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _AlaCart = __webpack_require__(24);

var _AlaCart2 = _interopRequireDefault(_AlaCart);

var _reactScrollableAnchor = __webpack_require__(58);

var _reactScrollableAnchor2 = _interopRequireDefault(_reactScrollableAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stylee = {
  backgroundImage: 'url("/slika-za-parallax-drama-rostilj.jpg")',
  height: '300px'
};
const sndlax = {
  backgroundImage: 'url("/parallax-nova-drama-rostilj.jpg")',
  height: '350px'
};

const Home = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_Header2.default, null),
  _react2.default.createElement(
    _reactScrollableAnchor2.default,
    { id: 'section1' },
    _react2.default.createElement(_SectionHeadline2.default, { title: '\u0106evapi koje \u0107ete voleti', innerText: '100% organsko meso' })
  ),
  _react2.default.createElement(_ParalaxContainer2.default, { stylee: stylee }),
  _react2.default.createElement(_SectionHeadline2.default, { title: 'Najbolji \u0107evapi u gradu', innerText: 'Probajte obave\u017Eno' }),
  _react2.default.createElement(_ThreeGallery2.default, null),
  _react2.default.createElement(_ParalaxContainer2.default, { stylee: sndlax }),
  _react2.default.createElement(_FeaturedLeft2.default, null)
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const About = ({ match }) => _react2.default.createElement(_AboutUs2.default, null);
const Contact = ({ match }) => _react2.default.createElement(
  'h1',
  null,
  'Contact'
);

const Jelovnik = ({ match }) => _react2.default.createElement(_AlaCart2.default, null);

const WhenNotFound = () => _react2.default.createElement(
  _routing.NotFound,
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Unknown route - the 404 handler was triggered!'
  )
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component


// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
const Stats = () => {
  const info = [['Environment', "production"]];

  return _react2.default.createElement(
    'ul',
    { className: _styles2.default.data },
    info.map(([key, val]) => _react2.default.createElement(
      'li',
      { key: key },
      key,
      ': ',
      _react2.default.createElement(
        'span',
        null,
        val
      )
    ))
  );
};

// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
let GraphQLMessage = (_dec = (0, _reactApollo.graphql)(_all_messages2.default), _dec(_class = class GraphQLMessage extends _react2.default.PureComponent {

  render() {
    const { data } = this.props;
    const message = data.allMessages && data.allMessages[0].text;
    const isLoading = data.loading ? 'yes' : 'nope';
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Message from GraphQL server: ',
        _react2.default.createElement(
          'em',
          null,
          message
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Currently loading?: ',
        isLoading
      )
    );
  }
}) || _class);

// Example of CSS, SASS and LESS styles being used together

GraphQLMessage.propTypes = {
  data: _propTypes2.default.shape({
    allMessages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      text: _propTypes2.default.string.isRequired
    }))
  })
};
const Styles = () => _react2.default.createElement(
  'ul',
  { className: _styles2.default.styleExamples },
  _react2.default.createElement(
    'li',
    { className: _styles2.default.example },
    'Styled by CSS'
  ),
  _react2.default.createElement(
    'li',
    { className: sass.example },
    'Styled by SASS'
  ),
  _react2.default.createElement(
    'li',
    { className: less.example },
    'Styled by LESS'
  )
);

// Sample component that demonstrates using a part of the Redux store
// outside of Apollo.  We can import own custom reducers in `kit/lib/redux`
// and 'listen' to them here
let ReduxCounter = (_dec2 = (0, _reactRedux.connect)(state => ({ counter: state.counter })), _dec2(_class2 = class ReduxCounter extends _react2.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.triggerIncrement = () => {
      this.props.dispatch({
        type: 'INCREMENT_COUNTER'
      });
    }, _temp;
  }

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total


  render() {
    const { count } = this.props.counter;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Listening to Redux counter: ',
        count
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.triggerIncrement },
        'Increment'
      )
    );
  }
}) || _class2);

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name

ReduxCounter.propTypes = {
  counter: _propTypes2.default.shape({
    count: _propTypes2.default.number.isRequired
  })
};

exports.default = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_reactHelmet2.default, {
    title: 'DRAMA \u0106evapi',
    meta: [{
      name: 'description',
      content: '100% organsko meso'
    }] }),
  _react2.default.createElement(_MainMenu2.default, null),
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/jelovnik', component: Jelovnik }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/about', component: About }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/contact', component: Contact }),
    _react2.default.createElement(_routing.Redirect, { from: '/old/path', to: '/new/path' }),
    _react2.default.createElement(_reactRouterDom.Route, { component: WhenNotFound })
  ),
  _react2.default.createElement(_Footer2.default, null)
);

/***/ }),
/* 37 */
/***/ (function(module, exports) {



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hamburger.07e5a738b24d339d7aef5c49a8f6dbf0.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logodrama.ab5ed4b08eae7de6c7548f124be3d280.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllMessages"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Message"},"directives":[]}]}}]}}],"loc":{"start":0,"end":98}};
    doc.loc.source = {"body":"#import \"./message.gql\"\r\n\r\nquery AllMessages {\r\n  allMessages(first:1) {\r\n    ...Message\r\n  }\r\n}\r\n","name":"GraphQL request"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(41).definitions));

module.exports = doc;

/***/ }),
/* 41 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Message"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Message"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"text"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":42}};
    doc.loc.source = {"body":"fragment Message on Message {\r\n  text\r\n}\r\n","name":"GraphQL request"};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  
module.exports = doc;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/facebook-square");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/instagram");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/youtube-square");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })
/******/ ]);