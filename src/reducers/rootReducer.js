import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import counter from './counterReducer';

const rootReducer = combineReducers({
  counter,
  notifications
});

export default rootReducer;
