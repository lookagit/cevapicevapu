exports.ids = [0];
exports.modules = {

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _ProizvodList = __webpack_require__(97);

var _ProizvodList2 = _interopRequireDefault(_ProizvodList);

var _Porudzbine = __webpack_require__(95);

var _Porudzbine2 = _interopRequireDefault(_Porudzbine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AdminDyn = () => _react2.default.createElement(
  _reactStyledFlexboxgrid.Grid,
  null,
  _react2.default.createElement(
    _reactStyledFlexboxgrid.Row,
    null,
    _react2.default.createElement(_Porudzbine2.default, null),
    _react2.default.createElement(_ProizvodList2.default, null)
  )
);
exports.default = AdminDyn;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = {
	"proizvodItem": "proizvodItem-cEWGAfW0RjBtn6FS2p2Nq"
};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _porudzbine = __webpack_require__(93);

var _porudzbine2 = _interopRequireDefault(_porudzbine);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _allPorudzbinas = __webpack_require__(98);

var _allPorudzbinas2 = _interopRequireDefault(_allPorudzbinas);

var _graphqlTag = __webpack_require__(11);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactModalDialog = __webpack_require__(21);

var _PorudzbineSingle = __webpack_require__(96);

var _PorudzbineSingle2 = _interopRequireDefault(_PorudzbineSingle);

var _reactRedux = __webpack_require__(2);

var _reactWebNotification = __webpack_require__(99);

var _reactWebNotification2 = _interopRequireDefault(_reactWebNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Porudzbine = (_dec = (0, _reactRedux.connect)(state => ({ deleted: state.deleted })), _dec2 = (0, _reactApollo.graphql)(_allPorudzbinas2.default), _dec(_class = _dec2(_class = class Porudzbine extends _react2.default.Component {
  constructor() {
    super();
    this.state = {
      fakestejt: 'fejkstejt',
      isShowingModal: false,
      reload: [],
      ignore: true,
      title: ''
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.props.data.refetch();
    }, 10000);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.deleted) {
      this.props.dispatch({
        type: 'DELETION_ACK'
      });
      this.props.data.refetch();
    }
  }

  handlePermissionGranted() {
    this.setState({
      ignore: false
    });
  }

  handlePermissionDenied() {
    this.setState({
      ignore: true
    });
  }

  handleNotSupported() {
    this.setState({
      ignore: true
    });
  }
  handleButtonClick(titl) {
    if (this.state.ignore) {
      return;
    }
    const now = Date.now();
    const title = 'React-Web-Notification' + now;
    const body = 'Proverite admin panel!';
    const tag = now;
    const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
    const options = {
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

  render() {
    const { data } = this.props;

    let porudzbine = {};

    if (data.allPorudzbinas) {
      porudzbine.lista = [...data.allPorudzbinas];
      porudzbine.revers = porudzbine.lista.reverse();
    }

    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12, sm: 12, md: 8, lg: 8 },
      _react2.default.createElement(
        'div',
        { className: _porudzbine2.default.porudzbine },
        porudzbine.revers && porudzbine.revers.map((porudz, index) => _react2.default.createElement(_PorudzbineSingle2.default, { porudzbina: porudz }))
      ),
      _react2.default.createElement(_reactWebNotification2.default, {
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
}) || _class) || _class);
Porudzbine.propTypes = {
  data: _propTypes2.default.shape({
    allPorudzbinas: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      adresa: _propTypes2.default.string.isRequired,
      brojTelefona: _propTypes2.default.number.isRequired
    }))
  })
};
exports.default = Porudzbine;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(3);

var _graphqlTag = __webpack_require__(11);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactModalDialog = __webpack_require__(21);

var _reactRedux = __webpack_require__(2);

var _porudzbine = __webpack_require__(93);

var _porudzbine2 = _interopRequireDefault(_porudzbine);

var _reactWebNotification = __webpack_require__(99);

var _reactWebNotification2 = _interopRequireDefault(_reactWebNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PorudzbineSingle = (_dec = (0, _reactRedux.connect)(state => ({ deleted: state.deleted })), _dec2 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation deletePorudzbinu($id: ID!){
    deletePorudzbina(id: $id){
      id
    }
  }`, {
  name: 'deletePorudzbinu'
}), _dec3 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation deleteStavkePorudzbine($id: ID!){
    deleteStavkePorudzbine(id: $id){
      id
    }
  }`, {
  name: 'deleteStavkePorudzbine'
}), _dec4 = (0, _reactApollo.graphql)(_graphqlTag2.default`
  mutation updatePorudzbina($id: ID! $vreme: Int!) {
    updatePorudzbina(id: $id, vreme: $vreme){
      id
    }
  }`, {
  name: 'updatePorudzbina'
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class PorudzbineSingle extends _react2.default.Component {
  constructor() {
    super();

    this.button = () => {
      return _react2.default.createElement(
        'button',
        { onClick: () => this.handleClick() },
        'Obrisi porudzbinu'
      );
    };

    this.nekaFunkcija = async ajDi => {
      const pravimVreme = await this.props.updatePorudzbina({
        variables: {
          id: ajDi.id,
          vreme: this.state.vreme
        }
      });
      this.showAlert();
      Popup.alert('Vreme je poslato!');
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    this.showAlert = () => {
      this.msg.show('Vreme je poslato!', {
        time: 2000,
        type: 'success'
      });
    };

    this.handleClick = () => this.setState({ isShowingModal: true });

    this.handleClose = () => this.setState({ isShowingModal: false, kolicina: '' });

    this.izmeniVreme = event => {
      this.setState({ vreme: parseInt(event.target.value) });
    };

    this.brisanjePorudzbina = async ajDi => {
      const brisemPorudzbinu = await this.props.deletePorudzbinu({
        variables: {
          id: ajDi.id
        }
      });

      ajDi.stavkePorudzbines.map(async (stavka, index) => {
        const brisem = await this.props.deleteStavkePorudzbine({
          variables: {
            id: stavka.id
          }
        });
      });
      this.props.dispatch({
        type: 'DELETE_PROIZVOD'
      });
    };

    this.state = {
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
  }

  handlePermissionGranted() {
    this.setState({
      ignore: false
    });
  }

  handlePermissionDenied() {
    this.setState({
      ignore: true
    });
  }

  handleNotSupported() {
    this.setState({
      ignore: true
    });
  }
  handleButtonClick(titl) {
    if (this.state.ignore) {
      return;
    }
    const now = Date.now();
    const title = 'React-Web-Notification' + now;
    const body = 'Proverite admin panel!';
    const tag = now;
    const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
    const options = {
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

  componentDidMount() {
    this.setState({
      title: "Stigla je nova porudzbina!"
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.porudzbina.potvrdjen == null && this.props.porudzbina.potvrdjen == 'da') {
      this.handleButtonClick('Porudzbina je potvrdjena!');
    }
  }

  render() {
    let datum = Date.parse(this.props.porudzbina.createdAt);
    let notifyColor = {};
    if (this.props.porudzbina.potvrdjen == 'da') {
      notifyColor = { backgroundColor: 'green' };
    } else if (this.props.porudzbina.potvrdjen == 'ne') {
      notifyColor = { backgroundColor: 'red' };
    }
    return _react2.default.createElement(
      'div',
      { className: _porudzbine2.default.proizvodItem, style: notifyColor },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Ime i prezime: ',
          this.props.porudzbina.imeIPrezime
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Adresa: ',
          this.props.porudzbina.adresa
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Broj stana: ',
          this.props.porudzbina.brojStana
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Broj Telefona: ',
          this.props.porudzbina.brojTelefona
        ),
        this.props.porudzbina.uredjaj != '' ? _react2.default.createElement(
          'h4',
          null,
          'Poslato sa telefona'
        ) : '',
        this.props.porudzbina.stavkePorudzbines && this.props.porudzbina.stavkePorudzbines.map((item, index) => {
          return _react2.default.createElement(
            'div',
            { style: { margin: '3px', padding: '5px', backgroundColor: 'rgba(255,255,255,0.3)', border: '1px solid #fff' } },
            _react2.default.createElement(
              'h4',
              null,
              'Proizvod: ',
              item.proizvod.naslov
            ),
            _react2.default.createElement(
              'h4',
              null,
              'Kolicina: ',
              item.kolicina
            ),
            item.proizvod.priloziIdu ? _react2.default.createElement(
              'h5',
              null,
              'Prilozi: ',
              item.prilozi
            ) : null,
            item.proizvod.lepinjaIde ? _react2.default.createElement(
              'h5',
              null,
              'U somunu: ',
              item.uSomunu ? "Da" : "Ne"
            ) : null
          );
        }),
        _react2.default.createElement(
          'h4',
          { style: { marginBottom: '0px' } },
          'Vreme pripremanja porudzbine (minuti):'
        ),
        _react2.default.createElement('input', { type: 'number', onChange: this.izmeniVreme, placeholder: this.props.porudzbina.vreme }),
        _react2.default.createElement(
          'button',
          { style: stylee.buttonStyle, onClick: () => {
              this.nekaFunkcija(this.props.porudzbina);
            } },
          'Po\u0161alji'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Potvrdjeno: ',
          this.props.porudzbina.potvrdjen
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Opis: ',
          this.props.porudzbina.opis
        ),
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
              'Da li zelite obrisati ovu porudzbinu?'
            ),
            _react2.default.createElement(
              'button',
              { style: stylee.buttonStyle, onClick: () => this.handleClose() },
              'Otka\u017Ei'
            ),
            _react2.default.createElement(
              'button',
              { style: stylee.buttonStyle, onClick: () => {
                  this.brisanjePorudzbina(this.props.porudzbina);
                  this.handleClose();
                } },
              'Potvrdi'
            )
          )
        )
      ),
      _react2.default.createElement(_reactWebNotification2.default, {
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
}) || _class) || _class) || _class) || _class);
exports.default = PorudzbineSingle;


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

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = __webpack_require__(5);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(3);

var _getProizvodi = __webpack_require__(22);

var _getProizvodi2 = _interopRequireDefault(_getProizvodi);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProizvodList = (_dec = (0, _reactApollo.graphql)(_getProizvodi2.default), _dec(_class = class ProizvodList extends _react2.default.Component {

  render() {
    const { data } = this.props;
    return _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12, sm: 12, md: 4, lg: 4 },
      _react2.default.createElement(
        'h3',
        null,
        'Lista Proizvoda'
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.proizvodList },
        data.allProizvods && data.allProizvods.map((proiz, index) => {
          return _react2.default.createElement(
            'div',
            { className: _styles2.default.proizvodItem },
            _react2.default.createElement('img', { src: proiz.urlSlike }),
            _react2.default.createElement(
              'h4',
              null,
              proiz.naslov
            ),
            _react2.default.createElement(
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
}) || _class);
ProizvodList.propTypes = {
  data: _propTypes2.default.shape({
    allProizvods: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      naslov: _propTypes2.default.string.isRequired,
      cena: _propTypes2.default.number.isRequired
    }))
  })
};
exports.default = ProizvodList;

/***/ }),

/***/ 98:
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

};;