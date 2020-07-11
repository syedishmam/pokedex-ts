import pokeApi from './pokeApi';

export const fetchPokemon = async (pokemon: string, store) => {
    const pokeData = await pokeApi.get(`pokemon/${pokemon}`);
    const speciesData = await pokeApi.get(`pokemon/${pokemon}`);
    store(pokeData.data, speciesData.data);
}