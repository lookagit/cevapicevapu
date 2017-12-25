exports.ids = [2];
exports.modules = {

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

var _reactRedux = __webpack_require__(2);

var _reactIframe = __webpack_require__(100);

var _reactIframe2 = _interopRequireDefault(_reactIframe);

var _reactWindowSize = __webpack_require__(102);

var _reactWindowSize2 = _interopRequireDefault(_reactWindowSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FeaturedLeft = (_dec = (0, _reactRedux.connect)(state => ({ reloader: state.reloader })), _dec(_class = class FeaturedLeft extends _react2.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      { style: { display: "flex" } },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.featured },
        _react2.default.createElement('div', { className: _styles2.default.featuredLeftImage, style: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_52,w_395/v1513960228/pleska_gjm992.jpg')" } }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.featuredLeftText },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.featuredTrick },
            this.props.windowWidth > 1024 ? _react2.default.createElement(_reactIframe2.default, { url: 'https://widget.developcodex.net/468',
              minWidth: '460px',
              width: '100%',
              height: '470px',
              display: 'initial',
              position: 'relative',
              style: { zIndex: 0 }
            }) : _react2.default.createElement(_reactIframe2.default, { url: 'https://widget.developcodex.net/240',
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
}) || _class);
exports.default = (0, _reactWindowSize2.default)(FeaturedLeft);

/***/ })

};;