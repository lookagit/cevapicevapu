
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PorudzbinaConfirm from './PorudzbinaConfirm';
import { connect } from 'react-redux';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './styles.scss';
import PovratnoVreme from './PovratnoVreme.js';

@connect(state => ({ counter: state.counter, orders: state.orders }))
@graphql(gql`
  mutation createPorudzbina($adresa: String!, $brojTelefona: Int!, $opis: String!, $uredjaj: String!) {
    createPorudzbina (adresa: $adresa, brojTelefona: $brojTelefona, opis: $opis, uredjaj: $uredjaj) {
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
      opis: "Bez Opisa",
      id: 'NaN',
      uredjaj: ''
    }
  }

  

  izmeniAdresu = (event) => {
    this.setState({adresa: event.target.value});
  }

  izmeniBroj = (event) => {
    this.setState({brojTelefona: parseInt(event.target.value)});
  }
  izmeniOpis = (event) => {
    this.setState({opis: event.target.value});
  }

  static propTypes = {
    data: PropTypes.shape({
      allPorudzbinas: PropTypes.arrayOf(
        PropTypes.shape({
          adresa: PropTypes.string.isRequired,
          brojTelefona: PropTypes.number.isRequired,
          opis: PropTypes.string.isRequired,
        }),
      ),
    }),
  }



  nekaFunkcija = async () => {
    const pravimPorudzbinu = await this.props.createPorudzbina({
      variables: {
        adresa: this.state.adresa,
        brojTelefona: this.state.brojTelefona,
        opis: this.state.opis,
        uredjaj: this.state.uredjaj
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
    this.setState({id: pravimPorudzbinu.data.createPorudzbina.id});
    this.setState({poslato: true});
    this.props.dispatch({
      type: 'REMOVE_ORDER',
    });
  }

  componentDidMount() {
    let isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    if(isMobile.any()) {
      this.setState({
        uredjaj:'da'
      })
    }
    console.log(this.state.uredjaj)
  }

  render() {
    

    let forma;
    if(this.state.poslato) {
      forma = <div style={{textAlign: 'center', marginTop: '100px', marginBottom: '100px'}}><PovratnoVreme id={this.state.id} /></div>;
    } else {
      if (this.props.orders.length < 1) {
          forma = <div style={{textAlign: 'center', marginTop: '100px', marginBottom: '100px'}}><h2>Niste još ništa poručili kod nas!</h2><h2>Idite u <Link style={{color: 'gray',textDecoraation: 'none'}} to="/page/naruci" onClick={this.opener}>Naruči</Link></h2></div>;
      }
      else {
        forma = <form className={scss.korpaForm}>
          <PorudzbinaConfirm poslato={this.state.poslato} />
          <p>
            <input type="text" onChange={this.izmeniAdresu} placeholder="Vasa Adresa:" />
          </p>
          <p>
            <input type="text" onChange={this.izmeniBroj} placeholder="Broj Telefona" />
          </p>
          <p>
           <textarea onChange={this.izmeniOpis} placeholder="Opis" />
         </p>
          <p>
            <button type="button" onClick={() => {
              this.nekaFunkcija();
            }}>POŠALJI</button>
          </p>
        </form>;
      }
    }
    return(
      <Row>
       <Col xs={12}>
        {forma}
       </Col>
     </Row>
    );
  }
}
