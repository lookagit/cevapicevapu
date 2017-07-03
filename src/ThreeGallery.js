import React from 'react';
import css from './styles.css';
import InstaImage from './InstaImage.js';
const srcFirst = {
  backgroundImage:'url("/pljeska1.jpg")',
}
const srcSecond = {
  backgroundImage:'url("/pljeska2.jpg")',
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
