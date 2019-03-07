import { combineReducers } from 'redux';
import callApiReducer from './callApiReducer';


const rootReducer = combineReducers({
  results: callApiReducer

});

export default rootReducer;
