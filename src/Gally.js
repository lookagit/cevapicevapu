import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import GallyGrid from './GallyGrid.js'
export default class Gally extends React.Component {
  render() {
    return(
      <div>
        <TopHero title="GALERIJA" subtitle="Dobrodosli na 100% juneću pljeskavicu" bgImage={{backgroundImage: 'url("/o-nama-slika.jpg")'}} />
        <GallyGrid />
      </div>
    );
  }
}
