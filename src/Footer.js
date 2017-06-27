import React from 'react';
import scss from './styles.scss';
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import InstagramSquare from 'react-icons/lib/fa/instagram';
import YoutubeSquare from 'react-icons/lib/fa/youtube-square';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={scss.footer}>
          <div className={scss.itemWrap}>
            <div className={scss.footerItem}>
              <h2>O NAMA</h2>
              <p>Creative matching and contrasting the tastes, reaserching new combos,
               a gastronomic intersection of sea and the land.
               We also prepare some things that are quite national and traditional,
               feel free to ask, not everything is on the menu.</p>
               <a>Pročitaj više -></a>
            </div>
            <div className={scss.footerItem}>
            <h2>DOSTAVA</h2>
            <p>Donosimo hranu za podrucje Beograda na kucnu adresu. Radno vreme dostave je od 08:00 - 22:00.
              Za porudzbine preko 2000rsd. dostava je besplatna. Pozovite nas i porucite vasu omiljenu hranu sa rostilja a mi cemo se pobrinuti
              da uzivate u kvalitetnoj hrani u toplini vaseg doma
               </p>
            </div>
            <div className={scss.footerItem}>
            <h2>REACH US</h2>
            <FacebookSquare fill="#fff" width="3em" height="3em"/>
            <InstagramSquare fill="#fff" width="3em" height="3em" />
            <YoutubeSquare fill="#fff" width="3em" height="3em" />
            </div>
          </div>
        </div>
        <div className={scss.botFooter}>
          <p>DRAMA Ćevapi Oriđinale</p>
        </div>
      </div>
    )
  }
}
export default Footer;
