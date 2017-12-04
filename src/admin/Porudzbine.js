import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import scss from './css/porudzbine.scss';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import allPorudzbinas from 'src/queries/allPorudzbinas.gql';
import gql from 'graphql-tag';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import PorudzbineSingle from './PorudzbineSingle';
import { connect } from 'react-redux';
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


  ddelay = (ms) => {
    var ctr, rej, p = new Promise(function (resolve, reject) {
        ctr = setTimeout(resolve, ms);
        rej = reject;
    });
    p.cancel = function(){ clearTimeout(ctr); rej(Error("Cancelled"))};
    return p; 
  }

  componentDidMount() {
    this.props.data.subscribeToMore({
      document: PorudzbinaAdd,
      updateQuery: (prev, {subscriptionData}) => {
        if(subscriptionData.data) {
          this.ddelay(2000).then(()=>{this.props.data.refetch();});          
        }
        if(!subscriptionData.data) {
          this.ddelay(2000).then(()=>{return prev;});
        }
      },
    });
  }

  componentWillReceiveProps(newProps) {
    if(newProps.deleted) {
      this.props.dispatch({
        type: 'DELETION_ACK',
      });
      this.ddelay(2000).then(()=>{this.props.data.refetch();});

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

    const porudzbine = {};

    if(data.allPorudzbinas) {
      porudzbine.lista = data.allPorudzbinas;
      porudzbine.revers = porudzbine.lista;
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
