import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './styles.scss';
import getVreme from 'src/queries/getVreme.gql';

@graphql(gql`
  query getVreme($id: ID!) {
    Porudzbina(id: $id) {
      vreme,
      adresa,
      id
    }
  }`, {
  options: (props) => ({
    variables: {
      id: ' '
    }
  })
})
export default class PovratnoVreme extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 'NaN',
      loading: ''
    }
  }

  componentWillMount () {
    this.props.data.refetch({
      id: this.props.id,
    });
  }

  ovoJeReFetch = async() => {
    this.setState({loading: 'no'});
    console.log('POZVANA JEEE');
    await this.props.data.refetch({
      id: this.props.id,
    });
    this.setState({loading: 'yes'});
  }

  componentDidMount () {
    this.interval = setInterval(this.ovoJeReFetch, 3000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props;
    const vreme = data.Porudzbina && data.Porudzbina.vreme;
    console.log(this.props);
    if(vreme == null) {
      return(
        <h1>Molimo vas sačekajte odgovor!</h1>
      );
    } else {
      return(
          <h1>Vaša porudžbina će biti gotova za {vreme} minuta</h1>
      );
    }
  }
}
