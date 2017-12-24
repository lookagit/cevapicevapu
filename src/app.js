import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { NotFound, Redirect } from 'kit/lib/routing';
import allMessages from 'src/queries/all_messages.gql';
import './styles.global.css';
import css from './styles.css';
import Footer from './Footer.js';
import MainMenu from './MainMenu.js';
import AboutUs from './AboutUs.js';
import Gally from './Gally.js';
import NaruciNesto from './NaruciNesto';
import ContactUs from './ContactUs.js'
import Admir from './admin/Admin';
import Korpa from './Korpa';
import Homes from './Home';
if(typeof window !== 'undefined') {
  import('webfontloader').then(WebFont => {
    WebFont.load({
      google: {
        families: ['Ubuntu', 'sans-serif']
      }
    });
  })
}

const Home = ({match}) => {
  return (
    <Homes />
  );
}

const Admin = () => (
  <Admir />
);

const About = ({ match }) => (
  <AboutUs />
);
const Contact = ({ match }) => (
  <ContactUs />
);


const Galerija = ({ match }) => (
  <Gally />
);

const Naruci = ({ match }) => (
  <NaruciNesto />
);

const Bucket = () => (
  <Korpa />
);

const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

export default () => (
  <div>
    <Helmet
      title="DRAMA Ćevapi"
      meta={[{
        name: 'description',
        content: '100% organsko meso'
      }]} />
    <MainMenu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page/about" component={About} />
      <Route path="/page/galerija" component={Galerija} />
      <Route path="/page/contact" component={Contact} />
      <Route path="/page/naruci" component={Naruci} />
      <Route path="/admin" component={Admin} />
      <Route path="/korpa" component={Bucket} />
      <Route component={WhenNotFound} />
    </Switch>
    <Footer />
  </div>
);
