import React from 'react';
import {Link} from 'react-router-dom';
import css from './styles.css';
import menuIcon from './hamburger.png';
import CartBucketMini from './CartBucketMini.js';
import CartBucket from './CartBucket.js';
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      stylee: {},
      blinker: {display: 'flex', opacity: 1},
    }
  }
  ddelay = (ms) => {
    var ctr, rej, p = new Promise(function (resolve, reject) {
        ctr = setTimeout(resolve, ms);
        rej = reject;
    });
    p.cancel = function(){ clearTimeout(ctr); rej(Error("Cancelled"))};
    return p; 
  }

  componentDidMount() {
    this.ddelay(2000).then(()=>{this.setState({
        blinker: {opacity: 0, pointerEvents: 'none'}
      });});
  }

  opener = () => {
    if(!this.state.open) {
      this.setState({
        open: true,
        stylee: {overflow: 'visible'}
      });
    } else {
      this.setState({
        open: false,
        stylee: {overflow: 'hidden'}
      })
    }
  }
  render() {
    return (
      <div className={css.hello}>
        <div style={this.state.blinker} className={css.blinkDrama}>
          <img src={require("../static/logodrama.png")} />
        </div>
        <Link to="/" ><img src={require("../static/logodrama.png")} alt="Drama logo" className={css.logo} /></Link>
        <div className={css.mobileIcon} >
          <img onClick={this.opener} src={menuIcon} alt="menu" height="35px" width="45px"/>
          <div className={css.miniBucket}style={{position: 'absolute',right: "55px", top: 0,}}><Link to="/korpa"><CartBucketMini /></Link></div>
        </div>
        <ul><li><Link className={css.cartIcon} to="/korpa"><CartBucket /></Link></li></ul>
        <ul style={this.state.stylee}>
        <li><Link to="/" onClick={this.opener}>Početna</Link></li>
        <li><Link to="/page/naruci" onClick={this.opener}>Naruči</Link></li>
        <li><Link to="/page/about" onClick={this.opener}>O nama</Link></li>
        <li><Link to="/page/galerija" onClick={this.opener}>Galerija</Link></li>
        <li><Link to="/page/contact" onClick={this.opener}>Kontakt</Link></li>
        </ul>
      </div>
    )
  }
}
export default MainMenu;
