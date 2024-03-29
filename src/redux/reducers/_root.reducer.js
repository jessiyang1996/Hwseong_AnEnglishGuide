import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga
//reducer used to store Nearby Recommendations list returned from the server
const recommendationsList = (state = [], action) => {
  // set recommendationsList with data from server
  switch (action.type) {
    case 'SET_RECOMMENDATIONS_LIST':
      return action.payload;
    default:
      return state;
  }
};

// Original:
// const recommendationsList = (state = [], action) => {
//     if (action.type==="SET_RECOMMENDATIONS")
//     return action.payload
//   }
//   return state;
// };

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  recommendationsList,
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
