import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import AlertContainer from 'react-alert'

@connect(state => ({ counter: state.counter, orders: state.orders }))
export default class ProizvodItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kolicina: "",
      isShowingModal: false,
    }
  }

  static propTypes = {
    counter: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }),
  };

  alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    }

    showAlert = () => {
      this.msg.show('Dodali ste '+this.state.kolicina+'x ' + this.props.proiz.naslov + ' u korpu!', {
        time: 2000,
        type: 'success',
        icon: <img width="32px" height="32px" src={this.props.proiz.urlSlike} />
      })
    }


  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false, kolicina: ''})
  upaliIncrement = () => {
    if(this.state.kolicina > 0) {
      this.props.dispatch({
        type: 'ADD_ORDER',
        orders: {
          proizvodid: this.props.proiz.id,
          kolicina: this.state.kolicina,
          cena: this.props.proiz.cena * this.state.kolicina,
          urlSlike: this.props.proiz.urlSlike,
          naslov: this.props.proiz.naslov,
        },
      });
    }
  }

  izmeniKolicinu = (event) => {
    this.setState({kolicina: event.target.value});
  }


  button = () => {
    if(this.state.kolicina === 0 || this.state.kolicina === '0' || this.state.kolicina === '') {
      return (<button disabled={true}>Naruci</button>)
    } else {
      return (<button onClick={() => this.handleClick()}>Naruci</button>)
    }
  }
  render () {
    let ukupno = "";
    if(this.state.kolicina !== 0 || this.state.kolicina !== '' || this.state.kolicina !== '0' || this.props.proiz) {
      ukupno = parseInt(this.state.kolicina) * parseInt(this.props.proiz.cena);
    }
    return (
      <Col xs={12} sm={6} md={4} lg={3} className={scss.productBox}>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <div className={scss.product}>
          <div>
            <img src={this.props.proiz.urlSlike} />
            <h2>{this.props.proiz.naslov}</h2>
            <h3>{this.props.proiz.cena} RSD</h3>
            <label>Kolicina &nbsp;</label> <input type="number"  min="1" onChange={this.izmeniKolicinu} value={this.state.kolicina} />
            {
              this.button()
            }
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={this.handleClose}>
                <ModalDialog onClose={this.handleClose}>
                  <h2>Poručili ste: </h2>
                  <p>{this.props.proiz.naslov}</p>
                  <p>Količina: {this.state.kolicina} </p>
                  <p>Cena: {ukupno}</p>
                  <button style={stylee.buttonStyle} onClick={() => this.handleClose()}>Otkaži</button>
                  <button style={stylee.buttonStyle} onClick={() => {
                    this.upaliIncrement();
                    this.handleClose();
                    this.showAlert();
                    Popup.alert('Dodali ste '+this.state.kolicina+'x ' + this.props.proiz.naslov + ' u korpu!');
                  }}>Potvrdi</button>
                </ModalDialog>
              </ModalContainer>
            }
          </div>
        </div>
      </Col>
    );
  }
}
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
    cursor: 'pointer',
  }
}
