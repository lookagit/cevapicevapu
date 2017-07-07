import React from 'react';
import css from './styles.css';
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
        <div className={css.footer}>
          <div className={css.itemWrap}>
            <div className={css.footerItem}>
              <h2>ĆEVAPI DRAMA</h2>
              <p>Svi naši proizvodi su proizvedeni u sopstvenom proizvodnom pogonu po HACCP (HASAP) standardu koji garantuje kvalitet naših proizvoda.</p>
            </div>
            <div className={css.footerItem}>
            <h2>DOSTAVA</h2>
            <p> Pozovite nas i porucite vasu omiljenu hranu sa rostilja a mi cemo se pobrinuti
              da uzivate u kvalitetnoj hrani u toplini vaseg doma.
               </p>
            </div>
            <div className={css.footerItem}>
            <h2>DRUŠTVENE MREŽE</h2>
            <FacebookSquare fill="#fff" width="3em" height="3em"/>
            <InstagramSquare fill="#fff" width="3em" height="3em" />
            <YoutubeSquare fill="#fff" width="3em" height="3em" />
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
