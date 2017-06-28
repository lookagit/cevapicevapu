webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_apollo__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_redux__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_app__ = __webpack_require__(178);
// Browser entry point, for Webpack.  We'll grab the browser-flavoured
// versions of React mounting, routing etc to hook into the DOM

// ----------------------
// IMPORTS

// Enable async/await and generators, cross-browser


// Patch global.`fetch` so that Apollo calls to GraphQL work


// React parts



// Browser routing


// Apollo Provider. This HOC will 'wrap' our React component chain
// and handle injecting data down to any listening component


// Grab the shared Apollo Client


// Custom redux store creator.  This will allow us to create a store 'outside'
// of Apollo, so we can apply our own reducers and make use of the Redux dev
// tools in the browser


// Root component.  This is our 'entrypoint' into the app.  If you're using
// the ReactQL starter kit for the first time, `src/app.js` is where
// you can start editing to add your own code


// ----------------------

// Create a new browser Apollo client
var client = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_kit_lib_apollo__["a" /* browserClient */])();

// Create a new Redux store
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_kit_lib_redux__["a" /* default */])(client);

// Create the 'root' entry point into the app.  If we have React hot loading
// (i.e. if we're in development), then we'll wrap the whole thing in an
// <AppContainer>.  Otherwise, we'll jump straight to the browser router
function doRender() {
  __WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Root, null), document.getElementById('main'));
}

// The <Root> component.  We'll run this as a self-contained function since
// we're using a bunch of temporary vars that we can safely discard.
//
// If we have hot reloading enabled (i.e. if we're in development), then
// we'll wrap the whole thing in <AppContainer> so that our views can respond
// to code changes as needed
var Root = function () {
  // Wrap the component hierarchy in <BrowserRouter>, so that our children
  // can respond to route changes
  var Chain = function Chain() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
      { store: store, client: client },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_app__["a" /* default */], null)
      )
    );
  };

  // React hot reloading -- only enabled in development.  This branch will
  // be shook from production, so we can run a `require` statement here
  // without fear that it'll inflate the bundle size
  if (false) {
    // <AppContainer> will respond to our Hot Module Reload (HMR) changes
    // back from WebPack, and handle re-rendering the chain as needed
    var AppContainer = require('react-hot-loader').AppContainer;

    // Start our 'listener' at the root component, so that any changes that
    // occur in the hierarchy can be captured
    module.hot.accept('src/app', function () {
      // Refresh the entry point of our app, to get the changes.

      // eslint-disable-next-line
      require('src/app').default;

      // Re-render the hierarchy
      doRender();
    });

    return function () {
      return React.createElement(
        AppContainer,
        null,
        React.createElement(Chain, null)
      );
    };
  }
  return Chain;
}();

doRender();

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APOLLO; });
/* unused harmony export BUNDLE_ANALYZER */
/* eslint-disable import/prefer-default-export */

var APOLLO = {
  uri: 'https://api.graph.cool/simple/v1/cinomw2r1018601o42x5z69uc'
};

var BUNDLE_ANALYZER = {
  openAnalyzer: false
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* unused harmony export serverClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_project__ = __webpack_require__(165);
// ----------------------
// IMPORTS

// Apollo client library


// Custom configuration/settings


// ----------------------

// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.
var networkInterface = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_apollo__["createNetworkInterface"])({
  uri: __WEBPACK_IMPORTED_MODULE_1_config_project__["a" /* APOLLO */].uri
});

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
function createClient() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new __WEBPACK_IMPORTED_MODULE_0_react_apollo__["ApolloClient"](Object.assign({
    reduxRootSelector: function reduxRootSelector(state) {
      return state.apollo;
    },
    networkInterface: networkInterface
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reducers_counter__ = __webpack_require__(169);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-underscore-dangle */

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


// ----------------------

// Detect if we're both in the browser, AND we have dehydrated state
var hasState = !!(!false && window.__STATE__);

// All reducers, in one array -- CHANGE THIS TO REFLECT YOUR OWN REDUCERS!
var reducers = [__WEBPACK_IMPORTED_MODULE_3_reducers_counter__["a" /* default */]];

// Helper function that 'unwinds' the { reducerKey {state, reducer} } format
// from each imported reducer, and either returns the `reducer` function (if
// true) or the `state`, as an Immutable collection or the default state
function unwind() {
  var _ref;

  var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  // Get the combined reducers `reducer` or `state` object
  var r = Object.assign.apply(Object, [{}].concat(_toConsumableArray((_ref = []).concat.apply(_ref, _toConsumableArray(reducers.map(function (arr) {
    return Object.keys(arr).map(function (key) {
      return _defineProperty({}, key, arr[key][reducer ? 'reducer' : 'state']);
    });
  }))))));

  // If this is a reducer, return at this point
  if (reducer) return r;

  // We're looking for the state -- so let's map it
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.keys(r).map(function (key) {
    return _defineProperty({}, key, hasState && __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default()(window.__STATE__[key]) || r[key]);
  }))));
}

function createNewStore(apolloClient) {
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
  // By default, we'll use just the apollo reducer.  We can easily add our
  // own here, for global store management outside of Apollo
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({
    apollo: apolloClient.reducer()
  }, unwind())),
  // Initial server state, provided by the server.
  _extends({
    apollo: hasState && window.__STATE__.apollo || {}
  }, unwind(false)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(apolloClient.middleware(), __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a),
  // Enable Redux Devtools on the browser, for easy state debugging
  // eslint-disable-next-line no-underscore-dangle
  !false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  }));

  return store;
}

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Redirect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(84);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-param-reassign */

// ----------------------
// IMPORTS






// ----------------------

// <Status code="xxx"> component.  Updates the context router's context, which
// can be used by the server handler to respond to the status on the server.

var Status = function (_React$PureComponent) {
  _inherits(Status, _React$PureComponent);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).apply(this, arguments));
  }

  _createClass(Status, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          code = _props.code,
          children = _props.children;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["d" /* Route */], { render: function render(_ref) {
          var staticContext = _ref.staticContext;

          if (staticContext) {
            staticContext.status = code;
          }
          return children;
        } });
    }
  }]);

  return Status;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <NotFound> component.  If this renders on the server in development mode,
// it will attempt to proxyify the request to the upstream `webpack-dev-server`.
// In production, it will issue a hard 404 and render.  In the browser, it will
// simply render.


Status.propTypes = {
  code: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
Status.defaultProps = {
  children: null
};
var NotFound = function (_React$PureComponent2) {
  _inherits(NotFound, _React$PureComponent2);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: 404 },
        children
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

// <Redirect> component. Mirrors React Router's component by the same name,
// except it sets a 301/302 status code for setting server-side HTTP headers.
NotFound.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
NotFound.defaultProps = {
  children: null
};
var Redirect = function (_React$PureComponent3) {
  _inherits(Redirect, _React$PureComponent3);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, (Redirect.__proto__ || Object.getPrototypeOf(Redirect)).apply(this, arguments));
  }

  _createClass(Redirect, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          to = _props2.to,
          from = _props2.from,
          push = _props2.push,
          permanent = _props2.permanent;

      var code = permanent ? 301 : 302;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Status,
        { code: code },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["e" /* Redirect */], { to: to, from: from, push: push })
      );
    }
  }]);

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);
Redirect.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  permanent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
Redirect.defaultProps = {
  from: null,
  push: false,
  permanent: false
};

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_seamless_immutable__);
// Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// ----------------------
// IMPORTS

/* NPM */


// ----------------------

// Set the initial `counter.count` to 0.
//
// Technically, we don't need to use `Immutable()` at all in this very simple
// example -- it could just be a plain integer, if we want.  But wrapping it in
// a call to `Immutable()` makes it impossible for us to accidentally change
// this outside of Redux, which is a good pattern to enforce
var initialState = __WEBPACK_IMPORTED_MODULE_0_seamless_immutable___default()({
  count: 0
});

/* harmony default export */ __webpack_exports__["a"] = ({

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { stateKey: { state, reducer() } } -- the `stateKey` is where in the `state`
  // object starts looking, `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  counter: {
    state: initialState,
    reducer: function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments[1];

      if (action.type === 'INCREMENT_COUNTER') {
        return state.merge({
          count: state.count + 1
        });
      }
      return state;
    }
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var FeaturedLeft = function (_React$Component) {
  _inherits(FeaturedLeft, _React$Component);

  function FeaturedLeft(props) {
    _classCallCheck(this, FeaturedLeft);

    return _possibleConstructorReturn(this, (FeaturedLeft.__proto__ || Object.getPrototypeOf(FeaturedLeft)).call(this, props));
  }

  _createClass(FeaturedLeft, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { display: "flex", backgroundColor: "#f2ebe0" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.featured },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.featuredLeftImage, style: { backgroundImage: "url('pleska.jpg')" } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.featuredLeftText },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              null,
              'Osetite duh Sarajeva u centru Beograda'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together. He impression collecting delightful unpleasant by prosperous as on. End too talent she object mrs wanted remove giving.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.buttonP },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                null,
                'Pogledajte na\u0161u ponudu'
              )
            )
          )
        )
      );
    }
  }]);

  return FeaturedLeft;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (FeaturedLeft);

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.itemWrap },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footerItem },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'O NAMA'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                null,
                'Pro\u010Ditaj vi\u0161e ->'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footerItem },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'DOSTAVA'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Donosimo hranu za podrucje Beograda na kucnu adresu. Radno vreme dostave je od 08:00 - 22:00. Za porudzbine preko 2000rsd. dostava je besplatna. Pozovite nas i porucite vasu omiljenu hranu sa rostilja a mi cemo se pobrinuti da uzivate u kvalitetnoj hrani u toplini vaseg doma'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footerItem },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'REACH US'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square___default.a, { fill: '#fff', width: '3em', height: '3em' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram___default.a, { fill: '#fff', width: '3em', height: '3em' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square___default.a, { fill: '#fff', width: '3em', height: '3em' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.botFooter },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'DRAMA \u0106evapi Ori\u0111inale'
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderHero_js__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__HeaderHero_js__["a" /* default */], null)
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var HeaderHero = function (_React$Component) {
  _inherits(HeaderHero, _React$Component);

  function HeaderHero(props) {
    _classCallCheck(this, HeaderHero);

    return _possibleConstructorReturn(this, (HeaderHero.__proto__ || Object.getPrototypeOf(HeaderHero)).call(this, props));
  }

  _createClass(HeaderHero, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.heroHomepage },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.mbrArrowFloating },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.mbrArrowIcon })
          )
        )
      );
    }
  }]);

  return HeaderHero;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (HeaderHero);

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var InstaImage = function (_React$Component) {
  _inherits(InstaImage, _React$Component);

  function InstaImage(props) {
    _classCallCheck(this, InstaImage);

    var _this = _possibleConstructorReturn(this, (InstaImage.__proto__ || Object.getPrototypeOf(InstaImage)).call(this, props));

    _this.state = {
      srcStyle: {},
      tekst: '',
      cena: ''
    };
    return _this;
  }

  _createClass(InstaImage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.src && this.props.tekst) {
        this.setState({
          src: this.props.src,
          tekst: this.props.tekst
        });
        console.log("YOYO");
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.boxStylez },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bsInnerInner },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: this.state.src, className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.boxStylezInner })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bsText },
          this.state.tekst
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bsPrice },
          '330din'
        )
      );
    }
  }]);

  return InstaImage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (InstaImage);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ParalaxContainer = function (_React$Component) {
  _inherits(ParalaxContainer, _React$Component);

  function ParalaxContainer(props) {
    _classCallCheck(this, ParalaxContainer);

    var _this = _possibleConstructorReturn(this, (ParalaxContainer.__proto__ || Object.getPrototypeOf(ParalaxContainer)).call(this, props));

    _this.state = {
      stylee: {}
    };
    return _this;
  }

  _createClass(ParalaxContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.stylee) {
        var stylee = this.props.stylee;
        this.setState({
          stylee: stylee
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
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.parallax, style: this.state.stylee });
    }
  }]);

  return ParalaxContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ParalaxContainer);

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SectionHeadline = function (_React$Component) {
  _inherits(SectionHeadline, _React$Component);

  function SectionHeadline(props) {
    _classCallCheck(this, SectionHeadline);

    var _this = _possibleConstructorReturn(this, (SectionHeadline.__proto__ || Object.getPrototypeOf(SectionHeadline)).call(this, props));

    _this.state = {
      title: "",
      innerText: ""
    };
    return _this;
  }

  _createClass(SectionHeadline, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var title = this.props.title;
      var innerText = this.props.innerText;
      if (!innerText) {
        this.setState({
          title: title
        });
      } else {
        this.setState({
          title: title,
          innerText: innerText
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.sectionHeadlineMain },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.sectionHeadlineTitle },
          this.state.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.sectionHeadlineInnerText },
          this.state.innerText
        )
      );
    }
  }]);

  return SectionHeadline;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SectionHeadline);

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InstaImage_js__ = __webpack_require__(174);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var stylez = {
  margin: "0 auto",
  maxWidth: "1200px",
  display: "flex"
};
var srcFirst = {
  backgroundImage: 'url("http://www.lepaisrecna.rs/thumbnail.php?file=2017/05/najlepse_jelo_od_mlevenog_mesa_gurmanska_pljeskavica_sa_lukom_i_dimljenom_slaninom_recept_213236330.jpg&size=article_medium")'
};
var srcSecond = {
  backgroundImage: 'url("http://varna.zavedenia.com/system/storage/images/varna/medium/1427314c21da81f2f1bdf4d2dc6966cd4ed03.jpg")'
};
var srcThird = {
  backgroundImage: 'url("https://adriaticmedianethr.files.wordpress.com/2017/01/c487evapi.jpg?quality=100&strip=all&w=669&strip=all")'
};

var ThreeGallery = function (_React$Component) {
  _inherits(ThreeGallery, _React$Component);

  function ThreeGallery(props) {
    _classCallCheck(this, ThreeGallery);

    var _this = _possibleConstructorReturn(this, (ThreeGallery.__proto__ || Object.getPrototypeOf(ThreeGallery)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ThreeGallery, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.threeGallery },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: stylez },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InstaImage_js__["a" /* default */], { src: srcFirst, tekst: 'Gurmanska pljeskavica 300gr' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InstaImage_js__["a" /* default */], { src: srcSecond, tekst: 'Leskovacka muckalica 300gr' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InstaImage_js__["a" /* default */], { src: srcThird, tekst: '10 \u0107evapa 300gr' })
        )
      );
    }
  }]);

  return ThreeGallery;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ThreeGallery);

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_global_css__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logodrama_png__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logodrama_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__logodrama_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Header_js__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__SectionHeadline__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ParalaxContainer_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ThreeGallery_js__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FeaturedLeft_js__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Footer_js__ = __webpack_require__(171);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var stylee = {
  backgroundImage: 'url("https://www.esnlund.org/sites/default/files/events/images/barbecue-07.jpg")',
  height: '300px'
};
var sndlax = {
  backgroundImage: 'url("https://mojkrug.rs/wp-content/uploads/2016/06/savcic-1.jpg")',
  height: '350px'
};
var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Header_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SectionHeadline__["a" /* default */], { title: '\u0106evapi koje \u0107ete voleti', innerText: '100% organsko meso' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ParalaxContainer_js__["a" /* default */], { stylee: stylee }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__SectionHeadline__["a" /* default */], { title: 'Najbolji \u0107evapi u gradu', innerText: 'Probajte obave\u017Eno' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__ThreeGallery_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ParalaxContainer_js__["a" /* default */], { stylee: sndlax }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__FeaturedLeft_js__["a" /* default */], null)
  );
};

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
var Page = function Page(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h1',
    null,
    'Changed route: ',
    match.params.name
  );
};

// Create a route that will be displayed when the code isn't found
var WhenNotFound = function WhenNotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__["a" /* NotFound */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Unknown route - the 404 handler was triggered!'
    )
  );
};

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
var Stats = function Stats() {
  var info = [['Environment', "development"]];

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_9__styles_css___default.a.data },
    info.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: key },
        key,
        ': ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          val
        )
      );
    })
  );
};

// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
var GraphQLMessage = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql___default.a), _dec(_class = function (_React$PureComponent) {
  _inherits(GraphQLMessage, _React$PureComponent);

  function GraphQLMessage() {
    _classCallCheck(this, GraphQLMessage);

    return _possibleConstructorReturn(this, (GraphQLMessage.__proto__ || Object.getPrototypeOf(GraphQLMessage)).apply(this, arguments));
  }

  _createClass(GraphQLMessage, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var message = data.allMessages && data.allMessages[0].text;
      var isLoading = data.loading ? 'yes' : 'nope';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Message from GraphQL server: ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'em',
            null,
            message
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Currently loading?: ',
          isLoading
        )
      );
    }
  }]);

  return GraphQLMessage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class);

// Example of CSS, SASS and LESS styles being used together

GraphQLMessage.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    allMessages: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    }))
  })
};
var Styles = function Styles() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_9__styles_css___default.a.styleExamples },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_9__styles_css___default.a.example },
      'Styled by CSS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: sass.example },
      'Styled by SASS'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: less.example },
      'Styled by LESS'
    )
  );
};

// Sample component that demonstrates using a part of the Redux store
// outside of Apollo.  We can import own custom reducers in `kit/lib/redux`
// and 'listen' to them here
var ReduxCounter = (_dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* connect */])(function (state) {
  return { counter: state.counter };
}), _dec2(_class2 = function (_React$PureComponent2) {
  _inherits(ReduxCounter, _React$PureComponent2);

  function ReduxCounter() {
    var _ref4;

    var _temp, _this2, _ret;

    _classCallCheck(this, ReduxCounter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref4 = ReduxCounter.__proto__ || Object.getPrototypeOf(ReduxCounter)).call.apply(_ref4, [this].concat(args))), _this2), _this2.triggerIncrement = function () {
      _this2.props.dispatch({
        type: 'INCREMENT_COUNTER'
      });
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total


  _createClass(ReduxCounter, [{
    key: 'render',
    value: function render() {
      var count = this.props.counter.count;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Listening to Redux counter: ',
          count
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.triggerIncrement },
          'Increment'
        )
      );
    }
  }]);

  return ReduxCounter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent)) || _class2);

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name

ReduxCounter.propTypes = {
  counter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    count: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
  })
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_helmet___default.a, {
      title: 'ReactQL application',
      meta: [{
        name: 'description',
        content: 'ReactQL starter kit app'
      }] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_9__styles_css___default.a.hello },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_10__logodrama_png___default.a, alt: 'ReactQL', className: __WEBPACK_IMPORTED_MODULE_9__styles_css___default.a.logo }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/' },
            'Po\u010Detna'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/page/about' },
            'Jelovnik'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/page/contact' },
            'O nama'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Link */],
            { to: '/old/path' },
            'Kontakt'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Switch */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Route */], { exact: true, path: '/', component: Home }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Route */], { path: '/page/:name', component: Page }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__["b" /* Redirect */], { from: '/old/path', to: '/new/path' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Route */], { component: WhenNotFound })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Footer_js__["a" /* default */], null)
  );
});

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logodrama.5ae232c68c2a191f474e97e9bff36f0c.png";

/***/ }),

/***/ 205:
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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(206).definitions));

module.exports = doc;

/***/ }),

/***/ 206:
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

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-3q0nqQ9ZKcBd8-DB7rcoyt","sectionHeadlineMain":"sectionHeadlineMain-zwasbjTotgWnhSsqYpp1y","sectionHeadlineTitle":"sectionHeadlineTitle-2xKReaoMX9LGx3D3-7hbWW","sectionHeadlineInnerText":"sectionHeadlineInnerText-1S8DW8gKQS0kFqXuobcW_t","threeGallery":"threeGallery-3SNY77P36uO49UUwhntBuA","boxStylez":"boxStylez-3xEtHa77Snt19pB6Tn-Ipu","bsPrice":"bsPrice-3ljTYa9XaCKTLnoE1QLFa2","bsText":"bsText-3glj6OL5XYMIoQa9X2rcTh","bsInnerInner":"bsInnerInner-Sn87SKTD9jjTjQRG70MrY","boxStylezInner":"boxStylezInner-dPOMWFk0hOl84lqJTVTCX","featured":"featured-3Ps0u1AgXehbGvhcSPQjNr","featuredLeftImage":"featuredLeftImage-93E_W98y5LD8DDdqKXX-p","featuredLeftText":"featuredLeftText-3f67f6hj9E1nl51sVq7CQx","buttonP":"buttonP-1pnKB7HeunberheJ1lD_fk","mbrArrowFloating":"mbrArrowFloating-2H7ACIT3-RYgphXNuk-zWV","mbrArrowIcon":"mbrArrowIcon-3X-jT_gBvLLznHbfVKdTQ0","a":"a-3CLQjXJ95FwwMe6Mc8CB2V","footer":"footer-2HnTKYGhfyVJTtF-PvXmqO","itemWrap":"itemWrap-PJ9uOXSq66jscH11OqUPJ","footerItem":"footerItem-2E3DCIxlNyGBBtaKIPiv4-","botFooter":"botFooter-1xPRJXF5YLUPsHHjsqKgbd"};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"main-vv2718wGHLD6lThS8mcwI","parallax":"parallax-3oYy3E6XoJCClgZR0R7xDr","caption":"caption-21tp0xAudjV1bavcaINc0T","border":"border-aQNY2OtxwHs6C26ekD14K","heroHomepage":"heroHomepage-3cr8Nd5W9Je_pIy-MhMdqV","hello":"hello-1P9zCbIx8YQ5eID6A-67d6","logo":"logo-1tNzgJsJwXMqFQ0a4xMkPk","data":"data-1oklYPlS4mQJRj2Dp24Czw","styleExamples":"styleExamples-2cmVxjYoxVhR_tpCfyIq_T","example":"example-3quOHBYrr7YOUvefuRPyGa"};

/***/ })

},[367]);
//# sourceMappingURL=browser.js.map