import pokeApi from './pokeApi';

export const fetchPokemon = async (searchQuery: string, store: (dataSet: Object[]) => void): Promise<Object[]> => {
    const pokeData = await pokeApi.get(`pokemon/${searchQuery}`);
    const speciesData = await pokeApi.get(`pokemon-species/${pokeData.data.id}`);
    const dataSet = [pokeData.data, speciesData.data];
    store(dataSet);
    return dataSet;
}