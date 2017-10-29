import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import GallyGrid from './GallyGrid.js'
import bgImg from './images/galerija.jpg';
import {PhotoSwipeGallery} from 'react-photoswipe';
let items = [
  {
    src: '/galerija/drama1.jpg',
    thumbnail: '/galerija/drama1.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama2.jpg',
    thumbnail: '/galerija/drama2.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama3.jpg',
    thumbnail: '/galerija/drama3.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama4.jpg',
    thumbnail: '/galerija/drama4.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama5.jpg',
    thumbnail: '/galerija/drama5.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  
  {
    src: '/galerija/drama6.jpg',
    thumbnail: '/galerija/drama6.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama7.jpg',
    thumbnail: '/galerija/drama7.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama8.jpg',
    thumbnail: '/galerija/drama8.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama9.jpg',
    thumbnail: '/galerija/drama9.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  
  {
    src: '/galerija/drama10.jpg',
    thumbnail: '/galerija/drama10.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama11.jpg',
    thumbnail: '/galerija/drama11.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama12.jpg',
    thumbnail: '/galerija/drama12.jpg',
    w: 900,
    h: 1200,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama13.jpg',
    thumbnail: '/galerija/drama13.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  
  {
    src: '/galerija/drama14.jpg',
    thumbnail: '/galerija/drama14.jpg',
    w: 1200,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama15.jpg',
    thumbnail: '/galerija/drama15.jpg',
    w: 900,
    h: 1200,
    title: 'Drama ćevapi'
  },
  {
    src: '/galerija/drama16.jpg',
    thumbnail: '/galerija/drama16.jpg',
    w: 1200,
    h: 800,
    title: 'Drama ćevapi'
  },
];
let options = {
  //http://photoswipe.com/documentation/options.html
};
export default class Gally extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={290} height={200}/>
    );
  }
  render() {
    return(
      <div>
        <TopHero title="GALERIJA" subtitle=" " bgImage={{backgroundImage: 'url("'+bgImg+'")'}} />
        <div style={{backgroundImage:"url('/pozadinadrvo.jpg')", backgroundSize:'cover' ,paddingTop: '50px', paddingBottom: '50px',}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <PhotoSwipeGallery items={items} options={options} thumbnailContent={this.getThumbnailContent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
