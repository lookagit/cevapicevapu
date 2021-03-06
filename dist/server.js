/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
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
	"linkFooter": "linkFooter-1q4bO9K2r8_AM0vXma5jzK",
	"boxes": "boxes-1pHjUY6vdRXMN8sL9tHpAn",
	"hidees": "hidees-67d_7--gp7MlP2UfiRH_V",
	"linkFooterUl": "linkFooterUl-2mLK5p9nce_rPqTupocKcL",
	"mobileIcon": "mobileIcon-2icoMzpdrZbPYIfQjxivTq",
	"parallax": "parallax-3oYy3E6XoJCClgZR0R7xDr",
	"caption": "caption-21tp0xAudjV1bavcaINc0T",
	"border": "border-aQNY2OtxwHs6C26ekD14K",
	"heroHomepage": "heroHomepage-3cr8Nd5W9Je_pIy-MhMdqV",
	"featured": "featured-tBVkb2dk8NKSVh-MiZvpy",
	"featuredLeftImage": "featuredLeftImage-1Gox6liBJlELhedy2ZEoQ4",
	"featuredLeftText": "featuredLeftText-2ulA7B5hZq3aI0K1nomPKa",
	"featuredTrick": "featuredTrick-2qlOOpnWrLLKh7apl6IesV",
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
	"miniBucket": "miniBucket-wWVBike2HR9KvAzIitcSd",
	"cartNumber": "cartNumber-2FH0eoVBerIbJSEuFgcAb8",
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
	"pleskaTekstOne": "pleskaTekstOne-33M7mQhjuVcjKCeWb5G3Rv",
	"hrDebilni": "hrDebilni-3zeZ5gSEsPkrgWlN-__jJk",
	"rowTwo": "rowTwo-337mFG2UpEw6hK2VQwwrfR",
	"tekstTwo": "tekstTwo-3kXEBwp22JH95sjgbOWm5E",
	"pleskaTwo": "pleskaTwo-2zs2ikr9x8Sa5YpP0kmzKH",
	"pleskaBgTwo": "pleskaBgTwo-L6PMiWuJodAv0Y2AtAd_",
	"pleskaTekstTwo": "pleskaTekstTwo-DHz89PWqxLvJcevMrzVsL",
	"contactRowOne": "contactRowOne-1nZU0KIdfd41SekjLRq53J",
	"contactColWidth": "contactColWidth-1VLzc80dhj3W0vPN7GJH6h",
	"contactColOne": "contactColOne-21cueNmJZV0dhJJuBgSlOR",
	"contactColTwo": "contactColTwo-1KTocX6dZheO6pJMM_3ipI",
	"poruka": "poruka-1Wiy7B2-Qz19i1zdBZtaYn",
	"posalji": "posalji-3YQJFzJVTxq-e-8jjv6HFC",
	"posaljiParagraf": "posaljiParagraf-1ezqBOOX2ckYAIKQtz060X",
	"rIconsFb": "rIconsFb-JUIQwKp17pNLrHEtbIS7Z",
	"rIconsIg": "rIconsIg-vPm7Jwe3uYLvV9KFqr1Zg",
	"rIconsYt": "rIconsYt-XWoktoihdcDSZ_Ehg1Wk_",
	"pozadina2": "pozadina2-30GqqfhEqYCObRVJgJn3vh",
	"alaHeader": "alaHeader-1YAOiL77EhgdfKZtV2CW5i",
	"blinkDrama": "blinkDrama-2ZRyxyJhcmvmE3p7ky922k"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

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
	"kiki": "kiki-ou4QAYpR7_8bOPESrwy8G",
	"iframeClass": "iframeClass-1deH4KayrxMImCQHGFMZ8X",
	"gallyNaslov": "gallyNaslov-2nEQ8p-Qc-SltgkpIuwlWW",
	"gallyDiv": "gallyDiv-q57aq7BHmjYCDkCtV3wol",
	"product": "product-rfL07y3RJIeqdPROAh0wO",
	"proizvodList": "proizvodList-269fUlrCyJkVR2zWxxemxX",
	"korpa": "korpa-3_yg0jPsNVfw9Ilw-urZMv",
	"korpaItems": "korpaItems-goX6CZSRXXww1sm6JVSWu",
	"korpaItem": "korpaItem-1QNpyh9mR0F8rn7OE_XTES",
	"trash": "trash-2XX9Y94Iz7AHXzhZJtltHn",
	"korpaForm": "korpaForm-3xBTwwK71Y3k8fSqQnbDkc",
	"adminLog": "adminLog-1FbsXfLXwhZvvwmYgHLVG1",
	"adminNavbar": "adminNavbar-2SsCfZupjTp2ePWyYaQX9E",
	"buttonModal": "buttonModal-oQhRp8mZSwic4C68ZmHUD",
	"cevapiKao": "cevapiKao-1BNwnhXUkAbtrj-Em031Ms"
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.load = undefined;
exports.default = MyLoadingComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = __webpack_require__(81);
var options = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false
};
function MyLoadingComponent() {
    return _react2.default.createElement(
        'div',
        { style: {
                background: 'white',
                height: '30vh',
                width: '100%',
                margin: '0 auto',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                resize: 'both',
                overflow: 'auto'
            } },
        _react2.default.createElement(
            'div',
            { style: {
                    width: '50%',
                    padding: '20px',
                    resize: 'both',
                    overflow: 'auto'
                } },
            _react2.default.createElement(Loader, { loaded: false, options: options, className: 'spinner' })
        )
    );
}
const load = exports.load = () => _react2.default.createElement(
    'div',
    null,
    'Loading...'
);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----------------------
// IMPORTS

const path = __webpack_require__(14);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logodrama.ee96729289acfab10c7abd75725d93e2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/facebook-square");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/instagram");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/shopping-cart");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(14);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(62);

var _paths = __webpack_require__(12);

var _paths2 = _interopRequireDefault(_paths);

var _env = __webpack_require__(27);

var _console = __webpack_require__(26);

var _server = __webpack_require__(24);

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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-modal-dialog");

/***/ }),
/* 22 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProizvods"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allProizvods"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"cena"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"naslov"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"urlSlike"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"tip"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"lepinjaIde"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"priloziIdu"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":128}};
    doc.loc.source = {"body":"query AllProizvods {\n  allProizvods {\n    id,\n    cena,\n    naslov,\n    urlSlike,\n    tip,\n    lepinjaIde,\n    priloziIdu\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable import/prefer-default-export */

const APOLLO = exports.APOLLO = {
  uri: 'https://api.graph.cool/simple/v1/cj5s24jocv1ft0122c36eji5n'
};

const BUNDLE_ANALYZER = exports.BUNDLE_ANALYZER = {
  openAnalyzer: false
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticMiddleware = staticMiddleware;
exports.createReactHandler = createReactHandler;

__webpack_require__(65);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(76);

var _server2 = _interopRequireDefault(_server);

var _koa = __webpack_require__(67);

var _koa2 = _interopRequireDefault(_koa);

var _reactApollo = __webpack_require__(3);

var _koaSend = __webpack_require__(72);

var _koaSend2 = _interopRequireDefault(_koaSend);

var _nodemailer = __webpack_require__(74);

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _xoauth = __webpack_require__(85);

var _xoauth2 = _interopRequireDefault(_xoauth);

var _koaHelmet = __webpack_require__(70);

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaRouter = __webpack_require__(71);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _microseconds = __webpack_require__(73);

var _microseconds2 = _interopRequireDefault(_microseconds);

var _reactRouter = __webpack_require__(82);

var _reactHelmet = __webpack_require__(15);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _koaBodyparser = __webpack_require__(68);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _apollo = __webpack_require__(25);

var _redux = __webpack_require__(28);

var _redux2 = _interopRequireDefault(_redux);

var _ssr = __webpack_require__(30);

var _ssr2 = _interopRequireDefault(_ssr);

var _koaCompress = __webpack_require__(69);

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _app = __webpack_require__(55);

var _app2 = _interopRequireDefault(_app);

var _paths = __webpack_require__(12);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App entry point


// Initial view to send back HTML render

/* Local */

// Grab the shared Apollo Client


// <Helmet> component for retrieving <head> section, so we can set page
// title, meta info, etc along with the initial HTML


// High-precision timing, so we can debug response time to serve a request


// React utility to transform JSX to HTML (to send back to the client)
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


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// React Router HOC for figuring out the exact React hierarchy to display
// based on the URL


// Koa Router, for handling URL requests


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
    router: new _koaRouter2.default().use((0, _koaBodyparser2.default)())
    // Set-up a general purpose /ping route to check the server is alive
    .get('/ping', async ctx => {
      ctx.body = 'pong';
    })

    // Favicon.ico.  By default, we'll serve this as a 204 No Content.
    // If /favicon.ico is available as a static file, it'll try that first
    .get('/favicon.ico', async ctx => {
      ctx.res.statusCode = 204;
    }).post('/poslata', async ctx => {
      var transporter = _nodemailer2.default.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'cevapidrama@gmail.com',
          clientId: '1098430474978-lb2lmoq6gafvar6l1dvq753cmb1s0qnn.apps.googleusercontent.com',
          clientSecret: 'sKb7qT9OHrgoIGCBv5PKCoAF',
          refreshToken: '1/fGSKbDEceNB5BNCKj0hmn342TcwcUnl_HaY9JyIuGUY'
        }
      });

      var mailerOptions = {
        from: `'Porudzbina' <'cevapidrama@gmail.com'>`,
        to: 'dusan.shane.markovic@gmail.com',
        subject: 'Stigla je nova porudzbina',
        text: `Adresa Porudzbine ${ctx.request.body.porudzbina.adresa}
                 Broj telefona ${ctx.request.body.porudzbina.telefon}
                 ${ctx.request.body.porudzbina.stavkePorudzbines && ctx.request.body.porudzbina.stavkePorudzbines.map((item, index) => `Proizvod: ${item.proizvod.naslov}
                   Kolicina: ${item.kolicina}`)}`
      };

      transporter.sendMail(mailerOptions, function (err, res) {
        if (err) {
          //console.log("EEEEEEEEEEROR", err);
        } else {
            //console.log("EMAIL JE SENT ");
          }
      });
    }).post('/ping', async ctx => {
      var transporter = _nodemailer2.default.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'cevapidrama@gmail.com',
          clientId: '1098430474978-lb2lmoq6gafvar6l1dvq753cmb1s0qnn.apps.googleusercontent.com',
          clientSecret: 'sKb7qT9OHrgoIGCBv5PKCoAF',
          refreshToken: '1/fGSKbDEceNB5BNCKj0hmn342TcwcUnl_HaY9JyIuGUY'
        }
      });

      var mailerOptions = {
        from: `${ctx.request.body.test.name} <${ctx.request.body.test.mail}>`,
        to: 'cevapidrama@gmail.com',
        subject: ctx.request.body.test.sub,
        text: `MEJL JE POSLAO ${ctx.request.body.test.mail} Tekst mejla ${ctx.request.body.test.mess}`
      };

      transporter.sendMail(mailerOptions, function (err, res) {
        if (err) {
          //console.log("EEEEEEEEEEROR", err);
        } else {
            //console.log("EMAIL JE SENT ");
          }
      });

      ctx.body = { "bong": "koko" };
    }),
    app: new _koa2.default()

    // Preliminary security for HTTP headers
    .use((0, _koaHelmet2.default)()).use((0, _koaBodyparser2.default)()).use((0, _koaCompress2.default)({
      threshold: 2048,
      flush: __webpack_require__(86).Z_SYNC_FLUSH
    }))
    // Error wrapper.  If an error manages to slip through the middleware
    // chain, it will be caught and logged back here
    .use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserClient = browserClient;
exports.serverClient = serverClient;

var _reactApollo = __webpack_require__(3);

var _project = __webpack_require__(23);

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
  if (process.browser) {
    return new _reactApollo.ApolloClient(Object.assign({
      reduxRootSelector: state => state.apollo,
      networkInterface
    }, opt));
  } else {
    return new _reactApollo.ApolloClient(Object.assign({
      reduxRootSelector: state => state.apollo,
      networkInterface
    }, opt));
  }
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logServerStarted = logServerStarted;

var _boxen = __webpack_require__(60);

var _boxen2 = _interopRequireDefault(_boxen);

var _chalk = __webpack_require__(61);

var _chalk2 = _interopRequireDefault(_chalk);

var _ip = __webpack_require__(64);

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
/* 27 */
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
/* 28 */
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

var _redux = __webpack_require__(83);

var _reduxThunk = __webpack_require__(84);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _seamlessImmutable = __webpack_require__(19);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _counter = __webpack_require__(31);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(8);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

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
    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
    _react2.default.createElement('meta', { property: 'og:url', content: 'https://dramacevapi.com' }),
    _react2.default.createElement('meta', { property: 'og:title', content: 'Drama \u0106evapi' }),
    _react2.default.createElement('meta', { property: 'og:image', content: 'https://res.cloudinary.com/drama/image/upload/v1514202893/naruci/share.jpg' }),
    _react2.default.createElement('meta', { property: 'og:description',
      content: 'U\u017Eivajte u najkvalitetnijim \u0107evapima kod nas.Drama \u0107evapi' }),
    _react2.default.createElement('meta', { httpEquiv: 'Content-Language', content: 'en' }),
    _react2.default.createElement('meta', { name: 'google-site-verification', content: 'OWDThsPE4blECEVwH4uR00zrrekPTmAAtsePnDgHtpI' }),
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// ----------------------
// IMPORTS

/* NPM */


var _seamlessImmutable = __webpack_require__(19);

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
});
const ordersInitial = [];
const usersInitial = {
  userName: '',
  password: ''
};
const deletedInitial = false;
const reloaderInitial = false;
exports.default = {

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { stateKey: { state, reducer() } } -- the `stateKey` is where in the `state`
  // object starts looking, `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  deleted: {
    state: deletedInitial,
    reducer(state = deletedInitial, action) {
      if (action.type === 'DELETE_PROIZVOD') {
        state = true;
      } else if (action.type === 'DELETION_ACK') {
        state = false;
      }
      return state;
    }
  },
  reloader: {
    state: reloaderInitial,
    reducer(state = reloaderInitial, action) {
      if (action.type === "RELOADUJ") {
        state = true;
      }
      return state;
    }
  },
  users: {
    state: usersInitial,
    reducer(state = usersInitial, action) {
      if (action.type === 'CHANGE_PASSWORD') {
        const newState = _extends({}, state, { password: action.password });
        return newState;
      } else if (action.type === 'CHANGE_USERNAME') {
        const newState = _extends({}, state, { userName: action.userName });
        return newState;
      }
      return state;
    }
  },
  orders: {
    state: ordersInitial,
    reducer(state = ordersInitial, action) {
      if (action.type === 'ADD_ORDER') {
        const newState = [...state];
        newState.push(action.orders);
        console.log("JA SAM NOCI STATE ", newState);
        return newState;
      } else if (action.type === 'REMOVE_ORDER') {
        state = [];
        return state;
      } else if (action.type === 'REMOVE_ITEM') {
        const newState = [...state];
        newState.splice(action.index, 1);
        return newState;
      }
      return state;
    }
  },
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
/* 32 */
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

var _reactLoadable = __webpack_require__(10);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = __webpack_require__(9);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadableComponentForAbout = (0, _reactLoadable2.default)({
  loader: () => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 88)),
  loading: _Loading2.default
});

let AboutUs = class AboutUs extends _react2.default.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0);
    }
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'Kako je nastala DRAMA', subtitle: ' ', bgImage: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_scale,w_1918/v1513949723/sarajevski-cevap-drama-cover_juhdlz.jpg")' } }),
      _react2.default.createElement(LoadableComponentForAbout, null)
    );
  }
};
exports.default = AboutUs;

/***/ }),
/* 33 */
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

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _TopHero = __webpack_require__(6);

var _TopHero2 = _interopRequireDefault(_TopHero);

var _facebookSquare = __webpack_require__(16);

var _facebookSquare2 = _interopRequireDefault(_facebookSquare);

var _instagram = __webpack_require__(17);

var _instagram2 = _interopRequireDefault(_instagram);

var _youtubeSquare = __webpack_require__(80);

var _youtubeSquare2 = _interopRequireDefault(_youtubeSquare);

var _GoogleMaps = __webpack_require__(43);

var _GoogleMaps2 = _interopRequireDefault(_GoogleMaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ContactUs = class ContactUs extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.checkName = e => {
      if (e.target.value.length < 3) {
        this.setState({
          textFromTheBottomName: 'Ime mora da sadrzi vise od 3 slova.',
          nameBool: false
        });
      } else if (!/^[A-Za-z_.-]+[" "]*[A-Za-z_.-]+[" "]*[A-Za-z_.-]+$/.test(e.target.value)) {
        this.setState({
          textFromTheBottomName: 'Ime moze sadrzati samo slova.',
          nameBool: false
        });
      } else {
        this.setState({
          name: e.target.value,
          nameBool: true,
          textFromTheBottomName: ""
        });
      }
    };

    this.checkMail = e => {
      if (e.target.value.length == 0) {
        this.setState({
          textFromTheEmail: 'Morate uneti tacnu e-mail adresu',
          mailBool: false
        });
      } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(e.target.value)) {
        this.setState({
          textFromTheEmail: 'E-mail adresa nije validna',
          mailBool: false
        });
      } else {
        this.setState({
          mail: e.target.value,
          mailBool: true,
          textFromTheEmail: ""
        });
      }
    };

    this.checkSub = e => {
      if (e.target.value.length < 5) {
        this.setState({
          textFromSub: 'Ovo polje mora biti duze od 5 slova. Hvala!',
          subBool: false
        });
      } else {
        this.setState({
          textFromSub: "",
          subBool: true,
          sub: e.target.value
        });
      }
    };

    this.checkMess = e => {
      if (e.target.value.length < 5) {
        this.setState({
          textFromMess: 'Ovo polje mora biti duze od 5 slova. Hvala!',
          messBool: false
        });
      } else {
        this.setState({
          textFromMess: "",
          messBool: true,
          mess: e.target.value
        });
      }
    };

    this.sendMess = () => {
      let name = this.state.nameBool;
      let mail = this.state.mailBool;
      let mess = this.state.messBool;
      let sub = this.state.subBool;
      if (name && mail && mess && sub) {
        var datas = new FormData();
        datas.append("json", JSON.stringify({ "a": "HOHOHOH" }));
        var myHeaders = new Headers();
        fetch("https://www.dramacevapi.com/ping", {
          headers: { 'content-type': 'application/json' },
          method: "post",
          mode: 'cors',
          body: JSON.stringify({ test: {
              mail: this.state.mail,
              name: this.state.name,
              sub: this.state.sub,
              mess: this.state.mess
            } })
        }).then(function (res) {
          return res.json();
        });
      }
    };

    this.state = {
      textFromTheBottomName: "",
      textFromTheEmail: "",
      textFromSub: "",
      textFromMess: "",
      firstTimeName: false,
      firstTimeEmail: false,
      firstTimeSub: false,
      firstTimeMess: false,
      messBool: false,
      subBool: false,
      nameBool: false,
      mailBool: false,
      mess: "",
      name: "",
      mail: "",
      sub: ""
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0);
    }
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'KONTAKT', subtitle: ' ', bgImage: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_fit,h_682,q_60,w_1286/v1513960101/kontakt_kmcxwz.jpg")' } }),
      _react2.default.createElement(
        'div',
        { style: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg")' } },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Grid,
          null,
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Row,
            { className: _styles2.default.contactRowOne },
            _react2.default.createElement(
              _reactStyledFlexboxgrid.Col,
              { className: _styles2.default.contactColWidth, xsOffset: 1, md: 10, smOffset: 0, mdOffset: 1 },
              _react2.default.createElement(
                _reactStyledFlexboxgrid.Row,
                null,
                _react2.default.createElement(
                  _reactStyledFlexboxgrid.Col,
                  { xs: 12, sm: 8, md: 8, lg: 8, className: _styles2.default.contactColTwo },
                  _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement('input', { type: 'text', name: 'ime', placeholder: 'Ime', style: { border: !this.state.nameBool ? '' : '3px solid green' }, onChange: text => {
                          this.checkName(text);
                        } })
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: !this.state.nameBool ? _styles2.default.boxes : _styles2.default.hidees },
                      this.state.textFromTheBottomName
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement('input', { type: 'text', name: 'mail', placeholder: 'Email Adresa', style: { border: !this.state.mailBool ? '' : '3px solid green' }, onChange: text => {
                          this.checkMail(text);
                        } })
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: !this.state.mailBool ? _styles2.default.boxes : _styles2.default.hidees },
                      this.state.textFromTheEmail
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement('input', { type: 'text', name: 'subj', placeholder: 'Predmet', style: { border: !this.state.subBool ? '' : '3px solid green' }, onChange: text => {
                          this.checkSub(text);
                        } })
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: !this.state.subBool ? _styles2.default.boxes : _styles2.default.hidees },
                      this.state.textFromSub
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: _styles2.default.poruka },
                      _react2.default.createElement('textarea', { type: 'text', name: 'ime', placeholder: 'Poruka', style: { border: !this.state.messBool ? '' : '3px solid green' }, onChange: text => {
                          this.checkMess(text);
                        } })
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: !this.state.messBool ? _styles2.default.boxes : _styles2.default.hidees },
                      this.state.textFromMess
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: _styles2.default.posaljiParagraf },
                      _react2.default.createElement(
                        'button',
                        { className: _styles2.default.posalji, type: 'button', onClick: this.sendMess },
                        'PO\u0160ALJI'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactStyledFlexboxgrid.Col,
                  { xs: 12, sm: 4, md: 4, lg: 4, className: _styles2.default.contactColOne },
                  _react2.default.createElement(
                    'h4',
                    null,
                    'INFORMACIJE'
                  ),
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Adresa: '
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Beograd, Ugao Dositejeve i Bra\u0107e Jugovi\u0107.'
                  ),
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Telefon:'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '+381 66 449 411'
                  ),
                  _react2.default.createElement(
                    'h5',
                    null,
                    'E-mail:'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'info@drama.rs'
                  ),
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Radno Vreme:'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '11:00h - 20:00h'
                  ),
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Nedeljom ne radimo'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { width: '100%', height: '400px' } },
          _react2.default.createElement(_GoogleMaps2.default, null)
        )
      )
    );
  }
};
exports.default = ContactUs;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _shoppingCart = __webpack_require__(18);

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Admin = (_dec = (0, _reactRedux.connect)(state => ({ orders: state.orders })), _dec(_class = class Admin extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders.length) {

      const numb = nextProps.orders.reduce(function (sum, b) {
        return sum + parseInt(b.kolicina);
      }, 0);
      this.setState({
        cartCount: numb
      });
    } else {
      this.setState({
        cartCount: ""
      });
    }
  }
  render() {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        { className: _styles2.default.cartNumber, style: { position: 'absolute', marginTop: '3px', color: 'orange', marginLeft: '15px', fontSize: '16px', fontWeight: 'bold' } },
        this.state.cartCount
      ),
      _react2.default.createElement(_shoppingCart2.default, { style: { fontSize: '40px', verticalAlign: 'middle', marginTop: '-10px' } })
    );
  }
}) || _class);
exports.default = Admin;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _shoppingCart = __webpack_require__(18);

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CartBucketMini = (_dec = (0, _reactRedux.connect)(state => ({ orders: state.orders })), _dec(_class = class CartBucketMini extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.orders.length) {
      const numb = nextProps.orders.reduce(function (sum, b) {
        return sum + parseInt(b.kolicina);
      }, 0);
      this.setState({
        cartCount: numb
      });
    } else {
      this.setState({
        cartCount: ""
      });
    }
  }
  render() {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        { style: { position: 'absolute', marginTop: 0, color: 'orange', marginLeft: '14px', fontSize: '19px', fontWeight: 'bold' } },
        this.state.cartCount
      ),
      _react2.default.createElement(_shoppingCart2.default, { style: { fontSize: '40px', verticalAlign: 'middle', marginTop: '-10px' } })
    );
  }
}) || _class);
exports.default = CartBucketMini;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeaderHero = __webpack_require__(37);

var _HeaderHero2 = _interopRequireDefault(_HeaderHero);

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
/* 37 */
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

let HeaderHero = class HeaderHero extends _react2.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: _styles2.default.heroHomepage, style: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_scale,h_909,q_40/v1513947397/kover-drama_rullwx.jpg")' } })
    );
  }
};
exports.default = HeaderHero;

/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Proizvod = class Proizvod extends _react2.default.PureComponent {
  render() {
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Grid,
      null,
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        null,
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', padding: '20px' } },
          _react2.default.createElement(
            'div',
            { style: { margin: '0 auto', width: '100%' } },
            _react2.default.createElement(
              'h1',
              { style: { fontSize: '15px' } },
              'Dostava trenutno ne radi'
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Radno vreme dostave:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Ponedeljak-Subota: od 11:00 do 20:00'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Nedeljom ne radimo'
            )
          )
        )
      )
    );
  }
};
exports.default = Proizvod;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _facebookSquare = __webpack_require__(16);

var _facebookSquare2 = _interopRequireDefault(_facebookSquare);

var _instagram = __webpack_require__(17);

var _instagram2 = _interopRequireDefault(_instagram);

var _foursquare = __webpack_require__(77);

var _foursquare2 = _interopRequireDefault(_foursquare);

var _tripadvisor = __webpack_require__(79);

var _tripadvisor2 = _interopRequireDefault(_tripadvisor);

var _reactRouterDom = __webpack_require__(8);

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
              'DRU\u0160TVENE MRE\u017DE'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.facebook.com/dramacevapi/?fref=ts', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: _styles2.default.rIconsFb },
                _react2.default.createElement(_facebookSquare2.default, { width: '3em', height: '3em' })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.instagram.com/explore/locations/813855916/', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: _styles2.default.rIconsIg },
                _react2.default.createElement(_instagram2.default, { width: '3em', height: '3em' })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://foursquare.com/v/drama-%C4%87evapi/5516afa5498e354ab8cca147', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: _styles2.default.rIconsYt },
                _react2.default.createElement(_foursquare2.default, { width: '3em', height: '3em' })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.tripadvisor.com/Restaurant_Review-g294472-d9874369-Reviews-Drama_Cevapi-Belgrade.html', target: '_blank' },
              _react2.default.createElement(
                'div',
                { className: _styles2.default.rIconsYt },
                _react2.default.createElement(_tripadvisor2.default, { width: '3em', height: '3em' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.footerItem, style: { width: "450px" } },
            _react2.default.createElement(
              'ul',
              { className: _styles2.default.linkFooterUl },
              _react2.default.createElement(
                'li',
                { className: _styles2.default.linkFooter },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' },
                  'Po\u010Detna'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _styles2.default.linkFooter },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/page/naruci' },
                  'Naru\u010Di'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _styles2.default.linkFooter },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/page/about' },
                  'O nama'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _styles2.default.linkFooter },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/page/galerija' },
                  'Galerija'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: _styles2.default.linkFooter },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/page/contact' },
                  'Kontakt'
                )
              )
            )
          )
        )
      )
    );
  }
};
exports.default = Footer;

/***/ }),
/* 42 */
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

var _reactLoadable = __webpack_require__(10);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = __webpack_require__(9);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadableComponentForGally = (0, _reactLoadable2.default)({
  loader: () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 90)),
  loading: _Loading2.default
});
let Gally = class Gally extends _react2.default.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'GALERIJA', subtitle: ' ', bgImage: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/v1513949581/galerija_y2xfan.jpg")' } }),
      _react2.default.createElement(
        'div',
        { style: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')", backgroundSize: 'cover', paddingTop: '50px', paddingBottom: '50px' } },
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
          _react2.default.createElement(LoadableComponentForGally, null)
        )
      )
    );
  }
};
exports.default = Gally;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = __webpack_require__(63);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AnyReactComponent = ({ text }) => _react2.default.createElement(
  'div',
  null,
  text
);
const GoogleMapConfig = {
  key: "AIzaSyByxy70NlYzOYmoO-Y0JdTekVjReTaVXeM",
  libraries: 'places'
};
let GoogleMaps = class GoogleMaps extends _react.Component {
  render() {
    return _react2.default.createElement(
      _googleMapReact2.default,
      {
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom,
        bootstrapURLKeys: GoogleMapConfig
      },
      _react2.default.createElement(AnyReactComponent, {
        lat: 44.817231,
        lng: 20.460802,
        text: 'DRAMA Ćevapi'
      })
    );
  }
};
GoogleMaps.defaultProps = {
  center: { lat: 44.817231, lng: 20.460802 },
  zoom: 17
};
exports.default = GoogleMaps;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(36);

var _Header2 = _interopRequireDefault(_Header);

var _ParalaxContainer = __webpack_require__(38);

var _ParalaxContainer2 = _interopRequireDefault(_ParalaxContainer);

var _SectionHeadline = __webpack_require__(39);

var _SectionHeadline2 = _interopRequireDefault(_SectionHeadline);

var _reactLoadable = __webpack_require__(10);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Loading = __webpack_require__(9);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadableComponentForHome = (0, _reactLoadable2.default)({
  loader: () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 89)),
  loading: _Loading.load
});

const stylee = {
  backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/q_78/v1513947427/slika-za-parallax-drama-rostilj_vaxorb.jpg")',
  height: '300px'
};
const sndlax = {
  backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/q_43/v1513947493/drama7_rz2ibq.jpg")',
  height: '350px'
};

let Home = class Home extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      DynamicHomeIframe: null
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (!this.state.scrolled) {
          console.log("JOJO ");
          this.setState({
            scrolled: true
          });
        }
      });
    }
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: 'auto' } },
        _react2.default.createElement('img', { src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_36,w_1335/v1513960458/cevapi_cgehve.jpg', style: { width: "100%", height: "auto", verticalAlign: 'top' } })
      ),
      _react2.default.createElement(_ParalaxContainer2.default, { stylee: stylee }),
      _react2.default.createElement(
        'div',
        { style: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')" }, className: _styles2.default.pozadina2 },
        _react2.default.createElement(_SectionHeadline2.default, { title: 'Tradicionalni srpski \u0107evapi u srcu prestonice', innerText: '100% doma\u0107e june\u0107e meso bez aditiva' })
      ),
      _react2.default.createElement(_ParalaxContainer2.default, { stylee: sndlax }),
      _react2.default.createElement(
        'div',
        { style: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')" }, className: _styles2.default.pozadina2 },
        this.state.scrolled && _react2.default.createElement(LoadableComponentForHome, null)
      )
    );
  }
};
exports.default = Home;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TopHero = __webpack_require__(6);

var _TopHero2 = _interopRequireDefault(_TopHero);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _KorpaPorudzbina = __webpack_require__(46);

var _KorpaPorudzbina2 = _interopRequireDefault(_KorpaPorudzbina);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

var _trash = __webpack_require__(78);

var _trash2 = _interopRequireDefault(_trash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Korpa = (_dec = (0, _reactRedux.connect)(state => ({ orders: state.orders })), _dec(_class = class Korpa extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.izbrisiItem = broj => {
      this.props.dispatch({
        type: 'REMOVE_ITEM',
        index: broj
      });
    }, _temp;
  }

  componentDidMount() {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'Korpa', subtitle: 'Naru\u010Dite ne\u0161to kod nas skroz dobro', bgImage: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_scale,w_1388/v1513960303/dvecevape_rpa7mc.jpg")' } }),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.korpa },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Grid,
          { style: { width: '100%' } },
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Row,
            { style: { width: '100%' }, className: _styles2.default.korpaItems },
            this.props.orders && this.props.orders.map((proiz, index) => _react2.default.createElement(
              _reactStyledFlexboxgrid.Col,
              { xs: 12, sm: 6, md: 4, lg: 3, className: _styles2.default.korpaItem },
              _react2.default.createElement('img', { src: proiz.urlSlike, width: '150px' }),
              _react2.default.createElement(
                'h3',
                { style: { color: 'white' } },
                proiz.naslov
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Kolicina: ',
                proiz.kolicina
              ),
              _react2.default.createElement(
                'h3',
                { style: { color: 'orange', fontSize: '23px' } },
                'Cena: ',
                proiz.cena,
                ' RSD'
              ),
              _react2.default.createElement(_trash2.default, { className: _styles2.default.trash, onClick: () => this.izbrisiItem(index) })
            ))
          ),
          _react2.default.createElement(_KorpaPorudzbina2.default, { orders: this.props.orders })
        )
      )
    );
  }
}) || _class);
Korpa.propTypes = {
  orders: _propTypes2.default.array
};
exports.default = Korpa;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(3);

var _graphqlTag = __webpack_require__(11);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(8);

var _PorudzbinaConfirm = __webpack_require__(49);

var _PorudzbinaConfirm2 = _interopRequireDefault(_PorudzbinaConfirm);

var _reactRedux = __webpack_require__(2);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

var _PovratnoVreme = __webpack_require__(50);

var _PovratnoVreme2 = _interopRequireDefault(_PovratnoVreme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let KorpaPorudzbina = (_dec = (0, _reactRedux.connect)(state => ({ counter: state.counter, orders: state.orders })), _dec2 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation createPorudzbina($adresa: String!, $brojTelefona: Int!, $opis: String!, $uredjaj: String!, $brojStana: String, $imeIPrezime: String) {
    createPorudzbina (adresa: $adresa, brojTelefona: $brojTelefona, opis: $opis, uredjaj: $uredjaj, brojStana: $brojStana, imeIPrezime: $imeIPrezime) {
      id
    },
  }`, {
  name: 'createPorudzbina'
}), _dec3 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation createStavkePorudzbine($kolicina: Int!, $prilozi: String!, $uSomunu: Boolean!) {
    createStavkePorudzbine (kolicina: $kolicina, prilozi: $prilozi, uSomunu: $uSomunu) {
      id
    }
  }`, {
  name: 'createStavkePorudzbine'
}), _dec4 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation addToPorudzbinaOnStavkePorudzbine($stavkePorudzbinesStavkePorudzbineId: ID!, $porudzbinaPorudzbinaId: ID!) {
    addToPorudzbinaOnStavkePorudzbine (stavkePorudzbinesStavkePorudzbineId: $stavkePorudzbinesStavkePorudzbineId, porudzbinaPorudzbinaId: $porudzbinaPorudzbinaId) {
      porudzbinaPorudzbina {
        adresa
      }
    }
  }`, {
  name: 'addToPorudzbinaOnStavkePorudzbine'
}), _dec5 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation addToStavkePorudzbineOnProizvod($stavkePorudzbinesStavkePorudzbineId: ID!, $proizvodProizvodId: ID!){
    addToStavkePorudzbineOnProizvod(stavkePorudzbinesStavkePorudzbineId: $stavkePorudzbinesStavkePorudzbineId, proizvodProizvodId: $proizvodProizvodId){
      stavkePorudzbinesStavkePorudzbine{
        id
      }
    }
  }`, {
  name: 'addToStavkePorudzbineOnProizvod'
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class KorpaPorudzbina extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.izmeniAdresu = event => {
      this.setState({ adresa: event.target.value });
    };

    this.izmeniBrojStana = event => {
      this.setState({ brojStana: event.target.value });
    };

    this.izmeniImeIprezime = event => {
      this.setState({ imeIPrezime: event.target.value });
    };

    this.izmeniBroj = event => {
      this.setState({ brojTelefona: parseInt(event.target.value) });
    };

    this.izmeniOpis = event => {
      this.setState({ opis: event.target.value });
    };

    this.nekaFunkcija = async () => {
      const pravimPorudzbinu = await this.props.createPorudzbina({
        variables: {
          adresa: this.state.adresa,
          brojTelefona: this.state.brojTelefona,
          opis: this.state.opis,
          uredjaj: this.state.uredjaj,
          brojStana: this.state.brojStana,
          imeIPrezime: this.state.imeIPrezime
        }
      });

      if (pravimPorudzbinu) {
        if (this.props.orders) {
          this.props.orders.map(async (stavka, index) => {
            const pravim = {};
            pravim.stavku = await this.props.createStavkePorudzbine({
              variables: {
                kolicina: parseInt(stavka.kolicina),
                prilozi: stavka.prilozi,
                uSomunu: stavka.uSomunu
              }
            });
            pravim.vezuPorudzbine = await this.props.addToPorudzbinaOnStavkePorudzbine({
              variables: {
                stavkePorudzbinesStavkePorudzbineId: pravim.stavku.data.createStavkePorudzbine.id,
                porudzbinaPorudzbinaId: pravimPorudzbinu.data.createPorudzbina.id
              }
            });
            pravim.vezuProizvod = await this.props.addToStavkePorudzbineOnProizvod({
              variables: {
                stavkePorudzbinesStavkePorudzbineId: pravim.stavku.data.createStavkePorudzbine.id,
                proizvodProizvodId: stavka.proizvodid
              }
            });
          });
        }
      }
      this.setState({ id: pravimPorudzbinu.data.createPorudzbina.id });
      this.setState({ poslato: true });
      this.props.dispatch({
        type: 'REMOVE_ORDER'
      });
    };

    this.state = {
      adresa: "Random Adresa",
      brojTelefona: 123456,
      porudzbinaId: '123',
      poslato: false,
      opis: "Bez Opisa",
      imeIPrezime: '',
      brojStana: '',
      id: 'NaN',
      uredjaj: ''
    };
  }

  componentDidMount() {
    let isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
      }
    };

    if (isMobile.any()) {
      this.setState({
        uredjaj: 'da'
      });
    }
  }

  render() {

    let forma;
    if (this.state.poslato) {
      forma = _react2.default.createElement(
        'div',
        { style: { textAlign: 'center', marginTop: '100px', marginBottom: '100px' } },
        _react2.default.createElement(_PovratnoVreme2.default, { id: this.state.id })
      );
    } else {
      if (this.props.orders.length < 1) {
        forma = _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', marginTop: '100px', marginBottom: '100px' } },
          _react2.default.createElement(
            'h2',
            null,
            'Niste jo\u0161 ni\u0161ta poru\u010Dili kod nas!'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Idite u ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { style: { color: 'gray', textDecoraation: 'none' }, to: '/page/naruci', onClick: this.opener },
              'Naru\u010Di'
            )
          )
        );
      } else {
        forma = _react2.default.createElement(
          'form',
          { className: _styles2.default.korpaForm },
          _react2.default.createElement(_PorudzbinaConfirm2.default, { poslato: this.state.poslato }),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { type: 'text', onChange: this.izmeniImeIprezime, placeholder: 'Va\u0161e Ime:' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { type: 'text', onChange: this.izmeniAdresu, placeholder: 'Va\u0161a Adresa:' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { type: 'text', onChange: this.izmeniBrojStana, placeholder: 'Broj Stana' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { type: 'text', onChange: this.izmeniBroj, placeholder: 'Broj Telefona' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('textarea', { onChange: this.izmeniOpis, placeholder: 'Opis' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: () => {
                  this.nekaFunkcija();
                } },
              'PO\u0160ALJI'
            )
          )
        );
      }
    }
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Row,
      null,
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 12 },
        forma
      )
    );
  }
}) || _class) || _class) || _class) || _class) || _class);
KorpaPorudzbina.propTypes = {
  data: _propTypes2.default.shape({
    allPorudzbinas: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      adresa: _propTypes2.default.string.isRequired,
      brojTelefona: _propTypes2.default.number.isRequired,
      opis: _propTypes2.default.string.isRequired
    }))
  })
};
exports.default = KorpaPorudzbina;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _hamburger = __webpack_require__(57);

var _hamburger2 = _interopRequireDefault(_hamburger);

var _CartBucketMini = __webpack_require__(35);

var _CartBucketMini2 = _interopRequireDefault(_CartBucketMini);

var _CartBucket = __webpack_require__(34);

var _CartBucket2 = _interopRequireDefault(_CartBucket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MainMenu = class MainMenu extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.ddelay = ms => {
      var ctr,
          rej,
          p = new Promise(function (resolve, reject) {
        ctr = setTimeout(resolve, ms);
        rej = reject;
      });
      p.cancel = function () {
        clearTimeout(ctr);rej(Error("Cancelled"));
      };
      return p;
    };

    this.opener = () => {
      if (!this.state.open) {
        this.setState({
          open: true,
          stylee: { overflow: 'visible' }
        });
      } else {
        this.setState({
          open: false,
          stylee: { overflow: 'hidden' }
        });
      }
    };

    this.state = {
      open: false,
      stylee: {},
      blinker: { display: 'flex', opacity: 1 }
    };
  }


  componentDidMount() {
    this.ddelay(2000).then(() => {
      this.setState({
        blinker: { opacity: 0, pointerEvents: 'none' }
      });
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.hello },
      _react2.default.createElement(
        'div',
        { style: this.state.blinker, className: _styles2.default.blinkDrama },
        _react2.default.createElement('img', { src: __webpack_require__(13) })
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        _react2.default.createElement('img', { src: __webpack_require__(13), alt: 'Drama logo', className: _styles2.default.logo })
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.mobileIcon },
        _react2.default.createElement('img', { onClick: this.opener, src: _hamburger2.default, alt: 'menu', height: '35px', width: '45px' }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.miniBucket, style: { position: 'absolute', right: "55px", top: 0 } },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/korpa' },
            _react2.default.createElement(_CartBucketMini2.default, null)
          )
        )
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: _styles2.default.cartIcon, to: '/korpa' },
            _react2.default.createElement(_CartBucket2.default, null)
          )
        )
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
            { to: '/page/naruci', onClick: this.opener },
            'Naru\u010Di'
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
            { to: '/page/galerija', onClick: this.opener },
            'Galerija'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/page/contact', onClick: this.opener },
            'Kontakt'
          )
        )
      )
    );
  }
};
exports.default = MainMenu;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TopHero = __webpack_require__(6);

var _TopHero2 = _interopRequireDefault(_TopHero);

var _Proizvod = __webpack_require__(51);

var _Proizvod2 = _interopRequireDefault(_Proizvod);

var _Closed = __webpack_require__(40);

var _Closed2 = _interopRequireDefault(_Closed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let NaruciNesto = class NaruciNesto extends _react2.default.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0);
    }
  }
  calculateThisDate() {
    let today = new Date();
    console.log(today.getHours());
    if (today.getDay() == 0) {
      return false;
    } else if (today.getDay() != 0) {
      let n = today.getHours();
      let getBack = n >= 11 && n <= 20 ? true : false;
      return getBack;
    }
  }
  render() {
    let areWeWorking = this.calculateThisDate();
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'Dostava', subtitle: 'Cvr\u010Di, cvr\u010Di \u0107evap Drama, uskoro \u0107e biti s Vama', bgImage: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_58,w_1766/v1513947368/dostava_murmvd.jpg')" } }),
      areWeWorking ? _react2.default.createElement(_Proizvod2.default, null) : _react2.default.createElement(_Closed2.default, null)
    );
  }
};
exports.default = NaruciNesto;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PorudzbinaConfirm = (_dec = (0, _reactRedux.connect)(state => ({ counter: state.counter, orders: state.orders })), _dec(_class = class PorudzbinaConfirm extends _react2.default.Component {
  componentDidMount() {
    if (this.props.poslato) {
      this.props.dispatch({
        type: 'REMOVE_ORDER'
      });
    }
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.poslato ? _react2.default.createElement(
        'h2',
        null,
        'Poslali ste'
      ) : _react2.default.createElement(
        'h2',
        null,
        'Posaljite porudzbinu'
      )
    );
  }
}) || _class);
exports.default = PorudzbinaConfirm;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(3);

var _graphqlTag = __webpack_require__(11);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PovratnoVreme = (_dec = (0, _reactApollo.graphql)(_graphqlTag2.default`
  query getVreme($id: ID!) {
    Porudzbina(id: $id) {
      vreme,
      adresa,
      id
    }
  }`, {
  options: props => ({
    variables: {
      id: ' '
    }
  })
}), _dec2 = (0, _reactApollo.graphql)(_graphqlTag2.default`
mutation updatePorudzbina($id: ID! $potvrdjen: String!) {
  updatePorudzbina(id: $id, potvrdjen: $potvrdjen){
    id
  }
}`, {
  name: 'updatePorudzbina'
}), _dec(_class = _dec2(_class = class PovratnoVreme extends _react2.default.PureComponent {
  constructor(props) {
    super(props);

    this.ovoJeReFetch = async () => {
      this.setState({ loading: 'no' });
      await this.props.data.refetch({
        id: this.props.id
      });
      this.setState({ loading: 'yes' });
    };

    this.dugmePotvrdi = async podaci => {
      const potvrdjujemPorudzbinu = await this.props.updatePorudzbina({
        variables: {
          id: this.props.id,
          potvrdjen: 'da'
        }
      });
      this.setState({
        answered: 'da'
      });
      fetch("https://dramacevapi.com/poslata", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        method: "post",
        body: JSON.stringify({
          podaci
        })
      });
    };

    this.dugmeOtkazi = async () => {
      const otkazujemPorudzbinu = await this.props.updatePorudzbina({
        variables: {
          id: this.props.id,
          potvrdjen: 'ne'
        }
      });
      this.setState({
        answered: 'ne'
      });
    };

    this.state = {
      id: 'NaN',
      loading: '',
      answered: ''
    };
  }

  componentWillMount() {
    this.props.data.refetch({
      id: this.props.id
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.ovoJeReFetch, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props;
    const vreme = data.Porudzbina && data.Porudzbina.vreme;
    if (vreme == null) {
      return _react2.default.createElement(
        'h1',
        null,
        'Molimo vas sa\u010Dekajte odgovor!'
      );
    } else if (this.state.answered == 'da') {
      return _react2.default.createElement(
        'h1',
        null,
        'Uspe\u0161no ste poru\u010Dili kod nas!'
      );
    } else if (this.state.answered == 'ne') {
      return _react2.default.createElement(
        'h1',
        null,
        '\u017Dao nam je, probajte ponovo kasnije!'
      );
    } else {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Va\u0161a porud\u017Ebina \u0107e biti gotova za ',
          vreme,
          ' minuta'
        ),
        _react2.default.createElement(
          'button',
          { style: stylee.buttonStyle, onClick: () => {
              this.dugmePotvrdi(data.Porudzbina);
            } },
          'Potvrdi'
        ),
        _react2.default.createElement(
          'button',
          { style: stylee.buttonStyle, onClick: () => {
              this.dugmeOtkazi();
            } },
          'Otka\u017Ei'
        )
      );
    }
  }
}) || _class) || _class);
exports.default = PovratnoVreme;

const stylee = {
  buttonStyle: {
    fontSize: '19px',
    height: '40px',
    width: '100px',
    color: 'white',
    fontWeight: '900',
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: '20px 20px',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _getProizvodi = __webpack_require__(22);

var _getProizvodi2 = _interopRequireDefault(_getProizvodi);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _ProizvodItem = __webpack_require__(52);

var _ProizvodItem2 = _interopRequireDefault(_ProizvodItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Proizvod = (_dec = (0, _reactApollo.graphql)(_getProizvodi2.default), _dec(_class = class Proizvod extends _react2.default.PureComponent {

  render() {
    const { data } = this.props;
    const naziv = data.allProizvods && data.allProizvods[2].naslov;
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Grid,
      null,
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        null,
        data.allProizvods && data.allProizvods.filter(item => item.tip === 'hrana').map((proiz, index) => {
          return _react2.default.createElement(_ProizvodItem2.default, { proiz: proiz, key: index });
        }),
        data.allProizvods && data.allProizvods.filter(item => item.tip === 'pice').map((proiz, index) => {
          return _react2.default.createElement(_ProizvodItem2.default, { proiz: proiz, key: index });
        })
      )
    );
  }
}) || _class);
Proizvod.propTypes = {
  data: _propTypes2.default.shape({
    allProizvods: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      naslov: _propTypes2.default.string.isRequired
    }))
  })
};
exports.default = Proizvod;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

var _reactRedux = __webpack_require__(2);

var _reactModalDialog = __webpack_require__(21);

var _reactAlert = __webpack_require__(75);

var _reactAlert2 = _interopRequireDefault(_reactAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProizvodItem = (_dec = (0, _reactRedux.connect)(state => ({ counter: state.counter, orders: state.orders })), _dec(_class = class ProizvodItem extends _react.Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    this.showAlert = () => {
      this.msg.show('Dodali ste ' + this.state.kolicina + 'x ' + this.props.proiz.naslov + ' u korpu!', {
        time: 2000,
        type: 'success',
        icon: _react2.default.createElement('img', { width: '32px', height: '32px', src: this.props.proiz.urlSlike })
      });
    };

    this.handleClick = () => this.setState({ isShowingModal: true });

    this.handleClose = () => this.setState({ isShowingModal: false, kolicina: '' });

    this.upaliIncrement = () => {
      if (this.state.kolicina > 0) {
        this.props.dispatch({
          type: 'ADD_ORDER',
          orders: {
            proizvodid: this.props.proiz.id,
            kolicina: this.state.kolicina,
            cena: this.props.proiz.cena * this.state.kolicina,
            urlSlike: this.props.proiz.urlSlike,
            prilozi: this.state.prilozi.join(),
            naslov: this.props.proiz.naslov,
            uSomunu: this.state.uSomunu
          }
        });
      }
    };

    this.izmeniKolicinu = event => {
      this.setState({ kolicina: event.target.value });
    };

    this.button = () => {
      if (this.state.kolicina === 0 || this.state.kolicina === '0' || this.state.kolicina === '') {
        return _react2.default.createElement(
          'button',
          { disabled: true },
          'Naru\u010Di'
        );
      } else {
        return _react2.default.createElement(
          'button',
          { onClick: () => this.handleClick() },
          'Naru\u010Di'
        );
      }
    };

    this.state = {
      kolicina: "",
      prilozi: [],
      uSomunu: true,
      isShowingModal: false
    };
  }

  render() {
    let ukupno = "";
    if (this.state.kolicina !== 0 || this.state.kolicina !== '' || this.state.kolicina !== '0' || this.props.proiz) {
      ukupno = parseInt(this.state.kolicina) * parseInt(this.props.proiz.cena);
    }
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12, sm: 6, md: 4, lg: 3, className: _styles2.default.productBox },
      _react2.default.createElement(_reactAlert2.default, _extends({ ref: a => this.msg = a }, this.alertOptions)),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.product },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { src: this.props.proiz.urlSlike }),
          _react2.default.createElement(
            'h2',
            null,
            this.props.proiz.naslov
          ),
          _react2.default.createElement(
            'h3',
            null,
            this.props.proiz.cena,
            ' RSD'
          ),
          _react2.default.createElement(
            'label',
            null,
            'Koli\u010Dina \xA0'
          ),
          ' ',
          _react2.default.createElement('input', { type: 'number', min: '1', onChange: this.izmeniKolicinu, value: this.state.kolicina }),
          this.button(),
          this.state.isShowingModal && _react2.default.createElement(
            _reactModalDialog.ModalContainer,
            { onClose: this.handleClose },
            _react2.default.createElement(
              _reactModalDialog.ModalDialog,
              { onClose: this.handleClose },
              _react2.default.createElement(
                'h2',
                null,
                'Poru\u010Dili ste: '
              ),
              _react2.default.createElement(
                'p',
                null,
                this.props.proiz.naslov
              ),
              _react2.default.createElement(
                'p',
                null,
                'Koli\u010Dina: ',
                this.state.kolicina,
                ' '
              ),
              _react2.default.createElement(
                'p',
                null,
                'Cena: ',
                ukupno
              ),
              this.props.proiz.lepinjaIde ? _react2.default.createElement(
                'h3',
                null,
                'U somunu'
              ) : null,
              _react2.default.createElement(
                'div',
                null,
                this.props.proiz.lepinjaIde ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', checked: this.state.uSomunu,
                    onClick: () => {
                      this.setState({
                        uSomunu: !this.state.uSomunu
                      });
                    }
                  }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Da'
                  )
                ) : null
              ),
              this.props.proiz.priloziIdu ? _react2.default.createElement(
                'h3',
                null,
                'Prilozi'
              ) : null,
              _react2.default.createElement(
                'div',
                null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('kečap')) {
                        let a = this.state.prilozi.filter(item => item !== 'kečap');

                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'kečap']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Ke\u010Dap'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('majonez')) {
                        let removedItem = this.state.prilozi.filter(item => item !== 'majonez');
                        this.setState({
                          prilozi: removedItem
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'majonez']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Majonez'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('senf')) {
                        let a = this.state.prilozi.filter(item => item !== 'senf');
                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'senf']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Senf'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('pavlaka')) {
                        let a = this.state.prilozi.filter(item => item !== 'pavlaka');
                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'pavlaka']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Pavlaka'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('kupus')) {
                        let a = this.state.prilozi.filter(item => item !== 'kupus');
                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'kupus']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Kupus'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('luk')) {
                        let a = this.state.prilozi.filter(item => item !== 'luk');

                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'luk']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Luk'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('ljutenica')) {
                        let a = this.state.prilozi.filter(item => item !== 'ljutenica');

                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'ljutenica']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Ljutenica'
                  )
                ) : null,
                this.props.proiz.priloziIdu ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', onClick: () => {
                      if (this.state.prilozi.includes('tucana paprika')) {
                        let a = this.state.prilozi.filter(item => item !== 'tucana paprika');
                        this.setState({
                          prilozi: a
                        });
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'tucana paprika']
                        });
                      }
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Tucana paprika'
                  )
                ) : null
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'button',
                  { style: stylee.buttonStyle, onClick: () => this.handleClose() },
                  'Otka\u017Ei'
                ),
                _react2.default.createElement(
                  'button',
                  { style: stylee.buttonStyle, onClick: () => {
                      this.upaliIncrement();
                      this.handleClose();
                      this.showAlert();
                      Popup.alert('Dodali ste ' + this.state.kolicina + 'x ' + this.props.proiz.naslov + ' u korpu!');
                    } },
                  'Potvrdi'
                )
              )
            )
          )
        )
      )
    );
  }
}) || _class);
exports.default = ProizvodItem;

const stylee = {
  buttonStyle: {
    fontSize: '19px',
    height: '40px',
    width: '100px',
    color: 'white',
    fontWeight: '900',
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: '10px 20px',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = __webpack_require__(10);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _TopHero = __webpack_require__(6);

var _TopHero2 = _interopRequireDefault(_TopHero);

var _NavBar = __webpack_require__(54);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

var _graphqlTag = __webpack_require__(11);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _jsMd = __webpack_require__(66);

var _jsMd2 = _interopRequireDefault(_jsMd);

var _Loading = __webpack_require__(9);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadableComponentForAdmin = (0, _reactLoadable2.default)({
  loader: () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 91)),
  loading: _Loading2.default
});
let Admin = (_dec = (0, _reactRedux.connect)(state => ({ counter: state.counter, orders: state.orders, users: state.users })), _dec2 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  query giveMeUsers($password: String!, $userName: String!) {
    allUserAdmins(filter: { password: $password, userName: $userName}) {
      userName
      password
    }
  }`, {
  options: props => ({
    variables: {
      userName: props.users.userName,
      password: props.users.password
    }
  })
}), _dec(_class = _dec2(_class = class Admin extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: '',
      inputOn: false,
      enteredPin: '',
      enteredUsername: ''
    };
    this.checkPin = this._checkPin.bind(this);
    this.handleChangePass = this._handleChangePass.bind(this);
    this.handleChangeUser = this._handleChangeUser.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window.document) {
      if (localStorage.getItem("userName") === null || localStorage.getItem("password") === null) {} else {
        this.setState({
          inputOn: true
        });
      }
    }
  }
  _handleChangePass(event) {
    this.setState({ enteredPin: event.target.value });
    let password = (0, _jsMd2.default)(event.target.value);
    this.props.dispatch({
      type: 'CHANGE_PASSWORD',
      password
    });
  }
  _handleChangeUser(event) {
    this.setState({ enteredUsername: event.target.value });
    this.props.dispatch({
      type: 'CHANGE_USERNAME',
      userName: event.target.value
    });
  }
  async _checkPin() {
    const respons = await this.props.data.refetch();
    if (!respons.data.loading && respons.data.allUserAdmins.length) {
      let userName = respons.data.allUserAdmins[0].userName;
      let password = respons.data.allUserAdmins[0].password;
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      this.setState({
        inputOn: true
      });
    }
  }
  render() {
    let putinput = _react2.default.createElement('div', null);
    if (!this.state.inputOn) {
      putinput = _react2.default.createElement(
        'div',
        { className: _styles2.default.adminLog },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { value: this.state.enteredUsername, placeholder: 'Username', onChange: this.handleChangeUser, type: 'text' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { className: _styles2.default.kiki, value: this.state.enteredPin, type: 'password', placeholder: 'Password', onChange: this.handleChangePass, type: 'text' })
          ),
          _react2.default.createElement(
            'h3',
            { onClick: this.checkPin },
            'Unesite \u0160ifru'
          )
        )
      );
    } else {
      putinput = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(LoadableComponentForAdmin, null)
      );
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_TopHero2.default, { title: 'ADMIN', subtitle: 'Kontrolni Panel', bgImage: { backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/q_53/v1513960509/admin_et97zo.jpg")' } }),
      putinput
    );
  }
}) || _class) || _class);
exports.default = Admin;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

let NavBar = class NavBar extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.handleChange = value => {
      localStorage.removeItem("userName");
      localStorage.removeItem("password");
      window.location.reload();
    };

    this.state = {
      value: 'a'
    };
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.adminNavbar },
      _react2.default.createElement(
        'div',
        { style: { width: '1000px', margin: '0 auto' } },
        _react2.default.createElement(
          'div',
          { style: { float: 'right' } },
          _react2.default.createElement(
            'button',
            { href: '#', onClick: () => {
                this.handleChange();
              } },
            'Izlogujte se'
          )
        )
      )
    );
  }
};
exports.default = NavBar;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(8);

var _reactHelmet = __webpack_require__(15);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routing = __webpack_require__(29);

var _all_messages = __webpack_require__(58);

var _all_messages2 = _interopRequireDefault(_all_messages);

__webpack_require__(56);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _Footer = __webpack_require__(41);

var _Footer2 = _interopRequireDefault(_Footer);

var _MainMenu = __webpack_require__(47);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _AboutUs = __webpack_require__(32);

var _AboutUs2 = _interopRequireDefault(_AboutUs);

var _Gally = __webpack_require__(42);

var _Gally2 = _interopRequireDefault(_Gally);

var _NaruciNesto = __webpack_require__(48);

var _NaruciNesto2 = _interopRequireDefault(_NaruciNesto);

var _ContactUs = __webpack_require__(33);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Admin = __webpack_require__(53);

var _Admin2 = _interopRequireDefault(_Admin);

var _Korpa = __webpack_require__(45);

var _Korpa2 = _interopRequireDefault(_Korpa);

var _Home = __webpack_require__(44);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 92)).then(WebFont => {
    WebFont.load({
      google: {
        families: ['Ubuntu', 'sans-serif']
      }
    });
  });
}

const Home = ({ match }) => {
  return _react2.default.createElement(_Home2.default, null);
};

const Admin = () => _react2.default.createElement(_Admin2.default, null);

const About = ({ match }) => _react2.default.createElement(_AboutUs2.default, null);
const Contact = ({ match }) => _react2.default.createElement(_ContactUs2.default, null);

const Galerija = ({ match }) => _react2.default.createElement(_Gally2.default, null);

const Naruci = ({ match }) => _react2.default.createElement(_NaruciNesto2.default, null);

const Bucket = () => _react2.default.createElement(_Korpa2.default, null);

const WhenNotFound = () => _react2.default.createElement(
  _routing.NotFound,
  null,
  _react2.default.createElement(
    'h1',
    null,
    'Unknown route - the 404 handler was triggered!'
  )
);

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
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/about', component: About }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/galerija', component: Galerija }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/contact', component: Contact }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/page/naruci', component: Naruci }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/admin', component: Admin }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/korpa', component: Bucket }),
    _react2.default.createElement(_reactRouterDom.Route, { component: WhenNotFound })
  ),
  _react2.default.createElement(_Footer2.default, null)
);

/***/ }),
/* 56 */
/***/ (function(module, exports) {



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hamburger.07e5a738b24d339d7aef5c49a8f6dbf0.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllMessages"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Message"},"directives":[]}]}}]}}],"loc":{"start":0,"end":91}};
    doc.loc.source = {"body":"#import \"./message.gql\"\n\nquery AllMessages {\n  allMessages(first:1) {\n    ...Message\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(59).definitions));


      module.exports = doc;
    


/***/ }),
/* 59 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Message"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Message"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"text"},"arguments":[],"directives":[],"selectionSet":null}]}}],"loc":{"start":0,"end":39}};
    doc.loc.source = {"body":"fragment Message on Message {\n  text\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 60 */
/***/ (function(module, exports) {

module.exports = require("boxen");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("js-md5");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("koa-compress");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("koa-send");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("microseconds");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-alert");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/foursquare");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/trash");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/tripadvisor");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/youtube-square");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-loader");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("xoauth2");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports) {

module.exports = require("webfontloader");

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-web-notification");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("react-photoswipe");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("react-window-size");

/***/ })
/******/ ]);