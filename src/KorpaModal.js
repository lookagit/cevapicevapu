import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect(state => ({ orders: state.orders }))
export default class KorpaModal extends React.Component {

  static propTypes = {
     orders: PropTypes.array,
   };


  render() {
    return(
      <div>
      {this.props.orders && this.props.orders.map((proiz, index) => (
        <div>
          <img width="100px" src={proiz.urlSlike} />
          <h3>{proiz.naslov}</h3>
          <h4>{proiz.kolicina}</h4>
          <h4>{proiz.cena}</h4>
        </div>
      ))}
      </div>
    );
  }
}
