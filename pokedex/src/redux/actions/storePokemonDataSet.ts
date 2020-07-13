export const storePokemonDataSet = (dataSet: Object[]): Object => {
    return {
        type: 'STORE_POKEMON_DATA_SET',
        payload: dataSet
    }
}