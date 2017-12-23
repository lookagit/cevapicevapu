import React from 'react';
import HeaderHero from './HeaderHero.js';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <HeaderHero />
      </div>
    )
  }
}
export default Header;
