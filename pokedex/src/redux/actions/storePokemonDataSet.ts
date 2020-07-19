export const storePokemonDataSet = (dataSet: Object[]): Object => {
  return {
    type: 'STORE_POKEMON_DATA_SET',
    payload: dataSet,
  };
};

export const storeAbilityData = (data: Object): Object => {
  return {
    type: 'STORE_ABILITY_DATA',
    payload: data,
  };
};
