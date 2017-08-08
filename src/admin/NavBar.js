import React from 'react';
import scss from '../styles.scss';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    window.location.reload();
  };

  render() {
    return (
      <div className={scss.adminNavbar}>
        <div style={{width: '1000px', margin: '0 auto'}}>
          <div style={{float: 'right',}}>
            <button href="#" onClick={() => {this.handleChange()}}>Izlogujte se</button>
          </div>
        </div>
      </div>
    );
  }
}
