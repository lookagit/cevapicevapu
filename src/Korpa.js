import React, { Component } from 'react';
import bgImg from './o-nama-slika.jpg';
import TopHero from './TopHero';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KorpaPorudzbina from './KorpaPorudzbina';

@connect(state => ({orders: state.orders}))
export default class Korpa extends Component {

  static propTypes = {
     orders: PropTypes.array,
   };
  render() {
    return(
      <div>
        <TopHero title="Dostava" subtitle="Naručite nešto kod nas skroz dobro" bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        {this.props.orders && this.props.orders.map((proiz, index) => (
          <div>
            <h2>{proiz.proizvodid}</h2>
            <img src={proiz.urlSlike} width="150px" />
            <h3>{proiz.naslov}</h3>
            <h3>Kolicina: </h3><p>{proiz.kolicina}</p>
            <h3>Cena: </h3><p>{proiz.cena}</p>
          </div>
        ))}
        <KorpaPorudzbina orders={this.props.orders} />
      </div>

    );
  }
}
