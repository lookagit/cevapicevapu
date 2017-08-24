import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import GallyGrid from './GallyGrid.js'
import bgImg from './images/galerija.jpg';
export default class Gally extends React.Component {
  render() {
    return(
      <div>
        <TopHero title="GALERIJA" subtitle="Dobrodošli na 100% juneću pljeskavicu" bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <div style={{backgroundImage:"url('/pozadinadrvo.jpg')", backgroundSize:'cover'}}>
          <GallyGrid />
        </div>
      </div>
    );
  }
}
