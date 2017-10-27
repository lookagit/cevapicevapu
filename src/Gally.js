import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import GallyGrid from './GallyGrid.js'
import bgImg from './images/galerija.jpg';
export default class Gally extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  render() {
    return(
      <div>
        <TopHero title="GALERIJA" subtitle=" " bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <div style={{backgroundImage:"url('/pozadinadrvo.jpg')", backgroundSize:'cover'}}>
          <GallyGrid />
        </div>
      </div>
    );
  }
}
