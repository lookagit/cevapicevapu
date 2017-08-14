// ----------------------
// IMPORTS

// Apollo client library
import { createNetworkInterface, ApolloClient } from 'react-apollo';

// Custom configuration/settings
import { APOLLO } from 'config/project';

import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import ws from 'ws';
// ----------------------

const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cj5s24jocv1ft0122c36eji5n',{
  reconnect: true,
  connectionParams: {
    authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDEwNzA4NDUsImNsaWVudElkIjoiY2o1a3l0bmc2amFveTAxMzRva3dndnoyeSJ9.4CZKrxqHXKEufrb-ALU9twDvLIeBgLXvViWbkaVm9Sc",
   },
}, ws)


// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.
const networkInterface = createNetworkInterface({
  uri: APOLLO.uri,
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
function createClient(opt = {}) {
  return new ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
    networkInterface: networkInterfaceWithSubscriptions,
  }, opt));
}

// Creates a new browser client
export function browserClient() {
  return createClient();
}

// Creates a new server-side client
export function serverClient() {
  return createClient({
    ssrMode: true,
  });
}
