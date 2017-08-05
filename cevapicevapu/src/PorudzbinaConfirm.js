import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


@connect(state => ({ counter: state.counter, orders: state.orders }))
export default class PorudzbinaConfirm extends React.Component {

  componentDidMount() {
    if(this.props.poslato){
      this.props.dispatch({
        type: 'REMOVE_ORDER',
      });
      console.log("BRISEM");
    }
    console.log('Mauntovan');
  }



  render() {
    return (
      <div>
      {this.props.poslato ? (
      <h2>Poslali ste</h2>
    ) : (
      <h2>Posaljite porudzbinu</h2>
    )}
      </div>
    );
  }
}
