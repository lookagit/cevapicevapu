import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import PorudzbinaConfirm from './PorudzbinaConfirm';
import { connect } from 'react-redux';

@connect(state => ({ counter: state.counter, orders: state.orders }))
@graphql(gql`
  mutation createPorudzbina($adresa: String!, $brojTelefona: Int!) {
    createPorudzbina (adresa: $adresa, brojTelefona: $brojTelefona) {
      id
    },
  }`,
  {
    name: 'createPorudzbina',
  }
)
@graphql(gql`
  mutation createStavkePorudzbine($kolicina: Int!) {
    createStavkePorudzbine (kolicina: $kolicina) {
      id
    }
  }`,
  {
    name: 'createStavkePorudzbine',
  }
)

@graphql(gql`
  mutation addToPorudzbinaOnStavkePorudzbine($stavkePorudzbinesStavkePorudzbineId: ID!, $porudzbinaPorudzbinaId: ID!) {
    addToPorudzbinaOnStavkePorudzbine (stavkePorudzbinesStavkePorudzbineId: $stavkePorudzbinesStavkePorudzbineId, porudzbinaPorudzbinaId: $porudzbinaPorudzbinaId) {
      porudzbinaPorudzbina {
        adresa
      }
    }
  }`,
  {
    name: 'addToPorudzbinaOnStavkePorudzbine',
  }
)
@graphql(gql`
  mutation addToStavkePorudzbineOnProizvod($stavkePorudzbinesStavkePorudzbineId: ID!, $proizvodProizvodId: ID!){
    addToStavkePorudzbineOnProizvod(stavkePorudzbinesStavkePorudzbineId: $stavkePorudzbinesStavkePorudzbineId, proizvodProizvodId: $proizvodProizvodId){
      stavkePorudzbinesStavkePorudzbine{
        id
      }
    }
  }`,
  {
    name: 'addToStavkePorudzbineOnProizvod',
  }
)
export default class KorpaPorudzbina extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adresa: "Random Adresa",
      brojTelefona: 123456,
      porudzbinaId: '123',
      poslato: false,
    }
  }

  izmeniAdresu = (event) => {
    this.setState({adresa: event.target.value});
  }

  izmeniBroj = (event) => {
    this.setState({brojTelefona: parseInt(event.target.value)});
  }

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


  nekaFunkcija = async () => {
    const pravimPorudzbinu = await this.props.createPorudzbina({
      variables: {
        adresa: this.state.adresa,
        brojTelefona: this.state.brojTelefona,
      }
    });

    if(pravimPorudzbinu) {
      if(this.props.orders) {
        this.props.orders.map( async (stavka, index) => {
          const pravim = {};
          pravim.stavku = await this.props.createStavkePorudzbine({
            variables: {
              kolicina: parseInt(stavka.kolicina),
            }
          });
          pravim.vezuPorudzbine = await this.props.addToPorudzbinaOnStavkePorudzbine({
            variables: {
              stavkePorudzbinesStavkePorudzbineId: pravim.stavku.data.createStavkePorudzbine.id,
              porudzbinaPorudzbinaId: pravimPorudzbinu.data.createPorudzbina.id,
            }
          });
          pravim.vezuProizvod = await this.props.addToStavkePorudzbineOnProizvod({
            variables: {
              stavkePorudzbinesStavkePorudzbineId: pravim.stavku.data.createStavkePorudzbine.id,
              proizvodProizvodId: stavka.proizvodid,
            }
          });

        })
      }
    }
    this.setState({poslato: true});
    this.props.dispatch({
      type: 'REMOVE_ORDER',
    });
  }

  render() {
    console.log("JUNGLE ", this.props);
    return(
      <div>
        <label>Adresa</label>
        <input type="text" onChange={this.izmeniAdresu} />
        <label>Broj Telefona</label>
        <input type="number" onChange={this.izmeniBroj} />
        <button  onClick={() => {
          this.nekaFunkcija();
        }}>Napravi Porudzbinu</button>
        <PorudzbinaConfirm poslato={this.state.poslato} />
      </div>
    );
  }
}
