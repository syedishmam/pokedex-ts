import pokeApi from './pokeApi';
import { storePokemonDataSet } from '../redux/actions/storePokemonDataSet';

export const fetchPokemon = async (
  searchQuery: string,
  store: (dataSet: Object[]) => Object
): Promise<Object[]> => {
  const pokeData = await pokeApi.get(`pokemon/${searchQuery}`);
  const speciesData = await pokeApi.get(`pokemon-species/${pokeData.data.id}`);
  const dataSet = [pokeData.data, speciesData.data];
  store(dataSet);
  return dataSet;
};

export const fetchAbility = async (
  searchQuery: string,
  store: (data: Object) => Object
) => {};
