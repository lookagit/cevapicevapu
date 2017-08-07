// Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// ----------------------
// IMPORTS

/* NPM */
import Immutable from 'seamless-immutable';

// ----------------------

// Set the initial `counter.count` to 0.
//
// Technically, we don't need to use `Immutable()` at all in this very simple
// example -- it could just be a plain integer, if we want.  But wrapping it in
// a call to `Immutable()` makes it impossible for us to accidentally change
// this outside of Redux, which is a good pattern to enforce
const initialState = Immutable({
  count: 0,
});
const ordersInitial = [];
const usersInitial = {
  userName: '',
  password: '',
}
export default {

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { stateKey: { state, reducer() } } -- the `stateKey` is where in the `state`
  // object starts looking, `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  users: {
    state: usersInitial,
    reducer(state = usersInitial, action) {
      if(action.type === 'CHANGE_PASSWORD') {
        const newState = {...state, password: action.password}
        return newState;
      } else if (action.type === 'CHANGE_USERNAME') {
        const newState = {...state, userName: action.userName}
        return newState;
      }
      return state;
    }
  },
  orders: {
    state: ordersInitial,
    reducer(state = ordersInitial, action) {
      if(action.type === 'ADD_ORDER') {
        console.log(action.orders);
        const newState = [...state];
        newState.push(action.orders);
        return newState;
      } else if (action.type === 'REMOVE_ORDER') {
        state = [];
        return state;
      }
      return state;
    }
  },
  counter: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'INCREMENT_COUNTER') {
        return state.merge({
          count: state.count + 1,
        });
      }
      return state;
    },
  },
};
