import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import AlertContainer from 'react-alert';
@connect(state => ({ counter: state.counter, orders: state.orders }))
export default class ProizvodItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kolicina: "",
      prilozi: [],
      uSomunu: true,
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
          prilozi: this.state.prilozi.join(),
          naslov: this.props.proiz.naslov,
          uSomunu: this.state.uSomunu,
        },
      });
    }
  }

  izmeniKolicinu = (event) => {
    this.setState({kolicina: event.target.value});
  }


  button = () => {
    if(this.state.kolicina === 0 || this.state.kolicina === '0' || this.state.kolicina === '') {
      return (<button disabled={true}>Naruči</button>)
    } else {
      return (<button onClick={() => this.handleClick()}>Naruči</button>)
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
            <label>Količina &nbsp;</label> <input type="number"  min="1" onChange={this.izmeniKolicinu} value={this.state.kolicina} />
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
                  {this.props.proiz.tip == 'hrana' ? <h3>Somun</h3> : null}
                   <div>
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' checked={this.state.uSomunu}
                      onClick={() => {
                        this.setState({
                          uSomunu: !this.state.uSomunu,
                        })
                      }}
                    />
                    <span>
                      Da
                    </span>
                    </div> : null}
                  </div>
                  {this.props.proiz.tip == 'hrana' ? <h3>Prilozi</h3> : null }
                   <div>
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={(a, b) => {
                      if(this.state.prilozi.includes('kečap')) {
                        let a = this.state.prilozi.filter(item => item !== 'kečap');

                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'kečap'],
                        })
                      }
                    }} />
                    <span>
                      Kečap
                    </span>
                    </div> : null }
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('majonez')) {
                        let removedItem = this.state.prilozi.filter(item => item !== 'majonez');
                        this.setState({
                          prilozi: removedItem,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'majonez'],
                        })
                      }
                    }} />
                    <span>
                      Majonez
                    </span>
                    </div> : null }
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('senf')) {
                        let a = this.state.prilozi.filter(item => item !== 'senf');
                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'senf'],
                        })
                      }
                    }} />
                    <span>
                      Senf
                    </span>
                    </div> : null }
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('pavlaka')) {
                        let a = this.state.prilozi.filter(item => item !== 'pavlaka');
                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'pavlaka'],
                        })
                      }
                    }} />
                    <span>
                      Pavlaka
                    </span>
                    </div> : null }
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('kupus')) {
                        let a = this.state.prilozi.filter(item => item !== 'kupus');
                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'kupus'],
                        })
                      }
                    }} />
                    <span>
                      Kupus
                    </span>
                    </div> : null }
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('luk')) {
                        let a = this.state.prilozi.filter(item => item !== 'luk');

                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'luk'],
                        })
                      }
                    }} />
                    <span>
                      Luk
                    </span>
                    </div> : null }

                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('ljutenica')) {
                        let a = this.state.prilozi.filter(item => item !== 'ljutenica');

                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'ljutenica'],
                        })
                      }
                    }} />
                    <span>
                      Ljutenica
                    </span>
                    </div> : null }
                    {this.props.proiz.tip == 'hrana' ? <div>
                    <input type='checkbox' onClick={() => {
                      if(this.state.prilozi.includes('tucana paprika')) {
                        let a = this.state.prilozi.filter(item => item !== 'tucana paprika');

                        this.setState({
                          prilozi: a,
                        })
                      } else {
                        this.setState({
                          prilozi: [...this.state.prilozi, 'tucana paprika'],
                        })
                      }
                    }} />
                    <span>
                      Tucana paprika
                    </span>
                    </div> : null }

                  </div>
                  <div>
                  <button style={stylee.buttonStyle} onClick={() => this.handleClose()}>Otkaži</button>
                  <button style={stylee.buttonStyle} onClick={() => {
                    this.upaliIncrement();
                    this.handleClose();
                    this.showAlert();
                    Popup.alert('Dodali ste '+this.state.kolicina+'x ' + this.props.proiz.naslov + ' u korpu!');
                  }}>Potvrdi</button>
                  </div>
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
