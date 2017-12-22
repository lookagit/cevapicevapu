import React from 'react';
import css from './styles.css';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';
import windowSize from 'react-window-size';

@connect(state => ({reloader: state.reloader}))
class FeaturedLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("AHAAAA ", this.props.windowWidth, this.props.windowHeight);
    return (
      <div style={{display: "flex"}}>
        <div className={css.featured}>
          <div className={css.featuredLeftImage} style={{backgroundImage: "url('pleska.jpg')"}}></div>
          <div className={css.featuredLeftText}>
          <div className={css.featuredTrick}>
          {
            this.props.windowWidth > 1024 ?
              <Iframe url="https://widget.developcodex.net/468"
                minWidth="460px"
                width="100%"
                height="470px"
                display="initial"
                position="relative"
                style={{zIndex: 0}}
              /> :
              <Iframe url="https://widget.developcodex.net/240"
              minWidth="280px"
              width="100%"
              height="470px"
              display="initial"
              position="relative"
              style={{zIndex: 0}}
            />
          }

          </div>
          </div>
        </div>
      </div>
    )
  }
}
export default windowSize(FeaturedLeft);
