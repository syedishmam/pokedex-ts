import { combineReducers } from 'redux';

import storePokemonDataSetReducer from './storePokemonDataSetReducer';

export default combineReducers({
  pokemonDataSet: storePokemonDataSetReducer,
});
