import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import SerbianBurger from './serbianburger.jpg';
import ContentBoxes from './ContentBoxes.js';
export default class AboutUs extends React.Component {
  render() {
    return(
      <div>
        <TopHero title="O NAMA" subtitle="Ćevapi sa srcem za svačiju dušu" bgImage={{backgroundImage: 'url(http://sarajevski-cevapi.com/wp-content/uploads/2013/12/cevapi03-950x350.jpg)'}} />
        <ContentBoxes />
      </div>
    );
  }
}
