import { combineReducers } from 'redux';
import callApiReducer from './callApiReducer';
import searchApiReducer from './searchApiReducer';

const rootReducer = combineReducers({
  isFetching: true

});

export default rootReducer;
