webpackJsonp([1],{

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProizvodList__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Porudzbine__ = __webpack_require__(535);





var AdminDyn = function AdminDyn() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["a" /* Grid */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["b" /* Row */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Porudzbine__["a" /* default */], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ProizvodList__["a" /* default */], null)
    )
  );
};
/* harmony default export */ __webpack_exports__["default"] = (AdminDyn);

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"proizvodItem":"proizvodItem-cEWGAfW0RjBtn6FS2p2Nq"};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PERMISSION_GRANTED = 'granted';
var PERMISSION_DENIED = 'denied';

var seqGen = function seqGen() {
  var i = 0;
  return function () {
    return i++;
  };
};
var seq = seqGen();

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    var supported = false;
    var granted = false;
    if ('Notification' in window && window.Notification) {
      supported = true;
      if (window.Notification.permission === PERMISSION_GRANTED) {
        granted = true;
      }
    }

    _this.state = {
      supported: supported,
      granted: granted
    };
    // Do not save Notification instance in state
    _this.notifications = {};
    _this.windowFocus = true;
    _this.onWindowFocus = _this._onWindowFocus.bind(_this);
    _this.onWindowBlur = _this._onWindowBlur.bind(_this);
    return _this;
  }

  _createClass(Notification, [{
    key: '_onWindowFocus',
    value: function _onWindowFocus() {
      this.windowFocus = true;
    }
  }, {
    key: '_onWindowBlur',
    value: function _onWindowBlur() {
      this.windowFocus = false;
    }
  }, {
    key: '_askPermission',
    value: function _askPermission() {
      var _this2 = this;

      window.Notification.requestPermission(function (permission) {
        var result = permission === PERMISSION_GRANTED;
        _this2.setState({
          granted: result
        }, function () {
          if (result) {
            _this2.props.onPermissionGranted();
          } else {
            _this2.props.onPermissionDenied();
          }
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.disableActiveWindow) {
        if (window.addEventListener) {
          window.addEventListener('focus', this.onWindowFocus);
          window.addEventListener('blur', this.onWindowBlur);
        } else if (window.attachEvent) {
          window.attachEvent('focus', this.onWindowFocus);
          window.attachEvent('blur', this.onWindowBlur);
        }
      }

      if (!this.state.supported) {
        this.props.notSupported();
      } else if (this.state.granted) {
        this.props.onPermissionGranted();
      } else {
        if (window.Notification.permission === PERMISSION_DENIED) {
          if (this.props.askAgain) {
            this._askPermission();
          } else {
            this.props.onPermissionDenied();
          }
        } else {
          this._askPermission();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.disableActiveWindow) {
        if (window.removeEventListner) {
          window.removeEventListener('focus', this.onWindowFocus);
          window.removeEventListener('blur', this.onWindowBlur);
        } else if (window.detachEvent) {
          window.detachEvent('focus', this.onWindowFocus);
          window.detachEvent('blur', this.onWindowBlur);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var doNotShowOnActiveWindow = this.props.disableActiveWindow && this.windowFocus;
      if (!this.props.ignore && this.props.title && this.state.supported && this.state.granted && !doNotShowOnActiveWindow) {

        var opt = this.props.options;
        if (typeof opt.tag !== 'string') {
          opt.tag = 'web-notification-' + seq();
        }

        if (!this.notifications[opt.tag]) {
          var n = new window.Notification(this.props.title, opt);
          n.onshow = function (e) {
            _this3.props.onShow(e, opt.tag);
            setTimeout(function () {
              _this3.close(n);
            }, _this3.props.timeout);
          };
          n.onclick = function (e) {
            _this3.props.onClick(e, opt.tag);
          };
          n.onclose = function (e) {
            _this3.props.onClose(e, opt.tag);
          };
          n.onerror = function (e) {
            _this3.props.onError(e, opt.tag);
          };

          this.notifications[opt.tag] = n;
        }
      }

      // return null cause
      // Error: Invariant Violation: Notification.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.
      return _react2.default.createElement('input', { type: 'hidden', name: 'dummy-for-react-web-notification', style: { display: 'none' } });
    }
  }, {
    key: 'close',
    value: function close(n) {
      if (n && typeof n.close === 'function') {
        n.close();
      }
    }

    // for debug

  }, {
    key: '_getNotificationInstance',
    value: function _getNotificationInstance(tag) {
      return this.notifications[tag];
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  ignore: _propTypes.bool,
  disableActiveWindow: _propTypes.bool,
  askAgain: _propTypes.bool,
  notSupported: _propTypes.func,
  onPermissionGranted: _propTypes.func,
  onPermissionDenied: _propTypes.func,
  onShow: _propTypes.func,
  onClick: _propTypes.func,
  onClose: _propTypes.func,
  onError: _propTypes.func,
  timeout: _propTypes.number,
  title: _propTypes.string.isRequired,
  options: _propTypes.object
};

Notification.defaultProps = {
  ignore: false,
  disableActiveWindow: false,
  askAgain: false,
  notSupported: function notSupported() {},
  onPermissionGranted: function onPermissionGranted() {},
  onPermissionDenied: function onPermissionDenied() {},
  onShow: function onShow() {},
  onClick: function onClick() {},
  onClose: function onClose() {},
  onError: function onError() {},
  timeout: 5000,
  options: {}
};

exports.default = Notification;

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Porudzbine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_porudzbine_scss__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_porudzbine_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_porudzbine_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_queries_allPorudzbinas_gql__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_queries_allPorudzbinas_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_src_queries_allPorudzbinas_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_modal_dialog__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_modal_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_modal_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PorudzbineSingle__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_web_notification__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_web_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_web_notification__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Porudzbine = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_redux__["a" /* connect */])(function (state) {
  return { deleted: state.deleted };
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_src_queries_allPorudzbinas_gql___default.a), _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(Porudzbine, _React$Component);

  function Porudzbine() {
    _classCallCheck(this, Porudzbine);

    var _this = _possibleConstructorReturn(this, (Porudzbine.__proto__ || Object.getPrototypeOf(Porudzbine)).call(this));

    _this.state = {
      fakestejt: 'fejkstejt',
      isShowingModal: false,
      reload: [],
      ignore: true,
      title: ''
    };
    return _this;
  }

  _createClass(Porudzbine, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.props.data.refetch();
      }, 10000);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.deleted) {
        this.props.dispatch({
          type: 'DELETION_ACK'
        });
        this.props.data.refetch();
      }
    }
  }, {
    key: 'handlePermissionGranted',
    value: function handlePermissionGranted() {
      this.setState({
        ignore: false
      });
    }
  }, {
    key: 'handlePermissionDenied',
    value: function handlePermissionDenied() {
      this.setState({
        ignore: true
      });
    }
  }, {
    key: 'handleNotSupported',
    value: function handleNotSupported() {
      this.setState({
        ignore: true
      });
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(titl) {
      if (this.state.ignore) {
        return;
      }
      var now = Date.now();
      var title = 'React-Web-Notification' + now;
      var body = 'Proverite admin panel!';
      var tag = now;
      var icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
      var options = {
        tag: tag,
        body: body,
        icon: icon,
        lang: 'en',
        dir: 'ltr'
      };
      this.setState({
        title: titl,
        options: options
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;


      var porudzbine = {};

      if (data.allPorudzbinas) {
        porudzbine.lista = [].concat(_toConsumableArray(data.allPorudzbinas));
        porudzbine.revers = porudzbine.lista.reverse();
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
        { xs: 12, sm: 12, md: 8, lg: 8 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__css_porudzbine_scss___default.a.porudzbine },
          porudzbine.revers && porudzbine.revers.map(function (porudz, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__PorudzbineSingle__["a" /* default */], { porudzbina: porudz });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_web_notification___default.a, {
          ignore: this.state.ignore && this.state.title !== '',
          notSupported: this.handleNotSupported.bind(this),
          onPermissionGranted: this.handlePermissionGranted.bind(this),
          onPermissionDenied: this.handlePermissionDenied.bind(this),
          timeout: 5000,
          title: this.state.title,
          options: this.state.options
        })
      );
    }
  }]);

  return Porudzbine;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class) || _class);
Porudzbine.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    allPorudzbinas: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      adresa: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
      brojTelefona: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number.isRequired
    }))
  })
};


/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorudzbineSingle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal_dialog__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_porudzbine_scss__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_porudzbine_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_porudzbine_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_web_notification__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_web_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_web_notification__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class;

var _templateObject = _taggedTemplateLiteral(['\n  mutation deletePorudzbinu($id: ID!){\n    deletePorudzbina(id: $id){\n      id\n    }\n  }'], ['\n  mutation deletePorudzbinu($id: ID!){\n    deletePorudzbina(id: $id){\n      id\n    }\n  }']),
    _templateObject2 = _taggedTemplateLiteral(['\n  mutation deleteStavkePorudzbine($id: ID!){\n    deleteStavkePorudzbine(id: $id){\n      id\n    }\n  }'], ['\n  mutation deleteStavkePorudzbine($id: ID!){\n    deleteStavkePorudzbine(id: $id){\n      id\n    }\n  }']),
    _templateObject3 = _taggedTemplateLiteral(['\n  mutation updatePorudzbina($id: ID! $vreme: Int!) {\n    updatePorudzbina(id: $id, vreme: $vreme){\n      id\n    }\n  }'], ['\n  mutation updatePorudzbina($id: ID! $vreme: Int!) {\n    updatePorudzbina(id: $id, vreme: $vreme){\n      id\n    }\n  }']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var PorudzbineSingle = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* connect */])(function (state) {
  return { deleted: state.deleted };
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject), {
  name: 'deletePorudzbinu'
}), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject2), {
  name: 'deleteStavkePorudzbine'
}), _dec4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject3), {
  name: 'updatePorudzbina'
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_React$Component) {
  _inherits(PorudzbineSingle, _React$Component);

  function PorudzbineSingle() {
    var _this2 = this;

    _classCallCheck(this, PorudzbineSingle);

    var _this = _possibleConstructorReturn(this, (PorudzbineSingle.__proto__ || Object.getPrototypeOf(PorudzbineSingle)).call(this));

    _this.button = function () {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: function onClick() {
            return _this.handleClick();
          } },
        'Obrisi porudzbinu'
      );
    };

    _this.nekaFunkcija = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ajDi) {
        var pravimVreme;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.updatePorudzbina({
                  variables: {
                    id: ajDi.id,
                    vreme: _this.state.vreme
                  }
                });

              case 2:
                pravimVreme = _context.sent;

                _this.showAlert();
                Popup.alert('Vreme je poslato!');

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    _this.showAlert = function () {
      _this.msg.show('Vreme je poslato!', {
        time: 2000,
        type: 'success'
      });
    };

    _this.handleClick = function () {
      return _this.setState({ isShowingModal: true });
    };

    _this.handleClose = function () {
      return _this.setState({ isShowingModal: false, kolicina: '' });
    };

    _this.izmeniVreme = function (event) {
      _this.setState({ vreme: parseInt(event.target.value) });
    };

    _this.brisanjePorudzbina = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ajDi) {
        var brisemPorudzbinu;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.props.deletePorudzbinu({
                  variables: {
                    id: ajDi.id
                  }
                });

              case 2:
                brisemPorudzbinu = _context3.sent;


                ajDi.stavkePorudzbines.map(function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(stavka, index) {
                    var brisem;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this.props.deleteStavkePorudzbine({
                              variables: {
                                id: stavka.id
                              }
                            });

                          case 2:
                            brisem = _context2.sent;

                          case 3:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                _this.props.dispatch({
                  type: 'DELETE_PROIZVOD'
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      isShowingModal: false,
      vreme: '',
      color: {},
      ignore: true,
      title: '',
      options: {
        body: 'Proverite admin panel!',
        icon: 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png',
        lang: 'en',
        dir: 'ltr'
      }
    };
    return _this;
  }

  _createClass(PorudzbineSingle, [{
    key: 'handlePermissionGranted',
    value: function handlePermissionGranted() {
      this.setState({
        ignore: false
      });
    }
  }, {
    key: 'handlePermissionDenied',
    value: function handlePermissionDenied() {
      this.setState({
        ignore: true
      });
    }
  }, {
    key: 'handleNotSupported',
    value: function handleNotSupported() {
      this.setState({
        ignore: true
      });
    }
  }, {
    key: 'handleButtonClick',
    value: function handleButtonClick(titl) {
      if (this.state.ignore) {
        return;
      }
      var now = Date.now();
      var title = 'React-Web-Notification' + now;
      var body = 'Proverite admin panel!';
      var tag = now;
      var icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
      var options = {
        tag: tag,
        body: body,
        icon: icon,
        lang: 'en',
        dir: 'ltr'
      };
      this.setState({
        title: titl,
        options: options
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        title: "Stigla je nova porudzbina!"
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.porudzbina.potvrdjen == null && this.props.porudzbina.potvrdjen == 'da') {
        this.handleButtonClick('Porudzbina je potvrdjena!');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var datum = Date.parse(this.props.porudzbina.createdAt);
      var notifyColor = {};
      if (this.props.porudzbina.potvrdjen == 'da') {
        notifyColor = { backgroundColor: 'green' };
      } else if (this.props.porudzbina.potvrdjen == 'ne') {
        notifyColor = { backgroundColor: 'red' };
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__css_porudzbine_scss___default.a.proizvodItem, style: notifyColor },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Ime i prezime: ',
            this.props.porudzbina.imeIPrezime
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Adresa: ',
            this.props.porudzbina.adresa
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Broj stana: ',
            this.props.porudzbina.brojStana
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Broj Telefona: ',
            this.props.porudzbina.brojTelefona
          ),
          this.props.porudzbina.uredjaj != '' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Poslato sa telefona'
          ) : '',
          this.props.porudzbina.stavkePorudzbines && this.props.porudzbina.stavkePorudzbines.map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { margin: '3px', padding: '5px', backgroundColor: 'rgba(255,255,255,0.3)', border: '1px solid #fff' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                null,
                'Proizvod: ',
                item.proizvod.naslov
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                null,
                'Kolicina: ',
                item.kolicina
              ),
              item.proizvod.priloziIdu ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h5',
                null,
                'Prilozi: ',
                item.prilozi
              ) : null,
              item.proizvod.lepinjaIde ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h5',
                null,
                'U somunu: ',
                item.uSomunu ? "Da" : "Ne"
              ) : null
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { style: { marginBottom: '0px' } },
            'Vreme pripremanja porudzbine (minuti):'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', onChange: this.izmeniVreme, placeholder: this.props.porudzbina.vreme }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { style: stylee.buttonStyle, onClick: function onClick() {
                _this3.nekaFunkcija(_this3.props.porudzbina);
              } },
            'Po\u0161alji'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Potvrdjeno: ',
            this.props.porudzbina.potvrdjen
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Opis: ',
            this.props.porudzbina.opis
          ),
          this.button(),
          this.state.isShowingModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_modal_dialog__["ModalContainer"],
            { onClose: this.handleClose },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_modal_dialog__["ModalDialog"],
              { onClose: this.handleClose },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'Da li zelite obrisati ovu porudzbinu?'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { style: stylee.buttonStyle, onClick: function onClick() {
                    return _this3.handleClose();
                  } },
                'Otka\u017Ei'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { style: stylee.buttonStyle, onClick: function onClick() {
                    _this3.brisanjePorudzbina(_this3.props.porudzbina);
                    _this3.handleClose();
                  } },
                'Potvrdi'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_web_notification___default.a, {
          ignore: this.state.ignore && this.state.title !== '',
          notSupported: this.handleNotSupported.bind(this),
          onPermissionGranted: this.handlePermissionGranted.bind(this),
          onPermissionDenied: this.handlePermissionDenied.bind(this),
          timeout: 1800000,
          title: this.state.title,
          options: this.state.options
        })
      );
    }
  }]);

  return PorudzbineSingle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class) || _class) || _class) || _class);



var stylee = {
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

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProizvodList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_queries_getProizvodi_gql__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_queries_getProizvodi_gql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_src_queries_getProizvodi_gql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ProizvodList = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_src_queries_getProizvodi_gql___default.a), _dec(_class = function (_React$Component) {
  _inherits(ProizvodList, _React$Component);

  function ProizvodList() {
    _classCallCheck(this, ProizvodList);

    return _possibleConstructorReturn(this, (ProizvodList.__proto__ || Object.getPrototypeOf(ProizvodList)).apply(this, arguments));
  }

  _createClass(ProizvodList, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_styled_flexboxgrid__["c" /* Col */],
        { xs: 12, sm: 12, md: 4, lg: 4 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Lista Proizvoda'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.proizvodList },
          data.allProizvods && data.allProizvods.map(function (proiz, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_5__styles_scss___default.a.proizvodItem },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: proiz.urlSlike }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                null,
                proiz.naslov
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                null,
                proiz.cena,
                ' RSD'
              )
            );
          })
        )
      );
    }
  }]);

  return ProizvodList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class);
ProizvodList.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    allProizvods: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      naslov: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
      cena: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
    }))
  })
};


/***/ }),

/***/ 538:
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPorudzbinas"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allPorudzbinas"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"adresa"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"vreme"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"brojStana"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imeIPrezime"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"opis"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"brojTelefona"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"potvrdjen"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uredjaj"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"stavkePorudzbines"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"kolicina"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"prilozi"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uSomunu"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"proizvod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"naslov"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"tip"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"lepinjaIde"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"priloziIdu"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}]}}],"loc":{"start":0,"end":362}};
    doc.loc.source = {"body":"query AllPorudzbinas {\n  allPorudzbinas {\n    id,\n    adresa,\n    vreme,\n    brojStana,\n    imeIPrezime,\n    opis,\n    brojTelefona,\n    createdAt,\n    potvrdjen,\n    uredjaj,\n    stavkePorudzbines{\n      id,\n      kolicina,\n      prilozi,\n      uSomunu,\n      proizvod {\n        naslov,\n        tip,\n        lepinjaIde,\n        priloziIdu\n\n      }\n\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    


/***/ })

});
//# sourceMappingURL=1.js.map