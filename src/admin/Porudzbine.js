import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './css/porudzbine.scss';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allPorudzbinas from 'src/queries/allPorudzbinas.gql';
import createPorudzbina from 'src/mutations/createPorudzbina.gql';
import gql from 'graphql-tag';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';


@graphql(allPorudzbinas)
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
export default class Porudzbine extends React.Component {
  constructor(){
    super();
    this.state = {
      fakestejt: 'fejkstejt',
      isShowingModal: false,
    }
  };
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false, kolicina: ''})
  static propTypes = {
    data: PropTypes.shape({
      allPorudzbinas: PropTypes.arrayOf(
        PropTypes.shape({
          adresa: PropTypes.string.isRequired,
          brojTelefona: PropTypes.number.isRequired,
        }),
      ),
    }),
  }

  forceUpdateHandler = () => {
        this.forceUpdate();
  }

  brisanjePorudzbina = async(ajDi) => {
    console.log(ajDi.id);
    console.log(ajDi.stavkePorudzbines);
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
    this.setState({fakestejt: 'josjednom'});
  }

  button = () => {
      return (<button onClick={() => this.handleClick()}>Obrisi porudzbinu</button>)
  }

  render () {
    const { data } = this.props;

    console.log('Ja sam data ', data);

    return (
      <Col xs={12} sm={12} md={8} lg={8}>
        <div className={scss.porudzbine}>
          {data.allPorudzbinas && data.allPorudzbinas.map((porudz, index) => (
            <div className={scss.proizvodItem}>
              <h4>Adresa: {porudz.adresa}</h4>
              <h4>Broj Telefona: {porudz.brojTelefona}</h4>
              {porudz.stavkePorudzbines && porudz.stavkePorudzbines.map((stavka, index) => (
                <div>
                  <h4>Proizvod:{stavka.proizvod.naslov}</h4>
                  <h4>Kolicina: {stavka.kolicina}</h4>
                </div>
              ))}
              <h3>Opis: {porudz.opis}</h3>
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
                      this.brisanjePorudzbina(porudz);
                      this.handleClose();
                    }}>Potvrdi</button>
                  </ModalDialog>
                </ModalContainer>
              }
            </div>
          ))}
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
    margin: '20px 20px',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}
