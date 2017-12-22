import React from 'react';
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
        <TopHero title="Dostava" subtitle="Cvrči, cvrči ćevap Drama, uskoro će biti s Vama" bgImage={{backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_58,w_1766/v1513947368/dostava_murmvd.jpg')"}} />
        <Proizvod />
      </div>
    );
  }
}
