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
import Notification from 'react-web-notification';
@connect(state => ({ deleted: state.deleted }))
@graphql(allPorudzbinas)
export default class Porudzbine extends React.Component {
  constructor(){
    super();
    this.state = {
      fakestejt: 'fejkstejt',
      isShowingModal: false,
      reload: [],
      ignore: true,
      title: ''
    }
  };
  componentDidMount() {
    setInterval(() => {
      this.props.data.refetch();
    }, 10000);
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

  handlePermissionGranted(){
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  }

  handlePermissionDenied(){
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  }

  handleNotSupported(){
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);

  }

  handleNotificationOnClose(e, tag){
    console.log(e, 'Notification closed tag:' + tag);

  }

  handleNotificationOnShow(e, tag){
    console.log(e, 'Notification shown tag:' + tag);
  }

  handleButtonClick(titl) {

        if(this.state.ignore) {
          return;
        }

        const now = Date.now();

        const title = 'React-Web-Notification' + now;
        const body = 'Proverite admin panel!';
        const tag = now;
        const icon = 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png';
        // const icon = 'http://localhost:3000/Notifications_button_24.png';

        // Available options
        // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
        const options = {
          tag: tag,
          body: body,
          icon: icon,
          lang: 'en',
          dir: 'ltr',
        }
        this.setState({
          title: titl,
          options: options
        });
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
              <PorudzbineSingle porudzbina={porudz} />
          ))}
        </div>
        <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
      </Col>
    );
  }
}
