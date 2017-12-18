import React, { Component } from 'react';
import bgImg from './o-nama-slika.jpg';
import TopHero from './TopHero';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KorpaPorudzbina from './KorpaPorudzbina';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './styles.scss';
import Trash from 'react-icons/lib/fa/trash';

@connect(state => ({orders: state.orders}))
export default class Korpa extends Component {

  static propTypes = {
     orders: PropTypes.array,
   };

   izbrisiItem = (broj) => {
     this.props.dispatch({
       type: 'REMOVE_ITEM',
       index: broj,
     });
   }

   componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }

  render() {
    return(
      <div>
        <TopHero title="Korpa" subtitle="Naručite nešto kod nas skroz dobro" bgImage={{backgroundImage: 'url("/dvecevape.jpg")'}} />
        <div className={scss.korpa}>
          <Grid style={{width: '100%'}}>
            <Row style={{width: '100%'}} className={scss.korpaItems}>
              {this.props.orders && this.props.orders.map((proiz, index) => (
                <Col xs={12} sm={6} md={4} lg={3} className={scss.korpaItem}>
                  <img src={proiz.urlSlike} width="150px" />
                  <h3 style={{color: 'white'}}>{proiz.naslov}</h3>
                  <h3>Kolicina: {proiz.kolicina}</h3>
                  <h3 style={{color: 'orange', fontSize: '23px'}}>Cena: {proiz.cena} RSD</h3>
                  <Trash className={scss.trash} onClick={() => this.izbrisiItem(index)} />
                </Col>
              ))}
            </Row>
          <KorpaPorudzbina orders={this.props.orders} />
          </Grid>
        </div>
      </div>

    );
  }
}
