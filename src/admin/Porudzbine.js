import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './css/porudzbine.scss';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allPorudzbinas from 'src/queries/allPorudzbinas.gql';
import createPorudzbina from 'src/mutations/createPorudzbina.gql';
import gql from 'graphql-tag';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import PorudzbineSingle from './PorudzbineSingle';
import { connect } from 'react-redux';
import reverse from 'reversejs';
import PorudzbinaAdd from '../subscriptions/PorudzbinaAdd.gql';



@connect(state => ({ deleted: state.deleted }))
@graphql(allPorudzbinas)
export default class Porudzbine extends React.Component {
  constructor(){
    super();
    this.state = {
      fakestejt: 'fejkstejt',
      isShowingModal: false,
    }
  };


  componentWillMount() {
    this.props.data.subscribeToMore({
      document: PorudzbinaAdd,
      updateQuery: (prev, {subscriptionData}) => {
        if(!subscriptionData.data) {
          return prev;
        }
        const newPorudzbina = subscriptionData.data.Porudzbina;
        return {
          allPorudzbinas: [newPorudzbina, ...prev.allPorudzbinas],
        };
      },
    });
  }

  componentWillReceiveProps(newProps) {
    if(newProps.deleted) {
      this.props.dispatch({
        type: 'DELETION_ACK',
      });
      this.props.data.refetch();

    }
  }

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

    console.log('Ja sam data ', data);

    const porudzbine = {};

    if(data.allPorudzbinas) {
      porudzbine.lista = data.allPorudzbinas;
      console.log("Bez revers" , porudzbine.lista);
      porudzbine.revers = reverse(porudzbine.lista);
      console.log("Revers" , porudzbine.revers);
    }

    return (
      <Col xs={12} sm={12} md={8} lg={8}>
        <div className={scss.porudzbine}>
          {porudzbine.revers && porudzbine.revers.map((porudz, index) => (
            <div className={scss.proizvodItem}>
              <PorudzbineSingle porudzbina={porudz} />
            </div>
          ))}
        </div>
      </Col>
    );
  }
}
