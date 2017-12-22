import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import ContentBoxes from './ContentBoxes.js';
import bgImg from './images/sarajevski-cevap-drama.jpg';
export default class AboutUs extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  render() {
    return(
      <div>
        <TopHero title="Kako je nastala DRAMA" subtitle=" " bgImage={{backgroundImage: 'url("/sarajevski-cevap-drama-cover.jpg")'}} />
        <ContentBoxes />
      </div>
    );
  }
}
