import React from 'react';

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
      <div style={{width: '100%', height: '60px',background: '#d9ab6f', display: 'flex',}}>
        <div style={{width: '1000px', margin: '0 auto'}}>
          <div style={{float: 'right',}}>
          <a href="#" onClick={() => {this.handleChange()}}>Izlogujte se</a>
          </div>
        </div>
      </div>
    );
  }
}
