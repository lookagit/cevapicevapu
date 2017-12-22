import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { connect } from 'react-redux';
import scss from './css/porudzbine.scss';
import AlertContainer from 'react-alert'
import Notification from 'react-web-notification';

@connect(state => ({ deleted: state.deleted }))
@graphql(gql`
  mutation deletePorudzbinu($id: ID!){
    deletePorudzbina(id: $id){
      id
    }
  }`,
  {
    name: 'deletePorudzbinu',
  }
)
@graphql(gql`
  mutation deleteStavkePorudzbine($id: ID!){
    deleteStavkePorudzbine(id: $id){
      id
    }
  }`,
  {
    name: 'deleteStavkePorudzbine',
  }
)
@graphql(gql`
  mutation updatePorudzbina($id: ID! $vreme: Int!) {
    updatePorudzbina(id: $id, vreme: $vreme){
      id
    }
  }`,
  {
    name: 'updatePorudzbina',
  }
)
export default class PorudzbineSingle extends React.Component {
  constructor(){
    super();
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
        dir: 'ltr',
      }
    }
  };

  handlePermissionGranted(){
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  }
  
  handlePermissionDenied(){
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  }

  handleNotSupported(){
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);
  
  }

  handleNotificationOnClose(e, tag){
    
  }

  handleNotificationOnShow(e, tag){
    console.log(e, 'Notification shown tag:' + tag);
  }

  handleButtonClick(titl) {
    
        if(this.state.ignore) {
          return;
        }
    
        const now = Date.now();
    
        const title = 'React-Web-Notification' + now;
        const body = 'Proverite admin panel!';
        const tag = now;
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';
    
        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
          tag: tag,
          body: body,
          icon: icon,
          lang: 'en',
          dir: 'ltr',
        }
        this.setState({
          title: titl,
          options: options
        });
        console.log('BRAATE');
    }


  button = () => {
      return (<button onClick={() => this.handleClick()}>Obrisi porudzbinu</button>)
  }

  nekaFunkcija = async (ajDi) => {
    const pravimVreme = await this.props.updatePorudzbina({
      variables: {
        id: ajDi.id,
        vreme: this.state.vreme,
      }
    });
    this.showAlert();
    Popup.alert('Vreme je poslato!');
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Vreme je poslato!', {
      time: 2000,
      type: 'success',
    })
  }


  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false, kolicina: ''})

  izmeniVreme = (event) => {
    this.setState({vreme: parseInt(event.target.value)});
  }


  brisanjePorudzbina = async(ajDi) => {
    const brisemPorudzbinu = await this.props.deletePorudzbinu({
      variables: {
        id: ajDi.id,
      }
    });

    ajDi.stavkePorudzbines.map(async (stavka, index) => {
      const brisem = await this.props.deleteStavkePorudzbine({
        variables: {
          id: stavka.id,
        }
      });
    });
    this.props.dispatch({
      type: 'DELETE_PROIZVOD',
    });
  }


  componentDidMount() {
    this.setState({
      title: "Stigla je nova porudzbina!"
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.porudzbina.potvrdjen == null && this.props.porudzbina.potvrdjen == 'da'){
      this.handleButtonClick('Porudzbina je potvrdjena!');
    }
    console.log(this.state.title)
  }

  render () {
    let datum = Date.parse(this.props.porudzbina.createdAt);
    let notifyColor = {}
    if(this.props.porudzbina.potvrdjen == 'da') {
      notifyColor = {backgroundColor: 'green'}
    } else if (this.props.porudzbina.potvrdjen == 'ne') {
      notifyColor = {backgroundColor: 'red'}
    }
    return(
      <div className={scss.proizvodItem}  style={notifyColor}>
      <div>
        <h4>Adresa: {this.props.porudzbina.adresa}</h4>
        <h4>Broj Telefona: {this.props.porudzbina.brojTelefona}</h4>
        {this.props.porudzbina.uredjaj != '' ? <h4>Poslato sa telefona</h4> : ''}
        {this.props.porudzbina.stavkePorudzbines && this.props.porudzbina.stavkePorudzbines.map((item, index) => {
          console.log("OVO JE ITEM ", item);
          return (
            <div style={{margin: '3px',padding: '5px', backgroundColor: 'rgba(255,255,255,0.3)', border: '1px solid #fff'}}>
              <h4>Proizvod: {item.proizvod.naslov}</h4>
              <h4>Kolicina: {item.kolicina}</h4>
              <h5>Prilozi: {item.prilozi}</h5>
              <h5>U somunu: {item.uSomunu ? "Da" : "Ne"}</h5>
            </div>
          )
        })}
        <h4 style={{marginBottom: '0px'}}>Vreme pripremanja porudzbine (minuti):</h4>
        <input type="number" onChange={this.izmeniVreme} placeholder={this.props.porudzbina.vreme} />
        <button style={stylee.buttonStyle} onClick={() => {this.nekaFunkcija(this.props.porudzbina)}}>Pošalji</button>
        <h4>Potvrdjeno: {this.props.porudzbina.potvrdjen}</h4>
        <h3>Opis: {this.props.porudzbina.opis}</h3>
        {
          this.button()
        }
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose}>
            <ModalDialog onClose={this.handleClose}>
              <h2>Da li zelite obrisati ovu porudzbinu?</h2>
              <button style={stylee.buttonStyle} onClick={() => this.handleClose()}>Otkaži</button>
              <button style={stylee.buttonStyle} onClick={() => {
                this.brisanjePorudzbina(this.props.porudzbina);
                this.handleClose();
              }}>Potvrdi</button>
            </ModalDialog>
          </ModalContainer>
        }
      </div>
      <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={1800000}
          title={this.state.title}
          options={this.state.options}
        />
      </div>
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
    margin: '20px 20px',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}
