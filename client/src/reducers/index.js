import counterReducer from './counter';
import loggedReducer from './isLogged';
import authenticate from './authenticate';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counterReducer,
  loggedReducer,
  authenticate
})

export default rootReducer;