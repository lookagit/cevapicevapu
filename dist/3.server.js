exports.ids = [3];
exports.modules = {

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _styles = __webpack_require__(1);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ContentBoxes = class ContentBoxes extends _react2.default.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return _react2.default.createElement(
      'div',
      { style: { backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')", backgroundSize: 'cover' } },
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Grid,
        null,
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Row,
          { className: _styles2.default.rowTwo, style: { padding: '0 0 60px 0' } },
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Col,
            { xs: 12, sm: 8, smOffset: 2 },
            _react2.default.createElement(
              'div',
              { className: _styles2.default.tekstTwo },
              _react2.default.createElement(
                'p',
                { style: { textAlign: "justify" } },
                'Kada smo 2014. godine, nas nekoliko prijatelja razgovarali o otvaranju zajedni\u010Dkog malog restorana izbor \u0107evapa se sam nametnuo. Srpska tradicionalna hrana koju gotovo svi vole, a \u010Dijim kvalitetom po prestoni\u010Dkim restoranima nismo uop\u0161te bili sre\u0107ni, se\u0107ala nas je nostalgija mirisa \u0107evap\u010Di\u0107a iz detinjstva i pomislili smo: "Mo\u017Ee to bolje". Krenuli smo u misiju: "\u0106evapi kao nekad"... i eto. Nekoliko godina kasnije, osmesi na licima, popunjeni stolovi i komentari sa interneta nam govore da smo uspeli... Na vama je da presudite.'
              )
            )
          ),
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Col,
            { xs: 12, sm: 6 },
            _react2.default.createElement('img', { src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_65,w_414/v1513959811/drama-cevapi-napolju_dkrhf5.jpg', style: { width: "100%", height: "100%" } })
          ),
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Col,
            { xs: 12, sm: 6 },
            _react2.default.createElement('img', { src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_47,w_421/v1513959944/drama-cevap-specijal-basta_ejnzyt.jpg', style: { width: "100%", height: "100%" } })
          ),
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'h2',
              { style: { textAlign: "center" } },
              'VA\u0160 IZBOR'
            ),
            _react2.default.createElement(
              'h3',
              { style: { textAlign: "center" } },
              ' Samo kod nas po najpovoljnijim cenama mo\u017Eete da u\u017Eivate u vrhunskom ukusu i garantovanom kvalitetu. Va\u0161 izbor je na\u0161a stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.'
            )
          )
        )
      )
    );
  }
};
exports.default = ContentBoxes;

/***/ })

};;