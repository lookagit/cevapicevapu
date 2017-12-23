import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
@graphql(gql`
mutation updatePorudzbina($id: ID! $potvrdjen: String!) {
  updatePorudzbina(id: $id, potvrdjen: $potvrdjen){
    id
  }
}`,
{
  name: 'updatePorudzbina',
}
)
export default class PovratnoVreme extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 'NaN',
      loading: '',
      answered: ''
    }
  }

  componentWillMount () {
    this.props.data.refetch({
      id: this.props.id,
    });
  }

  ovoJeReFetch = async() => {
    this.setState({loading: 'no'});
    await this.props.data.refetch({
      id: this.props.id,
    });
    this.setState({loading: 'yes'});
  }

  dugmePotvrdi = async(podaci) => {
    const potvrdjujemPorudzbinu = await this.props.updatePorudzbina({
      variables: {
        id: this.props.id,
        potvrdjen: 'da',
      }
    });
    this.setState({
      answered: 'da'
    });
    fetch("https://dramacevapi.com/poslata", {
        method: 'POST',
        headers: {'content-type': 'application/json'},
          method: "post",
            body: JSON.stringify({
              podaci
          }),
      })
  }

  dugmeOtkazi = async() => {
    const otkazujemPorudzbinu = await this.props.updatePorudzbina({
      variables: {
        id: this.props.id,
        potvrdjen: 'ne',
      }
    });
    this.setState({
      answered: 'ne'
    });
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
    if(vreme == null) {
      return(
        <h1>Molimo vas sačekajte odgovor!</h1>
      );
    } else if(this.state.answered == 'da'){
      return(
        <h1>Uspešno ste poručili kod nas!</h1>
      );
    } else if (this.state.answered == 'ne') {
      return(<h1>Žao nam je, probajte ponovo kasnije!</h1>);
    } else {
      return(
        <div>
          <h1>Vaša porudžbina će biti gotova za {vreme} minuta</h1>
          <button style={stylee.buttonStyle} onClick={()=>{this.dugmePotvrdi(data.Porudzbina);}}>Potvrdi</button>
          <button style={stylee.buttonStyle} onClick={()=>{this.dugmeOtkazi();}}>Otkaži</button>
        </div>
      );
    }
  }
}
const stylee = {
  buttonStyle: {
    fontSize: '19px',
    height: '40px',
    width: '100px',
    color: 'white',
    fontWeight: '900',
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: '20px 20px',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}
