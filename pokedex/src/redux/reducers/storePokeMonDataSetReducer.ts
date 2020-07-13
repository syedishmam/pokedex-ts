import {pokemonDataSetAction} from '../actions/actionInterface';

export default (state = {
    pokemonDataSet: ''
}, action: pokemonDataSetAction) => {
    switch(action.type) {
        case 'STORE_POKEMON_DATA_SET':
            return {...state, pokemonDataSet: action.payload}

        default: 
            return state
    }
}