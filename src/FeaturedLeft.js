import React from 'react';
import css from './styles.css';
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
            <div id="TA_selfserveprop140" class="TA_selfserveprop">
              <ul id="Xwlvmn9oPM0A" class="TA_links rfK3moz">
                <li id="bXYKv4eM" class="IVnZ4S51MgO">
                  <a target="_blank" href="https://www.tripadvisor.com/"><img src="https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png" alt="TripAdvisor"/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FeaturedLeft;
