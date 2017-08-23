import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import SerbianBurger from './serbianburger.jpg';
import ContentBoxes from './ContentBoxes.js';
import bgImg from './images/sarajevski-cevap-drama.jpg';
import passwordHash from 'password-hash';
export default class AboutUs extends React.Component {
  render() {
    return(
      <div>
        <TopHero title="Kako je nastala DRAMA" subtitle=" " bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <ContentBoxes />
      </div>
    );
  }
}
