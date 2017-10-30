import React from 'react';
import css from './styles.css';
import scriptLoader from 'react-async-script-loader';
import loadjs from 'loadjs';
import Regex from 'regex';
import { connect } from 'react-redux';
import Script from 'react-load-script';
import Iframe from 'react-iframe';

@connect(state => ({reloader: state.reloader}))
class FeaturedLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{display: "flex"}}>
        <div className={css.featured}>
          <div className={css.featuredLeftImage} style={{backgroundImage: "url('pleska.jpg')"}}></div>
          <div className={css.featuredLeftText}>
          <div>
          <Iframe url="https://widget.developcodex.net/"
            width="100%"
            height="470px"
            display="initial"
            position="relative"
          />
          </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FeaturedLeft;
