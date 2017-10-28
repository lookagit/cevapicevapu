import React from 'react';
import css from './styles.css';
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import InstagramSquare from 'react-icons/lib/fa/instagram';
import FourSquare from 'react-icons/lib/fa/foursquare';
import TripAdvisor from 'react-icons/lib/fa/tripadvisor';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={css.footer}>
          <div className={css.itemWrap}>
            <div className={css.footerItem}>
              <h2>DRUŠTVENE MREŽE</h2>
              <a href="https://www.facebook.com/dramacevapi/?fref=ts" target="_blank"><div className={css.rIconsFb}>
                <FacebookSquare width="3em" height="3em"/>
              </div></a>
              <a href="https://www.instagram.com/explore/locations/813855916/" target="_blank"><div className={css.rIconsIg}>
                <InstagramSquare width="3em" height="3em" />
              </div></a>
              <a href="https://foursquare.com/v/drama-%C4%87evapi/5516afa5498e354ab8cca147" target="_blank"><div className={css.rIconsYt}>
                <FourSquare width="3em" height="3em" />
              </div></a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g294472-d9874369-Reviews-Drama_Cevapi-Belgrade.html" target="_blank"><div className={css.rIconsYt}>
                <TripAdvisor width="3em" height="3em" />
              </div></a>
            </div>
            <div className={css.footerItem} style={{width: "450px"}}>
            <ul className={css.linkFooterUl}>
            <li className={css.linkFooter}><Link to="/">Početna</Link></li>
            <li className={css.linkFooter}><Link to="/page/naruci">Naruči</Link></li>
            <li className={css.linkFooter}><Link to="/page/about">O nama</Link></li>
            <li className={css.linkFooter}><Link to="/page/galerija">Galerija</Link></li>
            <li className={css.linkFooter}><Link to="/page/contact">Kontakt</Link></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;
