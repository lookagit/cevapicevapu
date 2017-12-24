import React from 'react';
import css from './styles.css'
import TopHero from './DumbComponents/Helpers/TopHero.js';
import Loadable from 'react-loadable';
import Loading from './DumbComponents/Helpers/Loading';

const LoadableComponentForGally = Loadable({
  loader: () => import('./DumbComponents/Helpers/GallyHelper'),
  loading: Loading,
});
export default class Gally extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div>
        <TopHero title="GALERIJA" subtitle=" " bgImage={{backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/v1513949581/galerija_y2xfan.jpg")'}} />
        <div style={{backgroundImage:"url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')", backgroundSize:'cover' ,paddingTop: '50px', paddingBottom: '50px',}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <LoadableComponentForGally />
          </div>
        </div>
      </div>
    );
  }
}
