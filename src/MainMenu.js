import React from 'react';
import {Link} from 'react-router-dom';
import css from './styles.css';
import logo from './logodrama.png';
import menuIcon from './hamburger.png';
import CartBucket from './CartBucket.js';
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      stylee: {},
    }
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
        <Link to="/" onClick={this.opener}><img src={logo} alt="Drama logo" className={css.logo} /></Link>
        <div
          className={css.mobileIcon}
          onClick={this.opener} >
          <img src={menuIcon} alt="menu" height="35px" width="45px"/>
        </div>
        <ul style={this.state.stylee}>
        <li><Link to="/" onClick={this.opener}>Početna</Link></li>
        <li><Link to="/page/naruci" onClick={this.opener}>Naruči</Link></li>
        <li><Link to="/page/about" onClick={this.opener}>O nama</Link></li>
        <li><Link to="/page/galerija" onClick={this.opener}>Galerija</Link></li>
        <li><Link to="/page/contact" onClick={this.opener}>Kontakt</Link></li>
        <li><Link to="/korpa" onClick={this.opener}><CartBucket /></Link></li>
        </ul>
      </div>
    )
  }
}
export default MainMenu;
