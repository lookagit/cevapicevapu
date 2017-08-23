import React from 'react';
import css from './styles.css';
import scriptLoader from 'react-async-script-loader';


@scriptLoader(
  [
    'https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=525&amp;locationId=9874369&amp;lang=sr&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=false&amp;display_version=2'
  ]
)
class FeaturedLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.initEditor()
      }
      else this.props.onError()
    }
  }

  componentDidMount () {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.initEditor()
    }
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
