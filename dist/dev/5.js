webpackJsonp([5],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_iframe__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_iframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_iframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_window_size__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_window_size___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_window_size__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FeaturedLeft = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* connect */])(function (state) {
  return { reloader: state.reloader };
}), _dec(_class = function (_React$Component) {
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
        { style: { display: "flex" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featured },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featuredLeftImage, style: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_52,w_395/v1513960228/pleska_gjm992.jpg')" } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featuredLeftText },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.featuredTrick },
              this.props.windowWidth > 1024 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_iframe___default.a, { url: 'https://widget.developcodex.net/468',
                minWidth: '460px',
                width: '100%',
                height: '470px',
                display: 'initial',
                position: 'relative',
                style: { zIndex: 0 }
              }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_iframe___default.a, { url: 'https://widget.developcodex.net/240',
                minWidth: '280px',
                width: '100%',
                height: '470px',
                display: 'initial',
                position: 'relative',
                style: { zIndex: 0 }
              })
            )
          )
        )
      );
    }
  }]);

  return FeaturedLeft;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_react_window_size___default()(FeaturedLeft));

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(4);var _propTypes2=_interopRequireDefault(_propTypes);var _objectAssign=__webpack_require__(5);var _objectAssign2=_interopRequireDefault(_objectAssign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Iframe=function(_PureComponent){_inherits(Iframe,_PureComponent);function Iframe(){_classCallCheck(this,Iframe);return _possibleConstructorReturn(this,(Iframe.__proto__||Object.getPrototypeOf(Iframe)).apply(this,arguments))}_createClass(Iframe,[{key:"render",value:function render(){var props={ref:"iframe",frameBorder:"0",src:this.props.url,target:"_parent",allowFullScreen:this.props.allowFullScreen||false,style:(0,_objectAssign2.default)({},{position:this.props.position||"absolute",display:this.props.display||"block",height:this.props.height||"100%",width:this.props.width||"100%"},this.props.styles||{}),height:this.props.height||"100%",name:this.props.name||"",width:this.props.width||"100%"};return _react2.default.createElement("iframe",(0,_objectAssign2.default)(props,this.props.id?{id:this.props.id}:{},this.props.className?{className:this.props.className}:{}))}}]);return Iframe}(_react.PureComponent);Iframe.propTypes={url:_propTypes2.default.string.isRequired,id:_propTypes2.default.string,className:_propTypes2.default.string,width:_propTypes2.default.string,position:_propTypes2.default.string,display:_propTypes2.default.string,name:_propTypes2.default.string,height:_propTypes2.default.string,styles:_propTypes2.default.object,allowFullScreen:_propTypes2.default.bool};exports.default=Iframe;


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  exports.default = function (ComposedComponent) {
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.state = {
          width: 0,
          height: 0
        };
        return _this;
      }

      _createClass(_class, [{
        key: 'handleResize',
        value: function handleResize() {
          // set initial state
          this.setState({
            width: window.innerWidth,
            height: window.innerHeight
          });
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          // bind window resize listeners
          this._handleResize = this.handleResize.bind(this);
          this._handleResize();
          window.addEventListener('resize', this._handleResize);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          // clean up listeners
          window.removeEventListener('resize', this._handleResize);
        }
      }, {
        key: 'render',
        value: function render() {
          // pass window dimensions as props to wrapped component
          return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
            windowWidth: this.state.width,
            windowHeight: this.state.height
          }));
        }
      }]);

      return _class;
    }(_react.Component);
  };
});

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(494);

/***/ })

});
//# sourceMappingURL=5.js.map