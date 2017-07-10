webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example-3q0nqQ9ZKcBd8-DB7rcoyt","boxStylez":"boxStylez-3xEtHa77Snt19pB6Tn-Ipu","bsPrice":"bsPrice-3ljTYa9XaCKTLnoE1QLFa2","bsText":"bsText-3glj6OL5XYMIoQa9X2rcTh","bsInnerInner":"bsInnerInner-Sn87SKTD9jjTjQRG70MrY","boxStylezInner":"boxStylezInner-dPOMWFk0hOl84lqJTVTCX","mbrArrowFloating":"mbrArrowFloating-2H7ACIT3-RYgphXNuk-zWV","mbrArrowIcon":"mbrArrowIcon-3X-jT_gBvLLznHbfVKdTQ0","a":"a-3CLQjXJ95FwwMe6Mc8CB2V"};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/serbianburger.5977e5e437030eb1f711c7b7b64f570e.jpg";

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_apollo__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kit_lib_redux__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_app__ = __webpack_require__(214);
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

/***/ 192:
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = browserClient;
/* unused harmony export serverClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config_project__ = __webpack_require__(192);
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createNewStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_seamless_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_seamless_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reducers_counter__ = __webpack_require__(196);
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* unused harmony export Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(45);
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { render: function render(_ref) {
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_seamless_immutable__ = __webpack_require__(167);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopHero_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serbianburger_jpg__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serbianburger_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__serbianburger_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContentBoxes_js__ = __webpack_require__(201);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AboutUs = function (_React$Component) {
  _inherits(AboutUs, _React$Component);

  function AboutUs() {
    _classCallCheck(this, AboutUs);

    return _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).apply(this, arguments));
  }

  _createClass(AboutUs, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TopHero_js__["a" /* default */], { title: 'O NAMA', subtitle: '\u0106evapi sa srcem za sva\u010Diju du\u0161u', bgImage: { backgroundImage: 'url("/sarajevski-cevap-drama.jpg")' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ContentBoxes_js__["a" /* default */], null)
      );
    }
  }]);

  return AboutUs;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlaCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopHero_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serbianburger_jpg__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serbianburger_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__serbianburger_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlaCartGridMenu_js__ = __webpack_require__(199);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AlaCart = function (_React$Component) {
  _inherits(AlaCart, _React$Component);

  function AlaCart() {
    _classCallCheck(this, AlaCart);

    return _possibleConstructorReturn(this, (AlaCart.__proto__ || Object.getPrototypeOf(AlaCart)).apply(this, arguments));
  }

  _createClass(AlaCart, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TopHero_js__["a" /* default */], { title: 'JELOVNIK', subtitle: 'Ovaj obrok necete zaboraviti', bgImage: { backgroundImage: 'url("/o-nama-slika.jpg")' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AlaCartGridMenu_js__["a" /* default */], null)
      );
    }
  }]);

  return AlaCart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentBoxes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ContentBoxes = function (_React$Component) {
  _inherits(ContentBoxes, _React$Component);

  function ContentBoxes(props) {
    _classCallCheck(this, ContentBoxes);

    return _possibleConstructorReturn(this, (ContentBoxes.__proto__ || Object.getPrototypeOf(ContentBoxes)).call(this, props));
  }

  _createClass(ContentBoxes, [{
    key: 'render',
    value: function render() {
      var _ref, _ref2, _ref3;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["a" /* Grid */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { style: { textAlign: 'center', textTransform: 'uppercase', margin: '60px 0' } },
          'Pogledajte nasu jedinstvenu ponudu i uzivajte'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["b" /* Row */],
          { style: { padding: '0' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 4, lg: 4 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')", boxShadow: '1px 3px 15px rgba(0,0,0,.26)', backgroundPosition: 'center center', backgroundSize: 'cover' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { marginTop: '10px', marginBottom: '0' } },
              'Pljeskavica Drama'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', marginBottom: '0' } },
              'Sastojci: 100% junece meso'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' } },
              'Cena: 330rsd'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 4, lg: 4 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')", boxShadow: '1px 3px 15px rgba(0,0,0,.26)', backgroundPosition: 'center center', backgroundSize: 'cover' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { marginTop: '10px', marginBottom: '0' } },
              'Pljeskavica Drama'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', marginBottom: '0' } },
              'Sastojci: 100% junece meso'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' } },
              'Cena: 330rsd'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 4, lg: 4 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')", boxShadow: '1px 3px 15px rgba(0,0,0,.26)', backgroundPosition: 'center center', backgroundSize: 'cover' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { marginTop: '10px', marginBottom: '0' } },
              'Pljeskavica Drama'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', marginBottom: '0' } },
              'Sastojci: 100% junece meso'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' } },
              'Cena: 330rsd'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["b" /* Row */],
          { style: { padding: '60px 0 60px 0' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 4, lg: 4 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/pljeskaPngZaMenu.png')", backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: (_ref = { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' }, _defineProperty(_ref, 'textAlign', 'center'), _defineProperty(_ref, 'fontSize', '30px'), _defineProperty(_ref, 'marginBottom', '0'), _ref) },
              'Cena: 330rsd'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { marginTop: '10px', marginBottom: '0', fontWeight: '900', textAlign: 'center' } },
              'Pljeskavica Drama'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', marginBottom: '0', textAlign: 'center' } },
              '100% junece meso, 300gr.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 4, lg: 4 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/pljeskaPngZaMenu.png')", backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: (_ref2 = { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' }, _defineProperty(_ref2, 'textAlign', 'center'), _defineProperty(_ref2, 'fontSize', '30px'), _defineProperty(_ref2, 'marginBottom', '0'), _ref2) },
              'Cena: 330rsd'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { marginTop: '10px', marginBottom: '0', fontWeight: '900', textAlign: 'center' } },
              'Pljeskavica Drama'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', marginBottom: '0', textAlign: 'center' } },
              '100% junece meso, 300gr.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 4, lg: 4 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: '100%', height: '300px', backgroundImage: "url('/pljeskaPngZaMenu.png')", backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: (_ref3 = { marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold' }, _defineProperty(_ref3, 'textAlign', 'center'), _defineProperty(_ref3, 'fontSize', '30px'), _defineProperty(_ref3, 'marginBottom', '0'), _ref3) },
              'Cena: 330rsd'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { marginTop: '10px', marginBottom: '0', fontWeight: '900', textAlign: 'center' } },
              'Pljeskavica Drama'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { marginTop: '5px', marginBottom: '0', textAlign: 'center' } },
              '100% junece meso, 300gr.'
            )
          )
        )
      );
    }
  }]);

  return ContentBoxes;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TopHero_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_instagram__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_instagram___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_instagram__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_youtube_square__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_youtube_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_youtube_square__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ContactUs = function (_React$Component) {
  _inherits(ContactUs, _React$Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  _createClass(ContactUs, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TopHero_js__["a" /* default */], { title: 'Kontakt', subtitle: 'Ovde su sve nase informacije za kontakt', bgImage: { backgroundImage: 'url("/sarajevski-cevap-drama.jpg")' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__["a" /* Grid */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__["b" /* Row */],
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.contactRowOne },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__["c" /* Col */],
              { xsOffset: 1, md: 10, smOffset: 0, mdOffset: 1 },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__["b" /* Row */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__["c" /* Col */],
                  { xs: 12, sm: 8, md: 8, lg: 8, className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.contactColTwo },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'ime', placeholder: 'Ime' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'ime', placeholder: 'Email Adresa' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'ime', placeholder: 'Predmet' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.poruka },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { type: 'text', name: 'ime', placeholder: 'Poruka' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.posalji, type: 'submit' },
                        'POSALJI'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_styled_flexboxgrid__["c" /* Col */],
                  { xs: 12, sm: 4, md: 4, lg: 4, className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.contactColOne },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    { styles: 'margin:0;' },
                    'INFORMACIJE'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    null,
                    'Adresa: '
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Beograd, Dositejeva, 7'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    null,
                    'Telefon:'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    '066/449-411'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    null,
                    'E-mail:'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'info@drama.rs'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    null,
                    'Radno Vreme:'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    '09:00h - 24:00h'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Vikendom 09:00h - 03:00h'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    null,
                    'Dostava:'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    '11:00 - 19:35'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ContactUs;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentBoxes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ContentBoxes = function (_React$Component) {
  _inherits(ContentBoxes, _React$Component);

  function ContentBoxes(props) {
    _classCallCheck(this, ContentBoxes);

    return _possibleConstructorReturn(this, (ContentBoxes.__proto__ || Object.getPrototypeOf(ContentBoxes)).call(this, props));
  }

  _createClass(ContentBoxes, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["a" /* Grid */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["b" /* Row */],
          { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.rowTwo, style: { padding: '0 0 60px 0' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 8, smOffset: 2 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.tekstTwo },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { style: { textAlign: "center" } },
                '10 GODINA VREDNOG RADA'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { style: { textAlign: "center" } },
                'Ko bi to radio da nije nas'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { style: { textAlign: "justify" } },
                'Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 6 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/belo-meso-na-rostilju.jpg', style: { width: "100%", height: "auto" } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { textAlign: "center" } },
              'KVALITET'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              { style: { textAlign: "center" } },
              'Ko bi to radio da nije nas'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { textAlign: "justify" } },
              ' Samo kod nas po najpovoljnijim cenama mozete da uzivate u vrhunskom ukusu i garantovanom kvalitetu. Vas izbor je nasa stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
            { xs: 12, sm: 6 },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/belo-meso-na-rostilju.jpg', style: { width: "100%", height: "auto" } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: { textAlign: "center" } },
              'VAS IZBOR'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              { style: { textAlign: "center" } },
              'Ko bi to radio da nije nas'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: { textAlign: "justify" } },
              ' Samo kod nas po najpovoljnijim cenama mozete da uzivate u vrhunskom ukusu i garantovanom kvalitetu. Vas izbor je nasa stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.'
            )
          )
        )
      );
    }
  }]);

  return ContentBoxes;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
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
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featured },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featuredLeftImage, style: { backgroundImage: "url('pleska.jpg')" } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featuredLeftText },
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
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.buttonP },
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(45);
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
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.footer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.itemWrap },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.footerItem },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'DRU\u0160TVENE MRE\u017DE'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_lib_fa_facebook_square___default.a, { fill: '#fff', width: '3em', height: '3em' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_icons_lib_fa_instagram___default.a, { fill: '#fff', width: '3em', height: '3em' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_youtube_square___default.a, { fill: '#fff', width: '3em', height: '3em' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.footerItem, style: { width: "450px" } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.linkFooterUl },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.linkFooter },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["d" /* Link */],
                    { to: '/' },
                    'Po\u010Detna'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.linkFooter },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["d" /* Link */],
                    { to: '/page/jelovnik' },
                    'Jelovnik'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.linkFooter },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["d" /* Link */],
                    { to: '/page/galerija' },
                    'Galerija'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.linkFooter },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["d" /* Link */],
                    { to: '/page/about' },
                    'O nama'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.linkFooter },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["d" /* Link */],
                    { to: '/page/contact' },
                    'Kontakt'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.botFooter },
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gally; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopHero_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GallyGrid_js__ = __webpack_require__(205);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Gally = function (_React$Component) {
  _inherits(Gally, _React$Component);

  function Gally() {
    _classCallCheck(this, Gally);

    return _possibleConstructorReturn(this, (Gally.__proto__ || Object.getPrototypeOf(Gally)).apply(this, arguments));
  }

  _createClass(Gally, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TopHero_js__["a" /* default */], { title: 'GALERIJA', subtitle: 'Dobrodosli na 100% june\u0107u pljeskavicu', bgImage: { backgroundImage: 'url("/o-nama-slika.jpg")' } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__GallyGrid_js__["a" /* default */], null)
      );
    }
  }]);

  return Gally;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallyGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GallyLib__ = __webpack_require__(206);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





function makeUnsplashSrc(id) {
  return 'https://images.unsplash.com/photo-' + id + '?dpr=2&auto=format&w=1024&h=1024';
}

function makeUnsplashSrcSet(id, size) {
  return 'https://images.unsplash.com/photo-' + id + '?dpr=2&auto=format&w=' + size + ' ' + size + 'w';
}

function makeUnsplashThumbnail(id) {
  var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'landscape';

  var dimensions = orientation === 'square' ? 'w=300&h=300' : 'w=240&h=159';

  return 'https://images.unsplash.com/photo-' + id + '?dpr=2&auto=format&crop=faces&fit=crop&' + dimensions;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

var DEFAULT_IMAGES = [{ id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
{ id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
{ id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
{ id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
{ id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }];

var GallyGrid = function (_React$Component) {
  _inherits(GallyGrid, _React$Component);

  function GallyGrid(props) {
    _classCallCheck(this, GallyGrid);

    var _this = _possibleConstructorReturn(this, (GallyGrid.__proto__ || Object.getPrototypeOf(GallyGrid)).call(this, props));

    _this.closeLightbox = function () {
      console.log("HOJHOJHJO");
      _this.setState({
        lightboxIsOpen: false
      });
    };

    _this.state = {
      lightboxIsOpen: true
    };
    return _this;
  }

  _createClass(GallyGrid, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["a" /* Grid */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Under Construction'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["b" /* Row */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
              { xs: 12 },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GallyLib__["a" /* default */], { images: DEFAULT_IMAGES.map(function (_ref) {
                  var caption = _ref.caption,
                      id = _ref.id,
                      orientation = _ref.orientation,
                      useForDemo = _ref.useForDemo;
                  return {
                    src: makeUnsplashSrc(id),
                    thumbnail: makeUnsplashThumbnail(id, orientation),
                    srcset: [makeUnsplashSrcSet(id, 1024), makeUnsplashSrcSet(id, 800), makeUnsplashSrcSet(id, 500), makeUnsplashSrcSet(id, 320)],
                    caption: caption,
                    orientation: orientation,
                    useForDemo: useForDemo
                  };
                }) })
            )
          )
        )
      );
    }
  }]);

  return GallyGrid;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_images__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_images__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Gallery = function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery() {
		_classCallCheck(this, Gallery);

		var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

		_this.state = {
			lightboxIsOpen: false,
			currentImage: 0
		};

		_this.closeLightbox = _this.closeLightbox.bind(_this);
		_this.gotoNext = _this.gotoNext.bind(_this);
		_this.gotoPrevious = _this.gotoPrevious.bind(_this);
		_this.gotoImage = _this.gotoImage.bind(_this);
		_this.handleClickImage = _this.handleClickImage.bind(_this);
		_this.openLightbox = _this.openLightbox.bind(_this);
		return _this;
	}

	_createClass(Gallery, [{
		key: 'openLightbox',
		value: function openLightbox(index, event) {
			event.preventDefault();
			this.setState({
				currentImage: index,
				lightboxIsOpen: true
			});
		}
	}, {
		key: 'closeLightbox',
		value: function closeLightbox() {
			this.setState({
				currentImage: 0,
				lightboxIsOpen: false
			});
		}
	}, {
		key: 'gotoPrevious',
		value: function gotoPrevious() {
			this.setState({
				currentImage: this.state.currentImage - 1
			});
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext() {
			this.setState({
				currentImage: this.state.currentImage + 1
			});
		}
	}, {
		key: 'gotoImage',
		value: function gotoImage(index) {
			this.setState({
				currentImage: index
			});
		}
	}, {
		key: 'handleClickImage',
		value: function handleClickImage() {
			if (this.state.currentImage === this.props.images.length - 1) return;

			this.gotoNext();
		}
	}, {
		key: 'renderGallery',
		value: function renderGallery() {
			var _this2 = this;

			var images = this.props.images;


			if (!images) return;

			var gallery = images.filter(function (i) {
				return i.useForDemo;
			}).map(function (obj, i) {
				return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'a',
					{
						href: obj.src,
						className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important__["css"])(classes.thumbnail, classes[obj.orientation]),
						key: i,
						onClick: function onClick(e) {
							return _this2.openLightbox(i, e);
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: obj.thumbnail, className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important__["css"])(classes.source) })
				);
			});

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{ className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important__["css"])(classes.gallery) },
				gallery
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{ className: 'section' },
				this.props.heading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h2',
					null,
					this.props.heading
				),
				this.props.subheading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'p',
					null,
					this.props.subheading
				),
				this.renderGallery(),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_images___default.a, {
					currentImage: this.state.currentImage,
					images: this.props.images,
					isOpen: this.state.lightboxIsOpen,
					onClickImage: this.handleClickImage,
					onClickNext: this.gotoNext,
					onClickPrev: this.gotoPrevious,
					onClickThumbnail: this.gotoImage,
					onClose: this.closeLightbox,
					showThumbnails: this.props.showThumbnails,
					theme: this.props.theme
				})
			);
		}
	}]);

	return Gallery;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
	images: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array,
	showThumbnails: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
	subheading: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var gutter = {
	small: 2,
	large: 4
};
var classes = __WEBPACK_IMPORTED_MODULE_2_aphrodite_no_important__["StyleSheet"].create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large
		}
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large
		}
	},

	// orientation
	landscape: {
		width: '33.3%'
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0
		}
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto'
	}
});

/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderHero_js__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(9);
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(105);
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
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.heroHomepage, style: { backgroundImage: 'url("/na-kover-drama-rostilj.jpg")' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.mbrArrowFloating },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#section1', className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.mbrArrowIcon })
          )
        )
      );
    }
  }]);

  return HeaderHero;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (HeaderHero);

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(105);
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logodrama_png__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logodrama_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__logodrama_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hamburger_png__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hamburger_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__hamburger_png__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MainMenu = function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu(props) {
    _classCallCheck(this, MainMenu);

    var _this = _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, props));

    _this.opener = function () {
      if (!_this.state.open) {
        console.log("{sdadsadsad1231}");
        _this.setState({
          open: true,
          stylee: { overflow: 'visible' }
        });
      } else {
        console.log("{sdadsadsad}");
        _this.setState({
          open: false,
          stylee: { overflow: 'hidden' }
        });
      }
    };

    _this.state = {
      open: false,
      stylee: {}
    };
    return _this;
  }

  _createClass(MainMenu, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.hello },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_3__logodrama_png___default.a, alt: 'Drama logo', className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.logo }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.mobileIcon,
            onClick: this.opener },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_4__hamburger_png___default.a, alt: 'menu', height: '35px', width: '45px' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { style: this.state.stylee },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
              { to: '/', onClick: this.opener },
              'Po\u010Detna'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
              { to: '/page/jelovnik', onClick: this.opener },
              'Jelovnik'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
              { to: '/page/galerija', onClick: this.opener },
              'Galerija'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
              { to: '/page/about', onClick: this.opener },
              'O nama'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Link */],
              { to: '/page/contact', onClick: this.opener },
              'Kontakt'
            )
          )
        )
      );
    }
  }]);

  return MainMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MainMenu);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
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
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.sectionHeadlineMain },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.sectionHeadlineTitle },
          this.state.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.sectionHeadlineInnerText },
          this.state.innerText
        )
      );
    }
  }]);

  return SectionHeadline;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SectionHeadline);

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InstaImage_js__ = __webpack_require__(209);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var srcFirst = {
  backgroundImage: 'url("/pljeska1.jpg")'
};
var srcSecond = {
  backgroundImage: 'url("/pljeska2.jpg")'
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
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.threeGallery },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.flexo },
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kit_lib_routing__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_src_queries_all_messages_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_global_css__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Header_js__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SectionHeadline__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ParalaxContainer_js__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ThreeGallery_js__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FeaturedLeft_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Footer_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MainMenu_js__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AboutUs_js__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__AlaCart_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Gally_js__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ContactUs_js__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_react_scrollable_anchor__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_react_scrollable_anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_react_scrollable_anchor__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var stylee = {
  backgroundImage: 'url("/slika-za-parallax-drama-rostilj.jpg")',
  height: '300px'
};
var sndlax = {
  backgroundImage: 'url("/parallax-nova-drama-rostilj.jpg")',
  height: '350px'
};

var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Header_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_21_react_scrollable_anchor___default.a,
      { id: 'section1' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__SectionHeadline__["a" /* default */], { title: '\u0106evapi koje \u0107ete voleti', innerText: '100% organsko meso' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__ParalaxContainer_js__["a" /* default */], { stylee: stylee }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__SectionHeadline__["a" /* default */], { title: 'Najbolji \u0107evapi u gradu', innerText: 'Probajte obave\u017Eno' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ThreeGallery_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__ParalaxContainer_js__["a" /* default */], { stylee: sndlax }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__FeaturedLeft_js__["a" /* default */], null)
  );
};

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
var About = function About(_ref) {
  var match = _ref.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__AboutUs_js__["a" /* default */], null);
};
var Contact = function Contact(_ref2) {
  var match = _ref2.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__ContactUs_js__["a" /* default */], null);
};

var Jelovnik = function Jelovnik(_ref3) {
  var match = _ref3.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__AlaCart_js__["a" /* default */], null);
};

var Galerija = function Galerija(_ref4) {
  var match = _ref4.match;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__Gally_js__["a" /* default */], null);
};

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


// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
var Stats = function Stats() {
  var info = [['Environment', "development"]];

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: __WEBPACK_IMPORTED_MODULE_9__styles_css___default.a.data },
    info.map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          val = _ref6[1];

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
    var _ref7;

    var _temp, _this2, _ret;

    _classCallCheck(this, ReduxCounter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref7 = ReduxCounter.__proto__ || Object.getPrototypeOf(ReduxCounter)).call.apply(_ref7, [this].concat(args))), _this2), _this2.triggerIncrement = function () {
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
      title: 'DRAMA \u0106evapi',
      meta: [{
        name: 'description',
        content: '100% organsko meso'
      }] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__MainMenu_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Switch */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { exact: true, path: '/', component: Home }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/page/jelovnik', component: Jelovnik }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/page/about', component: About }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/page/galerija', component: Galerija }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: '/page/contact', component: Contact }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { component: WhenNotFound })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Footer_js__["a" /* default */], null)
  );
});

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/hamburger.714d4d80b4e78ae0f8616c1388468fff.png";

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logodrama.5ae232c68c2a191f474e97e9bff36f0c.png";

/***/ }),

/***/ 248:
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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(249).definitions));

module.exports = doc;

/***/ }),

/***/ 249:
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

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopHero; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopHero = function (_React$Component) {
  _inherits(TopHero, _React$Component);

  function TopHero(props) {
    _classCallCheck(this, TopHero);

    var _this = _possibleConstructorReturn(this, (TopHero.__proto__ || Object.getPrototypeOf(TopHero)).call(this, props));

    _this.state = {
      bgImage: false,
      title: false,
      subtitle: false
    };
    return _this;
  }

  _createClass(TopHero, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.bgImage && this.props.title && this.props.subtitle) {
        var subtitle = this.props.subtitle;
        var title = this.props.title;
        var bgImage = this.props.bgImage;
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
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.topHero, style: this.state.bgImage },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.topHeroInner },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.topHeader },
            this.state.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.topSubHeader },
            this.state.subtitle
          )
        )
      );
    }
  }]);

  return TopHero;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"main-vv2718wGHLD6lThS8mcwI","linkFooter":"linkFooter-1q4bO9K2r8_AM0vXma5jzK","linkFooterUl":"linkFooterUl-2mLK5p9nce_rPqTupocKcL","mobileIcon":"mobileIcon-2icoMzpdrZbPYIfQjxivTq","parallax":"parallax-3oYy3E6XoJCClgZR0R7xDr","caption":"caption-21tp0xAudjV1bavcaINc0T","border":"border-aQNY2OtxwHs6C26ekD14K","heroHomepage":"heroHomepage-3cr8Nd5W9Je_pIy-MhMdqV","featured":"featured-tBVkb2dk8NKSVh-MiZvpy","featuredLeftImage":"featuredLeftImage-1Gox6liBJlELhedy2ZEoQ4","featuredLeftText":"featuredLeftText-2ulA7B5hZq3aI0K1nomPKa","buttonP":"buttonP-2o61Dqeeal8MbCZT8JYmre","hello":"hello-1P9zCbIx8YQ5eID6A-67d6","logo":"logo-1tNzgJsJwXMqFQ0a4xMkPk","data":"data-1oklYPlS4mQJRj2Dp24Czw","styleExamples":"styleExamples-2cmVxjYoxVhR_tpCfyIq_T","example":"example-3quOHBYrr7YOUvefuRPyGa","footer":"footer-3k9kabI8HJWNNVio6VNJUN","itemWrap":"itemWrap-17n62GBEbcZ0YKeiE5pH_p","footerItem":"footerItem-3WuDvZVUsFhM8FTQboIhu","botFooter":"botFooter-GqWr1UPbpIsarc8kMzKLs","showing":"showing-3xt5gLGL3jWtxcqt2fKVHR","sectionHeadlineMain":"sectionHeadlineMain-3BS5Nojw6gcyNS7jnqmoOV","sectionHeadlineTitle":"sectionHeadlineTitle-3EJeE510K8dqtj9UpGRobp","sectionHeadlineInnerText":"sectionHeadlineInnerText-2rGs1qrSJSuR3vUGVNiPn4","threeGallery":"threeGallery-1S3vfrzqPjPi0_s-_tCQbv","flexo":"flexo-3dzWYlf-9R2_5EYj5quZCB","topHero":"topHero-14OIZyWV1neWIczIqc2ndD","topHeroInner":"topHeroInner-1R18bJ737GlmHsja_ddmAW","topHeader":"topHeader-2ri4gaarPV6WmDH6vNh10V","topSubHeader":"topSubHeader-nYw22H9bj_R5j6XFCrO5v","aboutNaslov":"aboutNaslov-d4SC59v7D83X9vn1noPVn","rowOne":"rowOne-1ZsZTwNatJNARSw-jUxDls","pleskaOne":"pleskaOne-2JKZfl6X9YnWW2SPZRZaTo","pleskaBgOne":"pleskaBgOne-1wnnaVKyyasxnkvVHaP3Hs","pleskaTekstOne":"pleskaTekstOne-33M7mQhjuVcjKCeWb5G3Rv","hrDebilni":"hrDebilni-3zeZ5gSEsPkrgWlN-__jJk","rowTwo":"rowTwo-337mFG2UpEw6hK2VQwwrfR","tekstTwo":"tekstTwo-3kXEBwp22JH95sjgbOWm5E","pleskaTwo":"pleskaTwo-2zs2ikr9x8Sa5YpP0kmzKH","pleskaBgTwo":"pleskaBgTwo-L6PMiWuJodAv0Y2AtAd_","pleskaTekstTwo":"pleskaTekstTwo-DHz89PWqxLvJcevMrzVsL","contactRowOne":"contactRowOne-1nZU0KIdfd41SekjLRq53J","contactColOne":"contactColOne-21cueNmJZV0dhJJuBgSlOR","contactColTwo":"contactColTwo-1KTocX6dZheO6pJMM_3ipI","poruka":"poruka-1Wiy7B2-Qz19i1zdBZtaYn","posalji":"posalji-3YQJFzJVTxq-e-8jjv6HFC"};

/***/ })

},[451]);
//# sourceMappingURL=browser.js.map