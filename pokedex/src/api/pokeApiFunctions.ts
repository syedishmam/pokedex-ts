import pokeApi from './pokeApi';

import {abilityCodes} from '../api/abilityCodes';
import {storePokemonDataSet, storeAbilityData} from '../redux/actions/storePokemonDataSet';

export const fetchPokemon = async (
  searchQuery: string,
): Promise<Object[]> => {
  const pokeData = await pokeApi.get(`pokemon/${searchQuery}`);
  const speciesData = await pokeApi.get(`pokemon-species/${pokeData.data.id}`);
  const dataSet = [pokeData.data, speciesData.data];
  storePokemonDataSet(dataSet);
  console.log(dataSet);
  return dataSet;
};

export const fetchAbility = async (
  searchQuery: string,
): Promise<Object> => {
  const abilityData = await pokeApi.get(`type/${searchQuery}`)
  storeAbilityData(abilityData);
  console.log(abilityData);
  return abilityData.data;
};

export const fetchApiData = async (searchQuery: string) => {
  let data: Promise<Object>;
  if(searchQuery in abilityCodes) {
    data = fetchAbility(searchQuery);
    return data;
  } else {
    data = fetchPokemon(searchQuery);
    return data;
  }
}
