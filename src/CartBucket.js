import React from 'react';
import { connect } from 'react-redux';
import CartIcon from 'react-icons/lib/fa/shopping-cart';
@connect(state => ({ orders: state.orders}))
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    }
  }
  componentWillMount() {
    console.log("PROPS, ", this.props);
  }
  render() {
    return(
      <span>
        3
        <CartIcon style={{fontSize: '32px', verticalAlign: 'middle', marginTop: '-10px'}} />
      </span>
    )
  }
}
