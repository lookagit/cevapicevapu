import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allProizvods from 'src/queries/getProizvodi.gql';
import scss from '../styles.scss';


@graphql(allProizvods)
export default class ProizvodList extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      allProizvods: PropTypes.arrayOf(
        PropTypes.shape({
          naslov: PropTypes.string.isRequired,
          cena: PropTypes.number.isRequired,
        }),
      ),
    }),
  }

  render() {
    const { data } = this.props;
    return (
      <Col xs={12} sm={12} md={4} lg={4}>
        <h3>Lista Proizvoda</h3>
        <div className={scss.proizvodList}>
          {data.allProizvods && data.allProizvods.map((proiz, index) => {
            console.log("ITEEEM ", proiz)
            return (
              <div className={scss.proizvodItem}>
                <img src={proiz.urlSlike} />
                <h4>{proiz.naslov}</h4>
                <h4>{proiz.cena} RSD</h4>
              </div>
            )
          }  
        )}
        </div>
      </Col>
    );
  }
}
