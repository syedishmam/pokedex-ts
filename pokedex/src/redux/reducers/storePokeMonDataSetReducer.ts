import { pokemonDataSetAction } from '../actions/actionInterface';

export default (
  state = {
    pokemonDataSet: '',
    abilityData: ''
  },
  action: pokemonDataSetAction
) => {
  switch (action.type) {
    case 'STORE_POKEMON_DATA_SET':
      return { ...state, pokemonDataSet: action.payload };

    case 'STORE_ABILITY_DATA': 
      return {...state, abilityData: action.payload}

    default:
      return state;
  }
};
