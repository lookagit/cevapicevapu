import React from 'react';
import AboutUs from './AboutUs.js';
import { NotFound, Redirect } from 'kit/lib/routing';
export default class DecisionRoute extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return(
      <AboutUs />
    );
  }
}
