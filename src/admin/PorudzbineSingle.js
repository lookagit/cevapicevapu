import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { connect } from 'react-redux';


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
    }
  };

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




  render() {
    let datum = Date.parse(this.props.porudzbina.createdAt);
    return(
      <div>
        <h4>Adresa: {this.props.porudzbina.adresa}</h4>
        <h4>Broj Telefona: {this.props.porudzbina.brojTelefona}</h4>
        {this.props.porudzbina.stavkePorudzbines && this.props.porudzbina.stavkePorudzbines.map((item, index) => (
          <div>
            <h4>Proizvod: {item.proizvod.naslov}</h4>
            <h4>Kolicina: {item.kolicina}</h4>
          </div>
        ))}
        <h4 style={{marginBottom: '0px'}}>Vreme pripremanja porudzbine (minuti):</h4>
        <input type="number" onChange={this.izmeniVreme} placeholder={this.props.porudzbina.vreme} />
        <button style={stylee.buttonStyle} onClick={() => {this.nekaFunkcija(this.props.porudzbina)}}>Pošalji</button>
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
