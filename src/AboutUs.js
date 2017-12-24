import React from 'react';
import css from './styles.css'
import TopHero from './DumbComponents/Helpers/TopHero.js';
import Loadable from 'react-loadable';
import Loading from './DumbComponents/Helpers/Loading';

const LoadableComponentForAbout = Loadable({
  loader: () => import('./DumbComponents/AboutDumb/ContentBoxes.js'),
  loading: Loading,
});

export default class AboutUs extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  render() {
    return(
      <div>
        <TopHero title="Kako je nastala DRAMA" subtitle=" " bgImage={{backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_scale,w_1918/v1513949723/sarajevski-cevap-drama-cover_juhdlz.jpg")'}} />
        <LoadableComponentForAbout />
      </div>
    );
  }
}
