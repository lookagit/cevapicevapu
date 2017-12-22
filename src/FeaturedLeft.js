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
    return (
      <div style={{display: "flex"}}>
        <div className={css.featured}>
          <div className={css.featuredLeftImage} style={{backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_52,w_395/v1513960228/pleska_gjm992.jpg')"}}></div>
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
