import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import SerbianBurger from './serbianburger.jpg';
import ContentBoxes from './ContentBoxes.js';
import bgImg from './images/sarajevski-cevap-drama.jpg';
export default class AboutUs extends React.Component {
  render() {
    return(
      <div>
        <TopHero title="O NAMA" subtitle="Kako je nastala DRAMA" bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <ContentBoxes />
      </div>
    );
  }
}
