import { ActionCreator } from "redux"

export default (state = {
    pokemonDataSet: ''
}, action: ActionCreator) => {
    switch(action.type) {
        case: 'STORE_POKEMON_DATA_SET':
            return {...state, pokemonDataSet: action.payload}
    }
}