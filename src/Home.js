import React from 'react';
import Header from './Header.js';
import ParalaxContainer from './ParalaxContainer.js';
import SectionHeadline from './SectionHeadline';
import FeaturedLeft from './FeaturedLeft.js';
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
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
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
          <FeaturedLeft />
        </div>
      </div>
    );
  }
}
