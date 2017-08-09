import React from 'react';
import { connect } from 'react-redux';
import CartIcon from 'react-icons/lib/fa/shopping-cart';
@connect(state => ({ orders: state.orders}))
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: "",
    }
  }
  componentWillMount() {
    console.log("PROPS, ", this.props);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.orders.length) {
      console.log("KOMPONENT ", nextProps.orders);

      const numb = nextProps.orders.reduce(function (sum, b) {
        return  sum + parseInt(b.kolicina);
      }, 0);
      this.setState({
        cartCount: numb,
      })
      console.log("OVO JE numb", this.state.cartCount);
    } else {

    }
  }
  render() {
    return(
      <span>
        <span style={{position: 'absolute', marginTop: '3px',color: 'orange',marginLeft: '18px', fontSize: '16px'}}>{this.state.cartCount}</span>
        <CartIcon style={{fontSize: '40px', verticalAlign: 'middle', marginTop: '-10px'}} />
      </span>
    )
  }
}
