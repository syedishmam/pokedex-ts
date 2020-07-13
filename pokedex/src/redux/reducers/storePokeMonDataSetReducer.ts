import {Action} from '../actions/actionInterface';

export default (state = {
    pokemonDataSet: ''
}, action: Action) => {
    switch(action.type) {
        case 'STORE_POKEMON_DATA_SET':
            return {...state, pokemonDataSet: action.payload}
    }
}