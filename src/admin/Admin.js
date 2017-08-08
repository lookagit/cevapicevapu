import React from 'react';
import TopHero from '../TopHero';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import ProizvodList from './ProizvodList';
import Porudzbine from './Porudzbine';
import NavBar from './NavBar';
import scss from '../styles.scss';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import md5 from 'js-md5';
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
  }
  componentWillMount() {

  }
  componentDidMount() {
    if(typeof window !== 'undefined' && window.document) {
      if (localStorage.getItem("userName") === null || localStorage.getItem("password") === null) {
        console.log("JOJO00", localStorage.getItem("userName"));
      } else {
        this.setState({
          inputOn: true,
        })
        console.log("EVO ME");
      }
    }
  }
  handleChangePass = (event) => {
   this.setState({enteredPin: event.target.value});
   let password = md5(event.target.value);
   this.props.dispatch({
     type: 'CHANGE_PASSWORD',
     password,
   });
  }
  handleChangeUser = (event) => {
    this.setState({enteredUsername: event.target.value});
    this.props.dispatch({
      type: 'CHANGE_USERNAME',
      userName: event.target.value,
    });
  }
  checkPin = async () => {
    const respons = await this.props.data.refetch();
    if(!respons.data.loading && respons.data.allUserAdmins.length) {
      let userName = respons.data.allUserAdmins[0].userName;
      let password = respons.data.allUserAdmins[0].password;
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      this.setState({
        inputOn: true,
      });
    } else {
      console.log("ZAO MI JE NISI ");
    }
  }
  render () {
    let putinput = null;
    console.log("OVO JE PROPS", this.props)
    if(!this.state.inputOn) {
      putinput =
      <div className={scss.adminLog}>
       <div>
         <form>
           <p>
             <input value={this.state.enteredUsername} placeholder="Username" onChange={this.handleChangeUser} type="text" />
           </p>
           <p>
             <input value={this.state.enteredPin} type="password" placeholder="Password" onChange={this.handleChangePass} type="text" />
           </p>
           <p>
             <button onClick={this.checkPin}>Unesi pin</button>
           </p>
         </form>
       </div>
     </div>;
    }else {
      putinput =
        <div>
          <NavBar />
          <Grid>
            <Row>
              <Porudzbine />
              <ProizvodList />
            </Row>
          </Grid>
        </div>
        ;
    }
    return (
      <div>
        <TopHero title="ADMIN" subtitle="Kontrolni Panel"  bgImage={{backgroundImage: 'url("/admin.jpg")'}} />
        {putinput}
      </div>
    );
  }
}
