import { combineReducers } from 'redux';
import { reducer as router } from 'react-native-router-redux';
import contacts from './contacts';

const rootReducer = combineReducers({
  router,
  contacts
});

export default rootReducer;
