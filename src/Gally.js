import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import GallyGrid from './GallyGrid.js'
import bgImg from './images/galerija.jpg';
import {PhotoSwipeGallery} from 'react-photoswipe';
let items = [
  {
    src: '/galerija/drama4.jpg',
    thumbnail: '/galerija/drama4.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: '/galerija/drama5.jpg',
    thumbnail: '/galerija/drama5.jpg',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: '/galerija/drama1.jpg',
    thumbnail: '/galerija/drama1.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: '/galerija/drama2.jpg',
    thumbnail: '/galerija/drama2.jpg',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: '/galerija/drama3.jpg',
    thumbnail: '/galerija/drama3.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: '/galerija/drama6.jpg',
    thumbnail: '/galerija/drama6.jpg',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: '/galerija/drama7.jpg',
    thumbnail: '/galerija/drama7.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: '/galerija/drama8.jpg',
    thumbnail: '/galerija/drama8.jpg',
    w: 1200,
    h: 900,
    title: 'Image 2'
  }
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
        <div style={{backgroundImage:"url('/pozadinadrvo.jpg')", backgroundSize:'cover' }}>
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
