import React from 'react';
import css from './styles.css';
import InstaImage from './InstaImage.js';
const srcFirst = {
  backgroundImage:'url("http://www.lepaisrecna.rs/thumbnail.php?file=2017/05/najlepse_jelo_od_mlevenog_mesa_gurmanska_pljeskavica_sa_lukom_i_dimljenom_slaninom_recept_213236330.jpg&size=article_medium")',
}
const srcSecond = {
  backgroundImage:'url("http://varna.zavedenia.com/system/storage/images/varna/medium/1427314c21da81f2f1bdf4d2dc6966cd4ed03.jpg")',
}
const srcThird = {
  backgroundImage:'url("https://adriaticmedianethr.files.wordpress.com/2017/01/c487evapi.jpg?quality=100&strip=all&w=669&strip=all")',
}
class ThreeGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className={css.threeGallery}>
        <div className={css.flexo}>
          <InstaImage src={srcFirst} tekst="Gurmanska pljeskavica 300gr" />
          <InstaImage src={srcSecond} tekst="Leskovacka muckalica 300gr" />
          <InstaImage src={srcThird} tekst="10 ćevapa 300gr" />
        </div>
      </div>
    );
  }
}
export default ThreeGallery;
