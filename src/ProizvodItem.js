import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


@connect(state => ({ counter: state.counter, orders: state.orders }))
export default class ProizvodItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kolicina: 0,
    }
  }

  static propTypes = {
    counter: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }),
  };

  upaliIncrement = () => {
    this.props.dispatch({
      type: 'ADD_ORDER',
      orders: {
        proizvodid: this.props.proiz.id,
        kolicina: this.state.kolicina,
        cena: this.props.proiz.cena * this.state.kolicina,
        urlSlike: this.props.proiz.urlSlike,
        naslov: this.props.proiz.naslov,
      },
    });
    console.log("EVO ME")
  }

  izmeniKolicinu = (event) => {
    this.setState({kolicina: event.target.value});
  }



  render () {
    return (
      <Col xs={12} sm={6} md={4} lg={3} className={scss.productBox}>
        <div className={scss.product}>
          <div>
            <img src={this.props.proiz.urlSlike} />
            <h2>{this.props.proiz.naslov}</h2>
            <h3>{this.props.proiz.cena} RSD</h3>
            <label>Kolicina &nbsp;</label> <input type="number" onChange={this.izmeniKolicinu} />
            <button onClick={() => this.upaliIncrement()}>Naruci</button>
          </div>
        </div>
      </Col>
    );
  }
}
