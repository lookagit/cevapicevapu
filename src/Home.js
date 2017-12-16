import React from 'react';
import Header from './Header.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import ParalaxContainer from './ParalaxContainer.js';
import SectionHeadline from './SectionHeadline';
import ThreeGallery from './ThreeGallery.js';
import FeaturedLeft from './FeaturedLeft.js';
import css from './styles.css';
const stylee = {
  backgroundImage : 'url("https://image.ibb.co/kA7M26/slika_za_parallax_drama_rostilj.jpg")',
  height: '300px',
}
const sndlax = {
  backgroundImage : 'url("https://image.ibb.co/nHCtFR/parallax_nova_drama_rostilj.jpg")',
  height: '350px',
}

export default class Home extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  render () {
    return (
      <div>
        <Header />
        <ScrollableAnchor id={'section1'}>
        <div style={{width:'100%', height:'auto'}}>
          <img src="/cevapi.jpg" style={{width: "100%", height: "auto", verticalAlign:'top'}}/>
        </div>
        </ScrollableAnchor>
        <ParalaxContainer stylee={stylee} />
        <div style={{backgroundImage:"url('/Pozadina2.jpg')"}}  className={css.pozadina2}>
          <SectionHeadline title="Tradicionalni srpski ćevapi u srcu prestonice" innerText="100% domaće juneće meso bez aditiva" />
        </div>
        <ParalaxContainer stylee={sndlax} />
        <div style={{backgroundImage:"url('/Pozadina2.jpg')"}}  className={css.pozadina2}>
          <FeaturedLeft />
        </div>
      </div>
    );
  }
}
