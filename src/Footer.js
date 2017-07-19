import React from 'react';
import css from './styles.css';
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import InstagramSquare from 'react-icons/lib/fa/instagram';
import YoutubeSquare from 'react-icons/lib/fa/youtube-square';
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
            <FacebookSquare fill="#fff" width="3em" height="3em"/>
            <InstagramSquare fill="#fff" width="3em" height="3em" />
            <YoutubeSquare fill="#fff" width="3em" height="3em" />
            </div>
            <div className={css.footerItem} style={{width: "450px"}}>
            <ul className={css.linkFooterUl}>
            <li className={css.linkFooter}><Link to="/">Početna</Link></li>
            <li className={css.linkFooter}><Link to="/page/jelovnik">Jelovnik</Link></li>
            <li className={css.linkFooter}><Link to="/page/galerija">Galerija</Link></li>
            <li className={css.linkFooter}><Link to="/page/about">O nama</Link></li>
            <li className={css.linkFooter}><Link to="/page/contact">Kontakt</Link></li>
            </ul>
            </div>
          </div>
        </div>
        <div className={css.botFooter}>
          <p>DRAMA Ćevapi Oriđinale</p>
        </div>
      </div>
    )
  }
}
export default Footer;
