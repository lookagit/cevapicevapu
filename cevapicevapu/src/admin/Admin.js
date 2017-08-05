import React from 'react';
import TopHero from '../TopHero';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import ProizvodList from './ProizvodList';
import Porudzbine from './Porudzbine';

export default class Admin extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      pin: "1312",
      inputOn: false,
      enteredPin: "1312",
    }
  }

  checkPin () {
    let pin = this.state.pin;
    let enpin = this.state.enteredPin;
    if (pin == enpin) {
      console.log("jea");
    } else {
      this.setState({enteredPin: "1312"});
      checkPin();
    }
  }

  handleChange(event) {
   this.setState({enteredPin: event.target.enteredPin});
  }

  checkInput () {

  }

  render () {
    let putinput = null;
    if(this.state.inputOn) {
      putinput =
       <div>
        <input value={this.state.enteredPin} onChange={this.handleChange} type="number" />
        <button onClick={this.checkPin}>Unesi pin</button>
      </div>

       ;
    }else {
      putinput =
        <Grid>
          <Row>
            <Porudzbine />
            <ProizvodList />
          </Row>
        </Grid>

      ;
    }
    return (
      <div>
        <TopHero title="ADMIN" subtitle="Kontrolni Panel"  bgImage={{backgroundImage: 'url("/admin.jpg")'}} />
        {putinput}
      </div>
    );
  }
}
