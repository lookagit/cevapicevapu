import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allProizvods from 'src/queries/getProizvodi.gql';
import {Grid, Row} from 'react-styled-flexboxgrid';
import ProizvodItem from './ProizvodItem';

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

  render() {
    const { data } = this.props;
    const naziv = data.allProizvods && data.allProizvods[2].naslov;
    return(
      <Grid>
        <Row>
      {data.allProizvods && data.allProizvods.filter(item => item.tip === 'hrana').map((proiz, index) => {
        return (
          <ProizvodItem proiz={proiz} key={index}/>
        )
      }
      )}
      {data.allProizvods && data.allProizvods.filter(item => item.tip === 'pice').map((proiz, index) => {
        return (
          <ProizvodItem proiz={proiz} key={index}/>
        )
      }
      )}
        </Row>
      </Grid>
    );
  }
}
