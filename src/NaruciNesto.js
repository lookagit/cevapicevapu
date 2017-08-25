import React from 'react';
import bgImg from './o-nama-slika.jpg';
import TopHero from './TopHero';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Proizvod from './Proizvod';
import scss from './styles.scss';

export default class NaruciNesto extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  render () {
    return (
      <div>
        <TopHero title="Dostava" subtitle="Naručite nešto kod nas skroz dobro" bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <Proizvod />
      </div>
    );
  }
}
