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
import logo from './logodrama.png';
import Header from './Header.js';
import SectionHeadline from './SectionHeadline';
import ParalaxContainer from './ParalaxContainer.js';
import ThreeGallery from './ThreeGallery.js';
import FeaturedLeft from './FeaturedLeft.js';
import Footer from './Footer.js';
const stylee = {
  backgroundImage : 'url("https://www.esnlund.org/sites/default/files/events/images/barbecue-07.jpg")',
  height: '300px',
}
const sndlax = {
  backgroundImage : 'url("https://mojkrug.rs/wp-content/uploads/2016/06/savcic-1.jpg")',
  height: '350px',
}
const Home = () => (
  <div>
    <Header />
    <SectionHeadline title="Ćevapi koje ćete voleti" innerText="100% organsko meso" />
    <ParalaxContainer stylee={stylee} />
    <SectionHeadline title="Najbolji ćevapi u gradu" innerText="Probajte obavežno" />
    <ThreeGallery />
    <ParalaxContainer stylee={sndlax} />
    <FeaturedLeft />
  </div>
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
);

// Create a route that will be displayed when the code isn't found
const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
const Stats = () => {
  const info = [
    ['Environment', process.env.NODE_ENV],
  ];

  return (
    <ul className={css.data}>
      {info.map(([key, val]) => (
        <li key={key}>{key}: <span>{val}</span></li>
      ))}
    </ul>
  );
};

// Now, let's create a GraphQL-enabled component...

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
@graphql(allMessages)
class GraphQLMessage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      allMessages: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
      ),
    }),
  }

  render() {
    const { data } = this.props;
    const message = data.allMessages && data.allMessages[0].text;
    const isLoading = data.loading ? 'yes' : 'nope';
    return (
      <div>
        <h2>Message from GraphQL server: <em>{message}</em></h2>
        <h2>Currently loading?: {isLoading}</h2>
      </div>
    );
  }
}

// Example of CSS, SASS and LESS styles being used together
const Styles = () => (
  <ul className={css.styleExamples}>
    <li className={css.example}>Styled by CSS</li>
    <li className={sass.example}>Styled by SASS</li>
    <li className={less.example}>Styled by LESS</li>
  </ul>
);

// Sample component that demonstrates using a part of the Redux store
// outside of Apollo.  We can import own custom reducers in `kit/lib/redux`
// and 'listen' to them here
@connect(state => ({ counter: state.counter }))
class ReduxCounter extends React.PureComponent {
  static propTypes = {
    counter: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }),
  };

  // Trigger the `INCREMENT_COUNTER` action in Redux, to add 1 to the total
  triggerIncrement = () => {
    this.props.dispatch({
      type: 'INCREMENT_COUNTER',
    });
  }

  render() {
    const { count } = this.props.counter;
    return (
      <div>
        <h2>Listening to Redux counter: {count}</h2>
        <button onClick={this.triggerIncrement}>Increment</button>
      </div>
    );
  }
}

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <div className={css.hello}>
      <img src={logo} alt="ReactQL" className={css.logo} />
      <ul>
      <li><Link to="/">Početna</Link></li>
      <li><Link to="/page/about">Jelovnik</Link></li>
      <li><Link to="/page/contact">O nama</Link></li>
      <li><Link to="/old/path">Kontakt</Link></li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page/:name" component={Page} />
      <Redirect from="/old/path" to="/new/path" />
      <Route component={WhenNotFound} />
    </Switch>
    <Footer />
  </div>
);
