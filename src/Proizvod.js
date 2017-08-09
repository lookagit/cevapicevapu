import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allProizvods from 'src/queries/getProizvodi.gql';
import scss from './styles.scss';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import ProizvodItem from './ProizvodItem';
import KorpaModal from './KorpaModal';

@graphql(allProizvods)
export default class Proizvod extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      allProizvods: PropTypes.arrayOf(
        PropTypes.shape({
          naslov: PropTypes.string.isRequired,
        }),
      ),
    }),
  }

  ubaciProizvod = (proizvod) => {
    console.log(proizvod);
  }

  render() {
    const { data } = this.props;
    const naziv = data.allProizvods && data.allProizvods[2].naslov;
    console.log(data.allProizvods);
    return(
      <Grid>
        <Row>
      {data.allProizvods && data.allProizvods.map((proiz, index) => (
        <ProizvodItem proiz={proiz} />
      ))}
        <KorpaModal />
        </Row>
      </Grid>
    );
  }
}
