import React from 'react';
import {Link} from 'react-router-dom';
import css from './styles.css';
import logo from './logodrama.png';
import menuIcon from './hamburger.png';
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
      console.log("{sdadsadsad1231}");
      this.setState({
        open: true,
        stylee: {overflow: 'visible'}
      });
    } else {
      console.log("{sdadsadsad}");
      this.setState({
        open: false,
        stylee: {overflow: 'hidden'}
      })
    }
  }
  render() {
    return (
      <div className={css.hello}>
        <img src={logo} alt="Drama logo" className={css.logo} />
        <div
          className={css.mobileIcon}
          onClick={this.opener} >
          <img src={menuIcon} alt="menu" height="35px" width="45px"/>
        </div>
        <ul style={this.state.stylee}>
        <li><Link to="/" onClick={this.opener}>Početna</Link></li>
        <li><Link to="/page/jelovnik" onClick={this.opener}>Jelovnik</Link></li>
        <li><Link to="/page/about" onClick={this.opener}>O nama</Link></li>
        <li><Link to="/old/path" onClick={this.opener}>Kontakt</Link></li>
        </ul>
      </div>
    )
  }
}
export default MainMenu;
