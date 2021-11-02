const ALL_CONDITION_CONFIGURATION = 'ALL_CONDITION_CONFIGURATION';
const FETCH_POKEMON = 'FETCH_POKEMON';

export const updateConditionConfiguration = (conditions) => ({
  type: ALL_CONDITION_CONFIGURATION,
  payload: conditions,
});

