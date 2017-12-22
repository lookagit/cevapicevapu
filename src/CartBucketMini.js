import React from 'react';
import { connect } from 'react-redux';
import CartIcon from 'react-icons/lib/fa/shopping-cart';
import css from './styles.css';
@connect(state => ({ orders: state.orders}))
export default class CartBucketMini extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: "",
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.orders.length) {

      const numb = nextProps.orders.reduce(function (sum, b) {
        return  sum + parseInt(b.kolicina);
      }, 0);
      this.setState({
        cartCount: numb,
      })
    } else {
      this.setState({
        cartCount: "",
      })
    }
  }
  render() {
    return(
      <span>
        <span style={{position: 'absolute', marginTop: 0, color: 'orange', marginLeft: '14px', fontSize: '19px',fontWeight: 'bold'}}>{this.state.cartCount}</span>
        <CartIcon style={{fontSize: '40px', verticalAlign: 'middle', marginTop: '-10px'}} />
      </span>
    )
  }
}
