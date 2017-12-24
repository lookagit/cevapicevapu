import React from 'react';
import Header from './DumbComponents/Helpers/Header.js';
import ParalaxContainer from './DumbComponents/Helpers/ParalaxContainer.js';
import SectionHeadline from './DumbComponents/Helpers/SectionHeadline';
import Loadable from 'react-loadable';
import {load} from './DumbComponents/Helpers/Loading';

const LoadableComponentForHome = Loadable({
  loader: () => import('./DumbComponents/Helpers/FeaturedLeft.js'),
  loading: load,
});

import css from './styles.css';
const stylee = {
  backgroundImage : 'url("https://res.cloudinary.com/drama/image/upload/q_78/v1513947427/slika-za-parallax-drama-rostilj_vaxorb.jpg")',
  height: '300px',
}
const sndlax = {
  backgroundImage : 'url("https://res.cloudinary.com/drama/image/upload/q_43/v1513947493/drama7_rz2ibq.jpg")',
  height: '350px',
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      DynamicHomeIframe: null,
    }
  }
  componentDidMount() {
    if(typeof window !== 'undefined')  {
      window.addEventListener('scroll', () => {
        if(!this.state.scrolled) {
          console.log("JOJO ");
          this.setState({
            scrolled: true,
          })
        }
      })
    }
    if(typeof window !== 'undefined')  {
      window.scrollTo(0,0);
    }
  }
  render () {
    return (
      <div>
        <Header />
        <div style={{width:'100%', height:'auto'}}>
          <img src="https://res.cloudinary.com/drama/image/upload/c_scale,q_36,w_1335/v1513960458/cevapi_cgehve.jpg" style={{width: "100%", height: "auto", verticalAlign:'top'}}/>
        </div>
        <ParalaxContainer stylee={stylee} />
        <div style={{backgroundImage:"url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')"}}  className={css.pozadina2}>
          <SectionHeadline title="Tradicionalni srpski ćevapi u srcu prestonice" innerText="100% domaće juneće meso bez aditiva" />
        </div>
        <ParalaxContainer stylee={sndlax} />
        <div style={{backgroundImage:"url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')"}}  className={css.pozadina2}>
          { this.state.scrolled && <LoadableComponentForHome />}
        </div>
      </div>
    );
  }
}
