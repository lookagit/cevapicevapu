import React from 'react';
import css from './styles.css'
import TopHero from './TopHero.js';
import {PhotoSwipeGallery} from 'react-photoswipe';
let items = [
  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947478/drama1_osi8qr.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947478/drama1_osi8qr.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947479/drama2_vlv5ou.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947479/drama2_vlv5ou.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_64,w_840/v1513947482/drama3_irhz53.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_64,w_840/v1513947482/drama3_irhz53.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_61,w_1161/v1513947486/drama4_ivlqtc.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_61,w_1161/v1513947486/drama4_ivlqtc.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_64,w_1069/v1513947489/drama5_r7fymz.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_64,w_1069/v1513947489/drama5_r7fymz.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },

  {
    src: 'http://res.cloudinary.com/drama/image/upload/c_scale,w_1482/v1513947491/drama6_puqdcz.jpg',
    thumbnail: 'http://res.cloudinary.com/drama/image/upload/c_scale,w_1482/v1513947491/drama6_puqdcz.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947493/drama7_rz2ibq.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947493/drama7_rz2ibq.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947463/drama8_uyejt4.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947463/drama8_uyejt4.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947461/drama9_ljj4zu.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947461/drama9_ljj4zu.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },

  {
    src: 'https://res.cloudinary.com/drama/image/upload/q_48/v1513947459/drama10_nwhooq.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/q_48/v1513947459/drama10_nwhooq.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_57,w_652/v1513947456/drama11_hydarv.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/c_scale,q_57,w_652/v1513947456/drama11_hydarv.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/q_60/v1513947441/drama17_ypdlqv.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/q_60/v1513947441/drama17_ypdlqv.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947438/drama18_groh4i.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947438/drama18_groh4i.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },

  {
    src: 'https://res.cloudinary.com/drama/image/upload/v1513947449/drama14_w7shw7.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/v1513947449/drama14_w7shw7.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/c_scale,h_800,q_67/v1513947447/drama15_rh7fa6.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/c_scale,h_800,q_67/v1513947447/drama15_rh7fa6.jpg',
    w: 600,
    h: 900,
    title: 'Drama ćevapi'
  },
  {
    src: 'https://res.cloudinary.com/drama/image/upload/q_57/v1513947444/drama16_huawoc.jpg',
    thumbnail: 'https://res.cloudinary.com/drama/image/upload/q_57/v1513947444/drama16_huawoc.jpg',
    w: 800,
    h: 600,
    title: 'Drama ćevapi'
  },
];
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
        <TopHero title="GALERIJA" subtitle=" " bgImage={{backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/v1513949581/galerija_y2xfan.jpg")'}} />
        <div style={{backgroundImage:"url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')", backgroundSize:'cover' ,paddingTop: '50px', paddingBottom: '50px',}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <PhotoSwipeGallery items={items} options={{}} thumbnailContent={this.getThumbnailContent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
