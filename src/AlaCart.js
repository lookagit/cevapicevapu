import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import SerbianBurger from './serbianburger.jpg';
import AlaCartGridMenu from './AlaCartGridMenu.js';
import bgImg from './images/pozadina.jpg';
export default class AlaCart extends React.Component {
  render() {
    return(
      <div>
        <TopHero title="JELOVNIK" subtitle="Ovaj obrok necete zaboraviti" bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <div style={{backgroundImage:"url('/pozadinadrvo.jpg')", backgroundSize:'cover'}}>
          <AlaCartGridMenu />
        </div>
      </div>
    );
  }
}