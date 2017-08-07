import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './css/porudzbine.scss';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allPorudzbinas from 'src/queries/allPorudzbinas.gql';
import createPorudzbina from 'src/mutations/createPorudzbina.gql';
@graphql(allPorudzbinas)
export default class Porudzbine extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allPorudzbinas: PropTypes.arrayOf(
        PropTypes.shape({
          adresa: PropTypes.string.isRequired,
          brojTelefona: PropTypes.number.isRequired,
        }),
      ),
    }),
  }
  render () {
    const { data } = this.props;
    return (
      <Col xs={12} sm={12} md={8} lg={8}>
        <div className={scss.porudzbine}>
          {data.allPorudzbinas && data.allPorudzbinas.map((porudz, index) => (
            <div className={scss.proizvodItem}>
              <h4>Adresa: {porudz.adresa}</h4>
              <h4>Broj Telefona: {porudz.brojTelefona}</h4>
              {porudz.stavkePorudzbines && porudz.stavkePorudzbines.map((stavka, index) => (
                <div>
                  <h4>Proizvod:{stavka.proizvod.naslov}</h4>
                </div>
              ))}
              <h3>Opis: {porudz.opis}</h3>
            </div>
          ))}
        </div>
      </Col>
    );
  }
}
