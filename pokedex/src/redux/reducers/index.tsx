import { combineReducers } from 'redux';

import apiDataReducer from './storeApiDataReducer';

export default combineReducers({
  apiData: apiDataReducer
});
