import React from 'react';
import css from './styles.css';
import scriptLoader from 'react-async-script-loader';
import loadjs from 'loadjs';
import Regex from 'regex';
import { connect } from 'react-redux';

@connect(state => ({reloader: state.reloader}))
class FeaturedLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      console.log(this.props);
      if(this.props.reloader){
        window.location.reload();
      }
  }

  componentWillUnmount() {
    console.log("anmauntujem");
    this.props.dispatch({
      type: 'RELOADUJ',
    });
  }

  render() {
    return (
      <div style={{display: "flex"}}>
        <div className={css.featured}>
          <div className={css.featuredLeftImage} style={{backgroundImage: "url('pleska.jpg')"}}></div>
          <div className={css.featuredLeftText}>
          <div id="TA_selfserveprop159" className="TA_selfserveprop">
          <ul id="ZxZWq9" className="TA_links 439Tw8ih">
          <li id="TODlRwD" className="Bc8aZtVzSly">
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
