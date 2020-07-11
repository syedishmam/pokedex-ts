import pokeApi from './pokeApi';

export const fetchPokemon = async (searchQuery: string, store: (dataSet: Object[]) => void): Promise<Object[]> => {
    const pokeData = await pokeApi.get(`pokemon/${searchQuery}`);
    const speciesData = await pokeApi.get(`pokemon/${searchQuery}`);
    const dataSet = [pokeData, speciesData];
    store(dataSet);
    return dataSet;
}