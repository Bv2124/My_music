// This file will combine reducers.
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
