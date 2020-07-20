import { combineReducers } from 'redux';

import storePokemonDataSetReducer from './storePokemonDataSetReducer';

export default combineReducers({
  apiData: storePokemonDataSetReducer,
});
