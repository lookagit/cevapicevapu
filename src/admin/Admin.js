import React from 'react';
import Loadable from 'react-loadable';
import TopHero from '../DumbComponents/Helpers/TopHero';
import NavBar from './NavBar';
import scss from '../styles.scss';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import md5 from 'js-md5';
import Loading from '../DumbComponents/Helpers/Loading';

const LoadableComponentForAdmin = Loadable({
  loader: () => import('./AdminDyn'),
  loading: Loading,
})
@connect(state => ({ counter: state.counter, orders: state.orders, users: state.users }))
@graphql(gql`
  query giveMeUsers($password: String!, $userName: String!) {
    allUserAdmins(filter: { password: $password, userName: $userName}) {
      userName
      password
    }
  }`,
  {
   options: (props) => ({
     variables: {
       userName: props.users.userName,
       password: props.users.password,
     }
   })
 }
)
export default class Admin extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      pin: '',
      inputOn: false,
      enteredPin: '',
      enteredUsername: '',
    }
    this.checkPin = this._checkPin.bind(this);
    this.handleChangePass = this._handleChangePass.bind(this);
    this.handleChangeUser = this._handleChangeUser.bind(this);
  }

  componentDidMount() {
    if(typeof window !== 'undefined' && window.document) {
      if (localStorage.getItem("userName") === null || localStorage.getItem("password") === null) {
      } else {
        this.setState({
          inputOn: true,
        })
      }
    }
  }
  _handleChangePass(event) {
   this.setState({enteredPin: event.target.value});
   let password = md5(event.target.value);
   this.props.dispatch({
     type: 'CHANGE_PASSWORD',
     password,
   });
  }
  _handleChangeUser(event) {
    this.setState({enteredUsername: event.target.value});
    this.props.dispatch({
      type: 'CHANGE_USERNAME',
      userName: event.target.value,
    });
  }
  async _checkPin() {
    const respons = await this.props.data.refetch();
    if(!respons.data.loading && respons.data.allUserAdmins.length) {
      let userName = respons.data.allUserAdmins[0].userName;
      let password = respons.data.allUserAdmins[0].password;
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      this.setState({
        inputOn: true,
      });
    }
  }
  render () {
    let putinput = <div></div>;
    if(!this.state.inputOn) {
      putinput =
      <div className={scss.adminLog}>
       <div>
        <p>
         <input value={this.state.enteredUsername} placeholder="Username" onChange={this.handleChangeUser} type="text" />
        </p>
        <p>
         <input className={scss.kiki} value={this.state.enteredPin} type="password" placeholder="Password" onChange={this.handleChangePass} type="text" />
        </p>
         <h3 onClick={this.checkPin}>Unesite Šifru</h3>
       </div>
     </div>;
    }else {
      putinput =
        <div>
          <NavBar />
          <LoadableComponentForAdmin />
        </div>
        ;
    }
    return (
      <div>
        <TopHero title="ADMIN" subtitle="Kontrolni Panel"  bgImage={{backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/q_53/v1513960509/admin_et97zo.jpg")'}} />
        {putinput}
      </div>
    );
  }
}
